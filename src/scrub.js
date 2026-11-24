// Scroll-scrubbed reveals: every registered element animates with scroll position (both directions),
// the same "3D swing + depth" feel as the horizontal Services cards.
const items = new Set();
let raf = 0;
let bound = false;

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t) => 1 - Math.pow(1 - t, 3);
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const FROM = {
  up:    { ty: 64, rx: -16, s: 0.94 },
  left:  { tx: -100, ry: 18, s: 0.95 },
  right: { tx: 100, ry: -18, s: 0.95 },
  scale: { s: 0.78, rz: -3 },
  drop:  { ty: -140, rz: -8, s: 1 },
};

function paint(it, e, dist) {
  const f = FROM[it.from] || FROM.up;
  const k = 1 - e;
  const rx = (f.rx || 0) * k - dist * 6 * e;
  const s = 1 + ((f.s || 1) - 1) * k - Math.abs(dist) * 0.04 * e;
  it.el.style.transform =
    `perspective(1000px) translate3d(${(f.tx || 0) * k}px, ${(f.ty || 0) * k}px, 0) ` +
    `rotateX(${rx.toFixed(2)}deg) rotateY(${((f.ry || 0) * k).toFixed(2)}deg) rotateZ(${((f.rz || 0) * k).toFixed(2)}deg) scale(${s.toFixed(4)})`;
  it.el.style.opacity = String((Math.min(1, e * 1.25) * (1 - clamp(Math.abs(dist) - 0.4, 0, 1) * 0.55)).toFixed(3));
  it.el.style.filter = k > 0.02 ? `blur(${(k * 7).toFixed(1)}px)` : '';
  if (e > 0.55 && !it.on) { it.on = true; it.el.classList.add('in'); }
}

function frame() {
  raf = 0;
  const vh = innerHeight;
  const rects = [];
  items.forEach((it) => rects.push([it, it.box.getBoundingClientRect()]));   // all reads first
  for (const [it, r] of rects) {
    if (r.top > vh * 1.6) { if (it.s !== 'h') { paint(it, 0, 0); it.s = 'h'; } continue; }
    if (r.bottom < -vh * 0.6) { if (it.s !== 'g') { paint(it, 1, -1); it.s = 'g'; } continue; }
    it.s = 'v';
    const p = clamp((vh * 0.98 - it.delay * 0.25 - r.top) / (vh * 0.36));
    const tall = clamp(1 - r.height / (vh * 0.9));
    const dist = clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1) * tall;
    paint(it, ease(p), dist);
  }
}

const schedule = () => { if (!raf) raf = requestAnimationFrame(frame); };

export function registerScrub(box, el, from = 'up', delay = 0) {
  if (reduce()) { el.classList.add('in'); return () => {}; }
  const it = { box, el, from, delay, on: false, s: '' };
  items.add(it);
  paint(it, 0, 0);                       // start hidden before first paint
  if (!bound) {
    bound = true;
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
  }
  schedule();
  return () => items.delete(it);
}
