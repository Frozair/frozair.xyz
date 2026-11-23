import React from "react";
import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const PAGE_URL = "https://frozair.xyz/apps/wobblings/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy - Wobblings for Hire - Made by Frozair",
  description: "The privacy policy for the mobile game Wobblings for Hire on Android.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Privacy Policy - Wobblings for Hire",
    description: "The privacy policy for the mobile game Wobblings for Hire on Android.",
    url: PAGE_URL,
    siteName: "Frozair",
    type: "website",
  },
};

export default function WobblingsPrivacyPage() {
  return (
    <main className="flex-1">
      <section className="relative px-1 pb-24 pt-32 md:px-4">
        <div className="container mx-auto px-2 md:px-8">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="mx-auto max-w-4xl glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="mb-6 text-left text-4xl font-bold md:text-5xl">Privacy Policy</h1>

              <div className="prose">
                <p>Last updated: 11/23/2026</p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">1. Introduction</h2>
                <p>
                  This Privacy Policy explains how Wobblings for Hire (&quot;the App&quot;) handles
                  information when you play the mobile game on Android. The App is made by Frozair.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">2. Information We Collect</h2>
                <p>
                  The App does not ask you to create an account. It saves your game progress only on
                  your device. Some information is collected when you play:
                </p>
                <ul>
                  <li>
                    <strong>Ads (Google AdMob).</strong> The App offers optional rewarded ads: you
                    choose to watch one in return for an in-game reward. To show and measure ads,
                    Google&apos;s Mobile Ads SDK collects your device&apos;s IP address (from which an
                    approximate location can be inferred), your device&apos;s advertising ID and other
                    device identifiers, how you interact with ads, and diagnostic information about
                    the SDK. In the European Economic Area, the United Kingdom and Switzerland, the
                    App asks for your consent before personalised ads are shown, using Google&apos;s
                    consent form. You can change your choice at any time from the App&apos;s settings
                    (&quot;Privacy options&quot;).
                  </li>
                  <li>
                    <strong>Crash reports (Sentry).</strong> When the App crashes or hits an error, it
                    sends a crash report to Sentry so we can fix it. A report contains technical
                    details: the error and where in the code it happened, the App version, your
                    device model, operating system version, and a random installation identifier. It
                    does not contain your name, contacts or files. The App does not send your IP
                    address with crash reports, and our Sentry project is set not to store IP
                    addresses or any location derived from them.
                  </li>
                </ul>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">3. How We Use Information</h2>
                <p>
                  We use information to show optional rewarded ads and pay for the game&apos;s
                  development, and to find and fix crashes.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">4. Ads and Third-Party Services</h2>
                <p>
                  The App uses Google AdMob (Google LLC) for ads and Sentry (Functional Software,
                  Inc.) for crash reports. These services process data under their own privacy
                  policies:
                </p>
                <ul>
                  <li>
                    Google:{" "}
                    <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>{" "}
                    and{" "}
                    <a href="https://policies.google.com/technologies/partner-sites">
                      https://policies.google.com/technologies/partner-sites
                    </a>
                  </li>
                  <li>
                    Sentry: <a href="https://sentry.io/privacy/">https://sentry.io/privacy/</a>
                  </li>
                </ul>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">5. Data Sharing</h2>
                <p>
                  We do not sell your personal information. Data collected by the ads SDK is shared
                  with Google and its advertising partners to serve and measure ads, as described
                  above. Crash reports are processed by Sentry on our behalf and are not used for
                  advertising.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">6. Data Retention</h2>
                <p>
                  Your game progress stays on your device until you uninstall the App or clear its
                  data. We hold no copy. Crash reports are kept in Sentry for 30 days, then deleted.
                  Data collected by the ads SDK is kept by Google under its own policies.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">7. Children&apos;s Privacy</h2>
                <p>
                  Wobblings for Hire is not directed to children under 13, and we do not knowingly
                  collect personal information from children under 13.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">8. Your Rights</h2>
                <p>
                  Depending on where you live, you may have rights to access, correct, delete or
                  limit the processing of your personal information. You can:
                </p>
                <ul>
                  <li>change your ad consent at any time from the App&apos;s settings (&quot;Privacy options&quot;);</li>
                  <li>reset or delete your advertising ID in Android Settings → Privacy → Ads;</li>
                  <li>delete your saved progress by uninstalling the App or clearing its data;</li>
                  <li>
                    ask us to delete crash reports linked to your installation by writing to the
                    address below; we will remove them within 30 days.
                  </li>
                </ul>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">9. Changes to This Policy</h2>
                <p>
                  We may update this policy, for example when a new version of the App adds a
                  service listed here. Updates are posted on this page with a revised &quot;Last
                  updated&quot; date, before the version that needs them is released.
                </p>

                <h2 className="mb-4 mt-8 text-2xl font-semibold">10. Contact</h2>
                <p>
                  If you have questions about this policy, contact:{" "}
                  <a href="mailto:apps@frozair.xyz">apps@frozair.xyz</a>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
