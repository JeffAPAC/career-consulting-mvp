import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "職場諮詢｜MVP",
  description: "職涯諮詢與履歷優化（MVP）。先快速上線，後續逐步加入檔案上傳、案件狀態與金流。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full">
      <body className={`${inter.className} min-h-screen bg-[#F6F7F9] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
