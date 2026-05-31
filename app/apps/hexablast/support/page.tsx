import React from "react";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const PAGE_URL = "https://frozair.xyz/apps/hexablast/support";

export const metadata: Metadata = {
  title: "Support - Hexa Blast: Honey Puzzle - Made by Frozair",
  description: "Help and support for Hexa Blast: Honey Puzzle on iPhone and Android.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Support - Hexa Blast: Honey Puzzle",
    description: "Help and support for Hexa Blast: Honey Puzzle on iPhone and Android.",
    url: PAGE_URL,
    siteName: "Frozair",
    type: "website",
  },
};

export default function HexaBlastSupportPage() {
  return (
    <main className="flex-1">
      <section className="relative px-1 pb-24 pt-32 md:px-4">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-4xl glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="mb-6 text-left text-4xl font-bold md:text-5xl">Support</h1>

              <div className="prose">
                <p>Need help with Hexa Blast? You&apos;re in the right place.</p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">Common Issues</h2>
                <ul>
                  <li>
                    <strong>The game won&apos;t open or crashes.</strong> Update to the latest build,
                    restart your device, and try again. If the issue keeps happening, email support
                    with your device model, OS version, and what screen you reached before the
                    problem.
                  </li>
                  <li>
                    <strong>I lost my progress after reinstalling.</strong> Some progress is stored
                    locally on your device. If the App was removed and your platform did not back up
                    that data, the saved run state may be gone.
                  </li>
                  <li>
                    <strong>Hive Quest didn&apos;t refresh the way I expected.</strong> Daily content
                    is tied to your device date and the current game build. Make sure your device
                    time is correct and restart the App once before contacting support.
                  </li>
                  <li>
                    <strong>Ads or rewarded options are unavailable.</strong> Availability can vary
                    by build, device, region, consent choice, or connection status. Optional ad
                    features will not always appear for every player.
                  </li>
                  <li>
                    <strong>I have a purchase or restore problem.</strong> Include the platform,
                    the item involved, and any screenshots or order details you have so we can help
                    faster.
                  </li>
                </ul>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">Contact</h2>
                <p>
                  Email: <a href="mailto:hexablast@frozair.xyz">hexablast@frozair.xyz</a>
                </p>
                <p>We try to reply within a few days. Solo dev, but I do read the inbox.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
