import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ForgotPasswordPage() {
  const authImage = PlaceHolderImages.find(p => p.id === 'auth-background');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto w-[380px] max-w-md border-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Forgot Your Password?</CardTitle>
            <CardDescription>
              No worries! Enter your email address and we'll send you a link to reset it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Remembered your password?{" "}
              <Link href="/login" className="underline">
                Sign in
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
