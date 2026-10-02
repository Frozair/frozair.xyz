"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DonationWidget() {
  const pathname = usePathname();
  const isStompy = pathname.startsWith("/apps/stompy-acres");
  useEffect(() => {
    document.querySelectorAll<HTMLIFrameElement>('iframe[id^="kofi-wo-container"]').forEach(frame => { frame.hidden = isStompy; });
  }, [isStompy]);
  if (isStompy) return null;
  return <Script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" strategy="afterInteractive" onReady={() => {
    const widget = (window as Window & { kofiWidgetOverlay?: { draw: (name: string, options: Record<string, string>) => void } }).kofiWidgetOverlay;
    widget?.draw("frozair", { type: "floating-chat", "floating-chat.donateButton.text": "Tip Me", "floating-chat.donateButton.background-color": "#D4A853", "floating-chat.donateButton.text-color": "#fff" });
  }} />;
}
