import { useEffect, useState } from 'react';
import { profile } from '../data.js';

const links = ['about', 'services', 'projects', 'skills', 'education', 'contact'];
const themes = [['cyan', '#00e5ff'], ['red', '#ff2a2a'], ['violet', '#a855ff'], ['green', '#22ff88']];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let last = scrollY;
    const on = () => { const y = scrollY; setHide(y > last && y > 160); last = y; };
    addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav ${hide && !open ? 'hide' : ''}`}>
      <a href="#home" className="logo"><svg className="mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 4l24 14v28L32 60 8 46V18z" /><path d="M38 18v20a8 8 0 01-8 8h-4" /></svg>{profile.name}</a>
      <nav className={open ? 'open' : ''}>
        {links.map((l, i) => (
          <a key={l} href={`#${l}`} className={active === l ? 'on' : ''} onClick={() => setOpen(false)}>
            <small>0{i + 1}</small>{l}
          </a>
        ))}
      </nav>
      <div className="themes" title="Change color theme">
        {themes.map(([t, col]) => (
          <button key={t} aria-label={`${t} theme`} className={theme === t ? 'on' : ''} style={{ '--dot': col }} onClick={() => setTheme(t)} />
        ))}
      </div>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    </header>
  );
}
