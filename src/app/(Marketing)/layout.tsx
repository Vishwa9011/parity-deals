import React from "react";
import Navbar from "./_components/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="selection:bg-[hsl(320,65%,52%,20%)]">
         <Navbar />
         {children}
      </div>
   );
}
