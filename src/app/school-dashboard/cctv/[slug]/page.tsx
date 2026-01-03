import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CctvDetailPage({ params }: { params: { slug: string } }) {
    const className = decodeURIComponent(params.slug).replace(/-/g, ' ');

    return (
        <div className="flex justify-center items-center h-screen bg-background p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">लाइव CCTV - {className}</CardTitle>
                        <div className="text-xs text-muted-foreground text-right">
                            <p>⏰ 10:45 AM</p>
                            <p>📅 15 अप्रैल 2024</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <p className="text-muted-foreground">[कक्षा]</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">AI विश्लेषण:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• 32 छात्र पहचाने (कुल: 35)</li>
                            <li>• शिक्षक उपस्थित: <Badge variant="default" className="bg-green-500">✅</Badge></li>
                            <li>• ध्यान स्तर: 74%</li>
                            <li>• डिजिटल बोर्ड चालू: <Badge variant="default" className="bg-green-500">✅</Badge></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
