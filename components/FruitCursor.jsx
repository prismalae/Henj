'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { fruitCursors } from '@/content/cursors';

const FINE = '(hover: hover) and (pointer: fine)';
const STILL = '(prefers-reduced-motion: reduce)';

/**
 * Rotates the fruit pointer and draws a soft aura that eases toward it.
 *
 * The pointer itself is a native CSS cursor — precise, no lag, correct hotspot.
 * Native cursors cannot cross-fade, so the smoothing lives in the aura: it lerps
 * toward the pointer each frame and pulses when the fruit changes.
 *
 * Both effects subscribe to their media queries rather than reading them once.
 * A device can gain or lose a fine pointer after mount (a tablet with a keyboard
 * attached, a desktop switching to touch), and a one-shot check would leave the
 * effect dead for the rest of the session.
 */
export default function FruitCursor() {
  const pathname = usePathname();
  const index = useRef(0);
  const aura = useRef(null);

  // --- rotate the pointer: on route change, on a timer, and on click ---
  useEffect(() => {
    const fine = window.matchMedia(FINE);
    const root = document.documentElement;
    let timer = null;

    const apply = (i) => {
      index.current = (i + fruitCursors.length) % fruitCursors.length;
      root.style.setProperty('--fruit-cursor', fruitCursors[index.current].value);
      root.dataset.fruit = fruitCursors[index.current].name;
      const el = aura.current;
      if (el) {
        el.classList.remove('is-swap');
        void el.offsetWidth; // restart the pulse animation
        el.classList.add('is-swap');
      }
    };
    const next = () => apply(index.current + 1);

    const stop = () => {
      if (timer) { clearInterval(timer); timer = null; }
      window.removeEventListener('pointerdown', next);
      root.style.removeProperty('--fruit-cursor');
      delete root.dataset.fruit;
    };

    const start = () => {
      if (timer) return;
      apply(Math.floor(Math.random() * fruitCursors.length));
      timer = setInterval(next, 4000);
      window.addEventListener('pointerdown', next);
    };

    const sync = () => (fine.matches ? start() : stop());
    sync();
    fine.addEventListener('change', sync);
    return () => { fine.removeEventListener('change', sync); stop(); };
  }, [pathname]);

  // --- the easing aura ---
  useEffect(() => {
    const fine = window.matchMedia(FINE);
    const still = window.matchMedia(STILL);
    const el = aura.current;
    if (!el) return;

    let x = 0, y = 0, tx = 0, ty = 0, raf = 0, placed = false, running = false;

    const move = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!placed) { placed = true; x = tx; y = ty; el.classList.add('is-on'); }
      const hot = e.target instanceof Element && e.target.closest('a, button, summary, [role="button"]');
      el.classList.toggle('is-hot', !!hot);
    };
    const leave = () => { placed = false; el.classList.remove('is-on'); };
    const tick = () => {
      x += (tx - x) * 0.18;   // lerp — this is the smoothing
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      el.classList.remove('is-on', 'is-hot');
      el.style.transform = '';
    };
    const start = () => {
      if (running) return;
      running = true;
      window.addEventListener('pointermove', move, { passive: true });
      document.addEventListener('pointerleave', leave);
      raf = requestAnimationFrame(tick);
    };

    const sync = () => (fine.matches && !still.matches ? start() : stop());
    sync();
    fine.addEventListener('change', sync);
    still.addEventListener('change', sync);
    return () => {
      fine.removeEventListener('change', sync);
      still.removeEventListener('change', sync);
      stop();
    };
  }, []);

  return <div ref={aura} className="fruit-aura" aria-hidden="true" />;
}
