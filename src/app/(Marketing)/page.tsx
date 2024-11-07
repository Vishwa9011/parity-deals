import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
   return (
      <>
         <section className="flex min-h-screen flex-col items-center justify-center gap-8 text-balance bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] px-4 text-center">
            <h1 className="text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl">Price Smarter, Sell bigger!</h1>
            <p className="max-w-screen-xl text-lg lg:text-3xl">
               Optimize your product pricing across countries to maximize sales. Capture 85% of the untapped market with
               location-based dynamic pricing.
            </p>
            <SignUpButton>
               <Button className="flex gap-2 rounded-xl p-6 text-lg">
                  Get started for free <ArrowRightIcon className="size-5" />
               </Button>
            </SignUpButton>
         </section>

         <section className="bg-primary text-primary-foreground">
            <div className="container flex flex-col gap-16 px-8 py-16 md:px-16">
               <h2 className="text-balance text-center text-3xl">Trusted by the the top modern componies</h2>
               <div className="grid grid-cols-2 gap-16 md:grid-cols-3 xl:grid-cols-5"></div>
            </div>
         </section>
      </>
   );
}
