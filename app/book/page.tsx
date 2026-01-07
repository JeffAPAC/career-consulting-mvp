import Link from "next/link";
import {
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  CalendarDays,
} from "../../components/icons";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-6">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h2>
      {desc ? <p className="text-sm leading-relaxed text-slate-600">{desc}</p> : null}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-800">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-sm font-bold text-slate-900">{title}</div>
          <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-sm font-extrabold text-emerald-700">
          {n}
        </div>
        <div className="text-sm font-bold text-slate-900">{title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer list-none text-sm font-bold text-slate-900">
        {q}
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
    </details>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
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
                查看分析展示
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                <CalendarDays className="h-4 w-4" />
                預約諮詢
              </Link>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <main>
        <section className="bg-white">
          <Container>
            <div className="grid gap-10 py-10 lg:grid-cols-12 lg:py-14">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>一對一職涯諮詢</Pill>
                  <Pill>履歷優化</Pill>
                  <Pill>面試策略</Pill>
                </div>

                <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  把職涯問題變成可執行的下一步
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  我提供的是「結果導向」的諮詢：釐清目標、拆解職缺要求、整理你的強項敘事，
                  並交付一份你可以直接拿去求職或升遷溝通的方案。
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                  >
                    立即預約
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    先看分析展示
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold text-slate-500">交付物</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-900">
                      可直接使用
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      履歷/面試重點、策略與行動計畫
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold text-slate-500">方法</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-900">
                      結構化
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      以職缺需求與能力模型對齊
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold text-slate-500">原則</div>
                    <div className="mt-1 text-sm font-extrabold text-slate-900">
                      可信賴
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      最小必要原則處理你的資料
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: credibility / positioning */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">
                        專業承諾
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        以「清楚、可執行、可交付」為原則，避免空泛鼓勵。你會得到一份可以落地的方案，
                        而不是一堆泛泛的建議。
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        常見目標
                      </div>
                      <div className="mt-2 text-sm text-slate-700">
                        轉職 / 升遷 / 跨域（PM、工程、設計、營運等）
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        常見卡點
                      </div>
                      <div className="mt-2 text-sm text-slate-700">
                        定位不清、履歷沒回音、面試答題鬆散、缺少代表性案例
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href="/book"
                      className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      預約諮詢
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      看展示
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What you get */}
        <section className="border-t border-slate-200 bg-slate-50">
          <Container>
            <div className="py-12">
              <SectionTitle
                eyebrow="Deliverables"
                title="你會得到什麼（交付成果）"
                desc="每一場諮詢都會以「可落地」為目標，確保你諮詢結束後就能開始行動。"
              />

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <FeatureCard
                  icon={<ClipboardCheck className="h-5 w-5" />}
                  title="履歷與亮點敘事"
                  desc="釐清定位、建立關鍵案例故事線，提升可讀性與命中率。"
                />
                <FeatureCard
                  icon={<Sparkles className="h-5 w-5" />}
                  title="面試策略與回答框架"
                  desc="用結構化框架整理你的經驗，讓回答更聚焦、更有說服力。"
                />
                <FeatureCard
                  icon={<BrainCircuit className="h-5 w-5" />}
                  title="30 / 60 / 90 天行動計畫"
                  desc="拆解能力落差與優先級，給你可衡量的學習與產出路線。"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="border-t border-slate-200 bg-white">
          <Container>
            <div className="py-12">
              <SectionTitle
                eyebrow="Process"
                title="合作流程"
                desc="流程簡潔透明，讓你清楚知道每一步會產出什麼。"
              />

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                <Step n="1" title="預約與需求確認" desc="先確認目標職位、時間與你最在意的問題。" />
                <Step n="2" title="資料整理與拆解" desc="對齊職缺需求、整理強項與可用案例。" />
                <Step n="3" title="諮詢與產出" desc="給出調整方向、重點敘事與可執行方案。" />
                <Step n="4" title="下一步計畫" desc="交付行動清單，必要時安排後續調整。" />
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-slate-50">
          <Container>
            <div className="py-12">
              <SectionTitle
                eyebrow="FAQ"
                title="常見問題"
              />
              <div className="mt-6 space-y-3">
                <FaqItem
                  q="我沒有很清楚的目標職位也可以嗎？"
                  a="可以。我們會先從你的背景、偏好與市場需求出發，整理出 1–2 個可行方向，再回推能力與履歷策略。"
                />
                <FaqItem
                  q="會不會只有泛泛的建議？"
                  a="不會。我會用職缺需求與能力模型拆解，產出可直接使用的內容（履歷亮點、回答框架、行動計畫）。"
                />
                <FaqItem
                  q="資料與隱私怎麼處理？"
                  a="以最小必要原則處理你提供的資料，只用於諮詢與交付；你也可以選擇遮蔽敏感資訊後再提供。"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">
                    準備好開始了嗎？
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    直接預約時間，我們用一場會議把下一步定清楚。
                  </div>
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  前往預約
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <Container>
          <div className="flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} 職場諮詢</div>
            <div className="flex gap-4">
              <Link href="/demo" className="hover:text-slate-700">分析展示</Link>
              <Link href="/book" className="hover:text-slate-700">預約</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
