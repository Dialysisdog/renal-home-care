"use client";

import { Info } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/ui-strings";

export default function Disclaimer() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <div className="mt-10 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
      <Info size={20} className="mt-0.5 flex-shrink-0" />
      <p>{t.disclaimer}</p>
    </div>
  );
}
