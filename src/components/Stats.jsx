import { useEffect, useState } from 'react';
import { stats } from '../data.js';
import { useInView } from '../hooks.js';
import TiltCard from './TiltCard.jsx';
import Reveal from './Reveal.jsx';

function Counter({ to, suffix, run }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min((t - start) / 1800, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <span>{n}{suffix}</span>;
}

export default function Stats() {
  const [ref, seen] = useInView();
  return (
    <section className="stats" ref={ref}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 110} from="scale">
          <TiltCard className="stat panel">
            <strong><Counter to={s.value} suffix={s.suffix} run={seen} /></strong>
            <span>{s.label}</span>
          </TiltCard>
        </Reveal>
      ))}
    </section>
  );
}
