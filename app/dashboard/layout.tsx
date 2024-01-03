import SidebarMenu from "@/components/dashboard/sidebarmenu"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Sidebar, SidebarItem } from "flowbite-react"

export default function Layout({ children } : { children : React.ReactNode }) {
    return (
        <div>
            
            <SidebarMenu/>
            <div className="fixed left-[300px] p-4 right-0">
                {children}
            </div>
        </div>
    )
}