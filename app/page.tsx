import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
          career-consulting-mvp · MVP
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          職場諮詢（MVP）
        </h1>

        <p className="max-w-2xl text-slate-600">
          先用「AI 職能落差分析 Demo」與「預約頁」快速上線。後續再逐步加入履歷上傳、案件狀態、通知與金流。
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/demo"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            看 AI Demo
          </Link>

          <Link
            href="/book"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            預約諮詢（Calendly）
          </Link>
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: "職能落差", desc: "硬實力 / 軟實力 / 人格特質，一次對齊 GAP" },
          { title: "市場需求", desc: "用 Market Scan 指標呈現趨勢（MVP 先用動畫）" },
          { title: "行動路線", desc: "把諮詢結論變成三階段可執行的 Action Plan" },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-base font-semibold text-slate-900">
              {x.title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              {x.desc}
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500">
        提示：預約頁會讀取{" "}
        <code className="rounded bg-slate-100 px-1">
          NEXT_PUBLIC_CALENDLY_URL
        </code>{" "}
        環境變數。
      </footer>
    </main>
  );
}
