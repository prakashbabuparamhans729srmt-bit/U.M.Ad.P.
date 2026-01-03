
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, Bell, CheckCircle, Clock, MapPin, Users, BarChartHorizontal } from "lucide-react";
import { FooterNav } from "../components/FooterNav";

export default function AlertsPage() {
    return (
        <div className="flex justify-center items-start min-h-screen bg-background p-4">
            <Card className="w-full max-w-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Bell />
                        चेतावनी सूचनाएं
                    </CardTitle>
                    <CardDescription>तत्काल ध्यान देने योग्य मामले</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-red-500 flex items-center gap-2 mb-2"><AlertTriangle /> CRITICAL (तत्काल कार्रवाई)</h3>
                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-500/10 rounded-r-lg space-y-1 text-sm">
                                <p className="font-semibold">मध्याह्न भोजन नहीं बना</p>
                                <div className="text-xs text-muted-foreground flex items-center gap-4">
                                    <span className="flex items-center gap-1"><Clock size={12} /> 11:30 AM</span>
                                    <span className="flex items-center gap-1"><MapPin size={12} /> भोजनशाला</span>
                                </div>
                                <div className="text-xs text-muted-foreground flex items-center gap-1">
                                   <Users size={12} /> अधिसूचित: रसोइया, प्रिंसिपल
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-yellow-500 flex items-center gap-2 mb-2"><Bell /> WARNING (24 घंटे में देखें)</h3>
                            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-500/10 rounded-r-lg space-y-1 text-sm">
                                <p className="font-semibold">कक्षा 8 CCTV बंद</p>
                                <div className="text-xs text-muted-foreground flex items-center gap-4">
                                    <span className="flex items-center gap-1"><Clock size={12} /> 2 दिन से</span>
                                    <span className="flex items-center gap-1"><MapPin size={12} /> कक्षा 8</span>
                                </div>
                                 <div className="text-xs text-muted-foreground flex items-center gap-1">
                                   <Users size={12} /> अधिसूचित: टेक स्टाफ
                                </div>
                            </div>
                        </div>

                         <div>
                            <h3 className="font-bold text-green-500 flex items-center gap-2 mb-2"><Info /> INFO (सूचना)</h3>
                            <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-500/10 rounded-r-lg space-y-2 text-sm">
                                <p className="flex items-center gap-2"><CheckCircle size={14} /> जल टैंक 80% भरा</p>
                                <p className="flex items-center gap-2"><CheckCircle size={14} /> बिजली बिल भुगतान उचित</p>
                                <p className="flex items-center gap-2"><CheckCircle size={14} /> शौचालय सफाई पूर्ण</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-2"><BarChartHorizontal /> अलर्ट सांख्यिकी:</h3>
                        <div className="text-sm text-muted-foreground space-y-1 border p-3 rounded-md">
                            <p><strong>इस महीने:</strong> 12 अलर्ट</p>
                            <p><strong>हल किए गए:</strong> 9 (75%)</p>
                            <p><strong>लंबित:</strong> 3</p>
                        </div>
                    </div>

                </CardContent>
            </Card>
            <FooterNav />
        </div>
    )
}
