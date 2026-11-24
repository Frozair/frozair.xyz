import type { Metadata } from "next";
import type { ReactNode } from "react";
import release from "../../../../public/stompy-acres/release-roadmap.json";

const targetLabel = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${release.targetDate}T12:00:00Z`));

export const metadata: Metadata = {
  title: `Stompy Acres — ${targetLabel} release roadmap`,
  description: "A living visual roadmap to five Stompy Acres islands and 40 launch species for iOS and Android. Follow island readiness, milestones and the decisions ahead.",
  alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres/roadmap" },
  openGraph: { title: "Stompy Acres release roadmap", description: `Five islands. 40 species. ${targetLabel} target.`, url: "https://www.frozair.xyz/apps/stompy-acres/roadmap", images: ["/stompy-acres/forest.webp"] },
};

export default function RoadmapLayout({ children }: { children: ReactNode }) {
  return children;
}
