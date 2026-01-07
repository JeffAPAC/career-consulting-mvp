# Career Consulting MVP

一個職場/職涯諮詢的 MVP 網站，目標是「先能上線、先能展示、先能預約」，後續再逐步加入資料庫、檔案上傳與金流。

- 部署：Azure Static Web Apps（CI/CD 由 GitHub Actions 自動部署）
- 前端：Next.js（App Router）+ Tailwind CSS
- 預約：Calendly（iframe 嵌入）
- 目前階段：**純前端 MVP**（尚未串 DB / Storage / Payment）

---

## 功能頁面（Routes）

| Path | 說明 |
|------|------|
| `/` | Landing Page（服務介紹 / CTA 按鈕） |
| `/demo` | AI Career Demo（職能落差評估 UI 展示） |
| `/book` | 預約諮詢頁（Calendly iframe；未設定則顯示提示/替代內容） |

---

## 專案架構（Folder Structure）

> 本專案使用 **根目錄 `app/`** 作為 Next.js App Router 的來源（避免與 `src/app` 混用造成頁面不生效）。

