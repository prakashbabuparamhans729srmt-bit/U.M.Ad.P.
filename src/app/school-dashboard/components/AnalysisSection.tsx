import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AnalysisSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>📈 AI विश्लेषण</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• 3 दिन से छात्र उपस्थिति &lt; 50%</p>
          <p>• प्रयोगशाला उपयोग केवल 30%</p>
          <p>• सफाई कर्मचारी समय से आया: 80%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>📋 वास्तविक समय डेटा</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>• शिक्षक उप.: 12/18</p>
          <p>• छात्र उप.: 342/500</p>
          <p>• कक्षा क्रियाशील: 14/18</p>
          <p>• भोजन पकाया: <Badge variant="default">हाँ</Badge></p>
          <p>• पानी उपलब्ध: <Badge variant="default">हाँ</Badge></p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>⚠️ AI अलर्ट</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><Badge variant="destructive">🔴 मध्याह्न भोजन आज नहीं बना</Badge></p>
          <p><Badge variant="secondary" className="bg-yellow-400 text-black">🟡 कक्षा 8 का CCTV 2 दिन से बंद</Badge></p>
          <p><Badge variant="default">🟢 सभी शौचालय कार्यशील</Badge></p>
        </CardContent>
      </Card>
    </div>
  )
}
