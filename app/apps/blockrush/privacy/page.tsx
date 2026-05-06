import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BlockRush - Made by Frozair",
  description: "The privacy policy for BlockRush on iOS and Android.",
};

export default function BlockRushPrivacyPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">Privacy Policy</h1>

              <div className="prose">
                <p>Last updated: 02/20/2026</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                  This Privacy Policy explains how BlockRush (&quot;the App&quot;) handles information
                  when you use the app on iOS and Android.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p>We may process the following categories of data:</p>
                <ul>
                  <li>Gameplay and app usage events (for game balancing and quality improvement).</li>
                  <li>Crash and diagnostic information (to fix errors and improve stability).</li>
                  <li>
                    Leaderboard/account data if you choose to use online features (such as nickname,
                    score, and related profile metadata).
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Information</h2>
                <p>We use information to:</p>
                <ul>
                  <li>Operate core gameplay features.</li>
                  <li>Improve game balance, reliability, and performance.</li>
                  <li>Support optional account and leaderboard functionality.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ads and Third-Party Services</h2>
                <p>
                  BlockRush may use third-party services for ads, analytics, and backend features.
                  Those services may collect device or usage data according to their own privacy
                  policies.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
                <p>
                  We do not sell your personal information. We only share data with service
                  providers as needed to run and improve the App.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
                <p>
                  We retain data only for as long as necessary to provide the App, support online
                  features, comply with legal obligations, and resolve disputes.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children&apos;s Privacy</h2>
                <p>
                  BlockRush is not directed to children under 13, and we do not knowingly collect
                  personal information from children under 13.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights to access, correct, delete, or
                  limit processing of your personal information.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Updates will be posted on this page
                  with a revised &quot;Last updated&quot; date.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
                <p>
                  If you have questions about this policy, contact:{" "}
                  <a href="mailto:blockrush@frozair.xyz">blockrush@frozair.xyz</a>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
