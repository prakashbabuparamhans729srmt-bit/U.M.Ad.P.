import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { PlusCircle, Clock } from "lucide-react";
import Link from "next/link";

const timeSlots = [
    { time: '09:00 AM - 10:00 AM', available: true },
    { time: '10:00 AM - 11:00 AM', available: false },
    { time: '11:00 AM - 12:00 PM', available: true },
    { time: '01:00 PM - 02:00 PM', available: true },
    { time: '02:00 PM - 03:00 PM', available: false },
    { time: '03:00 PM - 04:00 PM', available: true },
]

export default function TimeslotsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Timeslots & Dates</h1>
                <Link href="/timeslots">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Slot
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Manage Availability</CardTitle>
                        <CardDescription>Select dates to manage their availability.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="multiple"
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Available Timeslots</CardTitle>
                        <CardDescription>For selected date</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {timeSlots.map(slot => (
                            <div key={slot.time} className={`flex items-center justify-between p-3 rounded-md ${slot.available ? 'bg-secondary' : 'bg-muted text-muted-foreground'}`}>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{slot.time}</span>
                                </div>
                                <Button variant={slot.available ? 'outline' : 'secondary'} size="sm">
                                    {slot.available ? 'Make Unavailable' : 'Make Available'}
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
