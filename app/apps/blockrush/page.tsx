import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import blockRushIcon from "@/public/blockrush-icon.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Block Rush: Break the Loop - One-Handed Brick-Breaker Roguelite - Made by Frozair",
  description:
    "Block Rush: Break the Loop is a fast, one-handed brick-breaker roguelite for iOS and Android with boss cycles, wild power-up builds, and bold shifting palettes.",
};

const heroStats = [
  { label: "One-handed", value: "Mobile-first control" },
  { label: "Boss cycles", value: "Gimmicks and weak points" },
  { label: "9 families", value: "Build-defining power-ups" },
  { label: "8 palettes", value: "Mood-shifting runs" },
];

const featureCards = [
  {
    title: "Precision Strike",
    content:
      "Swipe up right as the ball hits your paddle to land Perfect, Great, or Good strikes for bonus damage, charge, and speed.",
  },
  {
    title: "Build-Craft, Not Grinding",
    content:
      "Catch pickups mid-run, draft from a fan of three, and stack power-up families into absurd combos that feel different by wave ten.",
  },
  {
    title: "Bosses That Fight Back",
    content:
      "Every loop tightens into boss formations with their own rhythm, cinematic wind-up, and pressure spikes that demand adaptation.",
  },
];

const powerUpFamilies = [
  "Nova",
  "Singularity",
  "Chrono",
  "Quantum Tunnel",
  "Pulsefire",
  "Sentinels",
  "Deadshot",
  "Overflow",
  "Synergy",
];

const paletteSwatches = [
  { name: "Volt", color: "#44D5D2" },
  { name: "Rush", color: "#FF4F8B" },
  { name: "Solar", color: "#FFC933" },
  { name: "Loop", color: "#9B5CF4" },
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
                <span className="badge mb-6 border-[#FF4F8B]/40 bg-[#FF4F8B]/10 text-[#FF8FB5]">
                  Alpha build
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
                  A fast, bold brick-breaker roguelite built for one hand and one screen. Smash
                  charged waves, dodge bosses with their own gimmicks, and stack ridiculous power-up
                  builds before the loop catches up to you.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.45s"
                animationFillMode="forwards"
              >
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  Built solo by Frozair for the bus ride, the couch session, and the one-more-run at
                  2 a.m. Store launch is in progress.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.55s"
                animationFillMode="forwards"
              >
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/apps/blockrush/privacy" className="btn btn-primary w-full sm:w-auto">
                    Privacy Policy
                  </Link>
                  <Link href="/apps" className="btn btn-secondary w-full sm:w-auto">
                    View All Apps
                  </Link>
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
                        Alpha Identity
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                        The new look trades the old neon mark for a color-driven tile system that
                        feels closer to the game on-screen.
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
                      alt="Block Rush alpha app icon"
                      src={blockRushIcon}
                      className="mx-auto w-full max-w-[18rem] rounded-[2.25rem] shadow-2xl"
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#44D5D2]/20 bg-[#44D5D2]/8 p-4">
                      <p className="text-sm font-semibold text-[#78E6E1]">Touch-first</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Drag anywhere below the paddle and the game responds immediately.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#FFC933]/20 bg-[#FFC933]/8 p-4">
                      <p className="text-sm font-semibold text-[#FFD967]">Momentum-heavy</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Waves start controlled, then spiral into speed, pressure, and recovery plays.
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
                What Makes It Hit
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Classic feel, looped into chaos.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                The alpha isn&apos;t just a block-breaker with upgrades anymore. It&apos;s now about
                timing reads, survival builds, and boss checkpoints that change the pace of a run.
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
                  Build Identity
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Nine families, no filler runs.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  By wave ten you should already be thinking about your next run. The alpha leans
                  into draftable power-up families, tier-three legendaries, and combos that turn a
                  survival attempt into a screen-shaking build.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  The goal is less grind, more expression: pick a lane, break it open, and see how
                  far the loop bends before it snaps.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {powerUpFamilies.map((family, index) => (
                  <div
                    key={family}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-semibold text-white"
                    style={{
                      boxShadow:
                        index % 3 === 0
                          ? "inset 0 0 0 1px rgba(68,213,210,0.18)"
                          : index % 3 === 1
                            ? "inset 0 0 0 1px rgba(255,79,139,0.18)"
                            : "inset 0 0 0 1px rgba(255,201,51,0.18)",
                    }}
                  >
                    {family}
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
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">Need store-ready links?</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                    Use the privacy policy and terms pages below for review, support, and store
                    compliance while the release rollout is in progress.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
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
