import { Eye, SquarePen, Trash } from "lucide-react"
import { Button } from "../ui/button.tsx"

const ProductRowActions = () => {
  return (
    <>
      <Button variant="ghost" className="cursor-pointer">
        <Eye />
      </Button>
      <Button variant="ghost" className="cursor-pointer">
        <SquarePen />
      </Button>
      <Button variant="ghost" className="cursor-pointer">
        <Trash />
      </Button>
    </>
  )
}

export default ProductRowActions
