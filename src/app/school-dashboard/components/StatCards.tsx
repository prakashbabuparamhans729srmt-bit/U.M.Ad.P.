import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const stats = [
    { title: "📊 स्थिति", value: "85%", description: "कार्यशील", status: "ok", href: "/school-dashboard" },
    { title: "👥 उपस्थिति", value: "62%", description: "शिक्षक उप.", status: "error", href: "/school-dashboard/analysis" },
    { title: "🍛 मध्याह्न भोजन", value: "78%", description: "गुणवत्ता", status: "warning", href: "/school-dashboard/meal-report" },
    { title: "🏗️ बुनियादी ढांचा", value: "92%", description: "सुविधाएं", status: "ok", href: "/school-dashboard/infrastructure" },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(stat => (
            <Link href={stat.href} key={stat.title}>
                <Card className="text-center h-full transition-all hover:border-primary hover:shadow-primary/20 hover:shadow-lg">
                    <CardHeader className="p-4">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className={`text-3xl font-bold 
                            ${stat.status === 'ok' ? 'text-green-600' : ''}
                            ${stat.status === 'warning' ? 'text-yellow-500' : ''}
                            ${stat.status === 'error' ? 'text-red-600' : ''}
                        `}>
                            {stat.value}
                        </div>
                        <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </CardContent>
                </Card>
            </Link>
        ))}
    </div>
  )
}
