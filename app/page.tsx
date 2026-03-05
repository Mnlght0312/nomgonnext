"use client";

import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

// normal components that are safe
import Footer from "@/components/Footer";
import AboutUs from "@/components/ui/AboutUs";

// dynamically loaded (client-only) components — likely to use document/window
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const News = dynamic(() => import("@/components/ui/News"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Grid />
        <RecentProjects />
        <News />
        <Clients />
        <Experience />
        <Approach />

        <AboutUs />
        <Footer />
      </div>
    </main>
  );
}