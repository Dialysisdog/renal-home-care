"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { topics, type Topic } from "@/lib/topics";
import Disclaimer from "@/components/Disclaimer";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/ui-strings";

export default function TopicDetailClient({ topic }: { topic: Topic }) {
  const { lang } = useLanguage();
  const content = topic[lang];
  const t = ui[lang];

  const Icon = (Icons as any)[topic.icon] ?? Icons.Circle;
  const index = topics.findIndex((tp) => tp.slug === topic.slug) + 1;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} />
        {t.backHome}
      </Link>

      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: topic.colorSoft, color: topic.color }}
        >
          <Icon size={28} strokeWidth={2.2} />
        </div>
        <div>
          <span
            className="mb-1 block text-[11px] font-extrabold uppercase tracking-widest"
            style={{ color: topic.color }}
          >
            {t.branch} {index} / {topics.length}
          </span>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {content.title}
          </h1>
        </div>
      </div>

      <p
        className="mt-5 border-l-2 pl-4 text-base leading-relaxed text-mute"
        style={{ borderColor: topic.color }}
      >
        {content.summary}
      </p>

      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-ink">
              {section.heading}
            </h2>
            <ul className="mt-3 space-y-2.5">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: topic.color }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Disclaimer />

      <nav className="mt-12 border-t border-black/5 pt-8">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-ink/40">
          {t.otherTopics}
        </p>
        <div className="flex flex-wrap gap-2">
          {topics
            .filter((tp) => tp.slug !== topic.slug)
            .map((tp) => (
              <Link
                key={tp.slug}
                href={`/chu-de/${tp.slug}`}
                className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-black/20 hover:text-ink"
              >
                {tp[lang].shortTitle}
              </Link>
            ))}
        </div>
      </nav>
    </main>
  );
}
