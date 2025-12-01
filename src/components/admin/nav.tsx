'use client'

import {
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
  } from '@/components/ui/sidebar'
  import {
    LayoutDashboard,
    ShoppingCart,
    LayoutGrid,
    ImageIcon,
    CalendarClock,
    Users,
    Settings,
    Clapperboard,
  } from 'lucide-react'
  import Link from 'next/link'
  import { usePathname } from 'next/navigation'
  
  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/orders', label: 'Orders', icon: ShoppingCart },
    { href: '/categories', label: 'Categories', icon: LayoutGrid },
    { href: '/banners', label: 'Banners', icon: ImageIcon },
    { href: '/timeslots', label: 'Timeslots', icon: CalendarClock },
    { href: '/partners', label: 'Partners', icon: Users },
  ]
  
  export function AdminNav() {
    const pathname = usePathname()
  
    return (
      <>
        <SidebarHeader className="p-2">
          <div className="flex items-center gap-2.5 p-2">
              <Clapperboard className="w-7 h-7 text-primary" />
              <h1 className="text-xl font-bold">UCLAP</h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={pathname.startsWith(link.href)} tooltip={link.label}>
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className='p-2'>
          <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/settings')} tooltip="Settings">
                  <Link href="/settings">
                      <Settings />
                      <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </>
    )
  }
  