import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const path = fileURLToPath(new URL('../public/stompy-acres/release-roadmap.json', import.meta.url));
const data = JSON.parse(readFileSync(path, 'utf8'));
const roster = JSON.parse(readFileSync(new URL('../public/stompy-acres/launch-roster.json', import.meta.url), 'utf8'));
const date = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value).toISOString().startsWith(value);
const uniqueIds = (items, label) => assert.equal(new Set(items.map(item => item.id)).size, items.length, `${label}: duplicate ids`);
const textFields = (item, fields) => fields.forEach(key => assert.equal(typeof item[key], 'string', `Missing text field ${key}`));
assert.equal(data.schemaVersion, 1);
textFields(data, ['title', 'subtitle', 'timezone', 'health', 'healthNote', 'scopeLabel', 'resourcesNote']);
new Intl.DateTimeFormat('en-US', { timeZone: data.timezone }).format();
for (const key of ['targetDate', 'asOf', 'nextReview']) assert(date(data[key]), `Invalid ${key}`);
assert(data.nextReview >= data.asOf, 'Next review precedes evidence review');
assert.equal(data.releaseIslandCount, data.islands.length);
assert(data.releaseIslandCount >= 5, 'Release requires at least five islands');
for (const key of ['wiredIslands', 'launchWiredIslands', 'signedOffIslands', 'liveSpecies']) assert(Number.isInteger(data.baseline[key]) && data.baseline[key] >= 0, `Invalid baseline ${key}`);
assert(data.baseline.launchWiredIslands <= data.releaseIslandCount);
assert(data.baseline.signedOffIslands <= data.releaseIslandCount);
uniqueIds(data.islands, 'Islands');
for (const island of data.islands) {
  textFields(island, ['id', 'name', 'color', 'status', 'summary', 'targetLabel', 'next', 'gateLabel']);
  assert(date(island.gateDate), `Invalid island date: ${island.id}`);
  assert(Number.isInteger(island.liveSpecies) && island.liveSpecies >= 0);
  assert(island.checks.length >= 4, `Incomplete readiness dimensions: ${island.id}`);
  for (const check of island.checks) {
    textFields(check, ['label', 'detail']);
    assert(['implemented', 'partial', 'open'].includes(check.state), `Invalid island state: ${check.state}`);
  }
}
uniqueIds(data.milestones, 'Milestones');
for (const milestone of data.milestones) {
  textFields(milestone, ['title', 'outcome', 'owner', 'gate', 'dateLabel']);
  assert(date(milestone.start) && date(milestone.end) && milestone.end >= milestone.start, `Invalid milestone range: ${milestone.id}`);
  assert(['active', 'planned', 'complete', 'blocked'].includes(milestone.state));
}
uniqueIds(data.work, 'Work');
for (const work of data.work) {
  textFields(work, ['title', 'owner', 'due', 'status', 'why', 'doneWhen']);
  assert(['now', 'next', 'later'].includes(work.lane));
  assert(work.refs.every(ref => Number.isInteger(ref) && ref > 0));
}
for (const decision of data.decisions) { textFields(decision, ['title', 'recommendation', 'state']); assert(date(decision.due)); }
for (const gate of data.launchGates) { textFields(gate, ['label', 'proof']); assert(['open', 'partial', 'passed'].includes(gate.state)); }
assert(data.launchGates.length > 0 && data.evidence.length > 0 && data.changes.length > 0);
assert(data.updatePolicy.staleAfterDays > 0);
assert.equal(roster.rosterStatus, 'locked');
assert(Number.isInteger(data.baseline.launchSpecies) && data.baseline.launchSpecies >= 0 && data.baseline.launchSpecies <= roster.totalTarget);
assert(Number.isInteger(data.baseline.launchHomeSpecies) && data.baseline.launchHomeSpecies >= 0 && data.baseline.launchHomeSpecies <= data.baseline.launchSpecies);
assert.equal(data.islands.reduce((sum, island) => sum + island.liveSpecies, 0), data.baseline.launchHomeSpecies);
const weekly = data.weeklyPlan;
const requiredText = (item, fields) => {
  textFields(item, fields);
  fields.forEach(key => assert(item[key].trim().length > 0, `Empty weekly plan field ${key}`));
};
requiredText(weekly, ['title', 'note']);
assert(date(weekly.start) && date(weekly.end), 'Invalid weekly plan date range');
assert(weekly.start <= weekly.end && weekly.end <= data.targetDate, 'Weekly plan must end before release');
assert(weekly.priorities.length >= 1 && weekly.priorities.length <= 3, 'Weekly plan needs one to three outcomes');
assert(weekly.days.length >= 1 && weekly.days.length <= 7, 'Weekly plan needs one to seven focus days');
uniqueIds([...weekly.priorities, ...weekly.days], 'Weekly plan');
for (const priority of weekly.priorities) {
  requiredText(priority, ['id', 'title', 'owner', 'doneWhen']);
  assert(Array.isArray(priority.refs) && priority.refs.length > 0 && priority.refs.every(ref => Number.isInteger(ref) && ref > 0), 'Weekly outcome needs valid board references');
  assert.equal(new Set(priority.refs).size, priority.refs.length, 'Weekly outcome has duplicate references');
}
weekly.days.forEach((day, index) => {
  requiredText(day, ['id', 'label', 'title', 'focus', 'proof']);
  assert(date(day.date), `Invalid weekly focus date: ${day.id}`);
  assert.equal(Date.parse(day.date), Date.parse(weekly.start) + index * 86400000, 'Weekly focus dates must be consecutive and ordered');
});
assert.equal(weekly.days[weekly.days.length - 1].date, weekly.end, 'Weekly focus dates must cover the plan range');
requiredText(weekly.checkpoint, ['title', 'pass', 'ifMiss']);
assert(date(weekly.checkpoint.date) && weekly.checkpoint.date === weekly.end, 'Weekly checkpoint must match the final focus day');
for (const key of ['parking', 'dependencies']) {
  assert(Array.isArray(weekly[key]) && weekly[key].length > 0, `Weekly plan needs ${key} items`);
  assert(weekly[key].every(item => typeof item === 'string' && item.trim().length > 0), `Empty weekly ${key} text`);
  assert.equal(new Set(weekly[key]).size, weekly[key].length, `Duplicate weekly ${key} text`);
}
textFields(data.firstWork, ['title', 'note']);
assert.equal(data.firstWork.items.length, 3);
uniqueIds(data.firstWork.items, 'First work');
data.firstWork.items.forEach((item, index) => {
  assert.equal(item.step, index + 1);
  textFields(item, ['title', 'when', 'owner', 'outcome']);
  assert(['engine', 'art', 'operations'].includes(item.kind));
  assert(item.refs.every(ref => Number.isInteger(ref) && ref > 0));
  assert(item.species.every(label => typeof label === 'string'));
});
const production = data.production;
textFields(production, ['title', 'note']);
assert.equal(production.total, roster.totalTarget);
assert.equal(production.existingBanks + production.missingBanks, production.total);
for (const key of ['integratedLooks', 'redoPackages', 'remainingPackages']) assert(Number.isInteger(production[key]) && production[key] >= 0 && production[key] <= production.total, `Invalid production ${key}`);
assert.equal(production.integratedLooks + production.redoPackages, production.existingBanks, 'Existing banks must split into integrated looks and asset redos');
assert.equal(production.redoPackages + production.missingBanks, production.remainingPackages, 'Remaining work includes redos and first packages');
assert.equal(production.integratedLooks + production.remainingPackages, production.total);
assert(production.accepted === null || (Number.isInteger(production.accepted) && production.accepted >= 0 && production.accepted <= production.total));
assert(date(production.freezeDate));
assert.equal(production.daysToFreeze, Math.round((Date.parse(production.freezeDate) - Date.parse(data.asOf)) / 86400000));
assert.equal(production.minimumNewPerWeek, Math.round(production.missingBanks / production.daysToFreeze * 70) / 10);
assert.equal(production.minimumTotalPerWeek, Math.round(production.remainingPackages / production.daysToFreeze * 70) / 10, 'Total pace must include asset redos and first packages');
assert.deepEqual(production.islands.map(i => i.id), roster.islands.map(i => i.id));
let available = 0;
const statusCounts = { integrated: 0, redo: 0, missing: 0 };
production.islands.forEach((island, index) => {
  assert.deepEqual(island.residents.map(s => s.id), roster.islands[index].species.map(s => s.id), 'Production matrix must match locked roster and homes');
  island.residents.forEach(s => {
    textFields(s, ['id', 'name', 'detail']);
    assert(['available', 'missing'].includes(s.bank));
    assert(Object.hasOwn(statusCounts, s.productionStatus), `Invalid production status: ${s.id}`);
    assert.equal(s.bank, s.productionStatus === 'missing' ? 'missing' : 'available', `Production status and bank disagree: ${s.id}`);
    statusCounts[s.productionStatus]++;
    if (s.bank === 'available') available++;
  });
});
assert.equal(available, production.existingBanks);
assert.equal(statusCounts.integrated, production.integratedLooks, 'Integrated-look count must match the exact roster');
assert.equal(statusCounts.redo, production.redoPackages, 'Redo count must match the exact roster');
assert.equal(statusCounts.missing, production.missingBanks, 'First-package count must match the exact roster');
console.log(`Roadmap valid: ${data.islands.length} islands, ${data.milestones.length} milestones, ${data.work.length} work items; reviewed ${data.asOf}.`);
