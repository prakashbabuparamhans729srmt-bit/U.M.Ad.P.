
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Phone, Mail } from "lucide-react";

const contacts = [
    { role: "प्रिंसिपल (डॉ. राजेश शर्मा)", phone: "9829012345", email: "principal.gsss.bikaner@example.com" },
    { role: "ब्लॉक शिक्षा अधिकारी", phone: "9460123456", email: "beo.bikaner@example.com" },
    { role: "CCTV कंट्रोल रूम", phone: "0151-22XXXXX", email: "cctv.control@example.com" },
    { role: "मध्याह्न भोजन प्रभारी", phone: "9988776655", email: "mdm.incharge@example.com" },
    { role: "शिकायत हेल्पलाइन (राज्य स्तर)", phone: "1800-180-6127", email: "raj.helpline@example.com" },
];

export default function ContactsPage() {
    return (
        <div className="flex justify-center items-start min-h-screen p-4">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">📞 महत्वपूर्ण संपर्क</CardTitle>
                    <CardDescription>आपात स्थिति और जानकारी के लिए संपर्क सूत्र</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {contacts.map((contact, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-secondary/30">
                            <h3 className="font-bold text-primary">{contact.role}</h3>
                            <div className="text-sm text-muted-foreground mt-2 space-y-1">
                                <div className="flex items-center gap-2">
                                    <Phone size={14} />
                                    <span>{contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={14} />
                                    <span>{contact.email}</span>
                                </div>
                            </div>
                        </div>
                    ))}
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
