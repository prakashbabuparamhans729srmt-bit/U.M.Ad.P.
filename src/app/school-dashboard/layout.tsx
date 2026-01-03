import React from 'react';
import { DashboardSidebar } from './components/DashboardSidebar';

export default function SchoolDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1">{children}</main>
      <aside className="hidden lg:block w-[350px] flex-shrink-0">
        <DashboardSidebar />
      </aside>
    </div>
  );
}
