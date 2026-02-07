import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Github, CircleHelp } from "lucide-react";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.902,35.688,44,30.41,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L25.8779 14.1221L40 20L25.8779 25.8779L20 40L14.1221 25.8779L0 20L14.1221 14.1221L20 0Z" fill="white"/>
        <path d="M20 7.63934L23.7082 16.2918L32.3607 20L23.7082 23.7082L20 32.3607L16.2918 23.7082L7.63934 20L16.2918 16.2918L20 7.63934Z" stroke="#1c1c2e" strokeWidth="2"/>
    </svg>
);

export default function EntryPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-[#13131F] text-white font-body">
      <div className="hidden lg:flex flex-col justify-center p-20 bg-gradient-to-br from-[#4A2A69] to-[#0E7280]">
        <div className="space-y-8 max-w-md">
            <div className="flex items-center gap-4">
                <LogoIcon />
                <span className="text-3xl font-bold">Hajaro Grahako</span>
            </div>
            <div>
                <h1 className="text-5xl font-bold leading-tight">Get Started with Us</h1>
                <p className="text-white/80 mt-2">
                  Complete these easy steps to register your account.
                </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white text-black shadow-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-bold text-sm">1</div>
                    <p className="font-semibold">Sign up your account</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-bold text-sm">2</div>
                    <p className="font-semibold text-white/70">Set up your workspace</p>
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
            <h1 className="text-3xl font-bold">एक खाता बनाएं</h1>
            <p className="text-balance text-white/70">
              शुरू करने के लिए नीचे अपना विवरण दर्ज करें
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-[#27273a] border-[#36364d] hover:bg-[#36364d] text-white">
              <GoogleIcon className="mr-2" />
              Google
            </Button>
            <Button variant="outline" className="bg-[#27273a] border-[#36364d] hover:bg-[#36364d] text-white">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-sm text-white/60">या</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                      <Label htmlFor="first-name">पहला नाम</Label>
                      <Input id="first-name" placeholder="उदा. राहुल" required className="bg-[#27273a] border-[#36364d] placeholder:text-gray-500" />
                  </div>
                  <div className="grid gap-2">
                      <Label htmlFor="last-name">अंतिम नाम</Label>
                      <Input id="last-name" placeholder="उदा. कुमार" required className="bg-[#27273a] border-[#36364d] placeholder:text-gray-500" />
                  </div>
              </div>
              <div className="grid gap-2">
                  <Label htmlFor="email">ईमेल</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required className="bg-[#27273a] border-[#36364d] placeholder:text-gray-500" />
              </div>
               <div className="grid gap-2">
                  <Label htmlFor="phone">फ़ोन नंबर (वैकल्पिक)</Label>
                  <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" className="bg-[#27273a] border-[#36364d] placeholder:text-gray-500" />
              </div>
              <div className="grid gap-2">
                  <Label htmlFor="password">पासवर्ड</Label>
                  <Input id="password" type="password" required className="bg-[#27273a] border-[#36364d]" />
                  <p className="text-xs text-white/60">कम से कम 8 अक्षर का होना चाहिए।</p>
              </div>
              <Link href="/dashboard">
                <Button type="submit" className="w-full bg-[#00f5d4] hover:bg-[#00f5d4]/90 text-black font-bold text-base py-6">
                    खाता बनाएं
                </Button>
              </Link>
          </div>
          
          <div className="mt-4 text-center text-sm">
            पहले से ही एक खाता है?{" "}
            <Link href="/login" className="underline font-semibold text-[#00f5d4]">
              लॉग इन करें
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
