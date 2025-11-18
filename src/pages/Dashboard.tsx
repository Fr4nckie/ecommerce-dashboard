import DashboardKpis from "@/components/Dashboard/DashboardKpis"
import DashboardOrders from "@/components/Dashboard/DashboardOrders.tsx"
import { RevenueByCountry } from "@/components/Dashboard/DashboardRevenueByCountry"
import DashboardSales from "@/components/Dashboard/DashboardSales"
import DashboardTopProducts from "@/components/Dashboard/DashboardTopProducts.tsx"

const Dashboard = () => {
  return (
    <div>
      <DashboardKpis />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 gap-4 mt-8">
        <div className="*:h-full">
          <DashboardSales />
        </div>
        <div className="*:h-full">
          <DashboardTopProducts />
        </div>
        <div className="*:h-full lg:col-span-2 xl:col-span-1">
          <RevenueByCountry />
        </div>
      </div>
      <DashboardOrders />
    </div>
  )
}

export default Dashboard
