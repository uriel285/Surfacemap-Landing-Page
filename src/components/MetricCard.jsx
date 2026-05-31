import { useVisible } from './hooks/useVisible';

export default function MetricCard({ value, label, delayms }) {
  const [ref, isVisible] = useVisible({ threshold: 0.3 });

    return (
      <div ref={ref} style={{ animationDelay: delayms, animationFillMode: 'both', visibility: isVisible ? 'visible' : 'hidden' }} className={`p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${ isVisible ? 'scale-up-bottom' : ''}`}>
        <div className="text-2xl font-black mb-2">{value}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
      </div>
    );
  }