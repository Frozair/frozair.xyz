import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Stompy Acres — Review the revised 40-resident launch cast",
 description: "Review the revised 40-resident proposal: Iguanodon in greener Fernlands and four new Snow candidates. Eight per island, original concepts, sourced habitat notes and a browser-local draft.",
 alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres/roster" },
 openGraph: { title: "Stompy Acres launch casting board", description: "Five islands. Eight residents each. A greener Iguanodon home and a revised Snow cast for review.", url: "https://www.frozair.xyz/apps/stompy-acres/roster", images: ["/stompy-acres/forest.webp"] }
};
export default function RosterLayout({ children }: {children: ReactNode}) { return children; }
