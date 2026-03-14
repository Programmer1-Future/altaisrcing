import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // once visible we can unobserve if we want one-time reveal
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, inView } as const;
}

export default useInView;
