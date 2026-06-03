import React, { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Retraso de 1 segundo para mostrar el popup y dar tiempo a que la página cargue
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay oscuro con blur */}
      <div 
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Contenedor del Popup */}
      <div 
        style={{ animationFillMode: 'both' }}
        className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-3xl p-8 shadow-2xl scale-up-bottom z-10"
      >
        {/* Botón de cerrar */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge superior (estilo similar al de tu Hero) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs mb-6 bg-zinc-100/50 dark:bg-zinc-800/50">
          <span className="w-2 h-2 rounded-full bg-emerald-500 blink" />
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Limited Time Launch Offers</span>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-black tracking-tight mb-2">
          Special{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
            Discounts
          </span>
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
          Be one of the first to map the web surface. Use these codes at checkout:
        </p>

        {/* Códigos Promocionales */}
        <div className="space-y-4 mb-8">
          {/* Código 1: FREE5 */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1 font-medium">FIRST 5 USERS</p>
              <p className="text-lg font-bold text-zinc-900 dark:text-white">100% OFF (Free)</p>
            </div>
            <div className="bg-emerald-500 text-white font-mono font-bold px-3 py-1.5 rounded-lg tracking-wider">
              FREE5
            </div>
          </div>

          {/* Código 2: LAUNCH */}
          <div className="flex items-center justify-between p-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1 font-medium">NEXT 10 USERS</p>
              <p className="text-lg font-bold text-zinc-900 dark:text-white">Only $9.50</p>
            </div>
            <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-mono font-bold px-3 py-1.5 rounded-lg tracking-wider">
              LAUNCH
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <a
          href="https://u285.gumroad.com/l/surfacemap"
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center px-8 py-4 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-lg hover:scale-[1.02] transition-transform"
        >
          Claim Offer Now
        </a>
      </div>
    </div>
  );
}