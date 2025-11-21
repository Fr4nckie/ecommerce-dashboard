import { TableHead, TableHeader, TableRow } from "../ui/table.tsx"
import { ChevronsUpDown, Square } from "lucide-react"

const ProductTableHeader = () => {
  return (
    <TableHeader className="w-full">
      <TableRow>
        <TableHead className="w-8 hidden md:table-cell">
          <Square size={17} />
        </TableHead>
        <TableHead>Product</TableHead>
        <TableHead className="hidden md:table-cell">Price</TableHead>
        <TableHead className="hidden md:table-cell">QTY</TableHead>
        <TableHead className="hidden md:table-cell">Date</TableHead>
        <TableHead className="hidden md:table-cell">Status</TableHead>
        <TableHead className="hidden md:table-cell">Size</TableHead>
        <TableHead className="hidden text-right md:table-cell">Action</TableHead>

        {/** Mobile */}
        <TableHead className="w-12 pe-4 md:hidden">
          <div className="flex justify-end">
            <ChevronsUpDown size={18} />
          </div>
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}

export default ProductTableHeader
