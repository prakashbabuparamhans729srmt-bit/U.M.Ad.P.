import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function AnalysisSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Link href="/school-dashboard/analysis">
        <Card className="h-full transition-all hover:border-primary hover:shadow-primary/20 hover:shadow-lg">
          <CardHeader>
            <CardTitle>📈 AI विश्लेषण</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• 3 दिन से छात्र उपस्थिति &lt; 50%</p>
            <p>• प्रयोगशाला उपयोग केवल 30%</p>
            <p>• सफाई कर्मचारी समय से आया: 80%</p>
          </CardContent>
        </Card>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>📋 वास्तविक समय डेटा</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div>• शिक्षक उप.: 12/18</div>
          <div>• छात्र उप.: 342/500</div>
          <div>• कक्षा क्रियाशील: 14/18</div>
          <div>• भोजन पकाया: <Badge variant="default">हाँ</Badge></div>
          <div>• पानी उपलब्ध: <Badge variant="default">हाँ</Badge></div>
        </CardContent>
      </Card>
      <Link href="/school-dashboard/alerts">
        <Card className="h-full transition-all hover:border-primary hover:shadow-primary/20 hover:shadow-lg">
          <CardHeader>
            <CardTitle>⚠️ AI अलर्ट</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div><Badge variant="destructive">🔴 मध्याह्न भोजन आज नहीं बना</Badge></div>
            <div><Badge variant="secondary" className="bg-yellow-400 text-black">🟡 कक्षा 8 का CCTV 2 दिन से बंद</Badge></div>
            <div><Badge variant="default">🟢 सभी शौचालय कार्यशील</Badge></div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
