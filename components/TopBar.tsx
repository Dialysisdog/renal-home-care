"use client";

import Link from "next/link";
import { Droplet, Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/ui-strings";

export default function TopBar() {
  const { lang, setLang } = useLanguage();
  const t = ui[lang];

  return (
    <div className="border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: "#1F2A44" }}
          >
            <Droplet size={15} />
          </span>
          <span className="font-display text-sm font-semibold text-ink">
            {t.siteName}
          </span>
        </Link>

        <div className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white p-1 text-xs font-bold">
          <Languages size={14} className="ml-1.5 text-ink/40" />
          <button
            type="button"
            onClick={() => setLang("vi")}
            aria-pressed={lang === "vi"}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              lang === "vi"
                ? "bg-ink text-white"
                : "text-ink/50 hover:text-ink"
            }`}
          >
            VI
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              lang === "en"
                ? "bg-ink text-white"
                : "text-ink/50 hover:text-ink"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}
