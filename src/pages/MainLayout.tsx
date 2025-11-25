import { AppSidebar } from "@/components/app-sidebar.tsx"
import HeaderMain from "@/components/header-main.tsx"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar.tsx"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen flex flex-col">
        <HeaderMain />
        <div className="flex flex-1 flex-col p-4">
          <div className="w-full h-full grid grid-cols-1">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default MainLayout
