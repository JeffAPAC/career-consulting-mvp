import Link from "next/link";
import { BrainCircuit } from "@/components/icons";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <BrainCircuit className="h-5 w-5" />
            </span>
            <span className="text-sm font-extrabold tracking-tight text-slate-900">
              職場諮詢
            </span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              href="/demo"
              className="hidden sm:inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              AI Demo
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              預約諮詢
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Chip>career-consulting-mvp · MVP</Chip>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
              把職涯問題變成可執行的下一步
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              以「職涯策略 × 履歷優化 × 面試準備」為核心，先用最小可行產品（MVP）快速上線。
              你可以先用 <span className="font-semibold text-slate-800">AI Demo</span> 看分析呈現方式，
              再到 <span className="font-semibold text-slate-800">預約頁</span> 安排諮詢時段。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                立即預約
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                看 AI Demo
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">交付速度</div>
                <div className="mt-1 text-lg font-extrabold text-slate-900">快</div>
                <div className="mt-1 text-sm text-slate-600">先人工修改交付，避免過度開發</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">呈現方式</div>
                <div className="mt-1 text-lg font-extrabold text-slate-900">清楚</div>
                <div className="mt-1 text-sm text-slate-600">用卡片與步驟把資訊說清楚</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">後續擴充</div>
                <div className="mt-1 text-lg font-extrabold text-slate-900">可加</div>
                <div className="mt-1 text-sm text-slate-600">之後再接 DB、上傳、金流</div>
              </div>
            </div>
          </div>

          {/* Right side card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-extrabold text-slate-900">適合哪些情境</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {[
                  "想轉職但不知道下一步怎麼走（方向不清）",
                  "履歷投了沒回音（定位/關鍵字/故事線需要調整）",
                  "面試常卡關（回答結構與例子不足）",
                  "升遷/跨域想要更像主管思維（策略與商業敏銳度）",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold text-slate-500">MVP 目前提供</div>
                <div className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold">AI Demo</span>（展示）＋{" "}
                  <span className="font-semibold">預約頁</span>（Calendly）
                  <div className="mt-2 text-xs text-slate-500">
                    * 履歷上傳/案件狀態/通知/金流會在下一階段逐步加入
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/book"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  去預約
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  看 Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-10">
          <h2 className="text-lg font-extrabold text-slate-900">服務內容</h2>
          <p className="mt-2 text-sm text-slate-600">
            先把「結果」做出來：你可以拿去應徵、拿去談升遷、拿去做下一步行動。
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card
              title="履歷健檢與改寫"
              desc="釐清定位、強化亮點敘事，讓履歷更像『你的商業提案』。"
            />
            <Card
              title="職涯策略與轉職路線"
              desc="拆解目標職缺能力要求，訂出可衡量的學習與作品/經驗計畫。"
            />
            <Card
              title="面試準備（結構化）"
              desc="把你想說的故事整理成可重複使用的 STAR/問題庫與回答框架。"
            />
          </div>
        </section>

        {/* Process */}
        <section className="mt-10">
          <h2 className="text-lg font-extrabold text-slate-900">流程（MVP）</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              { n: "1", t: "預約時間", d: "到預約頁選一個時段" },
              { n: "2", t: "確認需求", d: "先釐清目標與限制條件" },
              { n: "3", t: "產出交付", d: "履歷/方向/計畫（先人工）" },
              { n: "4", t: "下一步", d: "必要時安排第二次調整" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-sm font-extrabold text-emerald-700">
                    {s.n}
                  </div>
                  <div className="text-sm font-bold text-slate-900">{s.t}</div>
                </div>
                <div className="mt-3 text-sm text-slate-600">{s.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-lg font-extrabold text-slate-900">常見問題</h2>
          <div className="mt-4 space-y-3">
            {[
              {
                q: "我只想『快速改履歷』可以嗎？",
                a: "可以。MVP 先主打交付速度：先用人工修改交付，不做線上編輯器，避免拖慢上線。",
              },
              {
                q: "費用與付款？",
                a: "先不上線金流，採人工對帳/轉帳。等流程穩定後，再接正式金流與訂單。",
              },
              {
                q: "我有特定職位/產業（例如 PM/工程/設計）可以嗎？",
                a: "可以。你可以先用 AI Demo 看呈現方式，我們再依職缺與公司類型調整策略。",
              },
            ].map((x) => (
              <details key={x.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-bold text-slate-900">
                  {x.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{x.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} 職場諮詢（MVP）</div>
          <div className="flex gap-4">
            <Link href="/book" className="hover:text-slate-700">預約</Link>
            <Link href="/demo" className="hover:text-slate-700">Demo</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
