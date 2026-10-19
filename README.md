
# 🔥 frozair.xyz

My personal portfolio and project showcase website. Built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features
- Responsive and modern UI
- Dark and light mode toggle
- Showcase apps and projects I'm building
- Quick access to my socials and streams

## 🛠️ Tech Stack
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Lucide Icons**

## 🚀 Installation
Clone and run locally:

```bash
git clone https://github.com/Frozair/frozair.xyz.git
cd frozair.xyz
npm install
npm run dev
```

Then, visit `http://localhost:3000` in your browser.

## 📦 Deployment
Automatically deployed via [Vercel](https://vercel.com/).

## 🌎 Live Site
[👉 frozair.xyz](https://frozair.xyz)

## 🤝 Contribution
Feel free to open an issue or submit a PR!

## ❤️ Contributors 🙏🏾
[attrid](https://github.com/attrid)

---


## Stompy Acres release roadmap

The visual roadmap is `/apps/stompy-acres/roadmap`, driven by
`public/stompy-acres/release-roadmap.json`. The roster is at
`/apps/stompy-acres/roster`, driven by `public/stompy-acres/launch-roster.json`.
Frozair locked all 40 residents and their homes on October 18, 2026: eight each
in Forest, Giants, Swamp, Snow and Fernlands. Iguanodon and Brachio are in
Fernlands. The revised Snow eight are approved. `rosterStatus`, `lockedAt` and
the validation script preserve that decision; do not restore older casting drafts.
Borealopelta, Cryolophosaurus, Citipati and Concavenator stay in `benchedSpecies`
outside the 40. Retain their art/history. Paraceratherium remains outside launch.

Update from current Pigeon, source, native-build/device and public-store evidence.
The daily director check runs at 9am America/Chicago and publishes meaningful
changes. Refresh `asOf`/`nextReview` only after a real review. Keep source banks,
selected-look/motion approval, runtime integration and final acceptance distinct.
Local Keep/Bench/export choices are personal change proposals; they never unlock
or mutate the shared approved cast. Preserve `selectionVersion` and older drafts.

`firstWork` powers the prominent first-work cards. `production.islands` maps all
40 approved IDs and homes to current committed bank availability. On October 18,
21 ranch banks exist and 19 are missing; 20 dedicated reveals exist and Stegouros
uses a one-frame fallback. These counts are starting points, not release readiness.
Current server source has 14 locked residents obtainable anywhere, 10 at approved
homes; the older17 includes three excluded Lagoon species. No live DB or new native
build was verified by the roadmap review.

First: Fernlands persistent native slice with an existing bank by October25;
time one full Iguanodon package and bounded Titanoboa/Mammoth motion proofs in
parallel. Start progression, recovery, device and public-store setup this week.
Recalculate remaining complete packages / days left at every review; today's
19/21×7 ≈6.3 new packages/week is a minimum arithmetic floor, not measured capacity.
Existing-bank/reveal repairs, worlds, data, QA and rework add effort. All five
loops/data by November1, content freeze November8, signed beta November9–15,
public submissions November16, release December1 only with gates green. Escalate
capacity/date tradeoffs; no silent roster cuts or date changes.

Every real taxon retains habitat sources and uncertainty. Snow requires seasonal
snowy woodland, stream edges, shelter and exposed open forage. Prince Creek
Edmontosaurus remains genus-level; Nanuqsaurus feathers are inferred. Roster approval
is not scientific survival proof, historical coexistence or production acceptance.

Run `node scripts/check-stompy-roadmap.mjs` and
`node scripts/check-stompy-roster.mjs`, then `npm run build`. Check desktop/mobile,
personal-draft preservation and production counts. Publish only intended website
files through Git/Vercel; verify the exact deployed commit and public JSON. This
maintenance workflow does not deploy/reset the game or execute roster migrations.

The same roster page includes the art comparison review at
`/apps/stompy-acres/roster#sr-art-review`. Every active resident has a Current/Revised
pair driven by `public/stompy-acres/art-review.json`, with review images in
`public/stompy-acres/art-review/`. Compare is the default; Current/Revised modes and
an enlarged dialog support closer review on smaller screens. Original style anchors
and the four new Snow concepts are labeled explicitly, including unchanged pairs.
Art panels use white backgrounds without blend tinting. `currentViewBox` and the
revised `viewBox` normalize display padding within the existing crop boundaries;
`sourceViewBox` retains the original review crop. No painting pixels are changed. These are concept proposals;
animation changes are not approved, and artwork selection does not affect stored
Keep/Bench casting choices. Validate the 40 matching IDs and all image metadata with
`node scripts/check-stompy-art-review.mjs`, then run the roster check and build.
