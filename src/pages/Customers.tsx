import CustomerRow from "@/components/CustomerRow.tsx"
import { Card, CardContent } from "@/components/ui/card.tsx"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx"
import { CUSTOMERS } from "@/data/customers.ts"
import { ChevronsUpDown } from "lucide-react"

const Customers = () => {
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
            {CUSTOMERS.map((customer) => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Customers
