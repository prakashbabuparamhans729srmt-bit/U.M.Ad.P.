
'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ArrowLeft, User, Bell, Palette } from "lucide-react"

export default function SchoolSettingsPage() {
  return (
    <div className="flex justify-center items-start min-h-screen p-4">
        <div className="w-full max-w-2xl space-y-6">
            <div>
                <h1 className="text-2xl font-bold">सेटिंग्स</h1>
                <p className="text-muted-foreground">अपनी प्रोफ़ाइल और एप्लिकेशन प्राथमिकताएं प्रबंधित करें।</p>
            </div>
            <Tabs defaultValue="profile" className="w-full">
                <TabsList>
                    <TabsTrigger value="profile">
                        <User className="mr-2 h-4 w-4" />
                        प्रोफ़ाइल
                    </TabsTrigger>
                    <TabsTrigger value="appearance">
                        <Palette className="mr-2 h-4 w-4" />
                        थीम
                    </TabsTrigger>
                    <TabsTrigger value="notifications">
                        <Bell className="mr-2 h-4 w-4" />
                        सूचनाएं
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                <Card>
                    <CardHeader>
                    <CardTitle>प्रोफ़ाइल</CardTitle>
                    <CardDescription>
                        अपनी व्यक्तिगत जानकारी अपडेट करें।
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">नाम</Label>
                        <Input id="name" defaultValue="रमेश कुमार" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">ईमेल</Label>
                        <Input id="email" type="email" defaultValue="ramesh.kumar@example.com" disabled />
                    </div>
                    </CardContent>
                    <CardFooter>
                    <Button>बदलाव सहेजें</Button>
                    </CardFooter>
                </Card>
                </TabsContent>
                <TabsContent value="appearance">
                <Card>
                    <CardHeader>
                    <CardTitle>थीम</CardTitle>
                    <CardDescription>
                        एप्लिकेशन का रंग-रूप अनुकूलित करें।
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                        <Label>लाइट और डार्क मोड के बीच टॉगल करें।</Label>
                        <ThemeToggle />
                        </div>
                    </CardContent>
                </Card>
                </TabsContent>
                <TabsContent value="notifications">
                <Card>
                    <CardHeader>
                    <CardTitle>सूचनाएं</CardTitle>
                    <CardDescription>
                        कॉन्फ़िगर करें कि आप सूचनाएं कैसे प्राप्त करते हैं।
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="email-notifications" defaultChecked />
                            <label htmlFor="email-notifications" className="text-sm font-medium leading-none">
                                ईमेल सूचनाएं
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="push-notifications" />
                            <label htmlFor="push-notifications" className="text-sm font-medium leading-none">
                                पुश सूचनाएं
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter>
                    <Button>प्राथमिकताएं सहेजें</Button>
                    </CardFooter>
                </Card>
                </TabsContent>
            </Tabs>
            <Link href="/school-dashboard" className="w-full">
                <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    मुख्य डैशबोर्ड पर वापस जाएं
                </Button>
            </Link>
        </div>
    </div>
  )
}
