import { useVisible } from './hooks/useVisible';
import {UseCaseCard} from './UseCasesCard';

const useCases = [
    {data: 'Bug bounty reconnaissance', delayms: '0ms'},
    {data: 'Red team infrastructure mapping', delayms: '100ms'},
    {data: 'Attack surface auditing', delayms: '200ms'},
    {data: 'Internal asset discovery', delayms: '300ms'},
    {data: 'Technology inventory collection', delayms: '400ms'},
    {data: 'Security research workflows', delayms: '500ms'},
  ];
  
  export default function UseCasesSection() {
    const [ref, isVisible] = useVisible();

    return (
      <section ref={ref} style={{visibility: isVisible ? 'visible' : 'hidden'}} className={`py-28 border-t border-zinc-200 dark:border-zinc-900 ${ isVisible ? 'slide-right' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
              Built For
            </p>
  
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Security Professionals & Curious Builders.
            </h2>
  
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
              Whether you're hunting vulnerabilities, mapping your organization,
              or researching exposed infrastructure, SurfaceMap gives you a clear
              operational view of the web ecosystem around any domain.
            </p>
  
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((item) => (
                <UseCaseCard 
                  key={item.data} 
                  data={item.data} 
                  delayms={item.delayms} 
                />
              ))}
            </div>
          </div>
  
          <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 p-8 bg-zinc-50 dark:bg-zinc-900">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">api.example.com</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
                    Live
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mb-3">HTTP 200 • React • Cloudflare</p>
                <div className="h-28 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
              </div>
  
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">admin.example.com</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium">
                    Medium Risk
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mb-3">HTTP 302 • Nginx • Exposed Login</p>
                <div className="h-28 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }