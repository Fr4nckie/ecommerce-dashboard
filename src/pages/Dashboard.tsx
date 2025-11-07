import DashboardKpis from "@/components/DashboardKpis.tsx"
import DashboardSales from "@/components/DashboardSales.tsx"

const Dashboard = () => {
  return (
    <div className="w-full">
      <DashboardKpis />
      <DashboardSales />
    </div>
  )
}

export default Dashboard
