import {
  Package,
  List,
  Plus,
  Users,
  Wrench,
  CreditCard,
  Layout,
  MapPin,
  CircleUser,
  MessageSquare,
  Landmark,
  CalendarClock,
  IndianRupee,
  ImageIcon,
} from 'lucide-react';
import { MetricCard } from './components/metric-card';
import { SalesOverviewChart } from './components/sales-overview-chart';
import { OrderStatsChart } from './components/order-stats-chart';

const metrics = [
  { title: 'Total Sales', value: '₹ 534', icon: IndianRupee },
  { title: 'Total Banners', value: '3', icon: ImageIcon },
  { title: 'Total Main Category', value: '9', icon: List },
  { title: 'Total Payment Gateway', value: '5', icon: Landmark },
  { title: 'Total Sub Category', value: '9', icon: List },
  { title: 'Total Child Category', value: '41', icon: List },
  { title: 'Total Add On', value: '36', icon: Plus },
  { title: 'Total Timeslot & Date', value: '9', icon: CalendarClock },
  { title: 'Total Partner', value: '148', icon: Users },
  { title: 'Total Partner Service', value: '57', icon: Wrench },
  { title: 'Total Credit Package', value: '3', icon: CreditCard },
  { title: 'Total Section', value: '1', icon: Layout },
  { title: 'Total Section Service', value: '4', icon: Wrench },
  { title: 'Total City', value: '1', icon: MapPin },
  { title: 'Total Customer', value: '631', icon: CircleUser },
  { title: 'Total Testimonial', value: '8', icon: MessageSquare },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-card p-4 text-card-foreground shadow-sm">
                <div className="text-sm text-muted-foreground">Pending</div>
                <div className="text-2xl font-bold text-primary">1413</div>
            </div>
            <div className="rounded-lg bg-card p-4 text-card-foreground shadow-sm">
                <div className="text-sm text-muted-foreground">Process</div>
                <div className="text-2xl font-bold">2</div>
            </div>
            <div className="rounded-lg bg-card p-4 text-card-foreground shadow-sm">
                <div className="text-sm text-muted-foreground">Cancel</div>
                <div className="text-2xl font-bold">90</div>
            </div>
            <div className="rounded-lg bg-card p-4 text-card-foreground shadow-sm">
                <div className="text-sm text-muted-foreground">Completed</div>
                <div className="text-2xl font-bold">1</div>
            </div>
        </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-lg bg-primary p-6 text-primary-foreground shadow-sm">
          <Package className="h-10 w-10" />
          <div className="mt-2 text-sm">Total Orders</div>
          <div className="text-4xl font-bold">1506</div>
        </div>
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SalesOverviewChart />
        <OrderStatsChart />
      </div>
    </div>
  );
}
