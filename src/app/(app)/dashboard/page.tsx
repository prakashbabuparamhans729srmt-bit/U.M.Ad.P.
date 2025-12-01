import {
    CircleDollarSign,
    Package,
    Clock,
    CircleX,
    CircleCheckBig,
  } from "lucide-react"

import { MetricCard } from "./components/metric-card"
import { SalesOverviewChart } from "./components/sales-overview-chart"
import { OrderStatsChart } from "./components/order-stats-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                <MetricCard title="Total Orders" value="670" icon={Package} change="+20.1% from last month" />
                <MetricCard title="Pending" value="120" icon={Clock} change="+180.1% from last month" />
                <MetricCard title="Processing" value="80" icon={Clock} change="+19% from last month" />
                <MetricCard title="Completed" value="450" icon={CircleCheckBig} change="+201 since last hour" />
                <MetricCard title="Cancelled" value="50" icon={CircleX} change="+5 from yesterday" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="lg:col-span-4">
                    <SalesOverviewChart />
                </div>
                <div className="lg:col-span-3">
                    <OrderStatsChart />
                </div>
            </div>

            <Card className="col-span-full">
                <CardHeader>
                    <CardTitle>Total Sales</CardTitle>
                    <CardDescription>
                        An overview of your total sales amount.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                     <div className="text-4xl font-bold">$45,231.89</div>
                     <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>

        </div>
    )
}
