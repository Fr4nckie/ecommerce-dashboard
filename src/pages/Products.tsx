import ProductRow from "@/components/Products/ProductRow.tsx"
import ProductTableHeader from "@/components/Products/ProductTableHeader.tsx"
import { Card, CardContent } from "@/components/ui/card.tsx"
import { Table, TableBody } from "@/components/ui/table.tsx"
import { PRODUCTS } from "@/data/products.ts"

const Products = () => {
  return (
    <Card>
      <CardContent>
        <Table>
          <ProductTableHeader />
          <TableBody>
            {PRODUCTS.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Products
