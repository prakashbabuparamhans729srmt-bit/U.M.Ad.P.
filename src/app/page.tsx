import { Button } from "@/components/ui/button";
import { Mountain, LayoutGrid, Users, ShoppingCart, BarChart, FileText, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">UCLAP Admin</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Ultimate Admin Panel for Your Business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    UCLAP provides a powerful and intuitive interface to manage all aspects of your application, from sales to content.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/admin-dashboard/600/400"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="admin dashboard"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our admin panel is packed with features to help you manage your business efficiently and effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 text-center">
                  <LayoutGrid className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Comprehensive Dashboard</h3>
                <p className="text-muted-foreground">Get a bird's-eye view of your entire operation with our insightful and detailed dashboard.</p>
              </div>
              <div className="grid gap-1 text-center">
                <ShoppingCart className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Order Management</h3>
                <p className="text-muted-foreground">Track, manage, and fulfill orders with ease, from pending to completion.</p>
              </div>
              <div className="grid gap-1 text-center">
                <Users className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Partner & Customer CRM</h3>
                <p className="text-muted-foreground">Manage your relationships with partners and customers all in one place.</p>
              </div>
              <div className="grid gap-1 text-center">
                <BarChart className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Sales Analytics</h3>
                <p className="text-muted-foreground">Dive deep into your sales data with powerful charts and analytics.</p>
              </div>
              <div className="grid gap-1 text-center">
                <FileText className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Content Management</h3>
                <p className="text-muted-foreground">Easily update banners, testimonials, and other content across your site.</p>
              </div>
              <div className="grid gap-1 text-center">
                <Users className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">User Management</h3>
                <p className="text-muted-foreground">Control access and permissions for your team members with robust user roles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the people who use UCLAP Admin to power their business.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/user1/40/40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        "UCLAP Admin has completely transformed how we manage our online store. The dashboard is intuitive, and we can track everything in one place."
                      </p>
                      <div className="font-semibold mt-2">Jane Doe</div>
                      <div className="text-xs text-muted-foreground">CEO, Tech Innovations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                        <AvatarImage src="https://picsum.photos/seed/user2/40/40" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        "The best admin panel I've ever used. It's fast, reliable, and has all the features we need to scale our business."
                      </p>
                      <div className="font-semibold mt-2">John Smith</div>
                      <div className="text-xs text-muted-foreground">Founder, E-Commerce Co.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                        <AvatarImage src="https://picsum.photos/seed/user3/40/40" />
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        "As a non-technical person, I find UCLAP incredibly easy to use. I can manage content and see our sales without any help from developers."
                      </p>
                      <div className="font-semibold mt-2">Sarah Williams</div>
                      <div className="text-xs text-muted-foreground">Marketing Manager</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Take Control?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Sign up today and experience the power and simplicity of UCLAP Admin Panel for yourself.
              </p>
              <Link
                href="/signup"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                prefetch={false}
              >
                Sign Up for Free
              </Link>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 UCLAP Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
