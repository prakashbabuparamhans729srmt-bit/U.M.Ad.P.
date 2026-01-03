import { Card, CardContent } from "@/components/ui/card";
import { Home, BarChart2, PieChart, FileText, Settings, User } from "lucide-react";
import Link from "next/link";

export function FooterNav() {
  return (
    <Card className="fixed bottom-0 left-0 right-0 rounded-none border-t lg:hidden">
      <CardContent className="p-2">
        <div className="flex justify-around items-center">
            <Link href="/school-dashboard" className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <Home size={20} />
                <span className="text-xs">होम</span>
            </Link>
            <Link href="/school-dashboard" className="flex flex-col items-center text-primary font-bold">
                <BarChart2 size={20} />
                <span className="text-xs">डैशबोर्ड</span>
            </Link>
            <Link href="/school-dashboard/analysis" className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <PieChart size={20} />
                <span className="text-xs">विश्लेषण</span>
            </Link>
            <button className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <FileText size={20} />
                <span className="text-xs">रिपोर्ट</span>
            </button>
             <button className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <Settings size={20} />
                <span className="text-xs">सेटिंग</span>
            </button>
             <button className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <User size={20} />
                <span className="text-xs">प्रोफाइल</span>
            </button>
        </div>
      </CardContent>
    </Card>
  )
}
