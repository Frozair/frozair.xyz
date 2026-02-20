import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import blockRushIcon from "@/public/blockrush-icon.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlockRush - Mobile Roguelite Block Breaker - Made by Frozair",
  description: "BlockRush is a precision-focused roguelite block breaker for iOS and Android.",
};

const features = [
  {
    title: "Endless Wave Runs",
    content:
      "Smash through scaling waves of blocks where every run gets faster, tougher, and more rewarding.",
  },
  {
    title: "Precision Skill System",
    content:
      "Perfect paddle hits, positioning, and timing directly impact your damage, control, and survival.",
  },
  {
    title: "Build-Defining Power-Ups",
    content:
      "Shape each run with power-ups like extra balls, paddle gun, magnetic ball, and slow motion effects.",
  },
];

export default function BlockRushPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12">
            <div className="flex flex-col">
              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.2s"
                animationFillMode="forwards"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                  BlockRush
                </h1>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.4s"
                animationFillMode="forwards"
              >
                <p className="mb-6 text-xl text-gray-600 dark:text-gray-300 text-center md:text-left max-w-3xl mx-auto">
                  A roguelite twist on the classic block-breaker genre, built for iOS and Android.
                  Master precision, chain power-ups, and survive endless escalating waves.
                </p>
              </AnimateWithDelay>

              <AnimateWithDelay
                animationClass="animate-fade-in"
                animationDelay="0.6s"
                animationFillMode="forwards"
              >
                <p className="text-base text-gray-600 dark:text-gray-300 text-center md:text-left">
                  Store release in progress.
                </p>
              </AnimateWithDelay>
            </div>

            <AnimateWithDelay
              animationClass="animate-fade-in-right"
              animationDelay="0.8s"
              animationFillMode="forwards"
            >
              <div className="flex items-center justify-center flex-grow">
                <Image
                  alt="BlockRush app icon"
                  src={blockRushIcon}
                  width={280}
                  className="rounded-[3rem] shadow-lg min-w-[8rem]"
                />
              </div>
            </AnimateWithDelay>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background-secondary relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl shadow-lg dark:shadow-blue-light/10 dark:border dark:border-card-border overflow-hidden transition-transform duration-150"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-card-foreground">{feature.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Need store-compliant policy links for review? Use the URLs below for BlockRush.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <Link href="/apps/blockrush/privacy" className="btn btn-primary w-full md:w-auto">
                  Privacy Policy
                </Link>
                <Link href="/apps/terms-and-conditions" className="btn btn-primary w-full md:w-auto">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
