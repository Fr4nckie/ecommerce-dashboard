import { ORDERS } from "@/data/orders.ts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.tsx"
import OrdersTable from "../OrdersTable.tsx"

const DashboardOrders = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <OrdersTable orders={ORDERS.slice(0, 5)} />
      </CardContent>
    </Card>
  )
}

export default DashboardOrders
