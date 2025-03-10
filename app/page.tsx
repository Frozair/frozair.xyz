'use client';

import React from 'react';
import { Twitch, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import exampleAppImage from '@/public/example-app.png';
import frozairImage from '@/public/frozair.png';
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import ProjectPreviewCard from "@/components/ProjectPreviewCard";
import TwitchEmbed from "@/components/TwitchEmbed";

export default function Home() {
  useAnimateOnScroll('.animate-on-scroll');

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium animate-fade-in opacity-0">
            Mobile App Developer, Content Creator, Twitch Streamer, &amp; Music Engineer
          </div>

          <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Building. <span className="purple-gradient-text">Streaming.</span> <span className="blue-gradient-text">Creating</span>
          </h1>

          <p
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            I'm a mobile app developer with an expertise in Kotlin Multiplatform. I have a passion for building apps, sharing knowledge, and bringing ideas to life together with the community.
          </p>

          <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <Link
                href="/projects"
                className="px-8 py-3 bg-blue text-white font-medium rounded-lg shadow-md hover:bg-blue-dark transition-colors transition-transform duration-150 transform hover:-translate-y-1"
            >
              View My Projects
            </Link>
            <Link
                href="/about"
                className="px-8 py-3 bg-white text-blue border border-blue rounded-lg hover:bg-blue-50 transition-colors transition-transform duration-150 transform hover:-translate-y-1"
            >
              About Me
            </Link>
          </div>

          <div
              className="mt-12"
          >
            <p
              className="text-gray-500 mb-4 animate-fade-in opacity-0"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >Connect with me on</p>
            <SocialLinks className="justify-center" />
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my latest Android and Kotlin Multiplatform applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll opacity-0">

            <ProjectPreviewCard
              href="/projects"
              imgSrc={exampleAppImage}
              title="FitTrack Pro"
              description="Fitness tracking app with advanced metrics and personalized coaching"
            />

            <ProjectPreviewCard
                href="/projects"
                imgSrc={exampleAppImage}
                title="StreamBuddy"
                description="Twitch companion app for streamers to manage chat and stream analytics"
            />

            <ProjectPreviewCard
                href="/projects"
                imgSrc={exampleAppImage}
                title="CodeNotes"
                description="Developer note-taking app with syntax highlighting and cloud sync"
            />

          </div>
          <div className="text-center mt-12">
            <Link
                href="/projects"
                className="inline-block px-8 py-3 bg-blue text-white font-medium rounded-lg shadow hover:bg-blue-dark transition-colors hover:shadow-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>


      {/* Stream Video */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Me Build</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Catch me on Twitch where I build Kotlin Multiplatform Apps, along with many shenanigans caused by my viewers</p>
          </div>
          <div className="animate-on-scroll opacity-0">
            <TwitchEmbed channel="fr0zair" />
          </div>
          <div className="flex items-center justify-center gap-4 mt-12">
            <Link
                href="/projects"
                className="flex gap-2 items-center justify-center px-8 py-3 bg-blue text-white font-medium rounded-lg shadow hover:bg-blue-dark transition-colors hover:shadow-lg"
            >
              <Twitch size={20} />
              Twitch
            </Link>
            <Link
                href="/projects"
                className="flex gap-2 items-center justify-center px-8 py-3 bg-blue text-white font-medium rounded-lg shadow hover:bg-blue-dark transition-colors hover:shadow-lg"
            >
              <Youtube size={20} />
              YouTube
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 relative animate-on-scroll">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-16 h-1 bg-blue mx-auto"></div>
            </div>

            <div className="flex gap-12">
              <Image src={frozairImage} alt="Frozair after taking a pickle shot" height={200} className="rounded-2xl" />
              <p className="text-lg text-gray-700 mb-6">
                I'm an experienced Android developer specializing in Kotlin Multiplatform development, creating high-quality mobile applications that deliver exceptional user experiences. When I'm not coding, I stream on Twitch, sharing my development process and connecting with the developer community.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                  href="/about"
                  className="inline-block px-8 py-3 bg-blue text-white font-medium rounded-lg shadow hover:bg-blue-dark transition-colors hover:shadow-lg"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
