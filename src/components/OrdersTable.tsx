import { ChevronsUpDown } from "lucide-react"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table.tsx"
import OrderRow from "./OrderRow.tsx"
import type { Order } from "@/types/data.ts"

const OrdersTable = ({ orders }: { orders: Order[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="hidden md:table-cell">Order ID</TableHead>
          <TableHead className="hidden md:table-cell">Customer Name</TableHead>
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
        {orders.map((order) => (
          <OrderRow order={order} key={order.orderId} />
        ))}
      </TableBody>
    </Table>
  )
}

export default OrdersTable
