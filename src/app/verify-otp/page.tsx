import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CircleHelp } from "lucide-react";

const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L25.8779 14.1221L40 20L25.8779 25.8779L20 40L14.1221 25.8779L0 20L14.1221 14.1221L20 0Z" fill="white"/>
        <path d="M20 7.63934L23.7082 16.2918L32.3607 20L23.7082 23.7082L20 32.3607L16.2918 23.7082L7.63934 20L16.2918 16.2918L20 7.63934Z" stroke="#1c1c2e" strokeWidth="2"/>
    </svg>
);


export default function VerifyOtpPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-[#13131F] text-white font-body">
      <div className="hidden lg:flex flex-col justify-center p-20 bg-gradient-to-br from-[#4A2A69] to-[#0E7280]">
        <div className="space-y-8 max-w-md">
            <div className="flex items-center gap-4">
                <LogoIcon />
                <span className="text-3xl font-bold">Hajaro Grahako</span>
            </div>
            <div>
                <h1 className="text-5xl font-bold leading-tight">Verify Your Account</h1>
                <p className="text-white/80 mt-2">
                  Enter the code sent to your mobile.
                </p>
            </div>
             <div className="space-y-4 pt-8">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm">1</div>
                    <p className="font-semibold text-white/70">Sign up your account</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm">2</div>
                    <p className="font-semibold text-white/70">Verify Mobile</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm">3</div>
                    <p className="font-semibold text-white/70">Set up your profile</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="grid gap-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Verify Your Mobile</h1>
            <p className="text-balance text-white/70">
              We've sent a 6-digit code to your mobile number. Please enter it below.
            </p>
          </div>
          
          <div className="grid gap-4">
              <div className="grid gap-2">
                  <Label htmlFor="otp">One-Time Password (OTP)</Label>
                  <Input id="otp" type="text" placeholder="_ _ _ _ _ _" required className="bg-[#27273a] border-[#36364d] placeholder:text-gray-500 text-center tracking-[1em]" />
              </div>
              <Link href="/dashboard">
                <Button type="submit" className="w-full bg-[#00f5d4] hover:bg-[#00f5d4]/90 text-black font-bold text-base py-6">
                    Verify & Sign Up
                </Button>
              </Link>
          </div>
          
          <div className="mt-4 text-center text-sm">
            Didn't receive the code?{" "}
            <Link href="#" className="underline font-semibold text-[#00f5d4]">
              Resend OTP
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-[#00f5d4] border-none text-black hover:bg-[#00f5d4]/90">
                <CircleHelp className="w-6 h-6" />
            </Button>
        </div>
      </div>
    </div>
  );
}
