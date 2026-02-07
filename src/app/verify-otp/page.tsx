import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function VerifyOtpPage() {
  const authImage = PlaceHolderImages.find(p => p.id === 'auth-background');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
        <div className="flex items-center justify-center py-12">
            <Card className="mx-auto w-[380px] max-w-md border-0 shadow-none">
                <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Verify Your Mobile</CardTitle>
                <CardDescription>
                    We've sent a 6-digit code to your mobile number. Please enter it below.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="otp">One-Time Password (OTP)</Label>
                        <Input id="otp" type="text" placeholder="_ _ _ _ _ _" required />
                    </div>
                    <Link href="/dashboard">
                        <Button type="submit" className="w-full">
                            Verify & Sign Up
                        </Button>
                    </Link>
                </div>
                <div className="mt-4 text-center text-sm">
                    Didn't receive the code?{" "}
                    <Link href="#" className="underline">
                    Resend OTP
                    </Link>
                </div>
                <div className="mt-2 text-center text-sm">
                    <Link href="/" className="text-muted-foreground underline">
                    Back to Sign Up
                    </Link>
                </div>
                </CardContent>
            </Card>
        </div>
        <div className="hidden bg-muted lg:block relative">
            {authImage && (
                <Image
                src={authImage.imageUrl}
                alt={authImage.description}
                fill
                className="h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
                data-ai-hint={authImage.imageHint}
                />
            )}
        </div>
    </div>
  );
}
