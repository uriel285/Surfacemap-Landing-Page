import { useVisible } from './hooks/useVisible';

export default function DemoSection() {
  const [ref, isVisible] = useVisible();

    return (
      <section ref={ref} style={{visibility: isVisible ? 'visible' : 'hidden'}} id="demo" className={`py-28 border-t border-zinc-200 dark:border-zinc-900 ${ isVisible ? 'slide-left' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
              Product Demo
            </p>
  
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Watch SurfaceMap in Action.
            </h2>
  
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Showcase the full workflow: scan execution, live subdomain mapping,
              screenshots, risk scoring, and GUI navigation.
            </p>
          </div>
  
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-transparent dark:from-zinc-800/50" />
  
            <div className="relative z-10 text-center px-8">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <div className="ml-1 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-zinc-900 dark:border-l-white" />
              </div>
  
              <h3 className="text-3xl font-bold mb-4">Demo Video Placeholder</h3>
  
              <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
                 product walkthrough.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }