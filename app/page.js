import DeploymentSection from "@/components/DeploymentSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WebDevSection from "@/components/WebDev";

// ✅ This is a Server Component by default in Next.js App Router
export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
      {/* Subtle blurred background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      {/* Fast initial view */}
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <WebDevSection />
        <DeploymentSection />
      </div>
    </main>
  );
}
