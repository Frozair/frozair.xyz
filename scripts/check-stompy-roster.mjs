import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const base = new URL('../public/', import.meta.url);
const roster = JSON.parse(readFileSync(new URL('stompy-acres/launch-roster.json', base), 'utf8'));
assert.equal(roster.schemaVersion,1);
assert.equal(roster.totalTarget,28);
assert.equal(roster.islands.length,5);
const species=roster.islands.flatMap(i=>i.species);
assert.equal(species.length,40);
assert.equal(new Set(species.map(s=>s.id)).size,40);
assert.equal(species.filter(s=>s.recommended).length,28);
assert.equal(roster.islands.reduce((n,i)=>n+i.quota,0),28);
for(const island of roster.islands){
 assert.equal(island.species.length,8);
 assert.equal(island.species.filter(s=>s.recommended).length,island.quota);
 for(const s of island.species){
  for(const key of ['name','role','status','rationale','note','viewBox'])assert.equal(typeof s[key],'string');
  assert(s.image.startsWith('/stompy-acres/roster/'));
  assert(existsSync(fileURLToPath(new URL(s.image.slice(1),base))),`Missing ${s.image}`);
  const crop=s.viewBox.split(' ').map(Number);
  assert.equal(crop.length,4);assert(crop.every(Number.isFinite));
  assert(crop[2]>0&&crop[3]>0&&s.sourceWidth>0&&s.sourceHeight>0);
 }
}
assert(!species.some(s=>s.id==='heterodontosaurus'),'Superseded Fernlands candidate must not return');
assert(roster.islands.find(i=>i.id==='fernlands').species.some(s=>s.id==='ankylosaurus'));
console.log('Roster valid:40 unique original-art candidates,28 recommendations across5 islands.');
