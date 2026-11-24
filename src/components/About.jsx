import { useEffect, useState } from 'react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { useInView } from '../hooks.js';
import { profile, terminal } from '../data.js';

function Terminal() {
  const [ref, seen] = useInView({ threshold: 0.3 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const id = setInterval(() => setN((v) => (v < terminal.length ? v + 1 : v)), 900);
    return () => clearInterval(id);
  }, [seen]);
  return (
    <div className="term panel bracket nohover" ref={ref}>
      <div className="term-bar"><i /><i /><i /><span>jobit@portfolio:~</span></div>
      <div className="term-body">
        {terminal.slice(0, n).map((l) => (
          <div key={l.cmd}>
            <p><b>$</b> {l.cmd}</p>
            <p className="out">{l.out}</p>
          </div>
        ))}
        <p><b>$</b> <span className="caret" /></p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" num="01" title={`About ${profile.name}`} sub="Who's behind the keyboard">
      <div className="about">
        <Reveal from="left">
          <div className="panel about-text nohover">
            <div className="about-id">
              <div className="avatar">
                <div className="avatar-in">
                  <img src={profile.avatar} alt={profile.name} onError={(e) => { e.currentTarget.src = profile.photo; }} />
                </div>
              </div>
              <div>
                <h3>{profile.name}</h3>
                <small>Website Design &amp; Development · Technical Support</small>
                <span className="ok status-line">● Open to opportunities</span>
              </div>
            </div>
            <p>
              Web designer, MERN stack developer, and technical support professional with a focus on building responsive websites 
              that are easy to use. 
              Combines interface design with full-stack development using MongoDB, Express, React, and Node.js.
            </p>
            <p>
              Technical support experience includes diagnosing issues, troubleshooting network connectivity, and guiding users through solutions with clear,
               calm communication. Creative skills include graphic design in Adobe Photoshop and video editing in Adobe Premiere Pro.
            </p>
            <ul className="facts">
              <li><b>LOCATION</b> {profile.location}</li>
              <li><b>EMAIL</b> {profile.email}</li>
              <li><b>PHONE</b> {profile.phone}</li>
            </ul>
          </div>
        </Reveal>
        <Reveal from="right" delay={120}><Terminal /></Reveal>
      </div>
    </Section>
  );
}
