import Logo from '../assets/logo.png';

export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <img src={Logo} alt='S' className='w-20' />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">SurfaceMap</h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Attack Surface Discovery Platform</p>
            </div>
          </div>
  
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-zinc-500 transition-colors">Features</a>
            <a href="https://uh-software.gitbook.io/surfacemap-docs" className="hover:text-zinc-500 transition-colors">Demo</a>
            <a href="#docs" className="hover:text-zinc-500 transition-colors">Documentation</a>
            <a
              href="https://gumroad.com"
              target="_blank"
              className="px-5 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition-opacity"
            >
              Buy on Gumroad
            </a>
          </nav>
        </div>
      </header>
    );
  }