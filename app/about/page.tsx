import React from "react";
import Image from 'next/image';
import frozairImage from '@/public/frozair.png';
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import exampleAppImage from '@/public/example-app.png';
import SocialLinks from "@/components/SocialLinks";
import Button from "@/components/Button";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-4 relative">
        <div className="container mx-auto">
          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.2s" animationFillMode="forwards">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About Me
            </h1>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.4s" animationFillMode="forwards">
            <p className="mb-16 text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Android developer, Kotlin Multiplatform expert, and Twitch streamer
            </p>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.6s" animationFillMode="forwards">
            <div
              className="max-w-4xl mx-auto glass-panel dark:shadow-blue-light/10 dark:border dark:border-card-border rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12">
                <Image src={frozairImage} alt="Frozair after taking a pickle shot" height={200} className="rounded-full border-8 border-white dark:border-gray-300 shadow-2xl" />

                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold blue-gradient-text text-center sm:text-left">Hello, I'm Frozair</h2>
                  <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-300">
                    I'm a passionate Android developer with over 5 years of experience in creating exceptional mobile applications. I specialize in Kotlin Multiplatform development and building cross-platform solutions while maintaining native performance and user experience.
                  </p>
                  <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-300">
                    When I'm not coding, I'm streaming on Twitch, sharing my development process, coding techniques, and connecting with the developer community.
                  </p>
                </div>
              </div>

            </div>
          </AnimateWithDelay>
        </div>
      </section>

      <section className="pb-24 px-4 relative">
        <div className="container mx-auto">
          <AnimateOnScroll animationClass='animate-fade-in'>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Journey</h2>
            </div>
          </AnimateOnScroll>

          <div className="relative flex flex-col gap-y-8 before:absolute before:inset-0 before:h-full before:w-px before:bg-gray-300 before:left-1/2 before:-translate-x-1/2 py-6">

            <AnimateOnScroll animationClass='animate-fade-in'>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-background sm:bg-transparent z-10 py-4">
                <div className="w-full text-center sm:w-5/12 sm:text-right sm:pr-8">
                  <span className="text-gray-500 dark:text-gray-400 block sm:hidden mb-2">2016</span>
                  <h3 className="text-xl font-semibold mb-2">Started Android Development</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Began learning Android development with Java, creating my first applications and exploring the fundamentals of mobile development.
                  </p>
                </div>
                <span className="w-10 h-10 items-center justify-center bg-background text-gray-500 dark:text-gray-400 hidden sm:flex">
                  2016
                </span>
                <div className="w-5/12 hidden sm:block"></div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass='animate-fade-in'>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-background sm:bg-transparent z-10 py-4">
                <div className="w-5/12 hidden sm:block"></div>
                <span className="w-10 h-10 items-center justify-center bg-background text-gray-500 dark:text-gray-400 hidden sm:flex">
                  2018
                </span>
                <div className="w-full text-center sm:w-5/12 sm:text-left sm:pr-8">
                  <span className="text-gray-500 dark:text-gray-400 block sm:hidden mb-2">2018</span>
                  <h3 className="text-xl font-semibold mb-2">Transitioned to Kotlin</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Embraced Kotlin as my primary development language, appreciating its concise syntax, null safety, and modern features.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass='animate-fade-in'>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-background sm:bg-transparent z-10 py-4">
                <div className="w-full text-center sm:w-5/12 sm:text-right sm:pr-8">
                  <span className="text-gray-500 dark:text-gray-400 block sm:hidden mb-2">2020</span>
                  <h3 className="text-xl font-semibold mb-2">Started Twitch Streaming</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Began sharing my development process on Twitch, creating a community of developers interested in Android and Kotlin development.
                  </p>
                </div>
                <span className="w-10 h-10 items-center justify-center bg-background text-gray-500 dark:text-gray-400 hidden sm:flex">
                  2020
                </span>
                <div className="w-5/12 hidden sm:block"></div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Connect */}
      <AnimateOnScroll animationClass='animate-fade-in'>
        <section className="pb-20 px-4 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto glass-panel dark:shadow-blue-light/10 dark:border dark:border-card-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Me</h2>
                <div className="w-16 h-1 bg-blue mx-auto"></div>
              </div>

              <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-300 mb-8">
                I love connecting with fellow developers and tech enthusiasts! Follow me on social media, catch my live streams on Twitch or Youtube, or reach out for collaboration opportunities.
              </p>

              <SocialLinks />
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
