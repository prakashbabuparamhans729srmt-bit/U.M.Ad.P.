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
  ShoppingCart,
  Map,
  CreditCard,
  MessageSquare,
  Landmark,
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
            <Link href="/dashboard">
              <SidebarMenuButton asChild isActive={pathname.startsWith('/dashboard')} tooltip="Dashboard">
                <span>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/orders">
              <SidebarMenuButton asChild isActive={pathname.startsWith('/orders')} tooltip="Orders">
                <span>
                  <ShoppingCart />
                  <span>Orders</span>
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>

        <Accordion type="multiple" className="w-full">
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <Link href="/city">
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/city')} tooltip="City">
                  <span>
                    <Map />
                    <span>City</span>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <AccordionItem value="general-category" className="border-none">
              <AccordionTrigger className="p-2 hover:no-underline hover:bg-sidebar-accent rounded-md [&[data-state=open]>svg]:-rotate-90">
                <List className="mr-2" /> Main Category
              </AccordionTrigger>
              <AccordionContent className="pl-6">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/categories">
                        <SidebarMenuButton asChild isActive={pathname.startsWith('/categories')} className="h-8">
                           <span>
                                <List className="mr-2" />
                                <span>Sub Category</span>
                           </span>
                        </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/child-categories">
                        <SidebarMenuButton asChild isActive={pathname.startsWith('/child-categories')} className="h-8">
                            <span>
                                <List className="mr-2" />
                                <span>Child Category</span>
                            </span>
                        </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/addons">
                        <SidebarMenuButton asChild isActive={pathname.startsWith('/addons')} className="h-8">
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
            <SidebarGroupLabel>Business</SidebarGroupLabel>
             <Link href="/timeslots">
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/timeslots')} tooltip="Timeslots & Dates">
                        <span>
                            <CalendarClock />
                            <span>TimeSlot & Date</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </Link>
            <Link href="/banners">
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/banners')} tooltip="Banners">
                        <span>
                            <ImageIcon />
                            <span>Banner</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </Link>
            <Link href="/partners">
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname.startsWith('/partners')} tooltip="Partners">
                        <span>
                            <Users />
                            <span>Partner</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </Link>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Finance</SidebarGroupLabel>
            <SidebarMenuItem>
              <Link href="/credit-packages">
                  <SidebarMenuButton asChild isActive={pathname.startsWith('/credit-packages')} tooltip="Credit Packages">
                      <span>
                          <CreditCard />
                          <span>Credit Packages</span>
                      </span>
                  </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/payment-gateway">
                  <SidebarMenuButton asChild isActive={pathname.startsWith('/payment-gateway')} tooltip="Payment Gateway">
                      <span>
                          <Landmark />
                          <span>Payment Gateway</span>
                      </span>
                  </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Content</SidebarGroupLabel>
            <SidebarMenuItem>
              <Link href="/testimonials">
                  <SidebarMenuButton asChild isActive={pathname.startsWith('/testimonials')} tooltip="Testimonials">
                      <span>
                          <MessageSquare />
                          <span>Testimonials</span>
                      </span>
                  </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarGroup>

        </Accordion>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/settings">
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
