import type { Product } from "@/types/data.ts"
import { TableCell, TableRow } from "../ui/table.tsx"
import { Badge } from "../ui/badge.tsx"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx"
import { Checkbox } from "../ui/checkbox.tsx"
import { cn } from "@/lib/utils.ts"
import ProductRowActions from "./ProductRowActions.tsx"

const STATUS_COLORS: Record<string, string> = {
  "In Stock": "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out of Stock": "bg-red-100 text-red-800",
}

const ProductRow = ({ product }: { product: Product }) => {
  const date = new Date(product.date)
  const formattedDate = date.toLocaleDateString("en-US")
  const formattedHour = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <TableRow>
      {/* Mobile */}
      <TableCell colSpan={3} className="p-0 md:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline p-0 [&>svg]:hidden">
              <div className="flex items-center w-full">
                <div className="w-8 ps-2 pe-8 py-3">
                  <Checkbox />
                </div>
                <div className="flex-1  py-3 text-left">{product.name}</div>
                <div className="w-12 pe-4 py-3 flex justify-end">
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-200 data-[state=open]:rotate-180"
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ps-10 space-y-4">
              <div>
                <span className="min-w-18 inline-block text-muted-foreground">
                  Price
                </span>
                <span>${product.price}</span>
              </div>
              <div>
                <span className="min-w-18 inline-block text-muted-foreground">
                  Size
                </span>
                <span>{product.size}</span>
              </div>
              <div>
                <span className="min-w-18 inline-block text-muted-foreground">
                  QTY
                </span>
                <span>{product.quantity}</span>
              </div>
              <div className="flex items-start">
                <span className="min-w-18 inline-block text-muted-foreground">
                  Date
                </span>
                <p>
                  <span>{formattedDate}</span> <br />
                  <span>{formattedHour}</span>
                </p>
              </div>
              <div>
                <span className="min-w-18 inline-block text-muted-foreground">
                  Status
                </span>
                <span>
                  <Badge className={cn(STATUS_COLORS[product.status])}>
                    {product.status}
                  </Badge>
                </span>
              </div>
              <div className="flex items-center">
                <span className="min-w-18 inline-block text-muted-foreground">
                  Action
                </span>
                <span>
                  <ProductRowActions />
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TableCell>

      {/* desktop */}
      <TableCell className="hidden md:table-cell">
        <Checkbox />
      </TableCell>
      <TableCell className="hidden md:table-cell">{product.name}</TableCell>
      <TableCell className="hidden md:table-cell">${product.price}</TableCell>
      <TableCell className="hidden md:table-cell">{product.quantity}</TableCell>
      <TableCell className="hidden text-xs md:table-cell lg:text-sm">
        <span>{formattedDate}</span>
        <br />
        <span>{formattedHour}</span>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge className={cn(STATUS_COLORS[product.status])}>
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{product.size}</TableCell>
      <TableCell className="hidden text-right md:table-cell">
        <ProductRowActions />
      </TableCell>
    </TableRow>
  )
}

export default ProductRow
