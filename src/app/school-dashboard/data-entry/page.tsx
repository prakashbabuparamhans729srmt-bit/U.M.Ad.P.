
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Star } from "lucide-react";
import Link from 'next/link';

export default function DataEntryPage() {
    const [attendance, setAttendance] = useState(32);
    const totalStudents = 35;

    return (
        <div className="flex justify-center items-start min-h-screen bg-background p-4">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-xl">दैनिक डेटा प्रविष्टि - 15/04/24</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold">👤 शिक्षक: रमेश कुमार</p>
                            <p className="text-muted-foreground">📚 विषय: हिंदी</p>
                        </div>
                        <div className="text-right">
                             <p className="font-semibold">⏰ कक्षा समय:</p>
                             <p className="text-muted-foreground">10:00-11:00 AM</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="attendance">👥 छात्र उपस्थिति: {attendance}/{totalStudents}</Label>
                        <Slider
                            id="attendance"
                            min={0}
                            max={totalStudents}
                            step={1}
                            value={[attendance]}
                            onValueChange={(value) => setAttendance(value[0])}
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <Label htmlFor="lesson">📖 आज का पाठ:</Label>
                        <Input id="lesson" defaultValue="कबीर के दोहे" />
                    </div>

                    <div className="space-y-2">
                        <Label>✅ पूर्ण किया गया कार्य:</Label>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="task1" defaultChecked />
                                <label htmlFor="task1">होमवर्क जांचा</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="task2" defaultChecked />
                                <label htmlFor="task2">नया पाठ पढ़ाया</label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <Checkbox id="task3" defaultChecked />
                                <label htmlFor="task3">क्विज लिया</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="task4" />
                                <label htmlFor="task4">प्रोजेक्ट असाइन किया</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <Label>🍛 मध्याह्न भोजन:</Label>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Checkbox id="meal-ontime" defaultChecked />
                                <label htmlFor="meal-ontime">समय पर मिला</label>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Label>गुणवत्ता:</Label>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                    <Star className="w-4 h-4 text-muted-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes">📝 विशेष टिप्पणी:</Label>
                        <Textarea id="notes" placeholder="कोई विशेष टिप्पणी..." defaultValue="2 छात्र बीमारी के कारण अनुपस्थित" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">
                            <Camera className="mr-2 h-4 w-4" />
                            फोटो संलग्न करें
                        </Button>
                        <Button>✅ डेटा सबमिट करें</Button>
                    </div>
                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="ghost" className="w-full text-muted-foreground">
                           वापस डैशबोर्ड पर जाएं
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
