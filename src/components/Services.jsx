import HScroll from './HScroll.jsx';
import TiltCard from './TiltCard.jsx';
import { Icon } from './Icons.jsx';
import { services } from '../data.js';

export default function Services() {
  return (
    <HScroll
      id="services" num="02" title="Services" sub="Modules I can deploy for your team — keep scrolling →"
      items={services}
      render={(s, i) => (
        <TiltCard className="card panel">
          <span className="icon"><Icon name={s.icon} /></span>
          <small className="idx">MOD-{String(i + 1).padStart(2, '0')}</small>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </TiltCard>
      )}
    />
  );
}
