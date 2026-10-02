import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./stompy.module.css";

const invite = "mailto:stompyacres@frozair.xyz?subject=Stompy%20Acres%20beta%20invite";
export const metadata: Metadata = {
  title: "Stompy Acres — Your little island. Their big adventure.",
  description: "Hatch adorable dinosaurs, discover little treasures, and grow a cozy island home. Stompy Acres is in early testing for iPhone and Android.",
  alternates: { canonical: "https://www.frozair.xyz/apps/stompy-acres" },
  openGraph: { title: "Stompy Acres", description: "A little island full of big personalities. A cozy dinosaur collecting game for iPhone and Android.", url: "https://www.frozair.xyz/apps/stompy-acres", images: [{ url: "/stompy-acres/forest.webp", width: 1600, height: 717, alt: "Dinosaurs exploring a lush Stompy Acres island" }] },
  twitter: { card: "summary_large_image", title: "Stompy Acres", images: ["/stompy-acres/forest.webp"] },
};

export default function StompyAcresPage() {
  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.brandbar}>
          <Link href="/apps/stompy-acres" className={styles.brand}><Image src="/stompy-acres/icon.webp" width={52} height={52} alt="" /><span>Stompy Acres</span></Link>
          <a href="#beta" className={styles.smallLink}>Join the adventure ↗</a>
        </header>
        <section className={styles.hero} aria-labelledby="stompy-title">
          <div className={styles.intro}>
            <span className={styles.eyebrow}>LITTLE DINOS. BIG PERSONALITIES.</span>
            <h1 id="stompy-title">Your little island.<br /><span>Their big adventure.</span></h1>
            <p>Hatch a new friend. Find a little treasure. Make room for one more dino. Welcome to your cozy corner of the prehistoric world.</p>
            <div className={styles.actions}><a className={styles.button} href={invite}>Request a beta invite <span aria-hidden="true">↗</span></a><a className={styles.textLink} href="#island">Take a peek ↓</a></div>
            <p className={styles.note}>In early testing · Made for iPhone & Android</p>
          </div>
          <figure className={styles.heroArt}><Image src="/stompy-acres/icon.webp" width={512} height={512} priority alt="A smiling green baby dinosaur peeking out of a spotted egg" /><figcaption>Your next best friend is waiting.</figcaption></figure>
        </section>
        <section id="island" className={styles.island} aria-labelledby="island-title">
          <div className={styles.sectionHead}><div><span className={styles.eyebrow}>A HOME WORTH COMING BACK TO</span><h2 id="island-title">A little wild. A lot of lovely.</h2></div><p>Let your dinos roam, dig for treasure, and settle into island life.</p></div>
          <figure className={styles.gameplay}><Image src="/stompy-acres/forest.webp" width={1600} height={717} sizes="(max-width: 720px) 100vw, 1120px" alt="Colorful dinosaurs roaming a green island with trees, a waterfall and a wooden storehouse" /><figcaption>Actual gameplay from an early build. The island is still growing.</figcaption></figure>
          <div className={styles.features}>
            <div><span className={styles.number}>01 / MEET</span><h3>Small feet. Huge charm.</h3><p>Start with an egg and discover your newest island resident. Collect different species and keep an eye out for special variants.</p></div>
            <div><span className={styles.number}>02 / GROW</span><h3>Room for one more.</h3><p>Turn the treasures your dinos dig up into a bigger island and a better storehouse. Your little home grows with your collection.</p></div>
            <div><span className={styles.number}>03 / UNWIND</span><h3>Life at dino pace.</h3><p>Watch them wander, play and snooze. They keep finding treasure while you’re away, until the storehouse fills up.</p></div>
          </div>
        </section>
        <section className={styles.discovery} aria-labelledby="discovery-title">
          <Image src="/stompy-acres/lagoon.webp" width={1000} height={563} sizes="(max-width: 720px) 100vw, 560px" alt="Blue aquatic creatures exploring a turquoise lagoon dotted with tiny sandy islands" />
          <div><span className={styles.eyebrow}>BEYOND THE TREETOPS</span><h2 id="discovery-title">More places.<br />More little faces.</h2><p>From leafy forests to bright blue lagoons, there’s more of this little world to discover.</p><p className={styles.note}>Biomes and creatures are being refined during testing.</p></div>
        </section>
        <section id="beta" className={styles.beta} aria-labelledby="beta-title">
          <span className={styles.eyebrow}>COME HELP IT GROW</span><h2 id="beta-title">A new island adventure,<br />still finding its feet.</h2><p>Stompy Acres is in early testing. Want to play and help shape what comes next? Email us with your device type to request an invite.</p><a className={styles.button} href={invite}>Request a beta invite ↗</a><p className={styles.note}>Invites are handled by email. Access depends on available testing spots.</p>
        </section>
        <section className={styles.faq} aria-labelledby="faq-title"><h2 id="faq-title">A few little questions</h2>
          <details><summary>Can I download it today?</summary><p>The game is in early testing, with access by invitation. Request an invite above and tell us whether you use iPhone or Android.</p></details>
          <details><summary>Does it need an internet connection?</summary><p>Yes. Your island is saved on our servers, so you need a connection to load your island and play. Treasure production continues while you’re away, up to your storehouse capacity.</p></details>
          <details><summary>How do I protect my island?</summary><p>Use “Save your island” in the phone app to link your save with Apple or Google. If you play without linking, keep the app installed. Contact support before reinstalling if you’re unsure.</p></details>
          <details><summary>What about privacy?</summary><p>Optional gameplay metrics default off. You can read what we collect and how to request account or data deletion in our <Link href="/apps/stompy-acres/privacy">privacy policy</Link>.</p></details>
        </section>
        <footer className={styles.footer}><span>A little world, made by <Link href="/">Frozair</Link>.</span><nav aria-label="Stompy Acres help"><Link href="/apps/stompy-acres/support">Support</Link><Link href="/apps/stompy-acres/privacy">Privacy</Link><Link href="/apps/stompy-acres/privacy#data-requests">Data requests</Link></nav></footer>
      </div>
    </article>
  );
}
