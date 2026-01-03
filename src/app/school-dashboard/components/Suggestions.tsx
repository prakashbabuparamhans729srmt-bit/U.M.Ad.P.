import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Suggestions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🎯 सुधार सुझाव</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p>1. कक्षा 8 में CCTV स्थापित करें (बजट: ₹15,000)</p>
        <p>2. मध्याह्न भोजन रसोइया की उपस्थिति सुनिश्चित करें</p>
        <p>3. प्रयोगशाला सामग्री की कमी को पूरा करें</p>
      </CardContent>
    </Card>
  )
}
