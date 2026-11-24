import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Calls apply(progress 0..1, rect) while a tall "pinned" wrapper scrolls through the viewport.
export function useScrollTrigger(ref, apply) {
  const fn = useRef(apply);
  fn.current = apply;
  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - innerHeight;
      fn.current(total > 0 ? clamp(-r.top / total) : 0, r);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', on);
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, []);
}
