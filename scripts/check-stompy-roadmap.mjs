import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const path = fileURLToPath(new URL('../public/stompy-acres/release-roadmap.json', import.meta.url));
const data = JSON.parse(readFileSync(path, 'utf8'));
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
console.log(`Roadmap valid: ${data.islands.length} islands, ${data.milestones.length} milestones, ${data.work.length} work items; reviewed ${data.asOf}.`);
