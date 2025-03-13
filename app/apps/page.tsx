import React from "react";
import ProjectPreviewCard from '@/components/ProjectPreviewCard';
import exampleAppImage from '@/public/example-app.png';
import { AnimateOnScrollProvider } from "@/components/AnimateOnScrollProvider";
import SocialLinks from "@/components/SocialLinks";

export default function AppsPage() {
  return (
      <AnimateOnScrollProvider targetClass='.animate-on-scroll'>
        <main className="flex-1">
          <section className="pt-32 pb-24 px-4 relative">
            <div className="container mx-auto">
              <h1
                  className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in opacity-0"
                  style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                My Apps
              </h1>
              <p
                className="mb-16 text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto animate-fade-in opacity-0"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                A collection of Android and Kotlin Multiplatform applications I've developed.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in opacity-0"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              >
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
            </div>
          </section>

          {/* App Idea Callout */}
          <section className="mb-24 px-4 relative animate-on-scroll">
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

        </main>
      </AnimateOnScrollProvider>
  );
}
