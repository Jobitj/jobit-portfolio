import { useLayoutEffect, useRef } from 'react';
import { registerScrub } from '../scrub.js';

// Outer box keeps the real layout position; inner element is the one that animates with scroll.
export default function Reveal({ children, delay = 0, className = '', from = 'up' }) {
  const box = useRef(null);
  const el = useRef(null);
  useLayoutEffect(() => registerScrub(box.current, el.current, from, delay), [from, delay]);
  return (
    <div ref={box} className="rv">
      <div ref={el} className={`reveal ${className}`}>{children}</div>
    </div>
  );
}
