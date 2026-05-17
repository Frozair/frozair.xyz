import React from "react";
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import bebyAppImage from '@/public/beby_app.png';
import blockRushIcon from '@/public/blockrush-icon.png';
import SocialLinks from "@/components/SocialLinks";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Apps  - Frozair - Android and Kotlin Multiplatform Developer',
  description: 'Apps created by Frozair include BlockRush and Beby for iOS and Android.',
};
export default function AppsPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-4 relative">
        <div className="container mx-auto">
          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.2s" animationFillMode="forwards">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              My Apps
            </h1>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.4s" animationFillMode="forwards">
            <p className="mb-16 text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              A collection of games and apps I&apos;ve released for iPhone and Android.
            </p>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.6s" animationFillMode="forwards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectPreviewCard
                href="/apps/blockrush"
                imgSrc={blockRushIcon}
                title="Block Rush: Break the Loop"
                description="A one-handed brick-breaker roguelite, now live on the App Store and Google Play, where every run becomes a different build of power-ups, boss fights, and skill shots."
              />
              <ProjectPreviewCard
                href="/apps/beby"
                imgSrc={bebyAppImage}
                title="Beby"
                description="A playful baby gender predictor and planner using Chinese Lunar and Mayan traditions, with private on-device history."
              />
              <div className="bg-card rounded-2xl shadow-lg dark:shadow-blue-light/10 dark:border dark:border-card-border overflow-hidden transition-transform duration-150">
                <div className="h-48 flex items-center justify-center px-8 text-center bg-background-secondary">
                  <div>
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-200">
                      Coming soon
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold">SubNudge</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-card-foreground mb-4">
                    A free mobile app for Twitch creators who want manual nudges, human-in-the-loop follow-ups,
                    and monthly subscriber review without spreadsheet chaos.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built for Prime-heavy audiences and the creators who know their subscribers personally.
                  </p>
                </div>
              </div>
            </div>
          </AnimateWithDelay>
        </div>
      </section>

      {/* App Idea Callout */}
      <AnimateOnScroll animationClass="animate-fade-in">
        <section className="mb-24 px-4 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto glass-panel dark:shadow-blue-light/10 dark:border dark:border-card-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Have an app idea?</h2>
                <div className="w-16 h-1 bg-blue mx-auto"></div>
              </div>

              <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">I'm always open to new projects and collaborations. If you have an app idea or need help with development, let's talk!</p>

              <div className="flex flex-col items-center justify-center mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with me on</p>
                <SocialLinks />
              </div>

            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
