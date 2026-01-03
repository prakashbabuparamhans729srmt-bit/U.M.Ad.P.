import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function InfoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>👥 शिक्षक विवरण</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>1. रमेश कुमार (हिंदी) - <Badge variant="default">🟢</Badge></p>
          <p>2. सीमा शर्मा (गणित) - <Badge variant="default">🟢</Badge></p>
          <p>3. अमित पाठक (विज्ञान) - <Badge variant="destructive">🔴</Badge></p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>📝 नागरिक फीडबैक</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>⭐⭐⭐⭐☆ (4.2) "भोजन गुणवत्ता सुधार की आवश्यकता"</p>
          <p>⭐⭐⭐⭐⭐ (4.8) "शिक्षक उत्कृष्ट"</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>📞 संपर्क</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>प्रिंसिपल:</strong> 9829012345</p>
          <p><strong>ब्लॉक शिक्षा अधि.:</strong> 9460123456</p>
          <p><strong>शिकायत हेल्पलाइन:</strong> 1800-XXX-XXXX</p>
        </CardContent>
      </Card>
    </div>
  )
}
