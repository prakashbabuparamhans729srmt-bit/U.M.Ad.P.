import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    { title: "📊 स्थिति", value: "85%", description: "कार्यशील", status: "ok" },
    { title: "👥 उपस्थिति", value: "62%", description: "शिक्षक उप.", status: "error" },
    { title: "🍛 मध्याह्न भोजन", value: "78%", description: "गुणवत्ता", status: "warning" },
    { title: "🏗️ बुनियादी ढांचा", value: "92%", description: "सुविधाएं", status: "ok" },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(stat => (
            <Card key={stat.title} className="text-center">
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
        ))}
    </div>
  )
}
