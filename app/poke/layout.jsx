export const metadata = {
  title: 'Poké Explorer',
  description: 'Premium Pokemon Explorer built with Next.js',
};

export default function PokeLayout({ children }) {
  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-rose-200">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
            Poké Explorer
          </h1>
        </div>
      </header>
      <main className="p-6 md:p-10 max-w-7xl mx-auto animate-in fade-in duration-500">
        {children}
      </main>
    </div>
  );
}
