import React from 'react';
import { DashboardSidebar } from './components/DashboardSidebar';
import { Chatbot } from './components/Chatbot';

export default function SchoolDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <main className="flex-grow flex-1 overflow-y-auto">{children}</main>
      <aside className="hidden lg:block w-[350px] flex-shrink-0">
        <DashboardSidebar />
      </aside>
      <Chatbot />
    </div>
  );
}
