import ProductRow from "@/components/Products/ProductRow.tsx"
import ProductTableHeader from "@/components/Products/ProductTableHeader.tsx"
import { Card, CardContent } from "@/components/ui/card.tsx"
import { Spinner } from "@/components/ui/spinner.tsx"
import { Table, TableBody } from "@/components/ui/table.tsx"
import { useGetProductsQuery } from "@/features/products/productsApi.ts"

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner className="size-6" />
      </div>
    )
  }

  if (!products) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>No products available</p>
      </div>
    )
  }

  return (
    <Card>
      <CardContent>
        <Table>
          <ProductTableHeader />
          <TableBody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Products
