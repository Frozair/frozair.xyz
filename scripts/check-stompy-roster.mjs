import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const base = new URL('../public/', import.meta.url);
const roster = JSON.parse(readFileSync(new URL('stompy-acres/launch-roster.json', base), 'utf8'));
assert.equal(roster.schemaVersion,1);
assert.equal(roster.totalTarget,40);
assert.equal(roster.islands.length,5);
const species=roster.islands.flatMap(i=>i.species);
assert.equal(species.length,40);
assert.equal(new Set(species.map(s=>s.id)).size,40);
assert.equal(species.filter(s=>s.recommended).length,40);
assert.equal(roster.islands.reduce((n,i)=>n+i.quota,0),40);
for(const island of roster.islands){
 assert.equal(island.quota,8);
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
assert(!species.some(s=>s.id==='paraceratherium'),'Paraceratherium removed from launch by Frozair');
assert(roster.islands.find(i=>i.id==='fernlands').species.some(s=>s.id==='brachio'));
assert(!roster.islands.find(i=>i.id==='giants').species.some(s=>s.id==='brachio'));
assert.equal(roster.habitatReview.asOf,'2026-10-18');
assert.equal(roster.habitatReview.definitions.length,5);
for (const s of species) {
 assert(s.habitat,`Missing habitat assessment: ${s.id}`);
 assert(['strong','conditional','mismatch','fictional'].includes(s.habitat.rating));
 assert(['high','medium','low','na'].includes(s.habitat.confidence));
 for (const k of ['evidence','caveat','recommendation']) assert.equal(typeof s.habitat[k],'string');
 assert.equal(s.habitat.rating==='fictional',s.id==='leafy');
 assert(s.id==='leafy'||s.habitat.sources.length>0,`Missing evidence source: ${s.id}`);
 for (const source of s.habitat.sources) { assert.equal(typeof source.title,'string');assert.equal(new URL(source.url).protocol,'https:'); }
}
assert(species.find(s=>s.id==='iguanodon').recommended,'Iguanodon remains in launch draft');
console.log('Roster valid:40 unique residents,8 per island,40 habitat assessments with39 sourced real taxa; Iguanodon retained.');
