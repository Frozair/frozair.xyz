import googlePlayBadgeImage from "@/public/google-play-badge.png";
import appleAppStoreSvg from "@/public/apple-app-store.svg";
import PhoneBebySvg from "@/public/phone-beby-optimized.svg";
import React from "react";
import { AnimateOnScrollProvider } from "@/components/AnimateOnScrollProvider";
import Image from "next/image";
import Button from "@/components/Button";

export default function BebyPage() {
  return (
    <AnimateOnScrollProvider targetClass='.animate-on-scroll'>
      <main className="flex-1">
        <section className="pt-32 pb-24 px-1 md:px-4 relative">
          <div className="container px-2 md:px-8 mx-auto">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12">
              <div className="flex flex-col">
                <h1
                    className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left animate-fade-in opacity-0"
                    style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                >
                  Beby - Baby Gender Prediction App
                </h1>
                <p
                    className="mb-16 text-xl text-gray-600 dark:text-gray-300 text-center md:text-left max-w-3xl mx-auto animate-fade-in opacity-0"
                    style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                >
                  The #1 baby gender prediction app for Android and iOS. Get a prediction for your baby that is right 50% of the time.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <a href="#">
                    <Image src={googlePlayBadgeImage} alt="Download Beby on the Google Play Store" height={75} />
                  </a>
                  <a href="#">
                    <Image src={appleAppStoreSvg} alt="Download Beby on the Apple App Store" height={75} />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center flex-grow">
                <Image alt="Beby with phone" src={PhoneBebySvg} width={300} className="min-w-[8rem]" />
              </div>
            </div>
          </div>
        </section>

      {/* Key Features */}
        <section className="py-20 px-4 bg-background-secondary relative">
          <div className="container px-2 md:px-8 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in opacity-0">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in opacity-0">

              {[
                {
                  title: 'Backed by Science',
                  content: 'Beby uses the Chinese lunar calendar and the concepts of yin and yang, the five elements, and the eight trigrams to predict your baby\'s gender.'
                },
                {
                  title: 'Multilingual',
                  content: 'Currently Beby supports Spanish and English, with several more language translations planned for the near future.'
                },
                {
                  title: 'Works on iOS and Android',
                  content: 'Built using Kotlin Multiplatform, Beby supports both iOS and Android platforms.'
                },
              ].map(info => (
                <div className="bg-card rounded-2xl shadow-lg dark:shadow-blue-light/10 dark:border dark:border-card-border overflow-hidden transition-transform duration-150 hover:scale-105">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-card-foreground">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Changelog */}
        <section className="py-20 px-4 relative">
          <div className="container px-2 md:px-8 mx-auto">
            <div className="max-w-3xl mx-auto animate-on-scroll opacity-0">
              <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">Changelog &amp; Updates</h2>
              <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8">Latest Version: v0.0.1</h3>
              <ul className="list-disc">
                <li>Spanish and English translations.</li>
                <li>Dark mode support</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8">Planned Features</h3>
              <ul className="list-disc">
                <li>Spanish and English translations.</li>
                <li>Dark mode support</li>
              </ul>
            </div>
          </div>
        </section>

      {/* Legal */}
      <section className="py-20 px-4 relative bg-background-secondary">
        <div className="container px-2 md:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal &amp; Privacy</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Your data is private and secure. Beby does not sell or share your data.</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
              <Button href="/apps/beby/privacy" className="w-full md:w-auto">Privacy Policy</Button>
              <Button href="/apps/terms-and-conditions" className="w-full md:w-auto">Terms &amp; Conditions</Button>
            </div>
          </div>
        </div>
      </section>

      </main>
    </AnimateOnScrollProvider>
  );
}
