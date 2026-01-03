import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Layers, Palette, Users } from "lucide-react";

export function KeyFeatures() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🌟 प्रमुख विशेषताएँ</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><Palette size={16}/> रंग कोडिंग प्रणाली</h4>
            <ul className="list-none space-y-1 text-muted-foreground">
                <li><Badge className="bg-green-500 hover:bg-green-600">🟢</Badge> <strong>हरा:</strong> सब ठीक (80-100%)</li>
                <li><Badge className="bg-yellow-500 hover:bg-yellow-600">🟡</Badge> <strong>पीला:</strong> सुधार की आवश्यकता (60-79%)</li>
                <li><Badge className="bg-red-500 hover:bg-red-600">🔴</Badge> <strong>लाल:</strong> तत्काल ध्यान दें (0-59%)</li>
            </ul>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><Layers size={16}/> डेटा स्रोत</h4>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>📹 CCTV: लाइव कक्षा निगरानी</li>
                <li>📱 मोबाइल ऐप: शिक्षक/अभिभावक फीडबैक</li>
                <li>🔌 IoT सेंसर: बिजली, पानी, सफाई</li>
                <li>👤 बायोमेट्रिक: शिक्षक/कर्मचारी उपस्थिति</li>
            </ul>
        </div>
         <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><Bot size={16}/> स्वचालित रिपोर्टिंग और AI</h4>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>दैनिक, साप्ताहिक, मासिक रिपोर्ट</li>
                <li>तुलनात्मक विश्लेषण</li>
                <li>AI द्वारा सुझाव और भविष्यवाणी</li>
            </ul>
        </div>
         <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2"><Users size={16}/> बहु-स्तरीय पहुँच</h4>
            <ul className="list-disc list-inside text-muted-foreground">
                <li>नागरिक (केवल देख सकते हैं)</li>
                <li>अभिभावक (बच्चे का डेटा + फीडबैक)</li>
                <li>शिक्षक (डेटा प्रविष्टि + कक्षा)</li>
                <li>प्रिंसिपल (पूरा स्कूल नियंत्रण)</li>
                <li>शिक्षा विभाग (जिला/राज्य स्तर)</li>
            </ul>
        </div>
      </CardContent>
    </Card>
  )
}
