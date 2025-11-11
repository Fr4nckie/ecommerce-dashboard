import type { Kpi } from "@/types/data.ts"
import { Card, CardContent } from "../ui/card.tsx"

function formatValue(k: Kpi) {
  if (k.id === "revenue") return `$${Number(k.value).toLocaleString()}`
  if (k.id === "aov") return `$${Number(k.value).toFixed(2)}`
  if (k.id === "conversion") return `${Number(k.value).toFixed(2)}%`
  return Number(k.value).toLocaleString()
}

function Sparkline({ data }: { data: number[] }) {
  // small inline sparkline SVG — normalized to fit viewBox
  const w = 100
  const h = 28
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w
      const y = h - ((v - min) / range) * h
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg
      className="w-full h-7"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sky-500/90"
      />
    </svg>
  )
}

const KpiCard = ({ kpi }: { kpi: Kpi }) => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-300">
                {kpi.label}
              </p>
            </div>
            <div
              className={`ms-2 text-sm font-medium px-2 py-1 rounded-md text-center select-none ${typeof kpi.delta === "number" && kpi.delta >= 0 ? "bg-emerald-600" : "bg-rose-600"}`}
            >
              {typeof kpi.delta === "number"
                ? `${kpi.delta >= 0 ? "+" : ""}${kpi.delta}%`
                : ""}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              {formatValue(kpi as Kpi)}
            </p>
            <div className="w-20 mt-2">
              {kpi.sparkline ? <Sparkline data={kpi.sparkline} /> : null}
            </div>
          </div>
          <div className="mt-1 text-xs text-slate-400">{kpi.hint}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default KpiCard
