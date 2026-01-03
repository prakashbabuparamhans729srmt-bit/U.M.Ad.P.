'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Home, BarChart2, Video, MessageSquare, User, MapPin, Bell, Settings } from "lucide-react";
import Link from "next/link";

export function DashboardSidebar() {
  return (
    <div className="h-full flex flex-col bg-card border-l">
        <div className="p-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="स्कूल खोजें" className="pl-9" />
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
            <div>
                <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-2">⭐ FAVORITE SCHOOLS</h3>
                <Card className="hover:bg-secondary transition-colors">
                    <CardContent className="p-3">
                        <p className="font-bold">शास. उ.मा. विद्यालय, बीकानेर</p>
                        <div className="text-sm text-muted-foreground flex justify-between">
                            <span>🟢 85%</span>
                            <span>👥 342/500</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-2">📍 NEARBY SCHOOLS (5km)</h3>
                <div className="space-y-2">
                    <Card className="hover:bg-secondary transition-colors">
                        <CardContent className="p-3">
                            <p className="font-bold">केंद्रीय विद्यालय नं. 1</p>
                            <div className="text-sm text-muted-foreground flex justify-between">
                                <span>🟢 92%</span>
                                <span>👥 410/450</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover:bg-secondary transition-colors">
                        <CardContent className="p-3">
                            <p className="font-bold">सरस्वती शिशु मंदिर</p>
                            <div className="text-sm text-muted-foreground flex justify-between">
                                <span className="text-yellow-500">🟡 78%</span>
                                <span>👥 280/350</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                 <Link href="/school-dashboard/alerts">
                    <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-2 flex items-center gap-1 hover:text-primary">
                        <Bell size={14} /> 🚨 ALERTS (3)
                    </h3>
                </Link>
                <div className="space-y-2">
                    <Card className="bg-red-500/10 border-red-500/20">
                        <CardContent className="p-3">
                            <p className="font-bold text-red-500">🔴 आपके बच्चे के स्कूल में मध्याह्न भोजन नहीं बना</p>
                            <p className="text-sm text-red-500/80">आज (12:00 PM)</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-yellow-500/10 border-yellow-500/20">
                        <CardContent className="p-3">
                            <p className="font-bold text-yellow-500">🟡 शिक्षक उपस्थिति 62%</p>
                             <p className="text-sm text-yellow-500/80">(सामान्य से कम)</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>

        <div className="mt-auto p-2 border-t">
             <div className="flex justify-around">
                <Link href="/school-dashboard" className="flex flex-col items-center text-muted-foreground hover:text-primary" replace={true}><Home size={20}/><span className="text-xs">होम</span></Link>
                <Link href="/school-dashboard" className="flex flex-col items-center text-primary font-bold"><BarChart2 size={20}/><span className="text-xs">डैशबोर्ड</span></Link>
                <Link href="/school-dashboard" className="flex flex-col items-center text-muted-foreground hover:text-primary"><Video size={20}/><span className="text-xs">CCTV</span></Link>
                <Link href="/school-dashboard/settings" className="flex flex-col items-center text-muted-foreground hover:text-primary"><Settings size={20}/><span className="text-xs">सेटिंग</span></Link>
            </div>
        </div>
    </div>
  );
}
