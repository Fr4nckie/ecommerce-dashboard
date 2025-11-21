import { ORDERS } from "@/data/orders.ts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.tsx"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table.tsx"
import OrderRow from "./OrderRow.tsx"
import type { Order } from "@/types/data.ts"
import { ChevronsUpDown } from "lucide-react"

const DashboardOrders = () => {
  return (
    <div className="mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="hidden md:table-cell">Order ID</TableHead>
                <TableHead className="hidden md:table-cell">
                  Customer Name
                </TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="text-right md:text-left">Status</TableHead>
                <TableHead className="md:hidden">
                  <div className="flex justify-end">
                    <ChevronsUpDown size={18} />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(ORDERS as Order[]).map((order) => (
                <OrderRow key={order.date + order.orderId} order={order} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardOrders
