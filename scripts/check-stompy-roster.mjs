import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const base = new URL('../public/', import.meta.url);
const roster = JSON.parse(readFileSync(new URL('stompy-acres/launch-roster.json', base), 'utf8'));
const snowIds = ['yutyrannus', 'pachyrhinosaurus', 'woolly-mammoth', 'sinosauropteryx', 'nanuqsaurus', 'edmontosaurus', 'leaellynasaura', 'woolly-rhinoceros'];
const newIds = ['nanuqsaurus', 'edmontosaurus', 'leaellynasaura', 'woolly-rhinoceros'];
const benchedIds = ['borealopelta', 'cryolophosaurus', 'citipati', 'concavenator'];
const species = roster.islands.flatMap(i => i.species);
const byId = new Map(species.map(s => [s.id, s]));
const islands = new Map(roster.islands.map(i => [i.id, i]));

assert.equal(roster.schemaVersion, 1);
assert.equal(roster.totalTarget, 40);
assert.equal(roster.islands.length, 5);
assert.deepEqual([...islands.keys()].sort(), ['fernlands', 'forest', 'giants', 'snow', 'swamp']);
assert.equal(species.length, 40);
assert.equal(byId.size, 40);
assert.equal(species.filter(s => s.recommended).length, 40);
assert.equal(roster.islands.reduce((n, i) => n + i.quota, 0), 40);
assert.equal(roster.selectionVersion, '2026-10-18-r3-cold-roster');
assert.equal(roster.rosterStatus, 'locked');
assert.equal(roster.lockedAt, '2026-10-18');
assert.equal(typeof roster.lockNote, 'string');
const lockedHomes = {
  forest: ['leafy','aquilops','pachycephalosaurus','gallimimus','stegouros','kentrosaurus','parasaurolophus','shunosaurus'],
  giants: ['shantungosaurus','dreadnoughtus','giganotosaurus','therizinosaurus','spinosaurus','diplodocus','deinocheirus','amargasaurus'],
  swamp: ['suchomimus','carbonemys','edaphosaurus','nigersaurus','diplocaulus','dilophosaurus','sarcosuchus','titanoboa'],
  snow: snowIds,
  fernlands: ['rex','trike','ankylosaurus','stegosaurus','iguanodon','brachio','microraptor','anzu'],
};
for (const island of roster.islands) assert.deepEqual(island.species.map(s => s.id), lockedHomes[island.id], `Locked home changed: ${island.id}`);

function checkHabitat(s) {
  assert(s.habitat, `Missing habitat assessment: ${s.id}`);
  assert(['strong', 'conditional', 'mismatch'].includes(s.habitat.rating));
  assert(['high', 'medium', 'low', 'na'].includes(s.habitat.confidence));
  for (const k of ['evidence', 'caveat', 'recommendation']) assert.equal(typeof s.habitat[k], 'string');
  assert(Array.isArray(s.habitat.sources));
  assert(s.habitat.sources.length > 0, `Missing evidence source: ${s.id}`);
  for (const source of s.habitat.sources) {
    assert.equal(typeof source.title, 'string');
    assert.equal(new URL(source.url).protocol, 'https:');
  }
}

for (const island of roster.islands) {
  assert.equal(island.quota, 8);
  assert.equal(island.species.length, 8);
  assert.equal(island.species.filter(s => s.recommended).length, island.quota);
  for (const s of island.species) {
    for (const key of ['name', 'role', 'status', 'rationale', 'note', 'viewBox']) assert.equal(typeof s[key], 'string');
    assert(s.image.startsWith('/stompy-acres/roster/'));
    assert(existsSync(fileURLToPath(new URL(s.image.slice(1), base))), `Missing ${s.image}`);
    const crop = s.viewBox.split(' ').map(Number);
    assert.equal(crop.length, 4);
    assert(crop.every(Number.isFinite));
    assert(crop[2] > 0 && crop[3] > 0 && s.sourceWidth > 0 && s.sourceHeight > 0);
    checkHabitat(s);
  }
}

assert(!byId.has('heterodontosaurus'), 'Superseded Fernlands candidate must not return');
assert(!byId.has('paraceratherium'), 'Paraceratherium removed from launch by Frozair');
assert(islands.get('fernlands').species.some(s => s.id === 'ankylosaurus'));
assert(islands.get('fernlands').species.some(s => s.id === 'brachio'));
assert(!islands.get('giants').species.some(s => s.id === 'brachio'));
assert(islands.get('fernlands').species.some(s => s.id === 'iguanodon'));
assert.equal(species.filter(s => s.id === 'iguanodon').length, 1);
assert.equal(byId.get('iguanodon').habitat.rating, 'strong');
assert.equal(byId.get('leafy').scientificTaxon, 'Velociraptor');
assert.deepEqual(islands.get('snow').species.map(s => s.id), snowIds);
assert.equal(byId.get('pachyrhinosaurus').scientificTaxon, 'Pachyrhinosaurus perotorum');
assert.equal(byId.get('edmontosaurus').scientificTaxon, 'Edmontosaurus sp. (Prince Creek population)');

assert(Array.isArray(roster.benchedSpecies));
assert.deepEqual(roster.benchedSpecies.map(s => s.id).sort(), [...benchedIds].sort());
for (const s of roster.benchedSpecies) {
  assert(!byId.has(s.id), `Bench candidate counted as active: ${s.id}`);
  assert.equal(s.recommended, false);
  assert.equal(typeof s.previousIsland, 'string');
  assert.equal(typeof s.benchReason, 'string');
  assert(existsSync(fileURLToPath(new URL(s.image.slice(1), base))), `Preserve benched art: ${s.image}`);
  checkHabitat(s);
}
assert.equal(species.filter(s => s.conceptLabel === 'Approved still · production pending').length, 4);
for (const id of newIds) {
  assert.equal(byId.get(id).conceptLabel, 'Approved still · production pending');
  assert.equal(byId.get(id).status, 'Approved still · no bank');
}
assert.equal(typeof roster.proposal.title, 'string');
assert.equal(typeof roster.proposal.note, 'string');
assert.equal(typeof roster.proposal.worldRequirement, 'string');
for (const [key, count] of [['added', 4], ['moved', 1], ['benched', 4]]) {
  assert.equal(roster.proposal[key].length, count);
  assert(roster.proposal[key].every(item => typeof item === 'string'));
}
assert(/^\d{4}-\d{2}-\d{2}$/.test(roster.habitatReview.asOf));
assert(Number.isFinite(Date.parse(roster.habitatReview.asOf)));
assert.equal(roster.habitatReview.definitions.length, 5);
assert.equal(new Set(roster.habitatReview.definitions.map(d => d.island)).size, 5);
console.log('Locked roster valid: 40 unique residents, eight per approved island, four new Snow concepts with separate production status, four preserved bench candidates, sourced habitat notes, and Iguanodon in Fernlands.');
