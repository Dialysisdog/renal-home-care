"use client";

import Link from "next/link";
import { topics } from "@/lib/topics";
import TopicCard from "@/components/TopicCard";
import { Droplet, Calculator, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/ui-strings";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-card"
          style={{ backgroundColor: "#1F2A44" }}
        >
          <Droplet size={28} />
        </div>
        <span className="mb-3 block text-xs font-extrabold uppercase tracking-[0.2em] text-ink/50">
          {t.tag}
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">
          {t.heroSubtitle}
        </p>
      </header>

      <section className="mx-auto mt-10 max-w-sm sm:max-w-md">
        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white p-3 shadow-card">
          <img
            src="/family-photo.jpg"
            alt={t.familyPhotoCaption}
            className="w-full rounded-2xl object-cover"
          />
          <p className="mt-3 px-2 pb-1 text-center text-sm font-semibold text-mute">
            {t.familyPhotoCaption}
          </p>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, i) => (
          <TopicCard key={topic.slug} topic={topic} index={i + 1} />
        ))}
      </section>

      <section className="mt-14">
        <span className="mb-3 block text-xs font-extrabold uppercase tracking-widest text-ink/40">
          {t.toolsHeading}
        </span>
        <Link
          href="/dat-hang-dich"
          className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-card transition-transform duration-200 hover:-translate-y-1"
          style={{ borderLeftColor: "#2952CC", borderLeftWidth: 4 }}
        >
          <div
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: "#EAF0FF", color: "#2952CC" }}
          >
            <Calculator size={24} strokeWidth={2.2} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold text-ink">
              {t.toolCardTitle}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-mute">{t.toolCardDesc}</p>
          </div>
          <span className="hidden flex-shrink-0 items-center gap-1 text-sm font-bold text-ink/70 transition-colors group-hover:text-ink sm:flex">
            {t.toolCardCta}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </section>

      <footer className="mt-16 text-center text-xs text-ink/40">
        {t.footer}
      </footer>
    </main>
  );
}
