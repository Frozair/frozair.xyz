import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frozair - Android and Kotlin Multiplatform Developer',
  description: 'Portfolio and app showcase of a passtionate Android and Kotlin Multiplatform Developer, streamer, and content creator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <AnimatedBackground numParticles={100} />
            <Navigation />

            {children}

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
