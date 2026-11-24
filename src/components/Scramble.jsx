import { useEffect, useState } from 'react';
import { useInView } from '../hooks.js';

const CH = '!<>-_\\/[]{}=+*^?#01';

export default function Scramble({ text, className = '' }) {
  const [ref, seen] = useInView({ threshold: 0.5 });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!seen) return;
    let frame = 0;
    const total = text.length * 3 + 10;
    const id = setInterval(() => {
      frame++;
      const reveal = Math.floor(frame / 3);
      setOut(text.split('').map((ch, i) => (ch === ' ' ? ' ' : i < reveal ? ch : CH[Math.floor(Math.random() * CH.length)])).join(''));
      if (frame >= total) { clearInterval(id); setOut(text); }
    }, 35);
    return () => clearInterval(id);
  }, [seen, text]);
  return <span ref={ref} className={className}>{out}</span>;
}
