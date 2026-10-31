import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EXIT Privacy Policy — Dat Da Dat LLC",
  description: "How EXIT handles local progress, purchases, advertising choices and support requests.",
  alternates: { canonical: "https://frozair.xyz/apps/exit/privacy" },
};

export default function ExitPrivacyPage() {
  return <>
    <h1>EXIT privacy policy</h1>
    <p>Effective October 31, 2026. Publisher: Dat Da Dat LLC. Contact: <a href="mailto:apps@frozair.xyz">apps@frozair.xyz</a>.</p>
    <p>This policy covers EXIT: Arrow Puzzle and its support pages. EXIT is currently in testing. Current mobile test builds use sample advertisements and store test purchases; those services still process information as described below. We will review this policy before enabling production advertising or purchases.</p>
    <h2>Game progress and preferences</h2>
    <p>EXIT does not require an app account. Puzzle progress, undo history, hints, sound and motion preferences are stored locally on your device. The web game uses browser storage. Clearing this storage can erase progress. EXIT does not provide cloud synchronization of puzzle progress, social features or user-generated content.</p>
    <h2>Purchases</h2>
    <p>Apple App Store or Google Play handles checkout and payment authentication. EXIT uses RevenueCat to validate purchases and determine whether Remove Ads is active. RevenueCat processes purchase history, store transaction information and an anonymous app-user identifier for purchase functionality and reporting. EXIT does not ask for your store password or payment-card number. Restoring a purchase is separate from restoring local game progress.</p>
    <h2>Advertising and privacy choices</h2>
    <p>Mobile builds integrate Google Mobile Ads and Google’s User Messaging Platform for banner ads, optional rewarded hints and advertising privacy choices. These services may process IP addresses and approximate location derived from them, device identifiers, advertising interactions, and diagnostic or performance information for serving and measuring ads, service operation and fraud prevention. Data processed depends on the build, platform and applicable privacy choices.</p>
    <p>When available, open Settings → Privacy choices in EXIT to review or change your advertising choices. Advertising can be unavailable while a choice or connection is needed. Non-personalized or sample ads do not mean that no information is processed. The web game does not include the mobile advertising or purchase integrations.</p>
    <h2>Support and privacy requests</h2>
    <p>If you email us, we receive your email address and the information you choose to send. We use it to answer your request and troubleshoot the app. Please do not send passwords, authentication codes or payment-card details.</p>
    <p>You may contact <a href="mailto:apps@frozair.xyz?subject=EXIT%20privacy%20request">apps@frozair.xyz</a> to request access, correction or deletion of information associated with you. Start with the platform and nature of your request. We may need limited additional information to locate a record and verify that it belongs to you, because EXIT has no app login. Rights and applicable exceptions vary by location; you may also contact your local data-protection authority.</p>
    <h2>Storage and retention</h2>
    <p>Local game information stays on your device until you clear it or the app or operating system removes it. Support correspondence is retained as needed to handle the request, follow up on related issues, and meet applicable legal obligations. Purchase records may need to remain available for restoration, fraud prevention, accounting or legal requirements. Uninstalling EXIT does not automatically delete records held by Apple, Google or RevenueCat. We review requests for records under our control and, where needed, direct you to the relevant provider.</p>
    <h2>Service providers and international processing</h2>
    <p>Information is processed by the services needed for the features you use, including Apple or Google for store services, RevenueCat for purchases, and Google for mobile advertising and consent. These providers may process information outside your country. Their privacy policies explain their own processing and available controls:</p>
    <ul>
      <li><a href="https://www.revenuecat.com/privacy/">RevenueCat privacy policy</a></li>
      <li><a href="https://policies.google.com/privacy">Google privacy policy</a></li>
      <li><a href="https://www.apple.com/legal/privacy/">Apple privacy policy</a></li>
    </ul>
    <h2>This website</h2>
    <p>These support pages are hosted by Vercel. Requests to the website involve technical information such as your IP address, browser information and requested page, which the hosting service uses to deliver and secure the website. The website also stores its light or dark theme preference in your browser. See <a href="https://vercel.com/legal/privacy-notice">Vercel’s privacy notice</a>. Links to other websites are governed by those sites’ policies.</p>
    <h2>Audience</h2>
    <p>EXIT is intended for a general audience aged 13 and older and is not directed to children under 13. It does not ask for a date of birth. If you believe a child has provided personal information through EXIT or support, contact us so we can review and address it. The intended audience does not imply that EXIT verifies every player’s age.</p>
    <h2>Updates and contact</h2>
    <p>Updates will appear here with a revised effective date. For questions, contact Dat Da Dat LLC at <a href="mailto:apps@frozair.xyz">apps@frozair.xyz</a>. Practical help is available on the <Link href="/apps/exit/support">EXIT support page</Link>.</p>
  </>;
}
