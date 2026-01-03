'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const partners = [
  { id: 'PRT001', name: 'Global Tech Inc.', joinDate: '2022-01-20', status: 'Active', avatar: 'https://picsum.photos/seed/p1/40/40' },
  { id: 'PRT002', name: 'Innovate Solutions', joinDate: '2022-03-15', status: 'Active', avatar: 'https://picsum.photos/seed/p2/40/40' },
  { id: 'PRT003', name: 'Future Gadgets', joinDate: '2023-05-10', status: 'Pending', avatar: 'https://picsum.photos/seed/p3/40/40' },
  { id: 'PRT004', name: 'Synergy Corp', joinDate: '2021-11-30', status: 'Inactive', avatar: 'https://picsum.photos/seed/p4/40/40' },
];

const statusVariant: { [key: string]: "default" | "secondary" | "outline" | "destructive" } = {
    Active: "default",
    Pending: "secondary",
    Inactive: "destructive"
};


export default function PartnersPage() {
    const { toast } = useToast();
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Partners</h1>
                <Button onClick={() => toast({ title: "Action", description: "Add Partner button clicked!" })}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Partner
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Partner Management</CardTitle>
                    <CardDescription>View and manage your business partners.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Join Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {partners.map((partner) => (
                                <TableRow key={partner.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={partner.avatar} alt={partner.name} />
                                                <AvatarFallback>{partner.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            {partner.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>{partner.joinDate}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant[partner.status]}>{partner.status}</Badge>
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
                                                <DropdownMenuItem onClick={() => toast({ title: "Action", description: `View profile for ${partner.name}`})}>
                                                    View Profile
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => toast({ title: "Action", description: `Edit action for ${partner.name}`})}>
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive" onClick={() => toast({ title: "Action", description: `Deactivate action for ${partner.name}`, variant: 'destructive'})}>Deactivate</DropdownMenuItem>
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
