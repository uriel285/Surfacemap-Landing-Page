import { useVisible } from './hooks/useVisible';

export function UseCaseCard({ data, delayms }) {
  const [ref, isVisible] = useVisible({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ 
        animationDelay: delayms, 
        animationFillMode: 'both', 
        visibility: isVisible ? 'visible' : 'hidden' 
      }}
      className={`p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${
        isVisible ? 'scale-up-bottom' : ''
      }`}
    >
      <span className="font-medium">{data}</span>
    </div>
  );
}