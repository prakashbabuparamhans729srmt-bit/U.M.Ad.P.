
'use client';

import { useState, useEffect } from 'react';
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
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ArrowLeft, User, Bell, Palette, Download } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function SchoolSettingsPage() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) {
      return;
    }
    installPrompt.prompt();
    installPrompt.userChoice.then(() => {
      setInstallPrompt(null);
    });
  };

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
                     <TabsTrigger value="install">
                        <Download className="mr-2 h-4 w-4" />
                        ऐप इंस्टॉल करें
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
                 <TabsContent value="install">
                  <Card>
                    <CardHeader>
                      <CardTitle>ऐप इंस्टॉल करें</CardTitle>
                      <CardDescription>
                        बेहतर अनुभव के लिए इस ऐप को अपने डिवाइस पर इंस्टॉल करें।
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        ऐप इंस्टॉल करने से आप इसे सीधे अपनी होम स्क्रीन से लॉन्च कर सकते हैं, ठीक किसी अन्य ऐप की तरह।
                      </p>
                    </CardContent>
                    <CardFooter>
                      {installPrompt && (
                        <Button onClick={handleInstallClick}>
                          <Download className="mr-2 h-4 w-4" />
                          ऐप इंस्टॉल करें
                        </Button>
                      )}
                      {!installPrompt && (
                        <p className="text-sm text-green-600">ऐप पहले से इंस्टॉल है या आपका ब्राउज़र इसे सपोर्ट नहीं करता।</p>
                      )}
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
