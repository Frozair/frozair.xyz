import type { MetadataRoute } from "next";

const baseUrl = "https://frozair.xyz";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/apps",
    "/apps/beby",
    "/apps/beby/privacy",
    "/apps/blockrush",
    "/apps/blockrush/privacy",
    "/apps/blockrush/support",
    "/apps/hexablast",
    "/apps/hexablast/privacy",
    "/apps/hexablast/support",
    "/apps/terms-and-conditions",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-05-30"),
    changeFrequency: path === "/apps/hexablast" || path === "/apps/blockrush" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/apps" || path === "/apps/hexablast" ? 0.9 : 0.7,
  }));
}
