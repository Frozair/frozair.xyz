import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import blockRushIcon from "@/public/blockrush-icon.png";
import menuScreenshot from "@/public/blockrush/screenshots/01_menu.png";
import levelThreeScreenshot from "@/public/blockrush/screenshots/03_lv3.png";
import bossScreenshot from "@/public/blockrush/screenshots/05_boss.png";
import leaderboardScreenshot from "@/public/blockrush/screenshots/06_leaderboard.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Rush: Break the Loop - iPhone and Android Arcade Roguelite - Made by Frozair",
  description:
    "A fast one-handed brick-breaker roguelite with escalating waves, boss gimmicks, card-drafted builds, and fair free-to-play systems. Available on iPhone and Android.",
};

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=xyz.blockrush&hl=en_US";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/block-rush-break-the-loop/id6759271120";

const heroStats = [
  { label: "One-handed", value: "Touch-first controls" },
  { label: "6x3 waves", value: "18 blocks at a time" },
  { label: "9 families", value: "Three tiers each" },
  { label: "Leaderboards", value: "Global score chase" },
];

const featureCards = [
  {
    title: "Brick-breaker pressure, roguelite decisions",
    content:
      "Every run starts clean and readable, then escalates into stacked waves, faster ball speed, and build decisions that can turn the whole board chaotic.",
  },
  {
    title: "Precision Strike timing",
    content:
      "Swipe up the instant the ball meets the paddle to land Perfect, Great, or Good hits for bonus damage, more charge, and extra pace.",
  },
  {
    title: "Nine power-up families",
    content:
      "Build around Nova, Singularity, Chrono, Quantum Tunnel, Pulsefire, Sentinels, Deadshot, Overflow, and Synergy combinations mid-run.",
  },
  {
    title: "Boss cycles with real gimmicks",
    content:
      "Each cycle ends in a boss formation with weak points, pressure patterns, and mechanics that force a different angle of attack.",
  },
  {
    title: "Leaderboard-ready runs",
    content:
      "Submit your seed, push deeper, and chase a higher score whether you play anonymously or sign in for a name on the board.",
  },
  {
    title: "Built for phone feel",
    content:
      "Single-screen play, strong readability, bold color moods, and mobile-tuned effects keep the game quick to read and hard to put down.",
  },
];

const powerUpFamilies = [
  { name: "Nova", hook: "Explosive extra-ball pressure" },
  { name: "Singularity", hook: "Gravity field control" },
  { name: "Chrono", hook: "Slow-time setup and execution" },
  { name: "Quantum Tunnel", hook: "Warped pathing and angles" },
  { name: "Pulsefire", hook: "Paddle-mounted projectile output" },
  { name: "Sentinels", hook: "Support paddles and board coverage" },
  { name: "Deadshot", hook: "Precision catches and aimed payoff" },
  { name: "Overflow", hook: "Momentum snowball and excess value" },
  { name: "Synergy", hook: "Cross-family combo explosions" },
];

const paletteSwatches = [
  { name: "Volt", color: "#44D5D2" },
  { name: "Rush", color: "#FF4F8B" },
  { name: "Solar", color: "#FFC933" },
  { name: "Loop", color: "#9B5CF4" },
];

const coreLoopSteps = [
  "Drag anywhere below the paddle to move without covering the action, then launch into an 18-block wave on a 6x3 grid.",
  "Survive long enough for the loop to tighten: ball speed ramps, health scales up, and formations mix in spike, shielded, and token blocks.",
  "Catch your level-up pickup, draft one card from three, and steer the run toward a family, stat spike, or combo path.",
  "Use Precision Strike to squeeze out free damage, more charge, and a speed kick when the timing window opens.",
  "Break through boss formations with weak points and gimmicks, then keep pushing deeper for higher scores and stronger builds.",
  "If the run ends, take an optional revive or bank tokens, then queue up the next build idea while the last one is still fresh.",
];

const screenshots = [
  {
    image: menuScreenshot,
    title: "Main Menu",
    description: "A clean one-screen hub that gets you into a run fast.",
  },
  {
    image: levelThreeScreenshot,
    title: "Legendary Build Moments",
    description: "Late-run power spikes turn the board into a highlight reel.",
  },
  {
    image: bossScreenshot,
    title: "Boss Gimmicks",
    description: "Every cycle ends with a different pressure puzzle to solve.",
  },
  {
    image: leaderboardScreenshot,
    title: "Leaderboard Chase",
    description: "Seeded runs and score hunting give every deep push a reason.",
  },
];

const faqItems = [
  {
    question: "Is Block Rush on both iPhone and Android?",
    answer: "Yes. Block Rush is live on the App Store and Google Play.",
  },
  {
    question: "Does Block Rush have in-app purchases?",
    answer:
      "Cosmetic skins can be bought directly, but permanent progression and power come from playing rather than paying.",
  },
  {
    question: "What ads are in the game?",
    answer:
      "Rewarded ads only, such as an optional revive after death or an optional token boost after a run. No forced mid-run interruptions.",
  },
  {
    question: "Is the game still evolving?",
    answer:
      "Yes. The live release is still in active development, so balance, content, and presentation continue to improve through regular updates.",
  },
];

export default function BlockRushPage() {
  return (
    <main className="flex-1 overflow-hidden">
      <section className="relative px-4 pb-24 pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10rem] top-16 h-72 w-72 rounded-full bg-[#FF4F8B]/18 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-[#44D5D2]/14 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#FFC933]/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="container mx-auto px-2 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.15s"
                animationFillMode="forwards"
              >
                <span className="badge mb-6 border-[#44D5D2]/40 bg-[#44D5D2]/10 text-[#78E6E1]">
                  Arcade Roguelite • Now on iPhone and Android
                </span>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.25s"
                animationFillMode="forwards"
              >
                <h1 className="max-w-4xl text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
                  <span className="block">Block Rush:</span>
                  <span className="mt-2 block bg-gradient-to-r from-[#44D5D2] via-[#FFC933] to-[#FF4F8B] bg-clip-text text-transparent">
                    Break the Loop
                  </span>
                </h1>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.35s"
                animationFillMode="forwards"
              >
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
                  A fast, one-handed brick-breaker roguelite where every run turns into a different
                  build of boss pressure, risky timing windows, and screen-filling power spikes.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.45s"
                animationFillMode="forwards"
              >
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  Draft cards mid-run, stack nine power-up families, chase global leaderboards,
                  and keep pushing deeper before the loop catches up to you. The live release is
                  already playable on both stores and still getting sharper with every update.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.55s"
                animationFillMode="forwards"
              >
                <div className="mt-8 flex flex-col gap-4 lg:max-w-3xl">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full sm:w-auto"
                    >
                      Download on the App Store
                    </a>
                    <a
                      href={GOOGLE_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary w-full sm:w-auto"
                    >
                      Get it on Google Play
                    </a>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/apps/blockrush/support"
                      className="btn btn-ghost w-full border-white/15 sm:w-auto"
                    >
                      Support
                    </Link>
                    <Link
                      href="/apps/blockrush/privacy"
                      className="btn btn-ghost w-full border-white/15 sm:w-auto"
                    >
                      Privacy Policy
                    </Link>
                    <Link href="/apps" className="btn btn-ghost w-full border-white/15 sm:w-auto">
                      View All Apps
                    </Link>
                  </div>
                </div>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.65s"
                animationFillMode="forwards"
              >
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </AnimateWithDelay>
            </div>

            <AnimateWithDelay
              animationClass="animate-fade-in-right"
              animationDelay="0.75s"
              animationFillMode="forwards"
            >
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-[#44D5D2]/35 via-[#9B5CF4]/20 to-[#FF4F8B]/35 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212]/90 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                        Store Identity
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                        Neon boss pressure, strong contrast, and clean geometry give Block Rush a
                        sharper arcade identity than the older placeholder art.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {paletteSwatches.map((swatch) => (
                        <div
                          key={swatch.name}
                          className="h-5 w-5 rounded-md"
                          style={{ backgroundColor: swatch.color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[#050505] p-6">
                    <Image
                      alt="Block Rush app icon"
                      src={blockRushIcon}
                      className="mx-auto w-full max-w-[18rem] rounded-[2.25rem] shadow-2xl"
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#44D5D2]/20 bg-[#44D5D2]/8 p-4">
                      <p className="text-sm font-semibold text-[#78E6E1]">Touch-first</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Drag below the paddle so the field stays readable when things get hectic.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#FFC933]/20 bg-[#FFC933]/8 p-4">
                      <p className="text-sm font-semibold text-[#FFD967]">Fair free-to-play</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Optional rewarded ads, cosmetic skins, and no pay-to-win shortcuts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateWithDelay>
          </div>
        </div>
      </section>

      <section className="relative bg-background-secondary px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <p className="badge mb-4 border-[#44D5D2]/30 bg-[#44D5D2]/10 text-[#78E6E1]">
                Key Features
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Brick-breaker flow, rebuilt for runs.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                It starts familiar, then bends into card drafting, boss weak points, and build
                paths that make each survival push feel different.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {featureCards.map((feature, index) => (
                <div
                  key={feature.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171717] p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-black"
                      style={{ backgroundColor: paletteSwatches[index % paletteSwatches.length].color }}
                    >
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-5 text-base leading-7 text-gray-300">{feature.content}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <p className="badge mb-4 border-[#FF4F8B]/30 bg-[#FF4F8B]/10 text-[#FF8FB5]">
                Screens
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">What the live game looks like.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                Pulled from the current ASO set so the site matches the product players actually
                see in the stores.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {screenshots.map((shot) => (
                <div
                  key={shot.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141414] p-4 shadow-lg"
                >
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
                    <Image src={shot.image} alt={shot.title} className="h-auto w-full" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{shot.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{shot.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
                <p className="badge border-[#9B5CF4]/30 bg-[#9B5CF4]/10 text-[#C4A4FF]">
                  Build Paths
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Nine families to stack and bend.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Runs level up through cards rather than grind. You are constantly deciding whether
                  to sharpen one family, branch into another, or chase synergy.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  Each family has three tiers, with legendary payoffs built to make late-run boards
                  feel earned instead of random.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {powerUpFamilies.map((family, index) => (
                  <div
                    key={family.name}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left text-sm text-white"
                    style={{
                      boxShadow:
                        index % 3 === 0
                          ? "inset 0 0 0 1px rgba(68,213,210,0.18)"
                          : index % 3 === 1
                            ? "inset 0 0 0 1px rgba(255,79,139,0.18)"
                            : "inset 0 0 0 1px rgba(255,201,51,0.18)",
                    }}
                  >
                    <p className="text-base font-semibold">{family.name}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-300">{family.hook}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gray-400">
                      Three-tier upgrade arc
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="relative bg-background-secondary px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <p className="badge mb-4 border-[#44D5D2]/30 bg-[#44D5D2]/10 text-[#78E6E1]">
                Core Loop
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">How a run escalates.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                The game stays readable for a second, then asks you to make harder, faster choices
                as the loop tightens.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {coreLoopSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-white/10 bg-[#171717] p-6 shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-4 text-base leading-7 text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
                <p className="badge border-[#FFC933]/30 bg-[#FFC933]/10 text-[#FFD967]">
                  Monetization
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Fair free-to-play, not pay-to-win.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Optional rewarded ads can soften a loss or boost a good run, while cosmetic skins
                  are the only direct purchase path.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  Permanent strength comes from learning the systems, routing better builds, and
                  staying alive longer, not from buying combat power.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="grid gap-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#171717] via-[#141414] to-[#101010] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="badge border-[#FFC933]/30 bg-[#FFC933]/10 text-[#FFD967]">Need help?</p>
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">Store links, privacy, and support stay close.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                    Whether someone wants to install, review the privacy policy, or report an issue,
                    the important paths are one tap away.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    App Store
                  </a>
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full sm:w-auto"
                  >
                    Google Play
                  </a>
                  <Link href="/apps/blockrush/support" className="btn btn-secondary w-full sm:w-auto">
                    Support
                  </Link>
                  <Link href="/apps/blockrush/privacy" className="btn btn-primary w-full sm:w-auto">
                    Privacy Policy
                  </Link>
                  <Link
                    href="/apps/terms-and-conditions"
                    className="btn btn-ghost w-full border-white/15 sm:w-auto"
                  >
                    Terms &amp; Conditions
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
