import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Stompy Acres — December 1 release roadmap",
  description: "A living visual roadmap to five release-ready Stompy Acres islands for iOS and Android. Follow island readiness, milestones and the decisions ahead.",
  alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres/roadmap" },
  openGraph: { title: "Stompy Acres release roadmap", description: "Five islands. A path to December 1, 2026.", url: "https://www.frozair.xyz/apps/stompy-acres/roadmap", images: ["/stompy-acres/forest.webp"] },
};

export default function RoadmapLayout({ children }: { children: ReactNode }) {
  return children;
}
