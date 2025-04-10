import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frozair - Android and Kotlin Multiplatform Developer',
  description: 'Portfolio and app showcase of a passtionate Android and Kotlin Multiplatform Developer, streamer, and content creator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        <title>Frozair</title>
        <link rel="icon" type="image/x-icon" href="/happy.png" />
    </head>
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedBackground numParticles={100} />
          <div className="flex min-h-screen flex-col">

            <Navigation />

            {children}

            <Footer />
          </div>
        </ThemeProvider>
        <Script strategy="beforeInteractive" src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></Script>
        <Script>
          {`kofiWidgetOverlay.draw('frozair', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Tip Me',
          'floating-chat.donateButton.background-color': '#00b9fe',
          'floating-chat.donateButton.text-color': '#fff'
        });`}
        </Script>
      </body>
    </html>
  );
}
