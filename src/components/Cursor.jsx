import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const glow = useRef(null);
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('has-cursor');
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, gx = x, gy = y, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      dot.current.style.transform = `translate(${x}px,${y}px)`;
      const hit = e.target.closest && e.target.closest('a,button,input,textarea,summary,.tilt,[role=button]');
      ring.current.classList.toggle('hover', !!hit);
    };
    const loop = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      gx += (x - gx) * 0.07; gy += (y - gy) * 0.07;
      ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      glow.current.style.transform = `translate(${gx}px,${gy}px)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener('mousemove', move);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('mousemove', move);
      document.body.classList.remove('has-cursor');
    };
  }, []);
  return (
    <>
      <div ref={glow} className="mouse-glow" />
      <div ref={ring} className="cursor-ring"><i /></div>
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
