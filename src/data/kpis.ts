import type { Kpi } from "@/types/data.ts"

export const KPIs_DATA: Kpi[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: 25300,
    delta: 6.8,
    hint: "$1,700 this week",
    sparkline: [1200, 1500, 2000, 2600, 5300],
  },
  {
    id: "orders",
    label: "Total Orders",
    value: 1200,
    delta: 2.1,
    hint: "120 this week",
    sparkline: [80, 120, 110, 150, 170],
  },
  {
    id: "aov",
    label: "Avg. Order",
    value: 21.2,
    delta: -1.4,
    hint: "$21.20 avg",
    sparkline: [18, 22, 20, 21, 21],
  },
  {
    id: "conversion",
    label: "Conv. Rate",
    value: 2.1,
    delta: 0.3,
    hint: "vs last week",
    sparkline: [1.6, 1.9, 2.0, 2.0, 2.1],
  },
]
