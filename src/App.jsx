import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Cursor from './components/Cursor.jsx';
import Background from './components/Background.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Stats from './components/Stats.jsx';
import Statement from './components/Statement.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Certs from './components/Certs.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Divider from './components/Divider.jsx';
import { profile, ticker } from './data.js';
import { setLenis, scrollToTarget } from './scroller.js';

function savedTheme() {
  try { return localStorage.getItem('theme2') || 'red'; } catch { return 'red'; }
}

export default function App() {
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme2', theme); } catch {}
  }, [theme]);

  // smooth inertia scrolling (Lenis)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); setLenis(null); };
  }, []);

  // in-page links scroll smoothly through Lenis
  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      e.preventDefault();
      if (id === '#' ) return;
      scrollToTarget(id === '#home' ? 0 : id);
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);

  // magnetic buttons (mouse devices only)
  useEffect(() => {
    if (matchMedia('(hover: none)').matches) return;
    let last = null;
    const move = (e) => {
      const b = e.target.closest && e.target.closest('.btn');
      if (last && last !== b) { last.style.transform = ''; last = null; }
      if (b) {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
        last = b;
      }
    };
    addEventListener('mousemove', move);
    return () => removeEventListener('mousemove', move);
  }, []);

  // pointer-follow spotlight on every box (tilt cards handle their own)
  useEffect(() => {
    const move = (e) => {
      const p = e.target.closest && e.target.closest('.panel:not(.tilt)');
      if (!p) return;
      const r = p.getBoundingClientRect();
      p.style.setProperty('--mx', `${e.clientX - r.left}px`);
      p.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    addEventListener('mousemove', move, { passive: true });
    return () => removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <Background />
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="ready">
        <Hero />
        <Marquee items={ticker} big />
        <Stats />
        <Statement />
        <About />
        <Divider art="net" kicker="// SYSTEM STATUS" title="Uptime is a habit." />
        <Services />
        <Process />
        <Projects />
        <Skills />
        <Education />
        <Certs />
        <FAQ />
        <Divider art="circuit" kicker="// NEXT MISSION" title="Let's build something reliable." />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name} — Built with the MERN stack</p>
        <p className="foot-sub">ALL SYSTEMS NOMINAL ● END OF TRANSMISSION</p>
      </footer>
    </>
  );
}
