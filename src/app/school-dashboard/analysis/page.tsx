'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { ChartTooltipContent, ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { List, Lightbulb, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const chartData = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 78 },
  { month: "Mar", attendance: 82 },
  { month: "Apr", attendance: 62 },
  { month: "May", attendance: 70 },
  { month: "Jun", attendance: 75 },
];

const chartConfig = {
  attendance: {
    label: "Performance",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;


export default function AnalysisReportPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-background p-4">
            <Card className="w-full max-w-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                        AI विश्लेषण रिपोर्ट
                    </CardTitle>
                    <CardDescription>शासकीय उच्चतर माध्यमिक विद्यालय, बीकानेर</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><TrendingUp size={18}/> प्रदर्शन प्रवृत्ति</h3>
                         <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                                    <Tooltip cursor={{ fill: 'hsl(var(--accent))' }} content={<ChartTooltipContent />} />
                                    <Bar dataKey="attendance" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </div>

                    <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><List size={18}/> समस्या क्षेत्र:</h3>
                        <ul className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                            <li>शिक्षक उपस्थिति (मार्च-अप्रैल)</li>
                            <li>छात्र उपस्थिति (सप्ताहांत के बाद)</li>
                            <li>मध्याह्न भोजन गुणवत्ता</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb size={18}/> AI सुझाव:</h3>
                         <ul className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                            <li>शिक्षक उपस्थिति बोनस योजना</li>
                            <li>छात्र उपस्थिति जागरूकता अभियान</li>
                            <li>भोजन गुणवत्ता ऑडिट टीम</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><Target size={18}/> भविष्यवाणी:</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p><strong>अगले महीने छात्र उपस्थिति:</strong> 75-80%</p>
                            <p><strong>बजट आवश्यकता:</strong> ₹2,45,000</p>
                        </div>
                    </div>
                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="outline" className="w-full">
                           वापस डैशबोर्ड पर जाएं
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
