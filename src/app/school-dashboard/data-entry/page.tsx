
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Star, Send } from "lucide-react";
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function DataEntryPage() {
    const [attendance, setAttendance] = useState(32);
    const totalStudents = 35;

    return (
        <div className="flex justify-center items-start min-h-screen p-4 font-headline">
            <Card className="w-full max-w-lg shadow-[0_0_25px_rgba(7,241,214,0.2)]">
                <CardHeader className="text-center border-b border-primary/20 pb-4">
                    <CardTitle className="text-2xl font-black text-primary tracking-wider">दैनिक डेटा प्रविष्टि</CardTitle>
                    <CardDescription>15 अप्रैल 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-semibold text-foreground">👤 शिक्षक: रमेश कुमार</p>
                            <p className="text-muted-foreground">📚 विषय: हिंदी</p>
                        </div>
                        <div className="text-right">
                             <p className="font-semibold text-foreground">⏰ कक्षा समय:</p>
                             <p className="text-muted-foreground">10:00-11:00 AM</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="attendance" className="text-base font-medium text-primary">👥 छात्र उपस्थिति: {attendance}/{totalStudents}</Label>
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
                        <Label htmlFor="lesson" className="text-base font-medium text-primary">📖 आज का पाठ:</Label>
                        <Input id="lesson" defaultValue="कबीर के दोहे" />
                    </div>

                    <div className="space-y-3">
                        <Label className="text-base font-medium text-primary">🧠 पाठ की समझ:</Label>
                        <RadioGroup defaultValue="good" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="excellent" id="r1" />
                                <Label htmlFor="r1">बहुत अच्छा</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="good" id="r2" />
                                <Label htmlFor="r2">अच्छा</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="average" id="r3" />
                                <Label htmlFor="r3">औसत</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-base font-medium text-primary">✅ पूर्ण किया गया कार्य:</Label>
                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
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

                     <div className="space-y-3">
                        <Label className="text-base font-medium text-primary">🛠️ शिक्षण सहायक सामग्री:</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="उपकरण चुनें..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="blackboard">ब्लैकबोर्ड</SelectItem>
                                <SelectItem value="digital-board">डिजिटल बोर्ड</SelectItem>
                                <SelectItem value="projector">प्रोजेक्टर</SelectItem>
                                <SelectItem value="other">अन्य</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="space-y-3">
                        <Label className="text-base font-medium text-primary">🍛 मध्याह्न भोजन:</Label>
                        <div className="space-y-3">
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
                        <Label htmlFor="special-attention" className="text-base font-medium text-primary">🎯 विशेष ध्यान की आवश्यकता:</Label>
                        <Input id="special-attention" placeholder="छात्र का नाम या विवरण..." />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes" className="text-base font-medium text-primary">📝 विशेष टिप्पणी:</Label>
                        <Textarea id="notes" placeholder="कोई विशेष टिप्पणी..." defaultValue="2 छात्र बीमारी के कारण अनुपस्थित" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <Button variant="outline">
                            <Camera className="mr-2 h-4 w-4" />
                            फोटो संलग्न करें
                        </Button>
                        <Button>
                            <Send className="mr-2 h-4 w-4" />
                            डेटा सबमिट करें
                        </Button>
                    </div>
                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="link" className="w-full text-muted-foreground">
                           वापस डैशबोर्ड पर जाएं
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}

    