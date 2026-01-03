
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Building, Droplets, Bolt, FlaskConical, Wifi, Share2, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const infraStatus = [
    { name: "कक्षा के कमरे", icon: Building, total: 18, working: 18, status: "ok" },
    { name: "शौचालय", icon: Droplets, total: 10, working: 9, status: "warning" },
    { name: "पीने का पानी", icon: Droplets, total: 5, working: 5, status: "ok" },
    { name: "बिजली कनेक्शन", icon: Bolt, total: 20, working: 20, status: "ok" },
    { name: "प्रयोगशाला", icon: FlaskConical, total: 2, working: 1, status: "error" },
    { name: "इंटरनेट/वाई-फाई", icon: Wifi, total: 1, working: 1, status: "ok" },
];

export default function InfrastructurePage() {
    const overallHealth = 92;
    return (
        <div className="flex justify-center items-start min-h-screen p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold flex items-center gap-2"><Building /> बुनियादी ढांचा रिपोर्ट</CardTitle>
                            <CardDescription>स्कूल की भौतिक सुविधाओं की वर्तमान स्थिति</CardDescription>
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
                    <div>
                        <div className="flex justify-between items-center mb-2">
                           <h3 className="font-bold">समग्र स्वास्थ्य: {overallHealth}%</h3>
                           <span className="text-green-500 font-bold">उत्कृष्ट</span>
                        </div>
                        <Progress value={overallHealth} className="h-3" />
                    </div>

                    <div className="space-y-4">
                        {infraStatus.map((item, index) => (
                            <div key={index} className="flex items-center justify-between border-b pb-2">
                                <div className="flex items-center gap-3">
                                    <item.icon className="text-primary" />
                                    <span className="font-semibold">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>{item.working}/{item.total}</span>
                                    {item.status === 'ok' && <CheckCircle className="text-green-500" />}
                                    {item.status === 'warning' && <AlertCircle className="text-yellow-500" />}
                                    {item.status === 'error' && <XCircle className="text-red-500" />}
                                </div>
                            </div>
                        ))}
                    </div>

                     <div className="space-y-2 text-sm">
                        <h3 className="font-bold">लंबित मुद्दे:</h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li className="text-yellow-500">1 महिला शौचालय में नल की मरम्मत आवश्यक।</li>
                            <li className="text-red-500">रसायन विज्ञान प्रयोगशाला उपकरणों की कमी के कारण बंद है।</li>
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
