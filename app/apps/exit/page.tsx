import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EXIT: Arrow Puzzle — Frozair",
  description: "A little room of arrows. Clear a path, set off a chain, and take your time. EXIT player support and privacy information.",
  alternates: { canonical: "https://frozair.xyz/apps/exit" },
};

export default function ExitPage() {
  return <>
    <p className="text-sm font-semibold uppercase tracking-widest">In testing</p>
    <h1>EXIT: Arrow Puzzle</h1>
    <p className="text-xl">Clear a little room, one arrow at a time.</p>
    <p>Tap an arrow with a clear path to the edge. Linked arrows can follow in a gentle chain. Take your time, undo a move, or ask for a hint.</p>
    <ul>
      <li>Twenty introductory puzzles, followed by more boards from a fixed puzzle library.</li>
      <li>No timers, lives or forced full-screen ads.</li>
      <li>Sound and reduced-motion settings.</li>
    </ul>
    <p>EXIT is being tested for iPhone, Android and the web. Public downloads are not available yet. Mobile versions include optional rewarded hints and a one-time Remove Ads purchase when available; the web game has no mobile ads or purchases.</p>
    <p>Already testing? <Link href="/apps/exit/support">Get help with EXIT</Link> or read the <Link href="/apps/exit/privacy">privacy policy</Link>.</p>
  </>;
}
