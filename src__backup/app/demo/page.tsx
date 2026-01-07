import Link from "next/link";
import AICareerDemo from "@/components/AICareerDemo";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← 回首頁
        </Link>
      </div>

      <AICareerDemo />
    </div>
  );
}
