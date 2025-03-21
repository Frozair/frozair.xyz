import googlePlayBadgeImage from "@/public/google-play-badge.png";
import appleAppStoreSvg from "@/public/apple-app-store.svg";
import PhoneBebySvg from "@/public/phone-beby-optimized.svg";
import React from "react";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { AnimateWithDelay } from "@/components/AnimateWithDelay";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Beby - The #1 Baby Gender Predictor App - Made by Frozair',
  description: 'Beby is the #1 Baby Gender Predictor App, available for both iOS and Android. Create with Kotlin Multiplatform.',
};

export default function BebyPage() {
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
                  Beby - Baby Gender Prediction App
                </h1>
              </AnimateWithDelay>

              <AnimateWithDelay
                  animationClass="animate-fade-in"
                  animationDelay="0.4s"
                  animationFillMode="forwards"
              >
                <p className="mb-16 text-xl text-gray-600 dark:text-gray-300 text-center md:text-left max-w-3xl mx-auto">
                  The #1 baby gender prediction app for Android and iOS. Get a prediction for your baby that is right <b>50%</b> of the time.
                </p>
              </AnimateWithDelay>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <AnimateWithDelay
                    animationClass="animate-fade-in"
                    animationDelay="0.6s"
                    animationFillMode="forwards"
                >
                  <a href="https://play.google.com/store/apps/details?id=xyz.frozair.beby">
                    <Image src={googlePlayBadgeImage} alt="Download Beby on the Google Play Store" height={75} />
                  </a>
                </AnimateWithDelay>

                <AnimateWithDelay
                    animationClass="animate-fade-in"
                    animationDelay="0.8s"
                    animationFillMode="forwards"
                >
                  <a href="https://apps.apple.com/app/beby-predict-and-plan/id6743187318">
                    <Image src={appleAppStoreSvg} alt="Download Beby on the Apple App Store" height={75} />
                  </a>
                </AnimateWithDelay>
              </div>
            </div>

            <AnimateWithDelay
                animationClass="animate-fade-in-right"
                animationDelay="0.8s"
                animationFillMode="forwards"
            >
              <div className="flex items-center justify-center flex-grow">
                <Image alt="Beby with phone" src={PhoneBebySvg} width={300} className="min-w-[8rem]" />
              </div>
            </AnimateWithDelay>
          </div>
        </div>
      </section>

    {/* Key Features */}
      <section className="py-20 px-4 bg-background-secondary relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Backed by Ancient Secrets',
                  content: 'Beby uses the Chinese and Mayan calendars to help you predict or plan your baby’s gender—based on age, month, and ancient wisdom.'
                },
                {
                  title: 'Works on iOS and Android',
                  content: 'Built using Kotlin Multiplatform, Beby supports both iOS and Android platforms.'
                },
                {
                  title: 'Multilingual',
                  content: 'Currently Beby supports Spanish and English, with several more language translations planned for the near future.'
                }
              ].map(info => (
                <div key={info.title} className="bg-card rounded-2xl shadow-lg dark:shadow-blue-light/10 dark:border dark:border-card-border overflow-hidden transition-transform duration-150">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-card-foreground">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass='animate-fade-in'>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">Changelog &amp; Updates</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8">Latest Version: v1.0.0</h3>
              <ul className="list-disc">
                <li>Lunar Calendar</li>
                <li>Mayan Calendar</li>
                <li>Spanish and English translations.</li>
                <li>Dark mode support</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8">Planned Features</h3>
              <ul className="list-disc">
                <li>Spanish and English translations.</li>
                <li>Dark mode support</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Legal */}
      <section className="py-20 px-4 relative bg-background-secondary">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass='animate-fade-in'>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal &amp; Privacy</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Your data is private and secure. Beby does not sell or share your data.</p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
                <Link href="/apps/beby/privacy" className="btn btn-primary w-full md:w-auto">Privacy Policy</Link>
                <Link href="/apps/terms-and-conditions" className="btn btn-primary w-full md:w-auto">Terms &amp; Conditions</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
