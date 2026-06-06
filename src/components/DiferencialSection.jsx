import { useVisible } from './hooks/useVisible';

export default function DiferencialSection() {
  const [ref, isVisible] = useVisible();

  return (
    <section
      ref={ref}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      id="diferencial"
      className={`py-28 border-t border-zinc-200 dark:border-zinc-900 ${
        isVisible ? 'blur-in' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Why SurfaceMap
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Stop Chaining Tools.
            <span className="block pt-3 pb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">
              Start Mapping Surfaces.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Most reconnaissance workflows require multiple tools, custom scripts,
            manual correlation and endless output files. SurfaceMap brings
            everything together into a single workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Old Way */}
          <div className="rounded-3xl border border-red-200 dark:border-red-950 bg-red-50/50 dark:bg-red-950/10 p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 mb-6">
              ❌ Old Way
            </div>

            <h3 className="text-2xl font-bold mb-6">
              Fragmented Recon Workflow
            </h3>

            <div className="space-y-4 font-mono text-sm">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                subfinder
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                httpx
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                nuclei
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                custom python scripts
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                screenshots + JSON files + spreadsheets
              </div>
            </div>

            <p className="mt-8 text-zinc-600 dark:text-zinc-400">
              Multiple tools, multiple outputs, manual correlation and a lot of
              time spent organizing data.
            </p>
          </div>

          {/* SurfaceMap */}
          <div className="rounded-3xl border border-emerald-300/50 dark:border-emerald-700/50 bg-emerald-50/50 dark:bg-emerald-950/10 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/10" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 mb-6">
                ✅ SurfaceMap Way
              </div>

              <h3 className="text-2xl font-bold mb-6">
                One Command. One Dashboard.
              </h3>

              <div className="rounded-2xl border border-cyan-500/20 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm p-8">
                <div className="font-mono text-lg mb-6">
                  $ surfacemap scan example.com
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4">
                    Live Subdomains
                  </div>

                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4">
                    HTTP Status
                  </div>

                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4">
                    Screenshots
                  </div>

                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4">
                    Tech Stack
                  </div>

                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4">
                    Risk Score
                  </div>

                  <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4">
                    Reports
                  </div>
                </div>
              </div>

              <p className="mt-8 text-zinc-600 dark:text-zinc-400">
                Immediate insights with a clean visual dashboard and a unified
                workflow designed for security professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 text-center bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            100% Local & Privacy Focused
          </h3>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Your scan results, screenshots, reports and metadata never leave your
            machine. SurfaceMap runs locally, giving you full control over your
            reconnaissance data.
          </p>
        </div>
      </div>
    </section>
  );
}