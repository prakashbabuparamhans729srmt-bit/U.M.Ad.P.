'use client';

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ChildCategoriesPage() {
    const { toast } = useToast();
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Child Categories</h1>
                <Button onClick={() => toast({ title: "Action", description: "Add Child Category button clicked!" })}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Child Category
                </Button>
            </div>
            <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Child categories page content goes here.</p>
            </div>
        </div>
    )
}
