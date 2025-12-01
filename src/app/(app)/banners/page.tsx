import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function BannersPage() {
    const banners = PlaceHolderImages.filter(p => p.id.startsWith('banner-'));

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Banners</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Banner
                </Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {banners.map((banner) => (
                    <Card key={banner.id}>
                        <CardHeader className="flex flex-row items-start justify-between">
                            <CardTitle className="text-lg">{banner.description}</CardTitle>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent>
                            <div className="relative aspect-[3/1] w-full">
                                <Image 
                                    src={banner.imageUrl}
                                    alt={banner.description}
                                    fill
                                    className="rounded-md object-cover"
                                    data-ai-hint={banner.imageHint}
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
