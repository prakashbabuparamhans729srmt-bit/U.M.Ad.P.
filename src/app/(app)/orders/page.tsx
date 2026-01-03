'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ordersData = [
  { id: 'ORD001', customer: 'Liam Johnson', date: '2023-07-15', total: '$250.00', status: 'Completed' },
  { id: 'ORD002', customer: 'Olivia Smith', date: '2023-07-16', total: '$150.75', status: 'Processing' },
  { id: 'ORD003', customer: 'Noah Williams', date: '2023-07-17', total: '$350.00', status: 'Pending' },
  { id: 'ORD004', customer: 'Emma Brown', date: '2023-07-18', total: '$450.50', status: 'Completed' },
  { id: 'ORD005', customer: 'James Jones', date: '2023-07-18', total: '$50.25', status: 'Cancelled' },
];

const statusVariant: { [key: string]: "default" | "secondary" | "outline" | "destructive" } = {
    Completed: "default",
    Processing: "secondary",
    Pending: "outline",
    Cancelled: "destructive"
};


const OrderTable = ({ orders }: { orders: typeof ordersData }) => {
    const { toast } = useToast();
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>
                            <Badge variant={statusVariant[order.status]}>{order.status}</Badge>
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
                                    <DropdownMenuItem onClick={() => toast({ title: "Action", description: `View details for ${order.id}`})}>View Details</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => toast({ title: "Action", description: `Edit action for ${order.id}`})}>Edit</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive" onClick={() => toast({ title: "Action", description: `Cancel action for ${order.id}`, variant: 'destructive'})}>Cancel</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

export default function OrdersPage() {
    const { toast } = useToast();
    const [activeTab, setActiveTab] = React.useState("all");

    const filteredOrders = activeTab === 'all'
        ? ordersData
        : ordersData.filter(order => order.status.toLowerCase() === activeTab);

    return (
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="processing">Processing</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <Button onClick={() => toast({ title: "Action", description: "Add Order button clicked!" })}>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Order
                    </Button>
                </div>
            </div>
            <Card className='mt-2'>
                <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>A list of all recent orders.</CardDescription>
                </CardHeader>
                <CardContent>
                    <OrderTable orders={filteredOrders} />
                </CardContent>
            </Card>
        </Tabs>
    )
}
