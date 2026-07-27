import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import appIcon from "@/public/hexablast/app-icon.png";
import heroScreenshot from "@/public/hexablast/screenshots/01_hero.png";
import hiveQuestScreenshot from "@/public/hexablast/screenshots/04_hive_quest.png";

const PAGE_URL = "https://frozair.xyz/apps/hexablast";
const OG_IMAGE_URL = "https://frozair.xyz/hexablast/screenshots/01_hero.png";

export const metadata: Metadata = {
  title: "Hexa Blast: Honey Puzzle - Cozy Hex Block Puzzle for iPhone and Android - Made by Frozair",
  description:
    "Hexa Blast: Honey Puzzle is a cozy hex block puzzle for iPhone and Android with offline play, daily challenges, and satisfying honeycomb line clears.",
  keywords: [
    "Hexa Blast",
    "Honey Puzzle",
    "hex block puzzle",
    "cozy puzzle game",
    "offline puzzle game",
    "daily puzzle game",
    "honeycomb puzzle",
    "iPhone puzzle game",
    "Android puzzle game",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Hexa Blast: Honey Puzzle",
    description:
      "A cozy hex block puzzle with offline play, daily challenges, and warm honeycomb visuals.",
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
    description: "Cozy hex puzzle with offline play, daily challenges, and sweet combo clears.",
    images: [OG_IMAGE_URL],
  },
};

const screenshots = [
  {
    image: heroScreenshot,
    title: "Core gameplay",
  },
  {
    image: hiveQuestScreenshot,
    title: "Daily Hive Quest",
  },
];

const seoFaqs = [
  {
    question: "What is Hexa Blast: Honey Puzzle?",
    answer:
      "Hexa Blast is a cozy mobile hex block puzzle where players place honeycomb pieces and clear lines across three directions.",
  },
  {
    question: "Is Hexa Blast available on iPhone and Android?",
    answer: "Yes. This route is the official website page for the iPhone and Android release.",
  },
  {
    question: "Where can I find Hexa Blast support and privacy information?",
    answer:
      "Support, privacy policy, and terms links are all available from this page for players, search engines, and app-store review.",
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
        "A cozy hex block puzzle with offline play, honeycomb visuals, and daily challenges.",
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

      <section className="relative px-4 pb-20 pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-[#F2B84B]/25 blur-3xl" />
          <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-[#D38A25]/18 blur-3xl" />
          <div className="absolute bottom-6 left-1/3 h-72 w-72 rounded-full bg-[#8B540F]/16 blur-3xl" />
        </div>

        <div className="container mx-auto px-2 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.15s"
                animationFillMode="forwards"
              >
                <span className="badge mb-6 border-[#F2B84B]/35 bg-[#F2B84B]/10 text-[#FFD57F]">
                  Cozy Hex Puzzle • SEO Route for iPhone and Android
                </span>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.25s"
                animationFillMode="forwards"
              >
                <h1 className="max-w-4xl text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
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
                  A cozy hex block puzzle with honeycomb visuals, offline-friendly play, and a daily
                  challenge mode called Hive Quest.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.45s"
                animationFillMode="forwards"
              >
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  Built to rank cleanly, show the real game fast, and keep support and legal links
                  easy to find.
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
                  <Link href="/apps" className="btn btn-ghost w-full border-white/15 sm:w-auto">
                    View All Apps
                  </Link>
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
                        Brand Snapshot
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                        Warm honey palette, bee mascot, and clean puzzle framing built for store and
                        search discovery.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#F2B84B]/15 px-3 py-1 text-xs font-semibold text-[#FFD57F]">
                      Real assets
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
                    <div className="rounded-[1.5rem] border border-white/10 bg-[#2A1A0C] p-4">
                      <Image
                        alt="Hexa Blast app icon"
                        src={appIcon}
                        className="mx-auto w-full rounded-[1.5rem] shadow-2xl"
                        priority
                      />
                    </div>
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                      <Image
                        alt="Hexa Blast gameplay screenshot"
                        src={heroScreenshot}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateWithDelay>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <p className="badge mb-4 border-[#C87916]/30 bg-[#C87916]/10 text-[#F6C36D]">
                Screenshots
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">A quick look at the game.</h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {screenshots.map((shot) => (
                <div
                  key={shot.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141414] p-4 shadow-lg"
                >
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
                    <Image src={shot.image} alt={shot.title} className="h-auto w-full" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{shot.title}</h3>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#17120C] via-[#1A1207] to-[#120C06] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="badge border-[#F2B84B]/30 bg-[#F2B84B]/10 text-[#FFD57F]">Store-ready links</p>
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">Official links stay close.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                    Privacy, support, and terms are here for players and store review.
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
