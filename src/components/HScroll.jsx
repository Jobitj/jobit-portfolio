import { useEffect, useRef } from 'react';
import Scramble from './Scramble.jsx';
import { reducedMotion, useScrollTrigger, clamp } from '../hooks.js';

// Vertical scrolling drives a horizontal row of cards (pinned section) with 3D depth per card.
export default function HScroll({ id, num, title, sub, items, render, cardClass = '' }) {
  const wrap = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    if (reducedMotion()) return;
    const size = () => {
      if (!wrap.current || !track.current) return;
      wrap.current.style.height = `${Math.max(0, track.current.scrollWidth - innerWidth) + innerHeight}px`;
    };
    size();
    addEventListener('resize', size);
    addEventListener('load', size);
    return () => { removeEventListener('resize', size); removeEventListener('load', size); };
  }, []);

  useScrollTrigger(wrap, (p) => {
    if (reducedMotion() || !track.current) return;
    const travel = Math.max(0, track.current.scrollWidth - innerWidth);
    track.current.style.transform = `translate3d(${-p * travel}px,0,0)`;
    if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    cards.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = clamp(((r.left + r.width / 2) - innerWidth / 2) / innerWidth, -1, 1);
      const inner = el.firstChild;
      inner.style.transform = `rotateY(${-d * 24}deg) scale(${1 - Math.abs(d) * 0.1})`;
      inner.style.opacity = String(1 - Math.abs(d) * 0.45);
    });
  });

  return (
    <section id={id} className="h-wrap" ref={wrap}>
      <div className="h-stage">
        <div className="h-head">
          <p className="tag">{'// '}{num} — {id.toUpperCase()}</p>
          <h2 className="title"><Scramble text={title} /></h2>
          <p className="sub">{sub}</p>
        </div>
        <div className="h-track" ref={track}>
          {items.map((it, i) => (
            <div className={`h-card ${cardClass}`} key={i} ref={(el) => (cards.current[i] = el)}>
              <div className="h-in">{render(it, i)}</div>
            </div>
          ))}
        </div>
        <div className="h-prog"><b ref={bar} /></div>
      </div>
    </section>
  );
}
