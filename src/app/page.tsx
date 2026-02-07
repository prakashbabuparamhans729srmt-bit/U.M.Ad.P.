import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function EntryPage() {
  const entryImage = PlaceHolderImages.find(p => p.id === 'entry-background');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
                <Card className="border-none shadow-none">
                    <CardContent className="pt-6 px-0">
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
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required />
                            </div>
                            <Link href="/school-dashboard">
                                <Button type="submit" className="w-full">
                                    Sign Up with Email
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="mobile">
                <Card className="border-none shadow-none">
                    <CardContent className="pt-6 px-0">
                         <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="mobile">Mobile Number</Label>
                                <Input
                                id="mobile"
                                type="tel"
                                placeholder="9876543210"
                                required
                                />
                            </div>
                             <div className="grid gap-2">
                                <Label htmlFor="otp">One-Time Password (OTP)</Label>
                                <Input id="otp" type="text" placeholder="6-digit OTP" required />
                            </div>
                            <Button variant="outline" className="w-full">Send OTP</Button>
                            <Link href="/school-dashboard">
                                <Button type="submit" className="w-full">
                                    Sign Up with Mobile
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {entryImage && (
            <Image
            src={entryImage.imageUrl}
            alt={entryImage.description}
            fill
            className="h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
            data-ai-hint={entryImage.imageHint}
            />
        )}
      </div>
    </div>
  );
}
