import React from "react";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const PAGE_URL = "https://frozair.xyz/apps/hexablast/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy - Hexa Blast: Honey Puzzle - Made by Frozair",
  description:
    "The privacy policy for Hexa Blast: Honey Puzzle on iPhone and Android.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Privacy Policy - Hexa Blast: Honey Puzzle",
    description:
      "The privacy policy for Hexa Blast: Honey Puzzle on iPhone and Android.",
    url: PAGE_URL,
    siteName: "Frozair",
    type: "website",
  },
};

export default function HexaBlastPrivacyPage() {
  return (
    <main className="flex-1">
      <section className="relative px-1 pb-24 pt-32 md:px-4">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-4xl glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="mb-6 text-left text-4xl font-bold md:text-5xl">Privacy Policy</h1>

              <div className="prose">
                <p>Last updated: 05/30/2026</p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">1. Introduction</h2>
                <p>
                  This Privacy Policy explains how Hexa Blast: Honey Puzzle
                  (&quot;the App&quot;) handles information when you use the mobile game on iPhone or
                  Android.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">2. Information We Collect</h2>
                <p>Depending on the features used in your build of the App, we may process:</p>
                <ul>
                  <li>Gameplay, score, and usage events used to improve balance and quality.</li>
                  <li>Crash and diagnostic information used to fix bugs and improve stability.</li>
                  <li>
                    Local save data stored on your device, such as settings, best score, and game
                    progress.
                  </li>
                  <li>
                    Purchase, ad, or consent-related signals if optional store, ad, or monetization
                    features are enabled in your version of the App.
                  </li>
                  <li>
                    Information you provide if you email support directly, such as your email
                    address and the details in your message.
                  </li>
                </ul>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">3. How We Use Information</h2>
                <p>We use information to:</p>
                <ul>
                  <li>Operate the App and maintain core puzzle gameplay features.</li>
                  <li>Save local progress and settings.</li>
                  <li>Improve performance, reliability, and game feel over time.</li>
                  <li>Support optional ads, purchases, consent flows, or store-related features.</li>
                  <li>Respond to support requests and player feedback.</li>
                </ul>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">4. Local Data and Offline Play</h2>
                <p>
                  Hexa Blast is designed to be playable without an account. Some progress and
                  settings may be stored locally on your device so the App can remember your best
                  score, preferences, or mode progress. If you uninstall the App, locally stored
                  data may be removed unless your device or store platform backs it up.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Third-Party Services</h2>
                <p>
                  The App may use third-party services for app distribution, purchases, diagnostics,
                  analytics, ads, or consent management. Those providers may process device or usage
                  data according to their own privacy policies. Examples can include Apple, Google,
                  crash-reporting tools, analytics tools, or ad providers used in supported builds.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Data Sharing</h2>
                <p>
                  We do not sell your personal information. We share information only with service
                  providers when needed to operate, support, improve, secure, or monetize the App.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">7. Data Retention</h2>
                <p>
                  We retain data only as long as reasonably necessary for the purposes described in
                  this policy, including product improvement, support, legal compliance, or dispute
                  resolution. Support emails may be retained for follow-up and record-keeping.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">8. Children&apos;s Privacy</h2>
                <p>
                  Hexa Blast is not directed to children under 13, and we do not knowingly collect
                  personal information from children under 13.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">9. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights to access, correct, delete, or
                  limit the processing of personal information associated with you.
                </p>
                <p>
                  For local device data, deleting the App may remove that information from your
                  device. For support or other personal information we may hold directly, email us
                  using the address below and we will review the request.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">10. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Changes will be posted on this page
                  with a revised &quot;Last updated&quot; date.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">11. Contact</h2>
                <p>
                  If you have questions about this policy, contact{" "}
                  <a href="mailto:hexablast@frozair.xyz">hexablast@frozair.xyz</a>.
                </p>
                <p>
                  Player support is also available at{" "}
                  <a href="/apps/hexablast/support">/apps/hexablast/support</a>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
