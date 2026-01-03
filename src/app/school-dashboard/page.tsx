import { DashboardHeader } from './components/DashboardHeader';
import { StatCards } from './components/StatCards';
import { CCTVGrid } from './components/CCTVGrid';
import { AnalysisSection } from './components/AnalysisSection';
import { ReportTable } from './components/ReportTable';
import { InfoGrid } from './components/InfoGrid';
import { Suggestions } from './components/Suggestions';
import { FooterNav } from './components/FooterNav';
import SchoolDashboardLayout from './layout';

export default function SchoolDashboard() {
  return (
    <SchoolDashboardLayout>
      <div className="p-4 space-y-4 pb-20 lg:pb-4">
        <DashboardHeader />
        <StatCards />
        <CCTVGrid />
        <AnalysisSection />
        <ReportTable />
        <InfoGrid />
        <Suggestions />
      </div>
      <FooterNav />
    </SchoolDashboardLayout>
  );
}
