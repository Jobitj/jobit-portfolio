import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソ0123456789ABCDEF<>/{}[]$#%&*+=';

// "Code rain" behind the hero. Light on purpose: ~20 fps, a few hundred glyphs per frame, pauses when the hero is off-screen.
export default function MatrixRain() {
  const ref = useRef(null);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const c = ref.current;
    const ctx = c.getContext('2d');
    const small = innerWidth < 700;
    const size = small ? 16 : 18, tail = small ? 7 : 11;
    let w = 0, h = 0, cols = 0, drops = [], raf = 0, last = 0, vis = true, frame = 0, rgb = '255,42,42';

    const resize = () => {
      w = c.parentElement.clientWidth; h = c.parentElement.clientHeight;
      c.width = w; c.height = h;
      cols = Math.floor(w / size);
      drops = Array.from({ length: cols }, () => Math.random() * -40);
    };
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; });
    io.observe(c);
    resize();
    addEventListener('resize', resize);

    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (!vis || t - last < 50) return;
      last = t; frame++;
      if (frame % 60 === 1) rgb = getComputedStyle(document.documentElement).getPropertyValue('--rgb').trim() || rgb;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${size}px monospace`;
      const tick = Math.floor(t / 160);
      for (let i = 0; i < cols; i++) {
        const head = Math.floor(drops[i]);
        for (let k = 0; k < tail; k++) {
          const row = head - k;
          if (row < 0) continue;
          const a = 1 - k / tail;
          ctx.fillStyle = k === 0 ? `rgba(255,255,255,${a})` : `rgba(${rgb},${(a * 0.75).toFixed(2)})`;
          ctx.fillText(CHARS[(i * 7 + row * 13 + tick) % CHARS.length], i * size, row * size);
        }
        drops[i] += 0.4 + (i % 5) * 0.06;
        if (drops[i] * size > h + tail * size && Math.random() > 0.97) drops[i] = Math.random() * -20;
      }
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="rain" aria-hidden="true" />;
}
