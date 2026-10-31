import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EXIT Support — Frozair",
  description: "Help with EXIT puzzles, saved progress, optional ads and restoring purchases.",
  alternates: { canonical: "https://frozair.xyz/apps/exit/support" },
};

export default function ExitSupportPage() {
  return <>
    <h1>EXIT support</h1>
    <p>Contact Dat Da Dat LLC at <a href="mailto:apps@frozair.xyz?subject=EXIT%20support">apps@frozair.xyz</a>. Include your device model, system version, EXIT version if known, and what happened. A screenshot can help; hide any personal information first.</p>
    <h2>An arrow will not move</h2>
    <p>An arrow needs a clear path in the direction it points. Try another arrow, use Undo to reconsider a move, or use a hint. All puzzles remain playable without a purchase or a rewarded ad.</p>
    <h2>Restore a Remove Ads purchase</h2>
    <p>Connect to the internet, use the same Apple App Store or Google Play account that made the purchase, then open EXIT Settings and choose Restore purchases. Restoration applies to purchases from that store; it does not transfer your saved puzzles between devices or platforms.</p>
    <p>Remove Ads removes banner ads. Rewarded hints are optional and remain separate. For a purchase problem, start by telling us the store, item and error message. Do not send passwords, payment-card details or authentication codes. We can ask for the minimum order information needed if a lookup is required.</p>
    <h2>Progress and reinstalling</h2>
    <p>EXIT saves puzzles, undo history, hints and preferences locally. Clearing app or browser storage can erase that progress. Purchase restoration does not restore puzzle progress. Avoid uninstalling or clearing storage as a first troubleshooting step.</p>
    <h2>Ads, hints and privacy choices</h2>
    <p>Optional ads may be unavailable because of your connection, region, privacy choices or ad availability. Ordinary gameplay and the free hints do not require a rewarded ad. When available, Settings → Privacy choices opens the advertising privacy form.</p>
    <h2>Privacy requests</h2>
    <p>Email <a href="mailto:apps@frozair.xyz?subject=EXIT%20privacy%20request">apps@frozair.xyz</a> to ask about access, correction or deletion of information associated with you. Tell us the platform and type of request first; do not attach sensitive purchase details unless requested.</p>
    <p>See the <Link href="/apps/exit/privacy">EXIT privacy policy</Link> for local storage, purchases and third-party services.</p>
  </>;
}
