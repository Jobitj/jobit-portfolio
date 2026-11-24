import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import TiltCard from './TiltCard.jsx';
import { process } from '../data.js';
import { Icon } from './Icons.jsx';

export default function Process() {
  return (
    <Section id="process" num="03" title="How I Work" sub="My five-stage incident protocol">
      <div className="steps">
        {process.map((p, i) => (
          <Reveal key={p.step} delay={i * 110}>
            <TiltCard className="step panel">
              <span className="step-n"><Icon name={p.icon} /></span><small className="step-no">{p.step}</small>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
