import React from 'react';
import { SidebarProvider, Sidebar, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import { AdminNav } from '@/components/admin/nav';
import AdminHeader from '@/components/admin/header';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar side="left" collapsible="icon" variant="sidebar">
        <AdminNav />
        <SidebarRail onHover="expand"/>
      </Sidebar>
      <SidebarInset className="bg-background">
        <AdminHeader />
        <main className="p-4 sm:p-6 lg:p-8">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
