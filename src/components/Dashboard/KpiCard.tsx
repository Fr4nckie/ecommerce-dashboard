import type { Kpi } from "@/types/data.ts"
import { Card, CardContent } from "../ui/card.tsx"

function formatValue(k: Kpi) {
  if (k.id === "revenue") return `$${Number(k.value).toLocaleString()}`
  if (k.id === "aov") return `$${Number(k.value).toFixed(2)}`
  if (k.id === "conversion") return `${Number(k.value).toFixed(2)}%`
  return Number(k.value).toLocaleString()
}

const KpiCard = ({ kpi }: { kpi: Kpi }) => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="line-clamp-2 text-sm font-medium text-slate-500 dark:text-slate-300">
                {kpi.label}
              </p>
            </div>
            <div
              className={`text-sm font-medium px-2 py-1 rounded-md text-center select-none ${typeof kpi.delta === "number" && kpi.delta >= 0 ? "bg-emerald-600" : "bg-rose-600"}`}
            >
              {typeof kpi.delta === "number"
                ? `${kpi.delta >= 0 ? "+" : ""}${kpi.delta}%`
                : ""}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="my-2 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              {formatValue(kpi as Kpi)}
            </p>
          </div>
          <div className="text-xs text-slate-400">{kpi.hint}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default KpiCard
