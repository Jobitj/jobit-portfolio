// Holds the smooth-scroll (Lenis) instance so any component can scroll programmatically.
let lenis = null;
export const setLenis = (l) => { lenis = l; };
export const getLenis = () => lenis;

export function scrollToTarget(target) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : -70, duration: 1.4 });
    return;
  }
  if (typeof target === 'number') scrollTo({ top: target, behavior: 'smooth' });
  else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
}
