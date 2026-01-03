import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AddonsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Add-ons</h1>
                <Link href="/addons">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Add-on
                    </Button>
                </Link>
            </div>
            <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Add-ons page content goes here.</p>
            </div>
        </div>
    )
}