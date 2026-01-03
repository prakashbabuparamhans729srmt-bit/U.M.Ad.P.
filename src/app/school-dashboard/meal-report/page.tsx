

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertTriangle, Star, Soup, Share2, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MealReportPage() {
    return (
        <div className="flex justify-center items-start min-h-screen p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold flex items-center gap-2"><Soup /> मध्याह्न भोजन रिपोर्ट</CardTitle>
                            <CardDescription>आज और इस सप्ताह की भोजन स्थिति और गुणवत्ता का विवरण</CardDescription>
                        </div>
                         <div className="flex gap-2">
                           <Button variant="outline" size="icon">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download Report</span>
                            </Button>
                             <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share Report</span>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="border rounded-lg p-4 bg-red-500/10 border-red-500/30">
                        <h3 className="font-bold text-red-500 flex items-center gap-2 mb-2"><AlertTriangle /> आज की स्थिति (15 अप्रैल)</h3>
                        <p className="font-semibold text-lg">भोजन नहीं बना</p>
                        <p className="text-sm text-muted-foreground">कारण: रसोइया अनुपस्थित।</p>
                        <p className="text-sm text-muted-foreground">की गई कार्रवाई: प्रिंसिपल और ब्लॉक अधिकारी को सूचित किया गया।</p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-2">इस सप्ताह की गुणवत्ता रिपोर्ट</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span>सोमवार (दाल, चावल)</span>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-muted-foreground"/>
                                </div>
                            </div>
                             <div className="flex justify-between items-center text-sm">
                                <span>मंगलवार (रोटी, सब्जी)</span>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span>बुधवार (खिचड़ी)</span>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/> <Star className="w-4 h-4 text-muted-foreground"/> <Star className="w-4 h-4 text-muted-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="space-y-2">
                        <h3 className="font-bold">AI सुझाव</h3>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                            <li>वैकल्पिक रसोइया की व्यवस्था पर विचार करें।</li>
                            <li>साप्ताहिक मेनू में विविधता लाएं।</li>
                            <li>फीडबैक के आधार पर बुधवार के भोजन की गुणवत्ता जांचें।</li>
                        </ul>
                    </div>

                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="outline" className="w-full mt-6">
                           <ArrowLeft className="mr-2 h-4 w-4" />
                           मुख्य डैशबोर्ड पर वापस जाएं
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
