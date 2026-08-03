"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Calculator, Info, RotateCcw } from "lucide-react";
import { solutionTypes } from "@/lib/solution-types";
import { useLanguage } from "@/components/LanguageProvider";

const strings = {
  vi: {
    backHome: "Về trang chủ",
    title: "Tính số túi dịch cần đặt hàng",
    subtitle:
      "Nhập số túi mỗi loại bạn dùng mỗi ngày theo đúng toa của bác sĩ. Công cụ chỉ cộng dồn số lượng — không thay đổi hay đề xuất loại dịch, nồng độ, hoặc liều lượng.",
    orderPeriodLabel: "Đặt hàng cho",
    days: "ngày",
    bufferLabel: "Dự phòng thêm",
    bufferHint: "Nên có thêm vài ngày dự phòng phòng khi giao hàng trễ.",
    perDayLabel: "Số túi / ngày",
    resultHeading: "Số túi cần đặt",
    formulaNote:
      "Công thức mỗi loại: số túi/ngày × (số ngày đặt hàng + số ngày dự phòng), làm tròn lên.",
    grandTotal: "Tổng cộng tất cả các loại",
    bags: "túi",
    resetButton: "Đặt lại về mặc định",
    disclaimerTitle: "Lưu ý quan trọng",
    disclaimer:
      "Đây chỉ là công cụ hỗ trợ tính số lượng dựa trên toa đã có sẵn của bạn. Loại dịch, nồng độ, và số túi mỗi ngày phải luôn theo đúng chỉ định của bác sĩ hoặc điều dưỡng thận — không tự ý thay đổi. Nếu không chắc về toa hiện tại, hãy hỏi lại đội ngũ chăm sóc trước khi đặt hàng.",
  },
  en: {
    backHome: "Back to home",
    title: "Dialysis Solution Order Calculator",
    subtitle:
      "Enter how many bags of each type you use per day, exactly as prescribed by your doctor. This tool only adds up totals — it doesn't change or suggest the solution type, concentration, or dosage.",
    orderPeriodLabel: "Ordering for",
    days: "days",
    bufferLabel: "Extra buffer",
    bufferHint: "A few extra days of buffer helps in case a delivery is late.",
    perDayLabel: "Bags / day",
    resultHeading: "Bags to order",
    formulaNote:
      "Formula per type: bags/day × (order days + buffer days), rounded up.",
    grandTotal: "Grand total, all types",
    bags: "bags",
    resetButton: "Reset to defaults",
    disclaimerTitle: "Important note",
    disclaimer:
      "This tool only helps calculate quantities based on your existing prescription. The solution type, concentration, and bags per day must always follow your doctor's or renal nurse's orders — never change them on your own. If you're unsure about your current prescription, check with your care team before ordering.",
  },
} as const;

const STORAGE_KEY = "renal-home-care-order-calc";

type StoredState = {
  orderDays: number;
  bufferDays: number;
  perDay: Record<string, number>;
};

const defaultState: StoredState = {
  orderDays: 30,
  bufferDays: 5,
  perDay: { yellow: 0, green: 0, red: 0, purple: 0 },
};

export default function OrderCalculatorPage() {
  const { lang } = useLanguage();
  const t = strings[lang];

  const [state, setState] = useState<StoredState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  // Load any saved numbers on first mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState({ ...defaultState, ...parsed, perDay: { ...defaultState.perDay, ...parsed.perDay } });
      }
    } catch {
      // ignore, keep defaults
    } finally {
      setLoaded(true);
    }
  }, []);

  // Persist whenever it changes (after initial load).
  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore write errors
    }
  }, [state, loaded]);

  const setPerDay = (key: string, value: number) => {
    setState((s) => ({ ...s, perDay: { ...s.perDay, [key]: value } }));
  };

  const reset = () => setState(defaultState);

  const totalDays = state.orderDays + state.bufferDays;
  const totals = solutionTypes.map((sol) => {
    const perDay = state.perDay[sol.key] ?? 0;
    const total = Math.ceil(perDay * totalDays);
    return { ...sol, perDay, total };
  });
  const grandTotal = totals.reduce((sum, t) => sum + t.total, 0);

  return (
    <main className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
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
          style={{ backgroundColor: "#EAF0FF", color: "#2952CC" }}
        >
          <Calculator size={28} strokeWidth={2.2} />
        </div>
        <div>
          <span className="mb-1 block text-[11px] font-extrabold uppercase tracking-widest text-[#2952CC]">
            {lang === "vi" ? "Công cụ" : "Tool"}
          </span>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {t.title}
          </h1>
        </div>
      </div>

      <p className="mt-5 border-l-2 border-[#2952CC] pl-4 text-base leading-relaxed text-mute">
        {t.subtitle}
      </p>

      {/* Order period + buffer */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <label className="mb-2 block text-sm font-bold text-ink">
            {t.orderPeriodLabel}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              value={state.orderDays}
              onChange={(e) =>
                setState((s) => ({ ...s, orderDays: Math.max(0, Number(e.target.value)) }))
              }
              className="w-24 rounded-lg border border-black/15 px-3 py-2 text-lg font-semibold text-ink focus:border-[#2952CC] focus:outline-none"
            />
            <span className="text-sm text-mute">{t.days}</span>
          </div>
          <div className="mt-2 flex gap-1.5">
            {[30, 31, 60, 90].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setState((s) => ({ ...s, orderDays: d }))}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  state.orderDays === d
                    ? "bg-[#2952CC] text-white"
                    : "bg-black/5 text-ink/60 hover:bg-black/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <label className="mb-2 block text-sm font-bold text-ink">
            {t.bufferLabel}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              value={state.bufferDays}
              onChange={(e) =>
                setState((s) => ({ ...s, bufferDays: Math.max(0, Number(e.target.value)) }))
              }
              className="w-24 rounded-lg border border-black/15 px-3 py-2 text-lg font-semibold text-ink focus:border-[#2952CC] focus:outline-none"
            />
            <span className="text-sm text-mute">{t.days}</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-mute">{t.bufferHint}</p>
        </div>
      </div>

      {/* Per-solution inputs */}
      <div className="mt-6 space-y-3">
        {totals.map((sol) => (
          <div
            key={sol.key}
            className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4"
          >
            <span
              className="h-10 w-10 flex-shrink-0 rounded-full border border-black/10"
              style={{ backgroundColor: sol.color }}
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-semibold text-ink">
                {lang === "vi" ? sol.labelVi : sol.labelEn}
              </p>
              <p className="text-xs text-mute">{sol.detail}</p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <input
                type="number"
                min={0}
                step={0.5}
                value={sol.perDay}
                onChange={(e) => setPerDay(sol.key, Math.max(0, Number(e.target.value)))}
                className="w-20 rounded-lg border border-black/15 px-2 py-2 text-right text-lg font-semibold text-ink focus:border-[#2952CC] focus:outline-none"
              />
              <span className="text-xs text-mute">{t.perDayLabel}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="mt-8 rounded-2xl border-2 border-[#2952CC]/20 bg-[#EAF0FF] p-5">
        <h2 className="font-display text-lg font-semibold text-ink">
          {t.resultHeading}
        </h2>
        <div className="mt-4 space-y-2">
          {totals.map((sol) => (
            <div key={sol.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: sol.color }}
                />
                <span className="text-sm font-semibold text-ink">
                  {lang === "vi" ? sol.labelVi : sol.labelEn}
                  <span className="ml-1 font-normal text-mute">({sol.detail})</span>
                </span>
              </div>
              <span className="font-display text-lg font-bold text-ink">
                {sol.total} <span className="text-sm font-normal text-mute">{t.bags}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[#2952CC]/20 pt-4">
          <span className="font-display text-base font-bold text-ink">{t.grandTotal}</span>
          <span className="font-display text-2xl font-bold text-[#2952CC]">
            {grandTotal} <span className="text-sm font-normal text-mute">{t.bags}</span>
          </span>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-mute">{t.formulaNote}</p>
      </div>

      <button
        type="button"
        onClick={reset}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/50 transition-colors hover:text-ink"
      >
        <RotateCcw size={15} />
        {t.resetButton}
      </button>

      <div className="mt-10 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        <Info size={20} className="mt-0.5 flex-shrink-0" />
        <p>
          <strong className="font-bold">{t.disclaimerTitle}:</strong> {t.disclaimer}
        </p>
      </div>
    </main>
  );
}
