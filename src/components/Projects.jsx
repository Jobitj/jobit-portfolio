import { useRef } from 'react';
import TiltCard from './TiltCard.jsx';
import Scramble from './Scramble.jsx';
import { projects } from '../data.js';
import ProjectArt from './Art.jsx';
import { clamp, easeOut, reducedMotion, useScrollTrigger } from '../hooks.js';

// Tiles fly in from both sides in 3D, snap into a grid, then the grid lifts away as you keep scrolling.
export default function Projects() {
  const wrap = useRef(null);
  const head = useRef(null);
  const grid = useRef(null);
  const tiles = useRef([]);

  useScrollTrigger(wrap, (p) => {
    const reduce = reducedMotion();
    const a = reduce ? 1 : clamp(p / 0.55);
    const out = reduce ? 0 : clamp((p - 0.82) / 0.18);

    projects.forEach((_, i) => {
      const el = tiles.current[i];
      if (!el) return;
      const t = easeOut(clamp((a - i * 0.06) / 0.55));
      const k = 1 - t;
      const dir = i % 2 === 0 ? -1 : 1;
      el.style.transform =
        `translate3d(${dir * (40 + (i % 4) * 10) * k}vw, ${((i % 3) - 1) * 22 * k}vh, ${-260 * k}px) ` +
        `rotateY(${-dir * 70 * k}deg) rotateZ(${dir * 14 * k}deg) scale(${0.7 + 0.3 * t})`;
      el.style.opacity = String(0.2 + 0.8 * t);
    });

    if (grid.current) {
      grid.current.style.transform = `translateY(${-out * 32}vh) scale(${1 - out * 0.1})`;
      grid.current.style.opacity = String(1 - out * 0.9);
    }
    if (head.current) {
      head.current.style.transform = `translateY(${(1 - a) * 10}vh) scale(${1 + (1 - a) * 0.45})`;
      head.current.style.opacity = String(1 - out);
    }
  });

  return (
    <section id="projects" className="pin-wrap" ref={wrap}>
      <div className="pin-stage">
        <div className="pin-head" ref={head}>
          <p className="tag">{'// '}04 — PROJECTS</p>
          <h2 className="title"><Scramble text="Projects" /></h2>
        </div>
        <div className="pgrid" ref={grid} style={{ '--pc': projects.length <= 6 ? 3 : 4 }}>
          {projects.map((p, i) => (
            <div className="ptile" key={p.title} ref={(el) => (tiles.current[i] = el)}>
              <TiltCard as="a" href={p.link} className="panel pcard" style={{ '--h': `${(i * 47) % 360}` }}>
                <div className="pthumb"><ProjectArt kind={p.art} /></div>
                {p.sample && <span className="psample">SAMPLE</span>}
                <div className="pmeta"><small>{p.cat}</small><h3>{p.title}</h3></div>
                <div className="pover">
                  <p>{p.text}</p>
                  <div className="chips">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
