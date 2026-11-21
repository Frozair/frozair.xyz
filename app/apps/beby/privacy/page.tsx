import React from "react";
import type { Metadata } from "next";

const title = "Beby Privacy Policy – Frozair";
const description = "How Beby stores chart entries and birthday preferences locally, and how to delete them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.frozair.xyz/apps/beby/privacy" },
  openGraph: { title, description, url: "https://www.frozair.xyz/apps/beby/privacy" },
  twitter: { card: "summary", title, description },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">Beby Privacy Policy</h1>
            <div className="prose">
              <p>Last updated: <time dateTime="2026-11-21">November 21, 2026</time></p>
              <p>This policy covers the Beby app published by Frozair, including Android package <code>xyz.frozair.beby</code>. Beby is a folklore entertainment app. Its chart labels cannot predict or influence a baby&apos;s sex or guide conception, fertility, pregnancy or medical decisions.</p>

              <h2>Information used and stored by the app</h2>
              <p>Beby uses the birthday, age, reference month or date, and parent birth months that you enter for the selected chart. Saved history can contain these inputs, the chart method and version, its label and its reference date. Earlier saved guesses and plans remain on your device.</p>
              <p>Individual guesses and folklore plans save automatically. Compare saves available guesses and remembers the birthday and age only when you choose Save to History. Month exploration does not save new history or change your saved birthday and age. You can also choose to save a birthday for reuse when prompted.</p>

              <h2>Why the app uses this information</h2>
              <p>Beby uses these details to display folklore chart labels, reopen your saved entries and reuse optional birthday preferences. The app does not use them for advertising, profiling or medical advice.</p>

              <h2>Local storage, transfers and platform services</h2>
              <p>Beby stores its chart history and birthday preferences locally. It does not upload these chart inputs or saved entries to a Frozair server. The app has no advertising or third-party analytics SDKs and does not require a Beby account.</p>
              <p>Your operating system may back up or transfer app data according to its settings. These platform copies are outside the app&apos;s local Reset Data control. Google Play and other platform services separately process installation, licensing, payments, app ratings or diagnostics under their own policies and your platform settings. This is distinct from Beby sending your chart history to us.</p>

              <h2>Retention and deletion</h2>
              <p>Saved history and birthday preferences remain locally until you remove them. In Beby, use Settings &gt; Reset Data to delete saved history and clear the remembered birthday and age. On Android you can also clear the app&apos;s storage in device settings. Deleting local data does not necessarily delete an existing operating-system backup; manage those copies in the applicable platform settings. Beby has no cloud chart-history account to delete or synchronize.</p>

              <h2>Support and privacy questions</h2>
              <p>If you email <a href="mailto:support@frozair.xyz">support@frozair.xyz</a>, we receive the address and information you choose to include so we can respond. Do not send actual birthdays or other sensitive chart inputs unless necessary for your request.</p>

              <h2>Changes</h2>
              <p>We may update this policy when Beby&apos;s behavior changes. This page shows the date of its latest revision. Contact <a href="mailto:support@frozair.xyz">support@frozair.xyz</a> with questions about this policy or your locally stored data.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
