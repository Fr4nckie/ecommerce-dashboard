import type { Order } from "@/types/data.ts"
import { TableCell, TableRow } from "../ui/table.tsx"
import { Badge } from "../ui/badge.tsx"

interface OrderRowProps {
  order: Order
}

const OrderRow = ({ order }: OrderRowProps) => {
  const statusColors: Record<string, string> = {
    Processing: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  }
  const date = new Date(order.date)
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`

  return (
    <TableRow>
      <TableCell>{order.items[0].name}</TableCell>
      <TableCell>#{order.orderId}</TableCell>
      <TableCell>{order.customerName}</TableCell>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>${order.items[0].price}</TableCell>
      <TableCell>
        <Badge className={`${statusColors[order.status]}`}>
          {order.status}
        </Badge>
      </TableCell>
    </TableRow>
  )
}

export default OrderRow
