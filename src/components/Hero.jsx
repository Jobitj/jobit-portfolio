import { useEffect, useRef, useState } from 'react';
import { profile } from '../data.js';
import TypeText from './TypeText.jsx';
import Orbit from './Orbit.jsx';
import MatrixRain from './MatrixRain.jsx';

const BOOT = ['sudo ./start_portfolio.sh', 'loading modules: design ✓  dev ✓  support ✓', 'access granted'];

export default function Hero() {
  const root = useRef(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const t = () => setTime(new Date().toLocaleTimeString('en-GB'));
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  // Phones/tablets: shrink the giant name until the whole word fits inside the screen (the font is wide).
  useEffect(() => {
    const fit = () => {
      const h = nameRef.current, t = textRef.current;
      if (!h || !t) return;
      h.style.fontSize = '';                       // back to the CSS size first
      if (innerWidth > 1000) return;               // desktop keeps the big absolute layout
      const avail = h.clientWidth * 0.94;
      const need = t.offsetWidth;
      if (need > avail) h.style.fontSize = `${(parseFloat(getComputedStyle(h).fontSize) * avail / need).toFixed(1)}px`;
    };
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    addEventListener('resize', fit);
    return () => removeEventListener('resize', fit);
  }, []);

  // mouse parallax (--mx/--my) and scroll progress (--hs) drive all hero motion through CSS
  useEffect(() => {
    const el = root.current;
    const onScroll = () => el.style.setProperty('--hs', Math.min(1, Math.max(0, scrollY / (innerHeight * 0.9))).toFixed(3));
    const onMove = (e) => {
      el.style.setProperty('--mx', (e.clientX / innerWidth - 0.5).toFixed(3));
      el.style.setProperty('--my', (e.clientY / innerHeight - 0.5).toFixed(3));
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('mousemove', onMove);
    return () => { removeEventListener('scroll', onScroll); removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <section id="home" className="hero2" ref={root}>
      <MatrixRain />
      <i className="h2-bar t" /><i className="h2-bar b" />
      <div className="h2-spot" />
      <h1 className="h2-name" ref={nameRef} data-text={profile.name} aria-label={profile.name}><span className="h2-name-t" ref={textRef}>{profile.name}</span></h1>
      <div className="h2-flare" />

      <div className="h2-grid">
        <div className="h2-left">
          <span className="avail"><i className="dot" /> Available for work</span>
          <p className="bootline"><span>$</span> <TypeText words={BOOT} /></p>
          <h2 className="h2-role"><small></small><TypeText words={profile.roles} /></h2>
          <p className="lead">{profile.tagline}</p>
          <div className="row">
            <a href="#contact" className="btn"><span>Hire Me</span></a>
            <a href={profile.resume} className="btn btn-ghost" download><span>Download CV</span></a>
          </div>
        </div>

        <div className="h2-photo">
          <div className="h2-glow" />
          <Orbit />
        </div>
      </div>

      <div className="h2-foot">
        <div className="h2-soc">
          {profile.socials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
        </div>
        <a href="#about" className="h2-scroll" aria-label="Scroll down"><span>SCROLL</span><i /></a>
        <div className="h2-rec"><b>●</b> REC {time}</div>
      </div>
    </section>
  );
}
