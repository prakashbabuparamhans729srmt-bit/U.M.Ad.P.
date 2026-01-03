import { Card, CardContent } from "@/components/ui/card";

export function DashboardHeader() {
  return (
    <Card className="mb-4">
        <CardContent className="p-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <div>
                <h1 className="text-xl font-bold">स्कूल निगरानी डैशबोर्ड</h1>
                <p className="text-muted-foreground">शासकीय उच्चतर माध्यमिक विद्यालय, बीकानेर</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
                <p><strong>UDISE:</strong> 082934567 | <strong>जिला:</strong> बीकानेर</p>
                <p><strong>प्रिंसिपल:</strong> डॉ. राजेश शर्मा</p>
            </div>
        </CardContent>
    </Card>
  )
}
