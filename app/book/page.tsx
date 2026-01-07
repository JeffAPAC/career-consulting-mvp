import Link from "next/link";

export default function BookPage() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm font-extrabold text-slate-900">預約諮詢</div>
            <div className="text-xs text-slate-500">選擇方便的時段，我們在線上進行</div>
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
          <section className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h1 className="text-base font-extrabold text-slate-900">選擇時段</h1>
              <p className="mt-2 text-sm text-slate-600">
                建議你先準備：目標職位 / 目前背景 / 最在意的卡點（履歷、面試、轉職策略等）。
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
                      請先在 Static Web Apps 的環境變數設定{" "}
                      <code className="rounded bg-white px-1">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
                      後重新部署。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">諮詢前建議準備</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• 目標職缺連結（或 JD）</li>
                <li>• 你目前的履歷（可先遮蔽敏感個資）</li>
                <li>• 你最想解決的 1–2 個問題</li>
              </ul>

              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="text-xs font-semibold text-emerald-800">隱私提醒</div>
                <div className="mt-2 text-sm text-emerald-900">
                  建議避免提供身分證、地址、公司機密等敏感資訊。
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
