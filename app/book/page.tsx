import Link from "next/link";

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
          預約諮詢
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          安排一場 1 對 1 職涯諮詢
        </h1>

        <p className="max-w-2xl text-slate-600">
          你可以直接選擇可用時段完成預約。我會在會議前寄出確認信與準備事項，
          讓諮詢更聚焦、更有效率。
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            ← 回首頁
          </Link>

          <Link
            href="/demo"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            先看看 AI Demo
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mt-10 grid gap-6 lg:grid-cols-12">
        {/* Left: Info */}
        <aside className="lg:col-span-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              你會得到什麼
            </h2>

            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                目標職位拆解：能力模型與落差優先級
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                行動方案：30 / 60 / 90 天可執行計畫
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                履歷/面試方向：強項敘事、關鍵案例包裝
              </li>
            </ul>

            <div className="mt-5 rounded-lg bg-slate-50 p-4 text-xs text-slate-600">
              <div className="font-semibold text-slate-800">建議你先準備</div>
              <div className="mt-1 leading-relaxed">
                目前職務與目標職位、近 1–2 個代表性專案、遇到的卡點。
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">想先問問題？</h3>
            <p className="mt-2 text-sm text-slate-600">
              你也可以先寄信簡述需求，我會協助你確認是否適合安排諮詢。
            </p>

            <a
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              href="mailto:hello@example.com?subject=Career%20Consulting%20Inquiry"
            >
              Email 詢問
            </a>

            <p className="mt-2 text-[11px] text-slate-500">
              ※ 請把 <code className="rounded bg-slate-100 px-1">hello@example.com</code>{" "}
              改成你的信箱
            </p>
          </div>
        </aside>

        {/* Right: Calendly */}
        <div className="lg:col-span-8">
          {calendlyUrl ? (
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-white px-5 py-3">
                <div className="text-sm font-semibold text-slate-900">
                  立即選擇時段
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  完成預約後，你會收到確認通知與會議連結。
                </div>
              </div>

              <iframe
                title="Calendly"
                src={calendlyUrl}
                className="h-[780px] w-full"
              />
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                目前尚未開放線上預約
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                我們正在整理可預約時段。你可以先透過 Email 聯絡，我會提供最近的可用時間。
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                  href="mailto:hello@example.com?subject=Career%20Consulting%20Booking"
                >
                  先用 Email 預約
                </a>
                <Link
                  href="/"
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  回首頁看看方案
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                （管理者提示）設定 <code className="rounded bg-slate-100 px-1">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
                後這裡會自動顯示 Calendly。
              </p>
            </div>
          )}

          {/* Trust footer */}
          <div className="mt-4 text-xs text-slate-500">
            提醒：提交任何履歷或個資前，請先確認你願意分享的範圍。我會以最小必要原則處理與保存。
          </div>
        </div>
      </section>
    </main>
  );
}
