import { Eye, MoreHorizontalIcon, SquarePen, Trash } from "lucide-react"
import { Button } from "../ui/button.tsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu.tsx"

const ProductRowActions = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label="Open menu" size="icon-sm">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem>
          <Eye /> Show
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SquarePen /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProductRowActions
