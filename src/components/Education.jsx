import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { education } from '../data.js';

export default function Education() {
  return (
    <Section id="education" num="06" title="Education" sub="Where I studied">
      <div className="timeline">
        {education.map((e, i) => (
          <Reveal key={e.title} from={i % 2 ? 'right' : 'left'}>
            <div className="job panel">
              <span className="node" />
              <div className="job-top">
                <span className="lgbox"><Icon name="book" /></span>
                <div>
                  <div className="job-head"><h3>{e.title}</h3><span className="period">{e.period}</span></div>
                  <p className="org">{e.place}</p>
                </div>
              </div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              {e.sample && <span className="psample inline">SAMPLE</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
