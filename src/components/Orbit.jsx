import { Icon } from './Icons.jsx';

const RING1 = ['headset', 'shield', 'server', 'network'];
const RING2 = ['cloud', 'code', 'database', 'monitor', 'wrench', 'wifi'];

function Ring({ items, cls }) {
  return (
    <div className={`ring-o ${cls}`}>
      {items.map((n, i) => (
        <div className="o-node" key={n} style={{ '--a': `${(i * 360) / items.length}deg` }}>
          <div className="o-inv">
            <span className="o-ico"><Icon name={n} /></span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Glowing core with tech icons orbiting around it (replaces the big hero photo).
export default function Orbit() {
  return (
    <div className="orbit-wrap" aria-hidden="true">
      <div className="o-halo" />
      <div className="o-guide g1" /><div className="o-guide g2" /><div className="o-guide g3" />
      <Ring items={RING1} cls="r1" />
      <Ring items={RING2} cls="r2" />
      <div className="gyro-wrap"><div className="gyro"><i /><i /><i /></div></div>
      <div className="o-core">
        <svg viewBox="0 0 64 64"><path d="M32 4l24 14v28L32 60 8 46V18z" className="hexo" /><path d="M38 18v20a8 8 0 01-8 8h-4" className="jmark" /></svg>
      </div>
      <span className="o-tag t1">WEB DESIGN</span>
      <span className="o-tag t2">TECH SUPPORT</span>
      <span className="o-tag t3">MERN STACK</span>
    </div>
  );
}
