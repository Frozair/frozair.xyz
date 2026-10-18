
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

The visual board is at `/apps/stompy-acres/roadmap`; its single data source is
`public/stompy-acres/release-roadmap.json`. Update it from current production-board,
game-source and native release evidence. Keep proposals separate from accepted scope
and distinguish runtime integration from Director sign-off. After an actual review,
refresh `asOf` and `nextReview`.

Validate with `node scripts/check-stompy-roadmap.mjs`, then `npm run build`. Publish
only the intended website changes through the existing Git/Vercel flow. The scheduled
release-director chat checks evidence daily at 9am America/Chicago.

The casting board is `/apps/stompy-acres/roster`, driven by
`public/stompy-acres/launch-roster.json` and original-art web previews in
`public/stompy-acres/roster/`. The launch scope is 40 residents, eight per island.
Brachio remains in Fernlands and Paraceratherium remains removed. The latest director
proposal moves Iguanodon from Snow to greener Fernlands, taking Concavenator’s slot.
Snow proposes Nanuqsaurus, Prince Creek Edmontosaurus, Leaellynasaura and Woolly
Rhinoceros in place of the three benched Snow candidates and Iguanodon’s former slot.
Borealopelta, Cryolophosaurus, Citipati and Concavenator remain preserved separately in
`benchedSpecies`; their image assets and prior assessment history are retained.
Exact casting choices, including unchanged Giants/Swamp proposals, still need Frozair’s
review. New Snow portraits are original, unapproved concepts and do not establish
production banks or qualification. No game data changes with this website proposal.

Keep/Bench choices stay in the visitor’s browser; Copy/Export shares a draft, not a
remote plan change. `selectionVersion` changes for this revision so older browser drafts
remain stored separately. Active counts cover only the 40 recommended residents;
`benchedSpecies` does not add launch slots. The page’s 40-resident game target is not a
claim of 40 resolved biological species: Leafy is fictional and the Prince Creek
Edmontosaurus is left at genus level in the cited research.

Treat the prior ~21-new-animation-package estimate as provisional. The four new Snow
concepts require full approval, animation production and qualification, alongside
existing-bank checks, revised looks, worlds and data. Recheck capacity against Nov 8;
escalate capacity/date tradeoffs without automatically reducing the 40 or changing dates.
Validate with `node scripts/check-stompy-roster.mjs` after roster changes.

Every active resident has a sourced habitat assessment. Fit ratings are director
judgements, distinct from evidence confidence and production readiness. Snow’s revised
direction is seasonally snowy woodland, stream edges and exposed open forage rather
than barren permanent ice. Yutyrannus, Sinosauropteryx and Leaellynasaura are conditional
fits to that direction. Do not convert inferred Nanuqsaurus plumage into a fossil fact,
or label Prince Creek Edmontosaurus as an established species. Update citations and
uncertainty with every casting revision. Do not infer cast approval from an audit or
browser-local choices.
