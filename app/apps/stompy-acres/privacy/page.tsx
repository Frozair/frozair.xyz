import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Stompy Acres - Made by Frozair",
  description:
    "The privacy policy for the mobile game Stompy Acres: Idle Dino Farm on iPhone and Android.",
};

export default function StompyAcresPrivacyPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">Privacy Policy</h1>

              <div className="prose">
                <p>Last updated: 09/27/2026</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                  This Privacy Policy explains how Stompy Acres: Idle Dino Farm (&quot;the App&quot;)
                  handles information when you play on iPhone or Android. The short version: the
                  App has no sign-up, asks for no name or email, shows no ads, and does not track
                  you across other apps or websites.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <ul>
                  <li>
                    <strong>An anonymous player ID.</strong> When the App first opens it creates a
                    random account identifier so your island, dinosaurs and Treasure can be saved
                    on our servers and continue while you are away. It is not linked to your name,
                    email, phone number or any other account.
                  </li>
                  <li>
                    <strong>Game progress.</strong> The state of your island (dinosaurs, eggs,
                    Treasure, cash, land) is stored against that anonymous ID.
                  </li>
                  <li>
                    <strong>Crash and diagnostic information.</strong> If the App crashes or hits
                    an error, a report with the error, the App version, device model and operating
                    system version is sent so we can fix it. Reports contain no personal details.
                  </li>
                </ul>
                <p>We do not collect names, email addresses, contacts, photos, location or payment details.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Information</h2>
                <ul>
                  <li>To save and restore your game and keep it running while the App is closed.</li>
                  <li>To find and fix crashes and errors.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
                <p>
                  Game saves are stored with Supabase (database hosting) and crash reports are
                  processed by Sentry (error monitoring). Both act as service providers for the
                  App and handle data according to their own privacy policies. The App contains no
                  advertising and no analytics or tracking SDKs.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
                <p>
                  We do not sell information and we do not share it with anyone other than the
                  service providers above, as needed to run the App.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
                <p>
                  Game saves are kept for as long as the anonymous account exists. Crash reports are
                  kept for 90 days.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children&apos;s Privacy</h2>
                <p>
                  The App is suitable for all ages and is built so that it does not need personal
                  information from anyone, including children under 13. There is no chat, no
                  sign-up and no advertising. If you believe a child has provided personal
                  information to us by other means, contact us and we will delete it.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights to access, correct, delete or
                  limit processing of information about you. Because the App only holds an
                  anonymous ID and a game save, deleting the App from your device ends our ability
                  to connect that save to you. To have the save itself removed from our servers,
                  email the address below and we will delete it within 30 days.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Updates will be posted on this page
                  with a revised &quot;Last updated&quot; date.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
                <p>
                  If you have questions about this policy, contact:{" "}
                  <a href="mailto:stompyacres@frozair.xyz">stompyacres@frozair.xyz</a>.
                </p>
                <p>
                  Player support is also available at{" "}
                  <a href="/apps/stompy-acres/support">/apps/stompy-acres/support</a>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
