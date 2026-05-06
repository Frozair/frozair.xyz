import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - BlockRush - Made by Frozair",
  description: "Help and support for BlockRush on iOS and Android.",
};

export default function BlockRushSupportPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">Support</h1>

              <div className="prose">
                <p>Need help with BlockRush? You&apos;re in the right place.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Common Issues</h2>
                <ul>
                  <li>
                    <strong>Game won&apos;t open / crashes on launch.</strong> Restart your device,
                    then update to the latest version from the App Store or Google Play. If the issue
                    persists, email support with your device model and OS version.
                  </li>
                  <li>
                    <strong>Leaderboard score didn&apos;t submit.</strong> Scores require a network
                    connection at the moment the run ends. Anonymous scores are merged into your
                    account when you sign in later.
                  </li>
                  <li>
                    <strong>Lost progress after reinstall.</strong> Anonymous device progress is
                    local to your install. To carry your account across reinstalls, sign in.
                  </li>
                  <li>
                    <strong>I want to delete my account.</strong> From the main menu tap the
                    account icon (top right), then <strong>Delete Account</strong> and confirm with
                    your password — your account and associated leaderboard data are removed
                    immediately. If you can&apos;t sign in to do this, email support and we&apos;ll
                    remove your data within 30 days.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:blockrush@frozair.xyz">blockrush@frozair.xyz</a>
                </p>
                <p>We try to reply within a few days. Solo dev — please be patient.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
