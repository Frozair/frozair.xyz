import React from 'react';
import { Twitch, Youtube } from 'lucide-react';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import bebyAppImage from '@/public/beby_app.png';
import frozairImage from '@/public/frozair.png';
import ProjectPreviewCard from "@/components/ProjectPreviewCard";
import TwitchEmbed from "@/components/TwitchEmbed";
import AnimatedBackground from "@/components/AnimatedBackground";
import Button from "@/components/Button";
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { AnimateWithDelay } from "@/components/AnimateWithDelay";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center">
          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.0s" animationFillMode="forwards">
            <div className="inline-block mb-4 py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-sm font-medium">
              Mobile App Developer, Content Creator, Twitch Streamer, &amp; Music Engineer
            </div>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.2s" animationFillMode="forwards">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building. <span className="purple-gradient-text">Streaming.</span> <span className="blue-gradient-text">Creating</span>
            </h1>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.4s" animationFillMode="forwards">
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              I'm a mobile app developer with an expertise in Kotlin Multiplatform. I have a passion for building apps, sharing knowledge, and bringing ideas to life together with the community.
            </p>
          </AnimateWithDelay>

          <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.6s" animationFillMode="forwards">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/apps">View My Apps</Button>
              <Button href="/about" variant="outline">About Me</Button>
            </div>
          </AnimateWithDelay>

          <div className="mt-12">
            <AnimateWithDelay animationClass="animate-fade-in" animationDelay="0.8s" animationFillMode="forwards">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Connect with me on
              </p>
            </AnimateWithDelay>
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </section>

      {/* Featured Apps Preview */}
      <section className="py-20 px-4 bg-background-secondary relative">
        <div className="container mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Apps</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A showcase of my latest Android and Kotlin Multiplatform applications
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectPreviewCard
                href="/apps/beby"
                imgSrc={bebyAppImage}
                title="Beby: Baby Gender Predictor"
                description="Cross-platform baby gender predictor app using the Chinese lunar calendar. Built with Kotlin Multiplatform."
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-12">
              <Button href="/apps">View All Apps</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* Stream Video */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Me Build</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Catch me on Twitch where I build Kotlin Multiplatform Apps, along with many shenanigans caused by my viewers</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animationClass='animate-fade-in'>
            <TwitchEmbed channel="fr0zair" />
          </AnimateOnScroll>

          <AnimateOnScroll animationClass='animate-fade-in'>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-12">
              <Button
                as="a"
                href="https://www.twitch.tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitch size={20} className="shrink-0" />
                Watch on Twitch
              </Button>
              <Button
                as="a"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} className="shrink-0" />
                Watch on Youtube
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Preview */}
      <AnimateOnScroll animationClass='animate-fade-in'>
        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto glass-panel dark:shadow-blue-light/10 dark:border dark:border-card-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="w-16 h-1 bg-blue mx-auto"></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12">
                <Image src={frozairImage} alt="Frozair after taking a pickle shot" height={200} className="rounded-full border-8 border-white dark:border-gray-300 shadow-2xl" />
                <p className="text-lg text-center sm:text-left text-gray-600 dark:text-gray-300 mb-6">
                  I'm an experienced Android developer specializing in Kotlin Multiplatform development, creating high-quality mobile applications that deliver exceptional user experiences. When I'm not coding, I stream on Twitch, sharing my development process and connecting with the developer community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-8">
                <Button href="/about">Learn More About Me</Button>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </main>
  );
}
