import type { Product } from "@/types/data.ts"
import { TableCell, TableRow } from "../ui/table.tsx"
import { Badge } from "../ui/badge.tsx"
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
  "in stock": "bg-green-100 text-green-800",
  "low stock": "bg-yellow-100 text-yellow-800",
  "out of stock": "bg-red-100 text-red-800",
}

const ProductRow = ({ product }: { product: Product }) => {
  return (
    <TableRow>
      {/* Mobile */}
      <TableCell colSpan={3} className="p-0 md:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="relative hover:no-underline p-0 [&>svg]:absolute [&>svg]:right-4 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2">
              <div className="flex-1 ps-2 py-3 text-left">{product.title}</div>
            </AccordionTrigger>
            <AccordionContent className="ps-2 mt-2 space-y-4">
              <Checkbox />
              <div>
                <span className="min-w-24 inline-block text-muted-foreground">
                  Price
                </span>
                <span>${product.price}</span>
              </div>
              <div>
                <span className="min-w-24 inline-block text-muted-foreground">
                  QTY
                </span>
                <span>{product.stock}</span>
              </div>
              <div>
                <span className="min-w-18 inline-block text-muted-foreground">
                  Status
                </span>
                <span className="capitalize">
                  <Badge className={cn(STATUS_COLORS[product.status])}>
                    {product.status}
                  </Badge>
                </span>
              </div>
              <div>
                <span className="min-w-24 inline-block text-muted-foreground">
                  Category
                </span>
                <span className="capitalize">{product.category}</span>
              </div>
              <div className="flex items-center">
                <span className="min-w-24 inline-block text-muted-foreground">
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
      <TableCell className="hidden md:table-cell">{product.title}</TableCell>
      <TableCell className="hidden md:table-cell">${product.price}</TableCell>
      <TableCell className="hidden md:table-cell">{product.stock}</TableCell>

      <TableCell className="hidden md:table-cell">
        <Badge className={cn(STATUS_COLORS[product.status])}>
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="capitalize hidden md:table-cell">
        {product.category}
      </TableCell>
      <TableCell className="hidden text-right md:table-cell">
        <ProductRowActions />
      </TableCell>
    </TableRow>
  )
}

export default ProductRow
