import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import TiltCard from './TiltCard.jsx';
import { Icon } from './Icons.jsx';
import { certs } from '../data.js';

export default function Certs() {
  return (
    <Section id="certs" num="07" title={certs.length > 1 ? 'Certifications' : 'Certification'} sub="Verified learning">
      <div className="certs-grid">
        {certs.map((c, i) => (
          <Reveal key={c.name} from="zoom" delay={i * 100}>
            <TiltCard className="card panel cert big">
              <span className="seal"><Icon name="award" /></span>
              <div>
                <small className="idx2">{c.institute || `CERT-${String(i + 1).padStart(2, '0')}`}</small>
                <h3>{c.name}</h3>
                <p>{c.issuer} · {c.year}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
