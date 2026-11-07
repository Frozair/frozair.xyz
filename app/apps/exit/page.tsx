import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EXIT: Arrow Puzzle — Frozair",
  description: "Draw a chain, clear a shape, and take your time. EXIT player support and privacy information.",
  alternates: { canonical: "https://frozair.xyz/apps/exit" },
};

export default function ExitPage() {
  return <>
    <p className="text-sm font-semibold uppercase tracking-widest">In testing</p>
    <h1>EXIT: Arrow Puzzle</h1>
    <p className="text-xl">Find the flow. Clear a shape in one satisfying chain.</p>
    <p>Drag through neighboring arrows to build your own chain. Each arrow must have a clear exit when its turn comes. One successful chain uses one move, however many arrows it clears. Take your time, undo a move, or ask for a hint.</p>
    <ul>
      <li>36 puzzles across six chapters, with completed shapes saved in your collection.</li>
      <li>No timers, lives or forced full-screen ads.</li>
      <li>Replay collected shapes, improve your moves remaining, and choose sound or reduced-motion settings.</li>
    </ul>
    <p>EXIT is being tested for iPhone, Android and the web. Public downloads are not available yet. Mobile versions include optional rewarded hints and a one-time purchase that removes all ads and unlocks unlimited hints when available; the web game has no mobile ads or purchases.</p>
    <p>Already testing? <Link href="/apps/exit/support">Get help with EXIT</Link> or read the <Link href="/apps/exit/privacy">privacy policy</Link>.</p>
  </>;
}
