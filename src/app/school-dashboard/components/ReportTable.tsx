import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const reports = [
    { month: "जनवरी", teacherAttendance: "85%", studentAttendance: "92%", foodQuality: "4.2/5", electricity: "1200 kWh", water: "20,000 L" },
    { month: "फरवरी", teacherAttendance: "78%", studentAttendance: "88%", foodQuality: "4.0/5", electricity: "1150 kWh", water: "18,500 L" },
    { month: "मार्च", teacherAttendance: "82%", studentAttendance: "90%", foodQuality: "4.1/5", electricity: "1250 kWh", water: "22,000 L" },
    { month: "अप्रैल", teacherAttendance: "62%", studentAttendance: "68%", foodQuality: "3.2/5", electricity: "950 kWh", water: "15,000 L" },
]

export function ReportTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 विस्तृत रिपोर्ट</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>महीना</TableHead>
              <TableHead>शिक्षक उप.%</TableHead>
              <TableHead>छात्र उप.%</TableHead>
              <TableHead>भोजन गुण.</TableHead>
              <TableHead>बिजली खपत</TableHead>
              <TableHead>जल उपयोग</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.month}>
                <TableCell>{report.month}</TableCell>
                <TableCell>{report.teacherAttendance}</TableCell>
                <TableCell>{report.studentAttendance}</TableCell>
                <TableCell>{report.foodQuality}</TableCell>
                <TableCell>{report.electricity}</TableCell>
                <TableCell>{report.water}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
