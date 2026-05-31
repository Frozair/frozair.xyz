import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import appIcon from "@/public/hexablast/app-icon.png";
import heroScreenshot from "@/public/hexablast/screenshots/01_hero.png";
import comboScreenshot from "@/public/hexablast/screenshots/02_combo.png";
import menuProgressScreenshot from "@/public/hexablast/screenshots/03_menu_progress.png";
import hiveQuestScreenshot from "@/public/hexablast/screenshots/04_hive_quest.png";
import weekCompleteScreenshot from "@/public/hexablast/screenshots/05_week_complete.png";

const PAGE_URL = "https://frozair.xyz/apps/hexablast";
const OG_IMAGE_URL = "https://frozair.xyz/hexablast/screenshots/01_hero.png";

export const metadata: Metadata = {
  title: "Hexa Blast: Honey Puzzle - Cozy Hex Block Puzzle for iPhone and Android - Made by Frozair",
  description:
    "Hexa Blast: Honey Puzzle is a cozy hex block puzzle for iPhone and Android with three-axis line clears, offline play, daily Hive Quest challenges, and warm honeycomb visuals.",
  keywords: [
    "Hexa Blast",
    "Honey Puzzle",
    "hex puzzle game",
    "block puzzle",
    "offline puzzle game",
    "cozy mobile game",
    "honeycomb puzzle",
    "daily puzzle game",
    "iPhone puzzle game",
    "Android puzzle game",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Hexa Blast: Honey Puzzle",
    description:
      "A cozy hex block puzzle with offline play, daily Hive Quest challenges, and satisfying honeycomb line clears.",
    url: PAGE_URL,
    siteName: "Frozair",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 540,
        height: 960,
        alt: "Hexa Blast gameplay screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexa Blast: Honey Puzzle",
    description:
      "Cozy hex puzzle. Drop blocks, clear honeycomb lines, and chase sweet combos on iPhone and Android.",
    images: [OG_IMAGE_URL],
  },
};

const heroStats = [
  { label: "Three axes", value: "Clear lines in every hex direction" },
  { label: "Offline", value: "No account or connection required" },
  { label: "Daily mode", value: "Hive Quest adds a fresh objective" },
  { label: "Calm pacing", value: "No timer, no energy, no rush" },
];

const featureCards = [
  {
    title: "Three-direction line clears",
    content:
      "Hexa Blast keeps the drag-and-place puzzle loop simple, then adds a third clearing axis so every placement has more combo potential than a square grid.",
  },
  {
    title: "Warm honeycomb identity",
    content:
      "The game leans into beeswax tones, glossy cells, pollen bursts, and a friendly mascot so it feels cozy instead of sterile or noisy.",
  },
  {
    title: "Hive Quest daily goals",
    content:
      "Alongside endless score-chasing, Hive Quest adds a daily clear target with weekly progress, themed rewards, and a reason to come back tomorrow.",
  },
  {
    title: "Offline-first puzzle sessions",
    content:
      "No login wall, no timer, and no move limit means the game is easy to open for a short unwind session and just as easy to revisit later.",
  },
  {
    title: "Combo streaks that feel generous",
    content:
      "Clears chain into streak multipliers, rainbow edge glows, all-clear celebrations, and praise moments that make good placements feel louder.",
  },
  {
    title: "Built for mobile store fit",
    content:
      "Portrait-first layout, readable board states, and one-thumb-friendly flow make the game easy to understand in screenshots, trailers, and first sessions.",
  },
];

const modeCards = [
  {
    title: "Classic",
    description:
      "Endless score chase. Drop three pieces at a time, clear honeycomb lines, build streaks, and push for a better personal best.",
  },
  {
    title: "Hive Quest",
    description:
      "A daily puzzle track with weekly progression. Clear a target number of lines in a set number of placements and slowly complete the hive.",
  },
];

const screenshots = [
  {
    image: heroScreenshot,
    title: "Core Board",
    description: "The main board keeps the hex grid readable while showing the full tray and current run state.",
  },
  {
    image: comboScreenshot,
    title: "Combo Payoff",
    description: "Big clears spark streak feedback, pollen bursts, and the brighter celebration moments the game leans on.",
  },
  {
    image: menuProgressScreenshot,
    title: "Menu Progress",
    description: "Weekly Hive Quest progress and seasonal event hooks make the shell feel alive without cluttering the core loop.",
  },
  {
    image: hiveQuestScreenshot,
    title: "Hive Quest",
    description: "Daily challenge goals turn the same clean board rules into a more directed objective mode.",
  },
  {
    image: weekCompleteScreenshot,
    title: "Week Complete",
    description: "Finishing the full week pays off with a celebratory screen and unlock progression that feels earned.",
  },
];

const seoFaqs = [
  {
    question: "What kind of game is Hexa Blast: Honey Puzzle?",
    answer:
      "Hexa Blast is a cozy mobile hex block puzzle where you drag honeycomb pieces onto the board and clear full lines across three directions.",
  },
  {
    question: "Is Hexa Blast available offline?",
    answer:
      "Yes. The core puzzle loop is designed to be playable offline without requiring an account or constant connectivity.",
  },
  {
    question: "Does Hexa Blast have a daily mode?",
    answer:
      "Yes. Hive Quest adds a daily puzzle structure with weekly progression layered on top of the endless score-chasing mode.",
  },
  {
    question: "Where can I find Hexa Blast support and privacy information?",
    answer:
      "The app's support page, privacy policy, and terms links are all available from this route so they are ready for App Store and Google Play review.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Hexa Blast: Honey Puzzle",
      applicationCategory: "GameApplication",
      operatingSystem: "iOS, Android",
      description:
        "A cozy hex block puzzle with three-axis line clears, offline play, endless score chasing, and daily Hive Quest challenges.",
      url: PAGE_URL,
      image: OG_IMAGE_URL,
      publisher: {
        "@type": "Person",
        name: "Frozair",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: seoFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function HexaBlastPage() {
  return (
    <main className="flex-1 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative px-4 pb-24 pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[#F2B84B]/25 blur-3xl" />
          <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-[#D38A25]/18 blur-3xl" />
          <div className="absolute bottom-6 left-1/3 h-72 w-72 rounded-full bg-[#8B540F]/16 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,210,120,0.16) 2px, transparent 2px)",
              backgroundSize: "34px 34px",
            }}
          />
        </div>

        <div className="container mx-auto px-2 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.15s"
                animationFillMode="forwards"
              >
                <span className="badge mb-6 border-[#F2B84B]/35 bg-[#F2B84B]/10 text-[#FFD57F]">
                  Cozy Hex Puzzle • Store-ready route for iPhone and Android
                </span>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.25s"
                animationFillMode="forwards"
              >
                <h1 className="max-w-5xl text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
                  <span className="block">Hexa Blast:</span>
                  <span className="mt-2 block bg-gradient-to-r from-[#FFE08C] via-[#F2B84B] to-[#C87916] bg-clip-text text-transparent">
                    Honey Puzzle
                  </span>
                </h1>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.35s"
                animationFillMode="forwards"
              >
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
                  A cozy hex block puzzle where you drop honeycomb pieces onto the hive, clear full
                  lines across three directions, and build sweet combo streaks without a timer
                  breathing down your neck.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.45s"
                animationFillMode="forwards"
              >
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  The route is prepared for store review and player trust: screenshots, support,
                  privacy policy, and terms links all live here. Once the App Store and Google Play
                  listings are public, their download links can drop straight into this page.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.55s"
                animationFillMode="forwards"
              >
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link href="/apps/hexablast/privacy" className="btn btn-primary w-full sm:w-auto">
                    Privacy Policy
                  </Link>
                  <Link href="/apps/hexablast/support" className="btn btn-secondary w-full sm:w-auto">
                    Support
                  </Link>
                  <Link
                    href="/apps/terms-and-conditions"
                    className="btn btn-ghost w-full border-white/15 sm:w-auto"
                  >
                    Terms &amp; Conditions
                  </Link>
                  <Link href="/apps" className="btn btn-ghost w-full border-white/15 sm:w-auto">
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
                <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-[#F2B84B]/30 via-[#D38A25]/18 to-[#FFF0B8]/18 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#17110A]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                        Store Identity
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                        Honeycomb geometry, warm amber lighting, and a bee mascot give Hexa Blast a
                        stronger shelf identity than a generic block puzzle skin.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#F2B84B]/15 px-3 py-1 text-xs font-semibold text-[#FFD57F]">
                      Warm-honey palette
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[#2A1A0C] p-6">
                    <Image
                      alt="Hexa Blast app icon"
                      src={appIcon}
                      className="mx-auto w-full max-w-[16rem] rounded-[2.25rem] shadow-2xl"
                      priority
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#F2B84B]/20 bg-[#F2B84B]/10 p-4">
                      <p className="text-sm font-semibold text-[#FFD57F]">Calm, not empty</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        No timer and no move limit keep the session relaxed, but three-axis clears
                        still create real decision density.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#C87916]/20 bg-[#C87916]/10 p-4">
                      <p className="text-sm font-semibold text-[#F6C36D]">Store trust paths</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Privacy, support, and legal links are easy to find for reviewers and future
                        players alike.
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
              <p className="badge mb-4 border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#FFD57F]">
                Why It Stands Out
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">A familiar puzzle loop with a better angle.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                The pitch is easy to understand fast: drag pieces, clear lines, chase combos. The
                hex grid is what gives the game a more memorable board language and stronger combo
                moments.
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2B84B] text-sm font-bold text-black">
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
              <p className="badge mb-4 border-[#C87916]/30 bg-[#C87916]/10 text-[#F6C36D]">
                Screenshots
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Visuals pulled from the current build.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                These are live game captures from the Hexa Blast project so the route reflects the
                actual product direction instead of mock marketing art.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="relative bg-background-secondary px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
                <p className="badge border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#FFD57F]">
                  Modes
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Built for both chill runs and repeat visits.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  The main game loop needs to feel satisfying on its own, but the route also makes
                  room for the retention layer that gives store listings a stronger long-term story.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  Classic handles the evergreen score chase. Hive Quest gives the game a daily
                  reason to reopen without compromising the clean ruleset.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="grid gap-4">
                {modeCards.map((mode) => (
                  <div
                    key={mode.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                  >
                    <h3 className="text-2xl font-semibold text-white">{mode.title}</h3>
                    <p className="mt-3 text-base leading-7 text-gray-300">{mode.description}</p>
                  </div>
                ))}
                <div className="rounded-[1.5rem] border border-[#C87916]/25 bg-[#C87916]/10 p-6">
                  <h3 className="text-xl font-semibold text-white">Player trust basics</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    Local progress, optional ads, and visible legal pages help the game read as a
                    serious product instead of a vague prototype when someone lands here from search
                    or store review.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
                <p className="badge border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#FFD57F]">
                  FAQ
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Answers for players and store reviewers.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  This section doubles as useful player-facing context and machine-readable FAQ
                  data for search engines through the structured data included on the page.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="grid gap-4">
                {seoFaqs.map((item) => (
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
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#17120C] via-[#1A1207] to-[#120C06] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="badge border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#FFD57F]">Store-ready links</p>
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">Everything needed for review and support is in one place.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                    The route already covers the pieces stores expect: screenshots, privacy policy,
                    support contact, and terms. Real store download buttons can be added later
                    without rebuilding the page structure.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/apps/hexablast/support" className="btn btn-secondary w-full sm:w-auto">
                    Hexa Blast Support
                  </Link>
                  <Link href="/apps/hexablast/privacy" className="btn btn-primary w-full sm:w-auto">
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
