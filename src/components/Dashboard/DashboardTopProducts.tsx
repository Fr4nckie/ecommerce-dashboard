import { TOP_PRODUCTS } from "@/data/topProducts.ts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.tsx"
import { Separator } from "../ui/separator.tsx"

const DashboardTopProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {TOP_PRODUCTS.map((product, index) => (
            <div key={product.id}>
              <div className="flex items-center justify-between">
                <p>{product.name}</p>
                <p className="text-right">${product.price}</p>
              </div>
              {index < TOP_PRODUCTS.length - 1 && (
                <Separator className="mt-3" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default DashboardTopProducts
