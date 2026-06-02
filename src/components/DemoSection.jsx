import { useVisible } from './hooks/useVisible';
import { useState } from 'react';

export default function DemoSection() {
  const [ref, isVisible] = useVisible();
  const [play, setPlay] = useState(false);

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
          {isVisible && !play && (
            <button
              onClick={() => setPlay(true)}
              className="relative w-full h-full group"
              aria-label="Play demo video"
            >
              <img
                src="/demo-preview.webp"
                alt="SurfaceMap demo preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition group-hover:bg-black/40">
                <div className="w-24 h-24 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
                  <div className="ml-1 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-zinc-900" />
                </div>
              </div>
            </button>
          )}

          {isVisible && play && (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              preload="none"
              playsInline
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      </section>
    );
  }