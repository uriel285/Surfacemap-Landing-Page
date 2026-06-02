import MetricCard from './MetricCard';
import HeroLogo3D from './HeroLogo3D';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 via-transparent to-transparent dark:from-zinc-900" />

      <div className="max-w-7xl mx-auto px-6 pb-28 pt-10 relative z-10">

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-4xl">

            <div
              style={{
                animationDelay: '200ms',
                animationFillMode: 'both',
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm mb-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm blur-in"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 blink" />
              CLI + Desktop GUI for Attack Surface Discovery
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-8 blur-in">
              Map the{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
                Entire Web Surface
              </span>{' '}
              of Any Domain.
            </h1>

            <p
              style={{
                animationDelay: '400ms',
                animationFillMode: 'both',
              }}
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mb-10 blur-in"
            >
              SurfaceMap discovers live subdomains, captures screenshots,
              fingerprints technologies, and classifies potential risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://u285.gumroad.com/l/surfacemap"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-lg hover:scale-[1.02] transition-transform scale-up-bottom"
              >
                Get SurfaceMap
              </a>

              <a
                href="#demo"
                style={{
                  animationDelay: '200ms',
                  animationFillMode: 'both',
                }}
                className="px-8 py-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 font-semibold text-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors scale-up-bottom"
              >
                Watch Demo
              </a>
            </div>

            {/* METRIC CARDS */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricCard
                value="Live"
                label="Subdomain Detection"
                delayms="0ms"
              />

              <MetricCard
                value="HTTP"
                label="Status Classification"
                delayms="120ms"
              />

              <MetricCard
                value="Screens"
                label="Automatic Snapshots"
                delayms="240ms"
              />

              <MetricCard
                value="Stack"
                label="Tech Fingerprinting"
                delayms="360ms"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden xl:flex items-center justify-center relative min-h-[600px]">

          <div className="relative w-full h-full flex items-center justify-center">

            <div className="absolute w-[420px] h-[420px] bg-emerald-500/10 blur-[120px] rounded-full" />
            
            <div className="w-full max-w-[620px] 2xl:max-w-[760px] z-20">
              <HeroLogo3D />
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}