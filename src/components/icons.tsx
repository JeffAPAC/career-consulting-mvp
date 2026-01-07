import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  const { className, ...rest } = props;
  return {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

/** Minimal icons (no external deps). Good enough for MVP UI. */
export function BrainCircuit(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9 3a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1a3 3 0 0 0 3 3" />
      <path d="M15 3a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a3 3 0 0 1-3 3" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M10 16h4" />
      <circle cx="9" cy="8" r="1" />
      <circle cx="15" cy="12" r="1" />
    </svg>
  );
}

export function UserCircle(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 19a7 7 0 0 1 11 0" />
    </svg>
  );
}

export function LayoutDashboard(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <rect x="13" y="10" width="8" height="11" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

export function Hexagon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 3h10l4 9-4 9H7L3 12 7 3z" />
    </svg>
  );
}

export function HeartHandshake(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 7c-2.5 4.5-9.5 9-9.5 9z" />
      <path d="M9 13l1.5 1.5L14 11" />
    </svg>
  );
}

export function Lightbulb(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z" />
    </svg>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function AlertCircle(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function Zap(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export function BookOpen(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M2 5h8a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 5h-8a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h8z" />
    </svg>
  );
}

export function DollarSign(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 2v20" />
      <path d="M17 7c0-2-2.2-3-5-3s-5 1-5 3 2 3 5 3 5 1 5 3-2.2 3-5 3-5-1-5-3" />
    </svg>
  );
}
