import Reveal from './Reveal.jsx';
import Scramble from './Scramble.jsx';

export default function Section({ id, num, title, sub, children }) {
  return (
    <section id={id} className="section">
      <Reveal>
        <p className="tag">{'// '}{num} — {id.toUpperCase()}</p>
        <h2 className="title"><Scramble text={title} /></h2>
        {sub && <p className="sub">{sub}</p>}
      </Reveal>
      {children}
    </section>
  );
}
