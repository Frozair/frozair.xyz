import googlePlayBadgeImage from "@/public/google-play-badge.png";
import appleAppStoreSvg from "@/public/apple-app-store.svg";
import bebyAppImage from "@/public/beby_app.png";
import React from "react";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beby - Baby Gender Predictor and Planner - Made by Frozair",
  description:
    "Beby is a playful baby gender predictor and planner for iOS and Android, built around Chinese Lunar and Mayan calendar traditions with private, local-first history.",
};

const highlights = [
  { label: "Private", value: "No account required" },
  { label: "Playful", value: "Entertainment-first" },
  { label: "2 methods", value: "Chinese + Mayan" },
  { label: "Plan ahead", value: "Explore timing windows" },
];

const features = [
  {
    title: "Predict",
    content:
      "Try Chinese Lunar and Mayan traditions in a guided flow that feels light, cute, and quick to use.",
  },
  {
    title: "Plan",
    content:
      "Explore possible conception months and timing windows when you want a more planner-style experience.",
  },
  {
    title: "Remember",
    content:
      "Save optional birthday details and revisit your past predictions or plans without starting from scratch.",
  },
];

const trustPoints = [
  "No account",
  "No ads",
  "No analytics SDKs",
  "History stays on-device",
];

export default function BebyPage() {
  return (
    <main className="flex-1 overflow-hidden">
      <section className="relative px-4 pb-24 pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#F6BE7B]/30 blur-3xl" />
          <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-[#F7D7B8]/18 blur-3xl" />
          <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F29CA3]/12 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="container mx-auto px-2 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.15s"
                animationFillMode="forwards"
              >
                <span className="badge mb-6 border-[#F29CA3]/40 bg-[#F29CA3]/12 text-[#F6C2C7]">
                  iOS and Android
                </span>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.25s"
                animationFillMode="forwards"
              >
                <h1 className="max-w-4xl text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
                  Beby
                </h1>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.35s"
                animationFillMode="forwards"
              >
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
                  A playful baby gender predictor and planner built around Chinese Lunar and Mayan
                  calendar traditions. It&apos;s private, lightweight, and designed to feel more like
                  a cute companion than a clinical tool.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.45s"
                animationFillMode="forwards"
              >
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  Use it for curiosity, ritual, and fun. Beby is entertainment-only and should never
                  be used as medical, fertility, or pregnancy advice.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.55s"
                animationFillMode="forwards"
              >
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <a href="https://play.google.com/store/apps/details?id=xyz.frozair.beby">
                    <Image
                      src={googlePlayBadgeImage}
                      alt="Download Beby on the Google Play Store"
                      height={75}
                    />
                  </a>

                  <a href="https://apps.apple.com/app/beby-predict-and-plan/id6743187318">
                    <Image
                      src={appleAppStoreSvg}
                      alt="Download Beby on the Apple App Store"
                      height={75}
                    />
                  </a>
                </div>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.65s"
                animationFillMode="forwards"
              >
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
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
                <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-[#F6BE7B]/30 via-[#F7D7B8]/20 to-[#F29CA3]/25 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171311]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                        Companion Feel
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-gray-300">
                        Warm colors, soft copy, and a local-first approach make Beby feel personal
                        without feeling invasive.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#F6BE7B]/18 px-3 py-1 text-xs font-semibold text-[#FFD9A8]">
                      Cute, not clinical
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[#F6BE7B] p-6">
                    <Image
                      alt="Beby app icon"
                      src={bebyAppImage}
                      className="mx-auto w-full max-w-[15rem] rounded-[2.25rem] shadow-2xl"
                    />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#F29CA3]/20 bg-[#F29CA3]/10 p-4">
                      <p className="text-sm font-semibold text-[#F7CAD0]">Guided flow</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Prediction and planning both feel guided instead of dumping you into a chart.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#F6BE7B]/20 bg-[#F6BE7B]/10 p-4">
                      <p className="text-sm font-semibold text-[#FFD9A8]">Private by design</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Birthday details, plans, and history stay on your phone instead of in a cloud
                        account.
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
              <p className="badge mb-4 border-[#F6BE7B]/30 bg-[#F6BE7B]/10 text-[#FFD9A8]">
                What It Does
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">Predict for fun. Plan with curiosity.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-400">
                Beby is at its best when it helps someone explore old traditions in a way that feels
                charming, quick, and easy to revisit.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171717] p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-black"
                      style={{
                        backgroundColor: index === 0 ? "#F6BE7B" : index === 1 ? "#F29CA3" : "#F7D7B8",
                      }}
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
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-8">
                <p className="badge border-[#F29CA3]/30 bg-[#F29CA3]/10 text-[#F7CAD0]">
                  Trust and Privacy
                </p>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">Private enough to feel safe.</h2>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  The strongest part of Beby&apos;s positioning is that it stays small, simple, and
                  respectful. No ads. No analytics SDKs. No signup wall. Just your predictions,
                  plans, and optional saved details on your own device.
                </p>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  That privacy story matters because the app lives in a sensitive category. The site
                  should make that reassuring from the first scroll.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fade-in">
              <div className="grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm font-semibold text-white"
                    style={{
                      boxShadow:
                        index % 2 === 0
                          ? "inset 0 0 0 1px rgba(246,190,123,0.18)"
                          : "inset 0 0 0 1px rgba(242,156,163,0.18)",
                    }}
                  >
                    {point}
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
                  <p className="badge border-[#F7D7B8]/30 bg-[#F7D7B8]/10 text-[#FFE4CF]">
                    Legal
                  </p>
                  <h2 className="mt-5 text-3xl font-bold md:text-4xl">Need the official links?</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                    Use the privacy policy and terms pages below for store review, support, and
                    compliance.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/apps/beby/privacy" className="btn btn-primary w-full sm:w-auto">
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
