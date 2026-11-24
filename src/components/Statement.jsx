import { useEffect, useRef } from 'react';
import { clamp } from '../hooks.js';
import { statement } from '../data.js';

const WORDS = statement.split(' ');
const HL = /design|build|support|intentional/i;

// Big sentence whose words light up one by one as you scroll.
export default function Statement() {
  const ref = useRef(null);
  const words = useRef([]);
  useEffect(() => {
    const on = () => {
      const r = ref.current.getBoundingClientRect();
      const p = clamp((innerHeight * 0.8 - r.top) / (r.height + innerHeight * 0.25));
      const n = WORDS.length;
      words.current.forEach((w, i) => { if (w) w.style.opacity = String(0.15 + 0.85 * clamp(p * (n + 4) - i, 0, 1)); });
    };
    on();
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, []);
  return (
    <section className="statement" ref={ref}>
      <p>
        {WORDS.map((w, i) => (
          <span key={i} ref={(el) => (words.current[i] = el)} className={HL.test(w) ? 'hl' : ''}>{w}</span>
        ))}
      </p>
    </section>
  );
}
