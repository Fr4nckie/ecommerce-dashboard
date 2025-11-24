import type { Order } from "@/types/data.ts"
import { TableCell, TableRow } from "./ui/table.tsx"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.tsx"
import { Badge } from "./ui/badge.tsx"

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
  const formattedDate = date.toLocaleDateString()
  const formattedHour = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <>
      <TableRow className="border-b-0 text-blue-500 text-sm">
        <TableCell className="pb-0">{order.orderId}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={4} className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="relative hover:no-underline p-0 [&>svg]:absolute [&>svg]:right-0 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2">
                <div className="w-full grid grid-cols-[50%_1fr_auto] py-3 items-center">
                  <ul className="list-disc pl-4 space-y-1">
                    {order.items.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Badge className={`${statusColors[order.status]}`}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 mt-2">
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Order ID</div>
                  <div className="text-right">{order.orderId}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Customer Name</div>
                  <div className="text-right text-wrap">
                    {order.customerName}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Date</div>
                  <div className="text-right">
                    {formattedDate} <br />
                    at {formattedHour}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Price</div>
                  <div className="text-right">${order.total}</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TableCell>

        <TableCell className="hidden md:table-cell max-w-32">
          <ul className="list-disc list-inside space-y-1">
            {order.items.map((item, index) => (
              <li key={index} className="truncate">{item.name}</li>
            ))}
          </ul>
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {order.customerName}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          <span>{formattedDate}</span>
          <br />
          <span>at {formattedHour}</span>
        </TableCell>
        <TableCell className="hidden md:table-cell">
          ${order.items[0].price}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          <Badge className={`${statusColors[order.status]}`}>
            {order.status}
          </Badge>
        </TableCell>
      </TableRow>
    </>
  )
}

export default OrderRow
