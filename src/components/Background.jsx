import { useEffect, useRef } from 'react';

// Parallax starfield with scroll-speed warp streaks + shooting stars,
// plus nebula glows, a moving perspective grid floor and flying ships.
export default function Background() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    let w, h, raf, frame = 0;
    let lastY = scrollY, vel = 0, mx = 0, my = 0, rgb = '0,229,255';
    let stars = [];
    const shooters = [];
    let embers = [];

    const resize = () => {
      w = c.width = innerWidth; h = c.height = innerHeight;
      const n = Math.min(240, Math.floor((w * h) / 8000));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3, l: Math.random() * 0.8 + 0.2, t: Math.random() * 6.28,
      }));
    };
    embers = Array.from({ length: innerWidth < 700 ? 12 : 26 }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 3.5 + 1.5, vy: -(Math.random() * 0.5 + 0.15), vx: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.3, ph: Math.random() * 6.28,
    }));
    const mouse = (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; };
    resize();
    addEventListener('resize', resize);
    addEventListener('mousemove', mouse);

    const tick = () => {
      frame++;
      if (frame % 30 === 0) rgb = getComputedStyle(document.documentElement).getPropertyValue('--rgb').trim() || rgb;
      const dy = scrollY - lastY; lastY = scrollY;
      vel += (Math.min(Math.abs(dy), 60) - vel) * 0.12;

      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.t += 0.03;
        const px = (s.x - mx * 40 * s.l + w) % w;
        const py = (((s.y - scrollY * 0.25 * s.l - my * 30 * s.l) % h) + h) % h;
        const a = 0.35 + Math.sin(s.t) * 0.25 * s.l + 0.25;
        ctx.strokeStyle = `rgba(${s.l > 0.7 ? rgb : '200,220,255'},${a})`;
        ctx.fillStyle = ctx.strokeStyle;
        if (vel > 3) {
          ctx.lineWidth = s.r;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px, py + vel * s.l * (dy > 0 ? 1.4 : -1.4));
          ctx.stroke();
        } else {
          ctx.beginPath(); ctx.arc(px, py, s.r, 0, 6.28); ctx.fill();
        }
      }

      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgb(${rgb})`;
      for (const m of embers) {
        m.ph += 0.02; m.x += m.vx + Math.sin(m.ph) * 0.25; m.y += m.vy - vel * 0.05;
        if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w; }
        if (m.y > h + 20) m.y = -10;
        ctx.fillStyle = `rgba(${rgb},${m.a * (0.6 + Math.sin(m.ph * 2) * 0.4)})`;
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 6.28); ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (Math.random() < 0.006 && shooters.length < 3) {
        shooters.push({ x: Math.random() * w + w * 0.2, y: -20, vx: -(6 + Math.random() * 5), vy: 4 + Math.random() * 4, life: 1 });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += s.vx; s.y += s.vy; s.life -= 0.012;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 9, s.y - s.vy * 9);
        g.addColorStop(0, `rgba(255,255,255,${s.life})`);
        g.addColorStop(1, `rgba(${rgb},0)`);
        ctx.strokeStyle = g; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 9, s.y - s.vy * 9); ctx.stroke();
        if (s.life <= 0 || s.y > h + 40) shooters.splice(i, 1);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('mousemove', mouse); };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="nebula n1" />
      <div className="nebula n2" />
      <div className="nebula n3" />
      <canvas ref={ref} className="stars" />
      <div className="grid-floor" />
      <Ship className="ship s1" />
      <Ship className="ship s2" />
      <Ship className="ship s3" />
      <div className="satellite"><i /></div>
      <div className="scanlines" />
      <div className="vignette" />
    </div>
  );
}

function Ship({ className }) {
  return (
    <div className={className}>
      <span className="trail" />
      <svg viewBox="0 0 60 24" width="46" height="18">
        <path d="M2 12 L22 4 L46 9 L58 12 L46 15 L22 20 Z" fill="currentColor" opacity=".9" />
        <path d="M22 4 L30 0 L30 8 Z M22 20 L30 24 L30 16 Z" fill="currentColor" opacity=".6" />
        <circle cx="50" cy="12" r="2" fill="#fff" />
      </svg>
    </div>
  );
}
