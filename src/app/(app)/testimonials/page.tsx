'use client';

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function TestimonialsPage() {
    const { toast } = useToast();
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Testimonials</h1>
                <Button onClick={() => toast({ title: "Action", description: "Add Testimonial button clicked!" })}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Testimonial
                </Button>
            </div>
            <div className="flex items-center justify-center h-96 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Testimonials page content goes here.</p>
            </div>
        </div>
    )
}
