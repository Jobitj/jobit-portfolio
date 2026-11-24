import { useEffect, useState } from 'react';
import { scrollToTarget } from '../scroller.js';

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setP(max > 0 ? (scrollY / max) * 100 : 0);
    };
    on();
    addEventListener('scroll', on, { passive: true });

    // scroll velocity -> --skew (makes marquees lean while you scroll fast)
    let last = scrollY, vel = 0, raf;
    const loop = () => {
      const d = scrollY - last; last = scrollY;
      vel += (d - vel) * 0.12;
      const s = Math.max(-6, Math.min(6, vel * 0.25));
      document.documentElement.style.setProperty('--skew', s.toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { removeEventListener('scroll', on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div className="progress"><b style={{ width: `${p}%` }} /></div>
      <button className={`totop ${p > 8 ? 'show' : ''}`} aria-label="Back to top" onClick={() => scrollToTarget(0)}>▲</button>
    </>
  );
}
