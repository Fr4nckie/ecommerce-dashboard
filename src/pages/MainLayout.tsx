import { AppSidebar } from "@/components/app-sidebar.tsx"
import HeaderMain from "@/components/header-main.tsx"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar.tsx"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderMain />
        <div className="flex flex-1 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default MainLayout
