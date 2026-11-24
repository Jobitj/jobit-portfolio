import { useEffect, useRef } from 'react';

// Full-width image band: theme-coloured artwork (network / circuit) with parallax + big text.
export default function Divider({ art = 'net', kicker, title }) {
  const root = useRef(null);
  const layer = useRef(null);
  useEffect(() => {
    const on = () => {
      const r = root.current.getBoundingClientRect();
      layer.current.style.transform = `translate3d(0, ${(r.top - innerHeight / 2) * -0.18}px, 0) scale(1.15)`;
    };
    on();
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, []);
  return (
    <section className={`divider ${art}`} ref={root}>
      <div className="div-art" ref={layer} />
      <div className="div-shade" />
      <div className="div-text">
        <p className="tag">{kicker}</p>
        <h2>{title}</h2>
      </div>
    </section>
  );
}
