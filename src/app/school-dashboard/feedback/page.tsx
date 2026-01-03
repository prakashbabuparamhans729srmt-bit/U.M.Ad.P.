
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

const feedbacks = [
    { rating: 4, comment: "भोजन की गुणवत्ता में सुधार की आवश्यकता है। कभी-कभी खाना ठंडा होता है।", user: "एक अभिभावक", date: "14 अप्रैल 2024" },
    { rating: 5, comment: "शिक्षक बहुत सहयोगी और पेशेवर हैं। मेरा बच्चा स्कूल में बहुत कुछ सीख रहा है।", user: "एक नागरिक", date: "12 अप्रैल 2024" },
    { rating: 3, comment: "स्कूल के शौचालयों की सफाई पर और ध्यान देने की जरूरत है।", user: "एक अभिभावक", date: "10 अप्रैल 2024" },
    { rating: 5, comment: "CCTV निगरानी प्रणाली एक बेहतरीन कदम है। इससे सुरक्षा का एहसास होता है।", user: "एक नागरिक", date: "8 अप्रैल 2024" },
];

export default function FeedbackPage() {
    return (
        <div className="flex justify-center items-start min-h-screen p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">📝 नागरिक और अभिभावक फीडबैक</CardTitle>
                    <CardDescription>समुदाय द्वारा प्रदान की गई प्रतिक्रिया और सुझाव</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="border-b border-primary/20 pb-4">
                            <div className="flex items-center mb-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic">"{feedback.comment}"</p>
                            <p className="text-xs text-right mt-2 font-semibold">- {feedback.user} ({feedback.date})</p>
                        </div>
                    ))}
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
