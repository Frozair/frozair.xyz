import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const base = new URL('../public/', import.meta.url);
const roster = JSON.parse(readFileSync(new URL('stompy-acres/launch-roster.json', base), 'utf8'));
const review = JSON.parse(readFileSync(new URL('stompy-acres/art-review.json', base), 'utf8'));
const residents = roster.islands.flatMap(island => island.species);
const residentById = new Map(residents.map(species => [species.id, species]));
const reviewById = new Map(review.species.map(species => [species.id, species]));

assert.match(review.asOf, /^\d{4}-\d{2}-\d{2}$/);
assert(Number.isFinite(Date.parse(review.asOf)));
for (const field of ['scope', 'note']) assert.equal(typeof review[field], 'string', `Missing art review ${field}`);
assert.equal(residents.length, 40);
assert.equal(review.species.length, 40, 'Every active resident needs one comparison entry');
assert.equal(reviewById.size, 40, 'Duplicate art review IDs');
assert.deepEqual([...reviewById.keys()].sort(), [...residentById.keys()].sort(), 'Art review must match the active roster exactly');

function checkContainedCrop(inner, outer, label) {
  const a = inner.trim().split(/\s+/).map(Number);
  const b = outer.trim().split(/\s+/).map(Number);
  assert.equal(a.length, 4, `${label}: expected four crop values`);
  assert(a.every(Number.isFinite) && a[2] > 0 && a[3] > 0, `${label}: invalid crop`);
  const epsilon = 0.01; // Metadata is rounded to three decimal places.
  assert(a[0] >= b[0] - epsilon && a[1] >= b[1] - epsilon && a[0] + a[2] <= b[0] + b[2] + epsilon && a[1] + a[3] <= b[1] + b[3] + epsilon, `${label}: display crop exceeds the source crop`);
}

for (const proposal of review.species) {
  const current = residentById.get(proposal.id);
  assert.equal(proposal.name, current.name);
  assert.equal(typeof proposal.currentViewBox, 'string');
  assert.equal(typeof proposal.sourceViewBox, 'string');
  checkContainedCrop(proposal.currentViewBox, current.viewBox, `${proposal.id} current`);
  checkContainedCrop(proposal.viewBox, proposal.sourceViewBox, `${proposal.id} revised`);
  assert(['revised', 'original-anchor', 'new-concept'].includes(proposal.kind), `Unknown kind: ${proposal.id}`);
  assert(proposal.image.startsWith('/stompy-acres/'), `Unexpected image path: ${proposal.id}`);
  assert(existsSync(fileURLToPath(new URL(proposal.image.slice(1), base))), `Missing ${proposal.image}`);
  assert(Number.isFinite(proposal.sourceWidth) && proposal.sourceWidth > 0);
  assert(Number.isFinite(proposal.sourceHeight) && proposal.sourceHeight > 0);
  assert.equal(typeof proposal.viewBox, 'string');
  const crop = proposal.viewBox.trim().split(/\s+/).map(Number);
  assert.equal(crop.length, 4, `Invalid art crop: ${proposal.id}`);
  assert(crop.every(Number.isFinite));
  assert(crop[2] > 0 && crop[3] > 0, `Empty art crop: ${proposal.id}`);
}
for (const id of ['nanuqsaurus', 'edmontosaurus', 'leaellynasaura', 'woolly-rhinoceros']) {
  assert.equal(reviewById.get(id).kind, 'new-concept', `New Snow concepts must stay clearly identified: ${id}`);
}
console.log(`Art review valid: ${review.species.length} unique comparisons match all active residents; images, labels, source dimensions and crop metadata exist.`);
