
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
`public/stompy-acres/roster/`. The launch scope is 40 species, eight per island. Brachio moves to Fernlands;
Paraceratherium is removed. Deino + Amarga to Giants, Iguano to Snow and Dilo to
Swamp remain proposed placements until Frozair confirms them. Keep/Bench choices stay in the
visitor’s browser; Copy/Export shares a draft, not a remote plan change.
Plan ~21 new animation packages (~7/week to Nov 8), plus existing-bank
qualification, revised looks, worlds and data. Cut optional features first; escalate
capacity/date tradeoffs to Frozair instead of automatically reducing the 40. Validate
with `node scripts/check-stompy-roster.mjs` after roster changes.
