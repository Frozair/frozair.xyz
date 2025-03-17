import React from "react";
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import bebyAppImage from '@/public/beby_app.png';
import SocialLinks from "@/components/SocialLinks";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Apps  - Frozair - Android and Kotlin Multiplatform Developer',
  description: 'Apps created by Frozair includ Beby, the #1 Baby Gender Predictor App for iOS and Android.',
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
              A collection of Android and Kotlin Multiplatform applications I've developed.
            </p>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.6s" animationFillMode="forwards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectPreviewCard
                href="/apps/beby"
                imgSrc={bebyAppImage}
                title="Beby: Baby Gender Predictor"
                description="Cross-platform baby gender predictor app using the Chinese lunar calendar. Built with Kotlin Multiplatform."
              />
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
