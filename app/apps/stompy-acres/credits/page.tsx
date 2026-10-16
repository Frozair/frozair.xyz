import React from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Metadata } from "next";
import credits from "./credits.json";

export const metadata: Metadata = {
  title: "Sound & Music Credits - Stompy Acres - Made by Frozair",
  description:
    "Credits and licenses for the sounds and music in the mobile game Stompy Acres: Idle Dino Farm.",
};

type CreditEntry = {
  use: string;
  title: string;
  creator: string;
  creator_url?: string | null;
  license: string;
  license_url: string;
  source_url?: string | null;
  modified: boolean;
};

const entries: CreditEntry[] = credits.entries;

const licenseNames: Record<string, string> = {
  "CC0-1.0": "CC0 1.0",
  "CC-BY-4.0": "CC BY 4.0",
};

const isBundle = (entry: CreditEntry) => entry.title.startsWith("Sonniss");

const music = entries.filter((entry) => entry.use.startsWith("Music"));
const voices = entries.filter((entry) => entry.use.startsWith("dino voice"));
const effects = entries
  .filter((entry) => !music.includes(entry) && !voices.includes(entry))
  .sort((a, b) => Number(isBundle(a)) - Number(isBundle(b)));

const sections: { heading: string; items: CreditEntry[] }[] = [
  { heading: "Music", items: music },
  { heading: "Creature voices", items: voices },
  { heading: "Effects and ambience", items: effects },
];

function CreditLine({ entry }: { entry: CreditEntry }) {
  return (
    <li>
      {entry.source_url ? (
        <a href={entry.source_url} rel="noopener noreferrer">
          {entry.title}
        </a>
      ) : (
        entry.title
      )}{" "}
      by{" "}
      {entry.creator_url ? (
        <a href={entry.creator_url} rel="noopener noreferrer">
          {entry.creator}
        </a>
      ) : (
        entry.creator
      )}
      ,{" "}
      <a href={entry.license_url} rel="noopener noreferrer">
        {licenseNames[entry.license] ?? entry.license}
      </a>
      {entry.modified ? " (modified)" : ""}
    </li>
  );
}

export default function StompyAcresCreditsPage() {
  return (
    <main className="flex-1">
      <section className="pt-32 pb-24 px-1 md:px-4 relative">
        <div className="container px-2 md:px-8 mx-auto">
          <AnimateOnScroll animationClass="animate-fade-in">
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">Sound &amp; music credits</h1>

              <div className="prose">
                <p>
                  Stompy Acres uses recordings shared by other creators under Creative Commons
                  licenses. This page credits each one as the licenses ask. Most clips were
                  trimmed, pitched or levelled for the game, and entries marked &quot;modified&quot;
                  were changed in this way.
                </p>

                {sections.map((section) => (
                  <React.Fragment key={section.heading}>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">{section.heading}</h2>
                    <ul>
                      {section.items.map((entry) => (
                        <CreditLine key={`${entry.use}-${entry.title}-${entry.source_url ?? ""}`} entry={entry} />
                      ))}
                    </ul>
                  </React.Fragment>
                ))}

                <p className="mt-8">Last updated: October 16, 2026</p>
                <p>
                  <a href="/apps/stompy-acres">Back to Stompy Acres</a>
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
