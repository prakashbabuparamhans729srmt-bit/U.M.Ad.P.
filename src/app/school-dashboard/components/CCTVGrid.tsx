import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video } from "lucide-react";
import Link from "next/link";

const cctvFeeds = [
  { name: "कक्षा 10 A", status: "ok" },
  { name: "कक्षा 10 B", status: "ok" },
  { name: "कक्षा 9 A", status: "ok" },
  { name: "कक्षा 9 B", status: "warning", message: "कम روشنی" },
  { name: "कक्षा 8 A", status: "error", message: "नो CCTV" },
  { name: "कक्षा 8 B", status: "ok" },
  { name: "कक्षा 7 A", status: "ok" },
  { name: "कक्षा 7 B", status: "ok" },
  { name: "कक्षा 6 A", status: "ok" },
  { name: "कक्षा 6 B", status: "ok" },
  { name: "कक्षा 5 A", status: "ok" },
  { name: "कक्षा 5 B", status: "ok" },
  { name: "कक्षा 4 A", status: "ok" },
  { name: "कक्षा 4 B", status: "ok" },
  { name: "कक्षा 3 A", status: "warning", message: "कम روشنی" },
  { name: "कक्षा 3 B", status: "ok" },
  { name: "कक्षा 2 A", status: "ok" },
  { name: "कक्षा 2 B", status: "ok" },
  { name: "कक्षा 1 A", status: "ok" },
  { name: "कक्षा 1 B", status: "ok" },
  { name: "प्रयोगशाला", status: "warning", message: "लैब सहायक अनुपस्थित" },
  { name: "भोजनशाला", status: "ok" },
];

export function CCTVGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🎥 लाइव CCTV फीड</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {cctvFeeds.map((feed, index) => {
            const slug = encodeURIComponent(feed.name.replace(/\s+/g, '-'));
            return (
                <Link href={`/school-dashboard/cctv/${slug}`} key={index}>
                    <div className={`relative aspect-square rounded-lg p-2 flex flex-col items-center justify-center text-center
                        ${feed.status === 'ok' ? 'bg-green-100/5' : ''}
                        ${feed.status === 'warning' ? 'bg-yellow-100/5' : ''}
                        ${feed.status === 'error' ? 'bg-red-100/5' : ''}
                        transition-transform hover:scale-105 cursor-pointer border border-primary/20
                    `}>
                        <p className="font-bold text-sm text-foreground">{feed.name}</p>
                        {feed.status === 'ok' && <p className="text-2xl">🟢</p>}
                        {feed.status === 'warning' && <p className="text-2xl">🟡</p>}
                        {feed.status === 'error' && <p className="text-2xl">🔴</p>}

                        {feed.message && <p className="text-xs text-muted-foreground mt-1">{feed.message}</p>}
                        
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                            <Video className="text-white h-8 w-8" />
                        </div>
                    </div>
                </Link>
            )
        })}
      </CardContent>
    </Card>
  )
}
