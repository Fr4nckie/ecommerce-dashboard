import type { Customer } from "@/types/data.ts"
import { TableCell, TableRow } from "./ui/table.tsx"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.tsx"

const CustomerRow = ({ customer }: { customer: Customer }) => {
  return (
    <TableRow>
      <TableCell colSpan={2} className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="relative hover:no-underline p-0 [&>svg]:absolute [&>svg]:right-0 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2">
              <div className="space-y-1">
                <p className="text-xs text-blue-500">{customer.id}</p>
                <p>{customer.name}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-3 space-y-4">
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground">Purchases:</p>
                <p>${customer.purchases}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground">
                  {customer.orderQuantity > 1 ? "Orders:" : "Order:"}
                </p>
                <p>{customer.orderQuantity}1</p>
              </div>
              <div>
                <p className="text-muted-foreground">Contact:</p>
                <p>
                  <span>{customer.contact.email}</span>
                  <br />
                  <span>{customer.contact.phone}</span>
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Address</p>
                <p>
                  <span>{customer.address.street}</span>
                  <br />
                  <span>{customer.address.city}</span>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TableCell>

      <TableCell className="space-y-1 hidden md:table-cell">
        <p className="text-xs text-blue-500">{customer.id}</p>
        <p>{customer.name}</p>
      </TableCell>
      <TableCell className="space-y-1 hidden md:table-cell max-w-36">
        <p className="truncate">{customer.contact.email}</p>
        <p className="truncate">{customer.contact.phone}</p>
      </TableCell>
      <TableCell className="text-center hidden md:table-cell">
        ${customer.purchases}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {customer.orderQuantity > 1
          ? `${customer.orderQuantity} Orders`
          : `${customer.orderQuantity} Order`}
      </TableCell>
      <TableCell className="text-wrap hidden md:table-cell">
        <p>{customer.address.street}</p>
        <p>{customer.address.city}</p>
      </TableCell>
    </TableRow>
  )
}

export default CustomerRow
