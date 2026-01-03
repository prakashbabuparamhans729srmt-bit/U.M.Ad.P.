import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function CreditPackagesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Credit Packages</h1>
                <Link href="/credit-packages">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Package
                    </Button>
                </Link>
            </div>
            <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Credit packages page content goes here.</p>
            </div>
        </div>
    )
}