import { useVisible } from './hooks/useVisible';

export default function CTASection() {
  const [ref, isVisible] = useVisible();

    return (
      <section ref={ref} style={{visibility: isVisible ? 'visible' : 'hidden'}} className={`py-28 border-t border-zinc-200 dark:border-zinc-900 ${ isVisible ? 'scale-up-bottom' :''}`}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            Ready To Explore?
          </p>
  
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
            Turn Any Domain Into a Visual Attack Surface Map.
          </h2>
  
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-10">
            SurfaceMap gives you immediate visibility into exposed assets,
            technologies, and potentially risky infrastructure.
          </p>
  
          <a
            href="https://u285.gumroad.com/l/surfacemap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Buy SurfaceMap on Gumroad
          </a>
        </div>
      </section>
    );
  }