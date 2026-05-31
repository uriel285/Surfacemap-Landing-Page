export default function Footer() {
    return (
      <footer className="border-t border-zinc-200 dark:border-zinc-900 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg">SurfaceMap</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Attack Surface Discovery for Ethical Hackers.
            </p>
          </div>
  
          <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#demo" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Demo
            </a>
            <a href="/docs" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Docs
            </a>
          </div>
        </div>
      </footer>
    );
  }