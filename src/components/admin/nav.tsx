'use client';

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Building,
  List,
  Plus,
  CalendarClock,
  ImageIcon,
  Users,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AdminNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="p-2">
        <div className="flex items-center gap-2.5 p-2">
          <h1 className="text-xl font-bold">UCLAP</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard" passHref>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard')} tooltip="Dashboard">
                    <span>
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        <Accordion type="multiple" className="w-full">
          <SidebarGroup>
            <SidebarGroupLabel>CITY SECTION</SidebarGroupLabel>
            <AccordionItem value="city-section" className="border-none">
              <AccordionTrigger className="p-2 hover:no-underline hover:bg-sidebar-accent rounded-md [&[data-state=open]>svg]:-rotate-90">
                <Building className="mr-2" /> City
              </AccordionTrigger>
              <AccordionContent className="p-0"></AccordionContent>
            </AccordionItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>GENERAL CATEGORY SECTION</SidebarGroupLabel>
            <AccordionItem value="general-category" className="border-none">
              <AccordionTrigger className="p-2 hover:no-underline hover:bg-sidebar-accent rounded-md [&[data-state=open]>svg]:-rotate-90">
                <List className="mr-2" /> Main Category
              </AccordionTrigger>
              <AccordionContent className="pl-6">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/categories" passHref>
                        <SidebarMenuButton asChild isActive={pathname.startsWith('/categories')} className="h-8">
                            <span>
                                <List className="mr-2" />
                                <span>Sub Category</span>
                            </span>
                        </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="#" passHref>
                        <SidebarMenuButton asChild className="h-8">
                            <span>
                                <List className="mr-2" />
                                <span>Child Category</span>
                            </span>
                        </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="#" passHref>
                        <SidebarMenuButton asChild className="h-8">
                            <span>
                                <Plus className="mr-2" />
                                <span>Add On</span>
                            </span>
                        </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </AccordionContent>
            </AccordionItem>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>TIMESLOT & DATE SECTION</SidebarGroupLabel>
             <Link href="/timeslots">
                <AccordionItem value="timeslot-date" className="border-none">
                <AccordionTrigger className="p-2 hover:no-underline hover:bg-sidebar-accent rounded-md [&[data-state=open]>svg]:-rotate-90">
                    <CalendarClock className="mr-2" /> TimeSlot & Date
                </AccordionTrigger>
                <AccordionContent className="p-0"></AccordionContent>
                </AccordionItem>
            </Link>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>BANNER SECTION</SidebarGroupLabel>
            <Link href="/banners">
                <AccordionItem value="banner-section" className="border-none">
                    <AccordionTrigger className="p-2 hover:no-underline hover:bg-sidebar-accent rounded-md [&[data-state=open]>svg]:-rotate-90">
                        <ImageIcon className="mr-2" /> Banner
                    </AccordionTrigger>
                    <AccordionContent className="p-0"></AccordionContent>
                </AccordionItem>
            </Link>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>PARTNER SECTION</SidebarGroupLabel>
            <Link href="/partners">
                <AccordionItem value="partner-section" className="border-none">
                    <AccordionTrigger className="p-2 hover:no-underline hover:bg-sidebar-accent rounded-md [&[data-state=open]>svg]:-rotate-90">
                        <Users className="mr-2" /> Partner
                    </AccordionTrigger>
                    <AccordionContent className="p-0"></AccordionContent>
                </AccordionItem>
            </Link>
          </SidebarGroup>

        </Accordion>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/settings" passHref>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/settings')} tooltip="Settings">
                    <span>
                        <Settings />
                        <span>Settings</span>
                    </span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
