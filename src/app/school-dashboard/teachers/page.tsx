
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Share2, Download } from "lucide-react";

const teachers = [
    { name: "रमेश कुमार", subject: "हिंदी", status: "Present", attendance: "95%", avatar: "RK", color: "bg-green-500" },
    { name: "सीमा शर्मा", subject: "गणित", status: "Present", attendance: "98%", avatar: "SS", color: "bg-green-500" },
    { name: "अमित पाठक", subject: "विज्ञान", status: "Absent", attendance: "75%", avatar: "AP", color: "bg-red-500" },
    { name: "सुनीता देवी", subject: "अंग्रेजी", status: "Present", attendance: "92%", avatar: "SD", color: "bg-green-500" },
    { name: "राजेश वर्मा", subject: "सामाजिक विज्ञान", status: "On Leave", attendance: "88%", avatar: "RV", color: "bg-yellow-500" },
];

export default function TeachersPage() {
    return (
        <div className="flex justify-center items-start min-h-screen p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold">👥 शिक्षक विवरण</CardTitle>
                            <CardDescription>स्कूल के सभी शिक्षकों की विस्तृत जानकारी</CardDescription>
                        </div>
                        <div className="flex gap-2">
                           <Button variant="outline" size="icon">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download Report</span>
                            </Button>
                             <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share Report</span>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>शिक्षक</TableHead>
                                <TableHead>विषय</TableHead>
                                <TableHead>आज की स्थिति</TableHead>
                                <TableHead>मासिक उपस्थिति</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teachers.map((teacher, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarFallback>{teacher.avatar}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{teacher.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{teacher.subject}</TableCell>
                                    <TableCell>
                                        <Badge className={`${teacher.color} text-white`}>{teacher.status}</Badge>
                                    </TableCell>
                                    <TableCell>{teacher.attendance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                     <Link href="/school-dashboard" className="w-full">
                        <Button variant="outline" className="w-full mt-6">
                           <ArrowLeft className="mr-2 h-4 w-4" />
                           मुख्य डैशबोर्ड पर वापस जाएं
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
