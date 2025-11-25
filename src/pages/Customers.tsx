import CustomerRow from "@/components/CustomerRow.tsx"
import { Card, CardContent } from "@/components/ui/card.tsx"
import { Spinner } from "@/components/ui/spinner.tsx"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx"
import { useGetProductsQuery } from "@/features/customers/customersApi.ts"
import { ChevronsUpDown } from "lucide-react"

const Customers = () => {
  const { data: customers = [], isLoading } = useGetProductsQuery()

  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner className="size-6" />
      </div>
    )

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead className="hidden md:table-cell">Purchases</TableHead>
              <TableHead className="hidden md:table-cell">Order QTY</TableHead>
              <TableHead className="hidden md:table-cell">Address</TableHead>
              <TableHead className="md:hidden">
                <div className="flex justify-end">
                  <ChevronsUpDown size={18} />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Customers
