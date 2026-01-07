"use client";

import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  DollarSign,
  HeartHandshake,
  Hexagon,
  LayoutDashboard,
  Lightbulb,
  TrendingUp,
  UserCircle,
  Zap,
} from "@/components/icons";

// --- 資料介面 ---
interface Skill {
  name: string;
  currentLevel: number; // 0-100
  requiredLevel: number; // 0-100
  isGap: boolean;
  marketHeat: "High" | "Medium" | "Low";
  category: "Hard" | "Soft" | "Tool" | "Trait";
}

interface CareerScenario {
  id: string;
  currentRole: string;
  targetRole: string;
  salaryIncrease: string;
  matchScore: number;
  marketDemand: "Rising" | "Stable" | "Falling";
  scannedJobs: number;
  skills: Skill[];
  learningPath: string[];
  riskAnalysis: string;
}

// --- 資料數據 ---
const scenarios: CareerScenario[] = [
  {
    id: "case_pm",
    currentRole: "資深專案經理 (Sr. PM)",
    targetRole: "產品總監 (Product Director)",
    salaryIncrease: "+55%",
    matchScore: 58,
    marketDemand: "Rising",
    scannedJobs: 850,
    skills: [
      { name: "產品路線圖規劃 (Roadmap)", currentLevel: 85, requiredLevel: 90, isGap: false, marketHeat: "High", category: "Hard" },
      { name: "P&L 損益財務分析", currentLevel: 40, requiredLevel: 85, isGap: true, marketHeat: "Medium", category: "Hard" },
      { name: "數據驅動決策 (Data)", currentLevel: 60, requiredLevel: 90, isGap: true, marketHeat: "High", category: "Hard" },

      { name: "利害關係人談判", currentLevel: 75, requiredLevel: 95, isGap: true, marketHeat: "High", category: "Soft" },
      { name: "跨部門衝突解決", currentLevel: 80, requiredLevel: 85, isGap: false, marketHeat: "Medium", category: "Soft" },

      { name: "商業敏銳度 (Acumen)", currentLevel: 50, requiredLevel: 90, isGap: true, marketHeat: "High", category: "Trait" },
      { name: "高度抗壓性 (Resilience)", currentLevel: 90, requiredLevel: 90, isGap: false, marketHeat: "Low", category: "Trait" },
      { name: "當責與決斷力 (Ownership)", currentLevel: 65, requiredLevel: 95, isGap: true, marketHeat: "High", category: "Trait" },
    ],
    learningPath: [
      "階段一：強化財務思維，學習閱讀企業財報與預算編列",
      "階段二：參與公司級別的策略會議，培養商業敏銳度",
      "階段三：帶領 0-1 的新產品線，為最終成敗負全責",
    ],
    riskAnalysis: "高階職位更看重「商業敏銳度」與「當責」特質，這往往比硬技能更難在短期內展現。",
  },
  {
    id: "case_dev",
    currentRole: "後端工程師",
    targetRole: "技術長 (CTO)",
    salaryIncrease: "+80%",
    matchScore: 42,
    marketDemand: "Stable",
    scannedJobs: 320,
    skills: [
      { name: "系統架構設計", currentLevel: 90, requiredLevel: 95, isGap: false, marketHeat: "High", category: "Hard" },
      { name: "技術選型決策", currentLevel: 70, requiredLevel: 90, isGap: true, marketHeat: "High", category: "Hard" },
      { name: "工程團隊管理", currentLevel: 30, requiredLevel: 85, isGap: true, marketHeat: "Medium", category: "Soft" },
      { name: "商業變現思維", currentLevel: 20, requiredLevel: 80, isGap: true, marketHeat: "High", category: "Trait" },
      { name: "溝通影響力", currentLevel: 40, requiredLevel: 85, isGap: true, marketHeat: "Medium", category: "Soft" },
    ],
    learningPath: [
      "階段一：從 Code Review 轉向 System Design Review",
      "階段二：學習招募與績效管理，建立工程文化",
      "階段三：連結技術與商業目標，向 CEO 匯報技術 ROI",
    ],
    riskAnalysis: "技術強不代表能勝任 CTO。最大的斷層通常在於「從自己做到讓別人做」的授權與管理能力。",
  },
];

// --- 內嵌 SVG 雷達圖元件 ---
const SkillRadar = ({ skills }: { skills: Skill[] }) => {
  const size = 220;
  const center = size / 2;
  const radius = 70;
  const angleSlice = (Math.PI * 2) / Math.max(skills.length, 1);

  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const generatePath = (type: "current" | "required") => {
    const points = skills.map((skill, i) => {
      const val = type === "current" ? skill.currentLevel : skill.requiredLevel;
      const coords = getCoordinates(val, i);
      return `${coords.x},${coords.y}`;
    });
    return points.join(" ");
  };

  const labels = skills.map((skill, i) => {
    const angle = i * angleSlice - Math.PI / 2;
    const labelRadius = radius + 22;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    const shortName = skill.name.split(" ")[0].substring(0, 4);
    return { x, y, text: shortName };
  });

  return (
    <div className="flex items-center justify-center py-1">
      <svg width={size} height={size} className="overflow-visible">
        {[20, 40, 60, 80, 100].map((r) => (
          <circle
            key={r}
            cx={center}
            cy={center}
            r={(r / 100) * radius}
            fill="none"
            stroke="#e2e8f0"
            strokeDasharray="4 4"
          />
        ))}

        {skills.map((_, i) => {
          const coords = getCoordinates(100, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={coords.x}
              y2={coords.y}
              stroke="#e2e8f0"
            />
          );
        })}

        <polygon
          points={generatePath("required")}
          fill="rgba(99, 102, 241, 0.10)"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <polygon
          points={generatePath("current")}
          fill="rgba(16, 185, 129, 0.35)"
          stroke="#10b981"
          strokeWidth="2"
          className="transition-all duration-1000 ease-out"
        />

        {skills.map((skill, i) => {
          const currentCoords = getCoordinates(skill.currentLevel, i);
          const reqCoords = getCoordinates(skill.requiredLevel, i);
          return (
            <g key={i}>
              <circle cx={reqCoords.x} cy={reqCoords.y} r="3" fill="#6366f1" />
              <circle
                cx={currentCoords.x}
                cy={currentCoords.y}
                r="3"
                fill="#10b981"
                stroke="white"
                strokeWidth="1"
              />
            </g>
          );
        })}

        {labels.map((label, i) => (
          <text
            key={i}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-500 text-[9px] font-bold"
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
};

// --- 主應用程式 ---
export default function AICareerDemo() {
  const [activeScenario, setActiveScenario] = useState<CareerScenario>(scenarios[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanCount, setScanCount] = useState(0);

  useEffect(() => {
    setIsScanning(true);
    setScanCount(0);

    const step = Math.max(1, Math.floor(activeScenario.scannedJobs / 20));
    const interval = setInterval(() => {
      setScanCount((prev) => {
        if (prev >= activeScenario.scannedJobs) {
          clearInterval(interval);
          setIsScanning(false);
          return activeScenario.scannedJobs;
        }
        return Math.min(activeScenario.scannedJobs, prev + step);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeScenario]);

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "Hard":
        return { label: "硬實力", icon: <Hexagon className="mr-1 h-2.5 w-2.5" />, color: "text-slate-500" };
      case "Soft":
        return { label: "軟實力", icon: <HeartHandshake className="mr-1 h-2.5 w-2.5" />, color: "text-rose-500" };
      case "Trait":
        return { label: "人格特質", icon: <Lightbulb className="mr-1 h-2.5 w-2.5" />, color: "text-amber-500" };
      default:
        return { label: "工具", icon: <Hexagon className="mr-1 h-2.5 w-2.5" />, color: "text-slate-500" };
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800">
      <nav className="sticky top-0 z-50 h-14 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-indigo-600 p-1.5">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-indigo-900">SkillQuant AI</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex rounded-lg bg-slate-100 p-1">
              {scenarios.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScenario(s)}
                  className={
                    "flex items-center rounded-md px-3 py-1 text-xs font-bold transition-all " +
                    (activeScenario.id === s.id
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-slate-500 hover:text-slate-700")
                  }
                >
                  <UserCircle className="mr-1 h-3 w-3" />
                  {s.targetRole}
                </button>
              ))}
            </div>

            <div className="hidden items-center border-l border-slate-200 pl-4 text-xs font-medium text-slate-500 md:flex">
              <div className="mr-4 flex items-center">
                <LayoutDashboard className="mr-1 h-3 w-3" />
                職能模型 v2.4
              </div>
              <span className="flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-600">
                <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Live Market
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-8">
          <div className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-start justify-between border-b border-slate-100 pb-2">
              <div>
                <div className="mb-0.5 flex items-center space-x-2 text-sm text-slate-500">
                  <span>目標職位分析</span>
                  <ArrowRight className="h-3 w-3" />
                  <span className="font-bold text-indigo-700">
                    {activeScenario.targetRole}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">能力落差評估</h3>
              </div>

              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-slate-400">
                  Market Scan
                </div>
                <div className="leading-none">
                  <span className="text-lg font-bold text-indigo-600">
                    {scanCount.toLocaleString()}
                  </span>
                  {isScanning && (
                    <span className="ml-2 text-[10px] text-slate-400">
                      scanning…
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="w-full flex-shrink-0 rounded-lg border border-slate-100 bg-slate-50 p-2 md:w-auto">
                <SkillRadar skills={activeScenario.skills} />

                <div className="mt-2 w-full px-4">
                  <div className="mb-1 flex justify-between text-xs font-medium">
                    <span className="text-slate-500">匹配度</span>
                    <span className="font-bold text-indigo-600">
                      {activeScenario.matchScore}%
                    </span>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-slate-200">
                    <div
                      className="h-1.5 rounded-full bg-indigo-500"
                      style={{ width: `${activeScenario.matchScore}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="max-h-[350px] flex-1 space-y-2 overflow-y-auto pr-1">
                {activeScenario.skills.map((skill, idx) => {
                  const catInfo = getCategoryInfo(skill.category);

                  return (
                    <div
                      key={idx}
                      className={
                        "flex items-center justify-between gap-3 rounded border p-2 " +
                        (skill.isGap
                          ? "border-slate-200 bg-white"
                          : "border-slate-100 bg-slate-50")
                      }
                    >
                      <div className="min-w-[140px]">
                        <div className="flex items-center">
                          <span
                            className="mr-2 max-w-[120px] truncate text-sm font-bold text-slate-700"
                            title={skill.name}
                          >
                            {skill.name}
                          </span>
                          {skill.marketHeat === "High" && (
                            <Zap className="h-3 w-3 flex-shrink-0 text-amber-500" />
                          )}
                        </div>

                        <div className={`mt-0.5 flex items-center text-[10px] ${catInfo.color}`}>
                          {catInfo.icon}
                          {catInfo.label}
                        </div>
                      </div>

                      <div className="flex h-full flex-1 flex-col justify-center">
                        <div className="relative h-1.5 w-full rounded-full bg-slate-100">
                          <div
                            className="absolute bottom-[-2px] top-[-2px] z-10 w-0.5 bg-indigo-400"
                            style={{ left: `${skill.requiredLevel}%` }}
                          />
                          <div
                            className={
                              "absolute bottom-0 left-0 top-0 rounded-full " +
                              (skill.isGap ? "bg-amber-400" : "bg-emerald-500")
                            }
                            style={{ width: `${skill.currentLevel}%` }}
                          />
                        </div>
                      </div>

                      <div className="min-w-[50px] text-right">
                        <span
                          className={
                            "rounded px-1.5 py-0.5 text-[10px] font-bold " +
                            (skill.isGap
                              ? "bg-amber-50 text-amber-600"
                              : "bg-emerald-50 text-emerald-600")
                          }
                        >
                          {skill.isGap ? "GAP" : "OK"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-700 to-indigo-600 p-4 text-white shadow-sm">
            <DollarSign className="absolute -right-4 -top-4 h-24 w-24 opacity-10" />
            <div className="relative z-10">
              <h3 className="text-xs font-medium uppercase tracking-wide text-indigo-200">
                預期年薪漲幅
              </h3>

              <div className="mt-1 flex items-end">
                <span className="text-3xl font-bold">
                  {activeScenario.salaryIncrease}
                </span>
                <span className="mb-1.5 ml-1 text-xs text-indigo-200">/ year</span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-indigo-500/30 pt-3 text-xs">
                <div className="flex items-center text-indigo-100">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  趨勢: {activeScenario.marketDemand}
                </div>
                <button className="rounded bg-white/10 px-2 py-1 text-white transition-colors hover:bg-white/20">
                  詳情 →
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-3 flex items-center text-sm font-bold text-slate-800">
              <BookOpen className="mr-1.5 h-4 w-4 text-indigo-600" />
              推薦行動 (Action Plan)
            </h3>

            <div className="flex-1 space-y-3">
              {activeScenario.learningPath.map((step, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 text-[10px] font-bold text-indigo-600">
                    {idx + 1}
                  </div>
                  <div className="text-xs leading-relaxed text-slate-600">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-slate-100 pt-3">
              <button className="w-full rounded bg-indigo-600 py-2 text-xs font-bold text-white transition-colors hover:bg-indigo-700">
                生成詳細執行計畫
              </button>
            </div>
          </div>

          <div className="flex gap-2 rounded-lg border border-amber-100 bg-amber-50 p-3">
            <AlertCircle className="h-4 w-4 flex-shrink-0 text-amber-600" />
            <p className="text-[10px] leading-tight text-amber-800">
              <span className="font-bold">顧問提示：</span> {activeScenario.riskAnalysis}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
