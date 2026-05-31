import { useVisible } from './hooks/useVisible';

const features = [
    { title: 'Live Subdomain Discovery', description: 'Find reachable subdomains instantly and separate dead assets from active targets.', delayms: '0ms' },
    { title: 'Technology Fingerprinting', description: 'Detect frameworks, backend stacks, CDNs, hosting providers, and frontend technologies.', delayms: '150ms'  },
    { title: 'Automatic Screenshots', description: 'Capture visual snapshots of every discovered service for rapid reconnaissance.', delayms: '300ms'  },
    { title: 'HTTP Response Intelligence', description: 'Analyze status codes, redirects, headers, and exposed services in real time.', delayms: '450ms'  },
    { title: 'Risk Classification Engine', description: 'Prioritize potentially vulnerable assets through attack surface categorization.', delayms: '600ms'  },
    { title: 'Desktop GUI + CLI', description: 'Use a clean graphical interface or automate everything directly from the terminal.', delayms: '750ms'  },
  ];
  
  export default function FeaturesSection() {
    const [ref, isVisible] = useVisible();

    return (
      <section id="features" className="py-28 border-t border-zinc-200 dark:border-zinc-900 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">Features</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Everything You Need to Explore an Attack Surface.</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              SurfaceMap combines reconnaissance, visualization, and technology analysis into a single streamlined workflow.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div ref={ref} key={feature.title} style={{ animationDelay: feature.delayms, animationFillMode: 'both', visibility: isVisible ? 'visible' : 'hidden' }} className={`group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:-translate-y-1 transition-transform ${ isVisible ? 'scale-up-bottom' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }