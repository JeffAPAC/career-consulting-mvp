import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <header className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            一對一職涯諮詢 · 履歷優化 · 面試策略
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            把職涯困擾變成可執行的下一步
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            我提供結果導向的職涯諮詢：協助你釐清目標、對齊職缺需求、整理強項敘事，
            並交付一份你可以直接拿去求職或升遷溝通的策略與行動計畫。
          </p>

          {/* ✅ 唯一保留的 CTA 區塊（AI 教練 / 預約諮詢 / Demo） */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              立即預約諮詢
            </Link>

            <Link
              href="/coach"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              先問 AI 職涯教練
            </Link>

            <Link
              href="/demo"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              查看分析展示
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">交付成果</div>
              <div className="mt-1 text-sm font-bold text-slate-900">可直接使用</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                履歷亮點、面試回答框架、行動清單
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">方法</div>
              <div className="mt-1 text-sm font-bold text-slate-900">結構化對齊</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                以職缺需求與能力模型拆解差距與優先順序
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">原則</div>
              <div className="mt-1 text-sm font-bold text-slate-900">專業可信賴</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                聚焦可執行建議，避免空泛鼓勵與過度承諾
              </div>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold text-slate-900">適合哪些情境</div>
            <div className="mt-3 grid gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-500">轉職</div>
                <div className="mt-1 text-sm text-slate-700">
                  釐清方向、對齊職缺、打造能說服人的案例敘事
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-500">升遷 / 加薪</div>
                <div className="mt-1 text-sm text-slate-700">
                  強化影響力成果表述，建立具體可驗證的價值證據
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-500">履歷沒回音</div>
                <div className="mt-1 text-sm text-slate-700">
                  快速定位問題段落，調整摘要、關鍵字與案例呈現方式
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="text-sm font-bold text-slate-900">先從哪裡開始？</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                如果你還不確定要怎麼問或怎麼整理問題，建議先使用 AI 職涯教練釐清方向；
                若需要客製策略與履歷交付，可直接預約諮詢。
              </p>

              {/* ✅ 這裡原本有第二組 CTA，已移除，避免重複 */}
            </div>
          </div>
        </div>
      </header>

      {/* Value sections */}
      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "職能落差分析",
            desc: "從能力與經驗切入，對齊目標職位的要求，找出最值得優先補強的差距。",
          },
          {
            title: "市場需求與定位",
            desc: "協助你用市場語言重新表述你的價值，提升履歷可讀性與命中率。",
          },
          {
            title: "可執行行動計畫",
            desc: "把策略轉成 30 / 60 / 90 天行動清單，讓你每一步都能衡量成效。",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-base font-bold text-slate-900">{x.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              {x.desc}
            </div>
          </div>
        ))}
      </section>

      {/* ✅ 底部 CTA 區塊保留文案，但移除按鈕，避免重複 */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-extrabold text-slate-900">
              準備好開始了嗎？
            </div>
            <div className="mt-1 text-sm text-slate-600">
              你可以從上方直接選擇：先使用 AI 職涯教練釐清方向，或預約諮詢取得完整策略與交付。
            </div>
          </div>
          {/* ✅ 這裡原本有第三組 CTA，已移除 */}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} 職場諮詢 · All rights reserved.
      </footer>
    </main>
  );
}
