"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { Topic } from "@/lib/topics";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/ui-strings";

export default function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const { lang } = useLanguage();
  const content = topic[lang];
  const t = ui[lang];
  const Icon = (Icons as any)[topic.icon] ?? Icons.Circle;

  return (
    <Link
      href={`/chu-de/${topic.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 shadow-card transition-transform duration-200 hover:-translate-y-1"
      style={{ borderTopColor: topic.color, borderTopWidth: 4 }}
    >
      <div>
        <div
          className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: topic.colorSoft, color: topic.color }}
        >
          <Icon size={22} strokeWidth={2.2} />
        </div>
        <span
          className="mb-1 block text-[11px] font-extrabold uppercase tracking-widest"
          style={{ color: topic.color }}
        >
          {t.branch} {index}
        </span>
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          {content.shortTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{content.summary}</p>
      </div>
      <div className="mt-5 flex items-center gap-1 text-sm font-bold text-ink/70 transition-colors group-hover:text-ink">
        {t.viewDetails}
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
