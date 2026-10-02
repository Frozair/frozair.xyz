import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Stompy Acres - Made by Frozair",
  description:
    "Help and support for the mobile game Stompy Acres: Idle Dino Farm on iPhone and Android.",
};

export default function StompyAcresSupportPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">Support</h1>

              <div className="prose">
                <p>Need help with Stompy Acres? You&apos;re in the right place.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Common Issues</h2>
                <ul>
                  <li>
                    <strong>Stuck on the loading screen.</strong> The island loads from our servers,
                    so the game needs a network connection when it opens. Check your connection and
                    try again; if it still won&apos;t load, email support with your device model
                    and OS version.
                  </li>
                  <li>
                    <strong>My dinos didn&apos;t dig while I was away.</strong> Digging continues on
                    the server while the app is closed, up to what the storehouse can hold. When
                    the storehouse is full, dinos wait until you collect and sell.
                  </li>
                  <li>
                    <strong>Lost progress after reinstalling.</strong> Use “Save your island” in the phone app to link your save with Apple or Google. Sign in with the same account to recover a linked island. If you have not linked your save, keep the app installed and contact support before reinstalling.
                  </li>
                  <li>
                    <strong>I want my save deleted.</strong> Follow the <a href="/apps/stompy-acres/privacy#data-requests">account and data deletion request instructions</a>. Keep the app installed until we can identify your player account.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:stompyacres@frozair.xyz">stompyacres@frozair.xyz</a>
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
