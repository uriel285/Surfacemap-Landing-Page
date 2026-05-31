import { useState, useEffect, useRef } from 'react';

export function useVisible(options = { threshold: 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Dejamos de observar una vez que es visible para que la 
        // animación no se repita cada vez que el usuario sube y baja.
        observer.unobserve(entry.target);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [options]);

  return [elementRef, isVisible];
}