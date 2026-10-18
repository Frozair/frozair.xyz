import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Stompy Acres — Review the 40-species launch cast",
 description: "Explore original creature concepts for Forest, Giants, Swamp, Snow and Fernlands. Eight species per island are confirmed; review the proposed placements and build your draft roster.",
 alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres/roster" },
 openGraph: { title: "Stompy Acres launch casting board", description: "Five islands. Eight species each. Review the proposed placements.", url: "https://www.frozair.xyz/apps/stompy-acres/roster", images: ["/stompy-acres/forest.webp"] }
};
export default function RosterLayout({ children }: {children: ReactNode}) { return children; }
