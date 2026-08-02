"use client";

import { topics } from "@/lib/topics";
import TopicCard from "@/components/TopicCard";
import { Droplet } from "lucide-react";
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

      <section className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, i) => (
          <TopicCard key={topic.slug} topic={topic} index={i + 1} />
        ))}
      </section>

      <footer className="mt-16 text-center text-xs text-ink/40">
        {t.footer}
      </footer>
    </main>
  );
}
