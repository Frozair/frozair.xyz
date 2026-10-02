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
                <p>Last updated: October 1, 2026</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                  This Privacy Policy explains how Stompy Acres: Idle Dino Farm (&quot;the App&quot;)
                  handles information when you play on iPhone or Android. The short version: the
                  App needs no sign-up to play, shows no ads, and does not track you across other
                  apps or websites. If you choose to sign in with Apple or Google to keep your
                  island, we store only what is needed to recognise that account again. Builds with optional gameplay
                  metrics let you choose whether to share those metrics in Settings.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <ul>
                  <li>
                    <strong>A pseudonymous player ID.</strong> When the App first opens it creates a
                    random account identifier so your island, dinosaurs and Treasure can be saved
                    on our servers and continue while you are away. Until you choose to sign in,
                    it is not linked to your name, email, phone number or any other account.
                  </li>
                  <li>
                    <strong>An optional sign-in.</strong> If you tap &quot;Save your island&quot; and
                    sign in with Apple or Google, we store the identifier that provider gives us
                    for your account and the email address it shares, and may receive a profile name
                    from that provider (Apple lets you hide your real
                    address behind a relay). This is used only to recognise your account and restore
                    your island on another device; it is never shown in the game, used for
                    marketing, or sent to our analytics service. Signing in is optional and the App plays the same without it.
                  </li>
                  <li>
                    <strong>Game progress.</strong> The state of your island (dinosaurs, eggs,
                    Treasure, cash, land) is stored against that player ID.
                  </li>
                  <li>
                    <strong>Crash and diagnostic information.</strong> If the App crashes or hits
                    an error, a report with the error, the App version, device model and operating
                    system version is sent so we can fix it. We do not intentionally include names, email addresses or sign-in tokens in these reports.
                  </li>
                  <li>
                    <strong>Optional gameplay metrics.</strong> In builds that support metrics,
                    sharing is off by default. If you turn on &quot;Share gameplay metrics&quot;
                    in Settings, we send your player ID, app version and platform, foreground
                    session duration, viewed game screens, and confirmed actions such as egg
                    purchases, hatches, Treasure collections, sales and island upgrades. Metrics
                    also include progress and balance information needed to compare game versions.
                    The player ID can connect activity across sessions and to a saved account;
                    these records are pseudonymous, not fully anonymous.
                  </li>
                </ul>
                <p>We do not request contacts, photos, location or payment details. We receive an email address or provider profile name only if you choose to sign in.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Information</h2>
                <ul>
                  <li>To save and restore your game and keep it running while the App is closed.</li>
                  <li>To find and fix crashes and errors.</li>
                  <li>If you enable metrics, to understand gameplay and improve progression and game balance.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
                <p>
                  Game saves are stored with Supabase (database hosting) and crash reports are
                  processed by Sentry (error monitoring). Both act as service providers for the
                  App. Optional gameplay analytics are processed by PostHog in its US Cloud
                  region. We do not send PostHog your email, Apple/Google sign-in details,
                  authentication tokens, advertising identifiers, precise location, screen
                  recordings or messages. We do not use analytics for advertising or tracking
                  across other companies&apos; apps or websites. Service providers may process
                  connection information such as IP addresses to deliver and secure their
                  services; IP enrichment and storage in our PostHog events are disabled.
                </p>
                <p>
                  Service privacy policies: <a href="https://supabase.com/privacy">Supabase</a>,{" "}
                  <a href="https://sentry.io/privacy/">Sentry</a>, and{" "}
                  <a href="https://posthog.com/privacy">PostHog</a>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
                <p>
                  We do not sell information and we do not share it with anyone other than the
                  service providers above, as needed to run the App.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
                <p>
                  Game saves, and any sign-in details, are kept for as long as the account exists.
                  Crash reports are kept for 90 days. Delivered analytics queue records on our
                  server are removed after seven days. PostHog&apos;s current free plan provides a
                  one-year event query window; this is not a promise that records are automatically
                  deleted after one year. Analytics records may remain stored until removed using
                  PostHog&apos;s deletion tools. Contact us to request deletion of records associated
                  with your player ID.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children&apos;s Privacy</h2>
                <p>
                  There is no chat or advertising. Playing without sign-in still creates a
                  pseudonymous player ID and a server game save. Optional gameplay metrics are
                  off by default, and a parent or guardian should manage this setting for a child. The
                  optional Apple and Google sign-in is intended for players aged 13 and over; if you
                  believe a child under 13 has signed in or otherwise provided personal information
                  to us, contact us and we will delete it.
                </p>

                <h2 id="data-requests" className="text-2xl font-semibold mt-8 mb-4">8. Account and Data Deletion Requests</h2>
                <p>
                  Depending on your location, you may have rights to access, correct, delete or
                  limit processing of information about you. Turn off &quot;Share gameplay metrics&quot;
                  in Settings to stop new optional metrics. The App discards its queued metrics
                  immediately; an offline change reaches our server after reconnecting. Turning
                  the setting off does not delete metrics already sent or the game save needed
                  to run your island. Deleting the App does not delete server records.
                </p>
                <p>
                  To request account deletion, access to your data, or deletion of optional metrics, email <a href="mailto:stompyacres@frozair.xyz?subject=Stompy%20Acres%20data%20request">stompyacres@frozair.xyz</a> and say which request you want. Account deletion removes your sign-in association, saved island, dinos, currency and related gameplay records, along with optional metrics associated with your player ID. You can request deletion of optional metrics while keeping your island. Keep the
                  App installed until we can help identify your player account, especially if
                  you have not linked Apple or Google. We will handle deletion requests within
                  30 days, subject to any records we must retain for legal or security reasons.
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
