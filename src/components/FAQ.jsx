import { useState } from 'react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { faqs } from '../data.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" num="08" title="FAQ" sub="Quick answers">
      <div className="faq">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 70}>
            <div className={`faq-item panel ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span><em>{open === i ? '−' : '+'}</em>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
