import { useLoaderData } from "react-router-dom"
import KpiCard from "./KpiCard.tsx"
import type { Kpi } from "@/types/data.ts"

const DashboardKpis = () => {
  const data = useLoaderData() as Kpi[]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((k) => (
        <KpiCard key={k.id} kpi={k} />
      ))}
    </div>
  )
}

export default DashboardKpis
