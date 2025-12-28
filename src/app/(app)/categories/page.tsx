import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Link from "next/link";

const categories = [
    { id: 'CAT001', name: 'Electronics', parent: '-', type: 'Main' },
    { id: 'CAT002', name: 'Laptops', parent: 'Electronics', type: 'Sub' },
    { id: 'CAT003', name: 'Gaming Laptops', parent: 'Laptops', type: 'Child' },
    { id: 'CAT004', name: 'Smartphones', parent: 'Electronics', type: 'Sub' },
    { id: 'CAT005', name: 'Fashion', parent: '-', type: 'Main' },
    { id: 'CAT006', name: 'Men\'s Wear', parent: 'Fashion', type: 'Sub' },
];

export default function CategoriesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Categories</h1>
                <Link href="/categories">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Category
                    </Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Manage Categories</CardTitle>
                    <CardDescription>Organize your product categories.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Parent Category</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category) => (
                                <TableRow key={category.id}>
                                    <TableCell className="font-medium">{category.name}</TableCell>
                                    <TableCell>{category.parent}</TableCell>
                                    <TableCell>
                                        <Badge variant={category.type === 'Main' ? 'default' : category.type === 'Sub' ? 'secondary' : 'outline'}>
                                            {category.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>
                                                    <Link href="/categories" className="w-full">Edit</Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
