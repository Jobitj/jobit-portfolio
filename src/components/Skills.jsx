import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import TiltCard from './TiltCard.jsx';
import { Logo } from './Icons.jsx';
import { useInView } from '../hooks.js';
import { coreSkills, skillGroups, arsenal } from '../data.js';

function Ring({ label, pct }) {
  const [ref, seen] = useInView();
  const r = 44, c = 2 * Math.PI * r;
  return (
    <div className="ring" ref={ref}>
      <svg viewBox="0 0 100 100">
        <circle className="ring-bg" cx="50" cy="50" r={r} />
        <circle className="ring-fg" cx="50" cy="50" r={r} strokeDasharray={c} strokeDashoffset={seen ? c * (1 - pct / 100) : c} />
      </svg>
      <strong>{pct}%</strong>
      <span>{label}</span>
    </div>
  );
}

function Group({ g }) {
  const [ref, seen] = useInView();
  return (
    <div className="card panel" ref={ref}>
      <h3>{g.group}</h3>
      {g.items.map(([name, pct]) => (
        <div className="skill" key={name}>
          <div className="skill-top"><span>{name}</span><span>{pct}%</span></div>
          <div className="bar"><i style={{ width: seen ? `${pct}%` : 0 }} /></div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" num="05" title="Technical Skills" sub="Power levels and toolkit">
      <div className="rings">
        {coreSkills.map((s, i) => <Reveal key={s.label} delay={i * 80}><Ring {...s} /></Reveal>)}
      </div>
      <div className="grid g2">
        {skillGroups.map((g) => <Reveal key={g.group}><Group g={g} /></Reveal>)}
      </div>
      <h3 className="arsenal-title">My Arsenal</h3>
      <div className="tools">
        {arsenal.map((a, i) => (
          <Reveal key={a.name} delay={(i % 8) * 55} from="scale">
            <TiltCard className="tool panel">
              <div className="tool-logo"><Logo tool={a} /></div>
              <span>{a.name}</span>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
