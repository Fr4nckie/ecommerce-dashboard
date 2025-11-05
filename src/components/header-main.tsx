import { Separator } from "@radix-ui/react-separator"
import { SidebarTrigger } from "./ui/sidebar.tsx"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const HeaderMain = () => {
  const location = useLocation()
  const [title, setTitle] = useState("")

  useEffect(() => {
    const title = location.pathname.split("/").join("")
    setTitle(title)
  }, [location])

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        {title && <h1 className="capitalize text-base font-medium">{title}</h1>}
      </div>
    </header>
  )
}

export default HeaderMain
