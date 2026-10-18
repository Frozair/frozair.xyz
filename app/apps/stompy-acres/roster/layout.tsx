import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Stompy Acres — Locked 40-resident launch roster",
 description: "The approved December 1 launch cast: eight residents on each of five islands. Explore their art, habitat evidence and production status.",
 alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres/roster" },
 openGraph: { title: "Stompy Acres locked launch roster", description: "Five islands. Eight residents each. 40 approved launch species, with Iguanodon and Brachio in Fernlands.", url: "https://www.frozair.xyz/apps/stompy-acres/roster", images: ["/stompy-acres/forest.webp"] }
};
export default function RosterLayout({ children }: {children: ReactNode}) { return children; }
