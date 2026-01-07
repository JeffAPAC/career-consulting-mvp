export default function BookPage() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-bold text-slate-900">預約諮詢</h1>
      <p className="mt-2 text-slate-600">
        這頁用 Calendly iframe。請在 GitHub repo 的 Actions secrets（或 Azure Static Web Apps 的設定）加入：
        <code className="mx-1 rounded bg-slate-100 px-1 py-0.5">
          NEXT_PUBLIC_CALENDLY_URL
        </code>
      </p>

      {!url ? (
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
          尚未設定{" "}
          <code className="rounded bg-slate-100 px-1">
            NEXT_PUBLIC_CALENDLY_URL
          </code>
          。
          <div className="mt-2 text-xs text-slate-500">
            例如：https://calendly.com/&lt;your-handle&gt;/&lt;event&gt;
          </div>
        </div>
      ) : (
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <iframe title="Calendly" src={url} className="h-[760px] w-full" />
        </div>
      )}

      <div className="mt-6 text-xs text-slate-500">
        若你希望在同一頁顯示更多資訊（方案/價格/流程），後續我也可以幫你補上版型。
      </div>
    </main>
  );
}
