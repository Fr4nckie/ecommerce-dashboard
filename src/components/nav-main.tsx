import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Box,
  ChartLine,
  ClipboardList,
  LucideLayoutDashboard,
  Settings,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"

const items = [
  { title: "Dashboard", url: "dashboard", icon: LucideLayoutDashboard },
  { title: "Products", url: "products", icon: Box },
  { title: "Orders", url: "orders", icon: ClipboardList },
  { title: "Customers", url: "customers", icon: Users },
  { title: "Analytics", url: "analytics", icon: ChartLine },
  { title: "Settings", url: "settings", icon: Settings },
]

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <Link to={item.url} key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
