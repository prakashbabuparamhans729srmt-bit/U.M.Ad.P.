'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { ChartTooltipContent, ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Lightbulb, Target, TrendingUp, BarChart4, PieChartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const monthlyData = [
  { month: "Jan", attendance: 85, performance: 90, districtAverage: 88 },
  { month: "Feb", attendance: 78, performance: 82, districtAverage: 85 },
  { month: "Mar", attendance: 82, performance: 85, districtAverage: 84 },
  { month: "Apr", attendance: 62, performance: 65, districtAverage: 75 },
  { month: "May", attendance: 70, performance: 72, districtAverage: 78 },
  { month: "Jun", attendance: 75, performance: 80, districtAverage: 81 },
];

const weeklyData = [
    { week: "W1", attendance: 90, performance: 92, districtAverage: 89 },
    { week: "W2", attendance: 88, performance: 90, districtAverage: 88 },
    { week: "W3", attendance: 85, performance: 88, districtAverage: 86 },
    { week: "W4", attendance: 82, performance: 85, districtAverage: 85 },
];

const yearlyData = [
    { year: "2022", attendance: 80, performance: 85, districtAverage: 82 },
    { year: "2023", attendance: 85, performance: 88, districtAverage: 84 },
    { year: "2024", attendance: 78, performance: 81, districtAverage: 80 },
];

const resourceData = [
    { name: 'बिजली', value: 45, fill: 'hsl(var(--chart-1))' },
    { name: 'पानी', value: 30, fill: 'hsl(var(--chart-2))' },
    { name: 'लैब', value: 15, fill: 'hsl(var(--chart-3))' },
    { name: 'अन्य', value: 10, fill: 'hsl(var(--chart-4))' },
];


const chartConfig = {
  attendance: { label: "छात्र उपस्थिति", color: "hsl(var(--primary))" },
  performance: { label: "शिक्षक प्रदर्शन", color: "hsl(var(--foreground))" },
  districtAverage: { label: "जिला औसत", color: "hsl(var(--muted-foreground))" },
} satisfies ChartConfig;


export default function AnalysisReportPage() {
    const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');
    const [showDistrictAverage, setShowDistrictAverage] = useState(true);

    const dataMap = {
        weekly: { data: weeklyData, key: 'week' },
        monthly: { data: monthlyData, key: 'month' },
        yearly: { data: yearlyData, key: 'year' },
    };

    const { data: chartData, key: dataKey } = dataMap[timeframe];

    return (
        <div className="flex justify-center items-start min-h-screen bg-background p-4 font-headline">
            <Card className="w-full max-w-3xl shadow-[0_0_25px_rgba(7,241,214,0.2)]">
                <CardHeader className="text-center border-b border-primary/20 pb-4">
                    <CardTitle className="text-3xl font-black flex items-center justify-center gap-2 text-primary tracking-widest">
                         <BarChart4 />
                        AI ANALYSIS REPORT
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">शासकीय उच्चतर माध्यमिक विद्यालय, बीकानेर</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 p-6">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                             <h3 className="text-xl font-bold flex items-center gap-2 text-primary"><TrendingUp size={22}/> Performance Trend</h3>
                             <div className="flex items-center gap-2">
                                <Label htmlFor="district-avg-switch" className="text-sm">Show District Avg.</Label>
                                <Switch id="district-avg-switch" checked={showDistrictAverage} onCheckedChange={setShowDistrictAverage} />
                            </div>
                        </div>

                         <div className="flex justify-center gap-2 mb-6">
                            <Button variant={timeframe === 'weekly' ? 'default' : 'outline'} size="sm" onClick={() => setTimeframe('weekly')}>Weekly</Button>
                            <Button variant={timeframe === 'monthly' ? 'default' : 'outline'} size="sm" onClick={() => setTimeframe('monthly')}>Monthly</Button>
                            <Button variant={timeframe === 'yearly' ? 'default' : 'outline'} size="sm" onClick={() => setTimeframe('yearly')}>Yearly</Button>
                        </div>

                         <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                                    <XAxis dataKey={dataKey} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                                    <Tooltip 
                                      cursor={{ fill: 'hsla(var(--primary), 0.1)' }} 
                                      contentStyle={{ 
                                        backgroundColor: 'hsl(var(--background))', 
                                        borderColor: 'hsl(var(--primary))', 
                                        color: 'hsl(var(--foreground))'
                                      }}
                                      content={<ChartTooltipContent />} 
                                    />
                                    <Legend />
                                    <Bar dataKey="attendance" name="Attendance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="performance" name="Performance" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
                                    {showDistrictAverage && <Bar dataKey="districtAverage" name="District Avg" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />}
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold flex items-center gap-2 text-primary mb-2"><Lightbulb size={20}/> AI Suggestions</h3>
                                <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                                    <li>Initiate a performance-based bonus program to address low teacher attendance.</li>
                                    <li>Increase student engagement by organizing an interactive session mid-week.</li>
                                    <li>Establish a weekly audit team to monitor meal quality.</li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-lg font-bold flex items-center gap-2 text-primary mb-2"><Target size={20}/> Predictions</h3>
                                <div className="text-sm space-y-2 border border-primary/20 p-4 rounded-md bg-secondary/30">
                                    <p><strong>Next Week Student Attendance:</strong> <span className="font-bold text-primary animate-pulse-neon">78-82%</span></p>
                                    <p><strong>Next Month Budget Requirement:</strong> ₹2,50,000 (+2%)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                             <h3 className="text-lg font-bold flex items-center gap-2 text-primary mb-2"><PieChartIcon size={20}/> Resource Utilization</h3>
                             <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Tooltip 
                                            contentStyle={{ 
                                                backgroundColor: 'hsl(var(--background))', 
                                                borderColor: 'hsl(var(--primary))'
                                            }}
                                            content={<ChartTooltipContent hideLabel />} 
                                        />
                                        <Pie data={resourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                             {resourceData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} className="focus:outline-none focus:ring-2 focus:ring-primary" />
                                            ))}
                                        </Pie>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </div>
                    </div>
                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="outline" className="w-full mt-6">
                           Back to Main Dashboard
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
