import { useVisible } from './hooks/useVisible';

export default function DocumentationSection() {
  const [ref, isVisible] = useVisible();

    return (
      <section ref={ref} style={{visibility: isVisible ? 'visible' : 'hidden'}} id="docs" className={`py-28 border-t border-zinc-200 dark:border-zinc-900 ${ isVisible ? 'blur-in' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-10 md:p-16 flex flex-col lg:flex-row gap-10 justify-between items-start">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
                Documentation
              </p>
  
              <h2 className="text-4xl font-black tracking-tight mb-6">
                Learn the Full Workflow.
              </h2>
  
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A dedicated documentation portal with installation guides,
                CLI references, GUI walkthroughs and scan examples.
              </p>
            </div>
  
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              <a
                href="https://uh-software.gitbook.io/surfacemap-docs"
                className="px-8 py-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-center"
              >
                Open Documentation
              </a>
  
              <a
                href="https://u285.gumroad.com/l/surfacemap"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 font-semibold text-center"
              >
                Buy Product
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }