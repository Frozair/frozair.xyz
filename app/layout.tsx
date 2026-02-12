import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: 'Frozair - Indie Dev & Content Creator',
  description: 'Mobile app developer, game creator, and Twitch streamer building cool stuff and sharing the journey.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Frozair</title>
        <link rel="icon" type="image/x-icon" href="/happy.png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col relative">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-primary)] opacity-10 blur-[100px] rounded-full animate-pulse-glow"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-secondary)] opacity-10 blur-[100px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <Navigation />

            <main className="relative z-10">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
        <Script strategy="beforeInteractive" src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></Script>
        <Script id="kofi-widget">
          {`kofiWidgetOverlay.draw('frozair', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Tip Me',
            'floating-chat.donateButton.background-color': '#ff6b35',
            'floating-chat.donateButton.text-color': '#fff'
          });`}
        </Script>
      </body>
    </html>
  );
}
