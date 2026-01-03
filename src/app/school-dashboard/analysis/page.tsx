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
  performance: { label: "शिक्षक प्रदर्शन", color: "hsl(var(--secondary-foreground))" },
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
        <div className="flex justify-center items-start min-h-screen bg-background p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                         <BarChart4 />
                        AI विश्लेषण रिपोर्ट
                    </CardTitle>
                    <CardDescription>शासकीय उच्चतर माध्यमिक विद्यालय, बीकानेर</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                             <h3 className="font-semibold flex items-center gap-2"><TrendingUp size={18}/> प्रदर्शन प्रवृत्ति</h3>
                             <div className="flex items-center gap-2">
                                <Label htmlFor="district-avg-switch">जिला औसत दिखाएं</Label>
                                <Switch id="district-avg-switch" checked={showDistrictAverage} onCheckedChange={setShowDistrictAverage} />
                            </div>
                        </div>

                         <div className="flex justify-center gap-2 mb-4">
                            <Button variant={timeframe === 'weekly' ? 'default' : 'outline'} size="sm" onClick={() => setTimeframe('weekly')}>साप्ताहिक</Button>
                            <Button variant={timeframe === 'monthly' ? 'default' : 'outline'} size="sm" onClick={() => setTimeframe('monthly')}>मासिक</Button>
                            <Button variant={timeframe === 'yearly' ? 'default' : 'outline'} size="sm" onClick={() => setTimeframe('yearly')}>वार्षिक</Button>
                        </div>

                         <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                                    <XAxis dataKey={dataKey} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                                    <Tooltip cursor={{ fill: 'hsl(var(--accent))' }} content={<ChartTooltipContent />} />
                                    <Legend />
                                    <Bar dataKey="attendance" name="उपस्थिति" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="performance" name="प्रदर्शन" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                                    {showDistrictAverage && <Bar dataKey="districtAverage" name="जिला औसत" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />}
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb size={18}/> AI सुझाव:</h3>
                                <ul className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                                    <li><Badge variant="secondary">कम</Badge> शिक्षक उपस्थिति को संबोधित करने के लिए एक प्रदर्शन-आधारित बोनस कार्यक्रम शुरू करें।</li>
                                    <li><Badge variant="secondary">मध्यम</Badge> सप्ताह के मध्य में एक इंटरैक्टिव सत्र आयोजित करके छात्र जुड़ाव बढ़ाएँ।</li>
                                    <li><Badge variant="secondary">उच्च</Badge> भोजन की गुणवत्ता की निगरानी के लिए एक साप्ताहिक ऑडिट टीम स्थापित करें।</li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="font-semibold flex items-center gap-2 mb-2"><Target size={18}/> भविष्यवाणी:</h3>
                                <div className="text-sm text-muted-foreground space-y-2 border p-3 rounded-md bg-secondary/30">
                                    <p><strong>अगले सप्ताह छात्र उपस्थिति:</strong> <span className="font-bold text-primary">78-82%</span></p>
                                    <p><strong>अगले महीने बजट आवश्यकता:</strong> ₹2,50,000 (+2%)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                             <h3 className="font-semibold flex items-center gap-2 mb-2"><PieChartIcon size={18}/> संसाधन उपयोग स्वास्थ्य</h3>
                             <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Tooltip content={<ChartTooltipContent hideLabel />} />
                                        <Pie data={resourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                             {resourceData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </ChartContainer>
                        </div>
                    </div>
                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="outline" className="w-full mt-4">
                           वापस डैशबोर्ड पर जाएं
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
