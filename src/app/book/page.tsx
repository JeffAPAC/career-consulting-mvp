import Link from "next/link";

export default function BookPage() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm font-extrabold text-slate-900">預約諮詢</div>
            <div className="text-xs text-slate-500">選擇方便的時段，我們在線上進行（MVP）</div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            回首頁
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Calendly */}
          <section className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h1 className="text-base font-extrabold text-slate-900">選擇時段</h1>
              <p className="mt-2 text-sm text-slate-600">
                若你已經準備好，我們就先從「目標職位/問題」開始，把需求釐清後直接產出可用的交付物。
              </p>

              <div className="mt-4">
                {url ? (
                  <iframe
                    title="Calendly"
                    src={url}
                    className="h-[760px] w-full rounded-xl border border-slate-200"
                    loading="lazy"
                  />
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="text-sm font-bold text-slate-900">目前尚未開放線上預約</div>
                    <p className="mt-2 text-sm text-slate-600">
                      我們正在完成預約設定。你可以先回首頁瀏覽 Demo，或稍後再回來查看。
                    </p>

                    {/* Admin-only hint (kept but hidden in a tidy details block) */}
                    <details className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                      <summary className="cursor-pointer list-none text-xs font-semibold text-slate-700">
                        管理者資訊（設定預約連結）
                      </summary>
                      <div className="mt-3 space-y-2 text-xs text-slate-600">
                        <div>
                          於 Azure Static Web Apps（或 GitHub Actions secrets）設定環境變數：
                        </div>
                        <pre className="whitespace-pre-wrap rounded-md bg-slate-900 p-3 text-[11px] text-slate-100">
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/&lt;your-handle&gt;/&lt;event&gt;
                        </pre>
                        <div>設定後 push 一次即可觸發重新部署。</div>
                      </div>
                    </details>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Right: Info */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-extrabold text-slate-900">你可以先準備</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {[
                  "目標職缺連結（或 JD 貼上）",
                  "你目前的履歷（PDF/Word 都可，MVP 先人工處理）",
                  "你最在意的 1–2 個痛點（例如：定位/故事線/面試）",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="text-xs font-semibold text-emerald-800">MVP 提醒</div>
                <div className="mt-2 text-sm text-emerald-900">
                  金流與檔案上傳流程會在下一階段加入；目前先以「快速交付」為優先。
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="/demo"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  先看 AI Demo
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
