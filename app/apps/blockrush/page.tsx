import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import blockRushIcon from "@/public/blockrush-icon.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Rush: Break the Loop - Android Brick-Breaker Roguelite - Made by Frozair",
  description:
    "Block Rush: Break the Loop is a mobile arcade roguelite where every run becomes a different build of explosive power-ups, boss fights, and skill shots.",
};

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=xyz.blockrush&hl=en_US";

const heroStats = [
  { label: "One-handed", value: "Mobile-first control" },
  { label: "6 families", value: "4 tiers each" },
  { label: "8 bosses", value: "Modifiers and weak points" },
  { label: "Rewarded ads", value: "No IAP, no banners" },
  { label: "8 moods", value: "Palette-shifting runs" },
];

const featureCards = [
  {
    title: "6 power-up families, 4 tiers each",
    content:
      "Nova, Pulsefire, Singularity, Sentinels, Deadshot, and Chrono each scale from baseline to legendary.",
  },
  {
    title: "Card-driven builds",
    content:
      "Every level-up lets you draft from a fan of 3 cards. Invest in stats, new families, or tier-ups.",
  },
  {
    title: "8 boss modifiers",
    content:
      "Shield Ring, Regenerating Armor, Freeze Beam, Crush Pulse, Deep-Coil Blocks, Moving Bastion, Overdrive Nodes, and Vulnerability Window.",
  },
  {
    title: "Weak point cores",
    content:
      "Every boss has skill-shot targets that can detonate the whole formation when hit clean.",
  },
  {
    title: "Precision Strike",
    content:
      "Swipe up at the instant the ball touches the paddle for Perfect, Great, or Good bonus damage, charge, and speed.",
  },
  {
    title: "One-tap controls, mobile-first",
    content:
      "Drag below the paddle to move, tap to launch, and swipe up for skill shots without blocking the field.",
  },
];

const powerUpFamilies = [
  {
    name: "Nova",
    hook: "Extra ball / multi-ball chaos",
    tiers: ["Lv. 0 Split Shot", "Lv. 1 Charge Shot", "Lv. 2 Overcharge", "Lv. 3 Plasma Blast"],
  },
  {
    name: "Pulsefire",
    hook: "Paddle-mounted gun",
    tiers: ["Lv. 0 Single shot", "Lv. 1 Burst fire", "Lv. 2 Homing projectiles", "Lv. 3 Plasma beam"],
  },
  {
    name: "Singularity",
    hook: "Paddle widening + gravity field",
    tiers: ["Lv. 0 Wider paddle", "Lv. 1 Gravity pull", "Lv. 2 Pickup vacuum", "Lv. 3 Event horizon"],
  },
  {
    name: "Sentinels",
    hook: "Extra paddles",
    tiers: ["Lv. 0 One bonus paddle", "Lv. 1 Two split paddles", "Lv. 2 Assisted aim", "Lv. 3 Autonomous center paddle"],
  },
  {
    name: "Deadshot",
    hook: "Catch-and-aim shot",
    tiers: ["Lv. 0 One catch", "Lv. 1 Aim guide", "Lv. 2 Pierce budget", "Lv. 3 Bullet + laser sweep"],
  },
  {
    name: "Chrono",
    hook: "Slow-motion control",
    tiers: ["Lv. 0 0.5x time", "Lv. 1 Full-speed paddle", "Lv. 2 Bonus damage", "Lv. 3 Perfect-shot window"],
  },
];

const paletteSwatches = [
  { name: "Volt", color: "#44D5D2" },
  { name: "Rush", color: "#FF4F8B" },
  { name: "Solar", color: "#FFC933" },
  { name: "Loop", color: "#9B5CF4" },
];

const coreLoopSteps = [
  "Bounce the ball and break blocks with a joystick-style drag zone below the paddle.",
  "Fill your paddle charge, fire a plasma bolt, and catch the falling power-up pickup.",
  "Pop a Card Block when you're ready and draft 1 of 3 cards for stats, families, or tier-ups.",
  "Beat the wave timer by clearing fast or the next wave stacks on top of the last one.",
  "Every 5th wave is a boss fight with its own modifier, pressure pattern, and weak points.",
  "If the run ends, use one rewarded-ad continue, then bank tokens and push deeper next run.",
];

const faqItems = [
  {
    question: "Does BlockRush have in-app purchases?",
    answer: "No. Tokens are earned exclusively through gameplay.",
  },
  {
    question: "What ads are in the game?",
    answer: "Rewarded ads only. No banners, no interstitials, and no ads on app launch.",
  },
  {
    question: "Can I progress without watching ads?",
    answer: "Yes. Ads are a boost, never a bypass, and players can fully progress without them.",
  },
  {
    question: "What can rewarded ads do?",
    answer:
      "Revive you after your first death of a run, double your tokens after a good run, or double a daily login claim.",
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
                  Arcade Roguelite • Now on Google Play
                </span>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.25s"
                animationFillMode="forwards"
              >
                <h1 className="max-w-4xl text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
                  <span className="block">Block Rush:</span>
                  <span className="mt-2 block text-transparent bg-gradient-to-r from-[#44D5D2] via-[#FFC933] to-[#FF4F8B] bg-clip-text">
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
                  A breakout-style arcade roguelite where every run becomes a different build of
                  explosive power-ups, boss fights, and skill shots.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.45s"
                animationFillMode="forwards"
              >
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  Draft level-up cards, invest in six power-up families, and push through escalating
                  waves and boss encounters. No two runs play the same, and there&apos;s nothing to
                  buy that gives you an edge.
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
                      href={GOOGLE_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full sm:w-auto"
                    >
                      Play on Google Play
                    </a>
                    <Link href="/apps/blockrush/support" className="btn btn-secondary w-full sm:w-auto">
                      Support
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
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
                        Energy Field Identity
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                        An abstract energy field with bold saturated colors, dark atmosphere, and
                        run-to-run mood palettes keeps every board readable at phone speed.
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

                  <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[#232323] p-6">
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
                        Drag below the paddle and the field stays clear for timing reads and skill shots.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#FFC933]/20 bg-[#FFC933]/8 p-4">
                      <p className="text-sm font-semibold text-[#FFD967]">Rewarded-ads-only</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        No IAP, no banners, no interstitials. Every ad is optional and tied to a positive moment.
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
              <h2 className="text-3xl font-bold md:text-5xl">Breakout, rebuilt as a roguelite.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                Recognizable paddle-and-ball action, but every run bends into a different build
                through cards, tier-ups, weak points, and boss modifiers.
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
                <p className="badge border-[#9B5CF4]/30 bg-[#9B5CF4]/10 text-[#C4A4FF]">
                  Power-Up Families
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Six families. Four tiers each.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  Every family has a clear role in your run, from Nova&apos;s extra-ball chaos to
                  Chrono&apos;s slow-motion setup button. Tier-ups are earned through card picks, not luck.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  Lv. 0 unlocks the baseline. Lv. 3 is the legendary version that turns the whole
                  board into a clip-worthy moment.
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
                    <p className="mt-1 text-sm text-gray-300">{family.hook}</p>
                    <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.16em] text-gray-400">
                      {family.tiers.map((tier) => (
                        <p key={tier}>{tier}</p>
                      ))}
                    </div>
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
              <h2 className="text-3xl font-bold md:text-5xl">How a run works.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                Bounce, charge, draft, survive, and push deeper. The flow stays fast because the
                game lets you trigger key moments when you decide the field is safe.
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
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Free to play. No IAP.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  No in-app purchases. No banners. No interstitials. Every ad is opt-in and tied to
                  a positive moment.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  Tokens are earned through play, and players who never watch an ad can still fully
                  progress.
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
                  <p className="badge border-[#FFC933]/30 bg-[#FFC933]/10 text-[#FFD967]">Legal</p>
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">Need privacy or support?</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                    Privacy, support, and legal pages stay one tap away so players and platform
                    reviewers can find the important stuff fast.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full sm:w-auto"
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
