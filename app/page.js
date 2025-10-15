// ✅ This is a Server Component by default in Next.js App Router
export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex items-center justify-center overflow-hidden">
      {/* Subtle blurred background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      {/* Fast initial view */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        AG <span className="text-blue-400">S2</span> House
      </h1>
    </main>
  );
}
