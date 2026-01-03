import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentGatewayPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Payment Gateway</h1>
                <Link href="/payment-gateway">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Gateway
                    </Button>
                </Link>
            </div>
            <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Payment gateway page content goes here.</p>
            </div>
        </div>
    )
}