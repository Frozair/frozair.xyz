import Link from "next/link";
import type { ReactNode } from "react";

export default function ExitLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative px-4 pb-24 pt-32">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="EXIT" className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/apps/exit" className="underline underline-offset-4">EXIT</Link>
          <Link href="/apps/exit/support" className="underline underline-offset-4">Support</Link>
          <Link href="/apps/exit/privacy" className="underline underline-offset-4">Privacy</Link>
        </nav>
        <article className="glass-panel rounded-2xl p-6 sm:p-10 [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-left [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </article>
        <p className="mt-6 text-sm">Published by Dat Da Dat LLC · <a className="underline" href="mailto:apps@frozair.xyz">apps@frozair.xyz</a></p>
      </div>
    </section>
  );
}
