import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
 title: "Stompy Acres — Choose the 28-species launch cast",
 description: "Explore original creature concepts for Forest, Giants, Swamp, Snow and Fernlands. Compare 28 recommended launch picks with 12 alternates and build your draft roster.",
 alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres/roster" },
 openGraph: { title: "Stompy Acres launch casting board", description: "Five islands. 28 launch spots. You make the call.", url: "https://www.frozair.xyz/apps/stompy-acres/roster", images: ["/stompy-acres/forest.webp"] }
};
export default function RosterLayout({ children }: {children: ReactNode}) { return children; }
