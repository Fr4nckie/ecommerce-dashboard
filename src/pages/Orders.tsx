import OrdersTable from "@/components/OrdersTable.tsx"
import { Card, CardContent } from "@/components/ui/card.tsx"
import { ORDERS } from "@/data/orders.ts"

const Orders = () => {
  return (
    <Card>
      <CardContent>
        <OrdersTable orders={ORDERS} />
      </CardContent>
    </Card>
  )
}

export default Orders
