'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Fades sections up as they enter the viewport.
 *
 * Hiding is applied by JavaScript, never in the stylesheet, so a blocked or
 * failed script leaves every section visible rather than invisible. On top of
 * that there are two safety nets, because content that never un-hides is a far
 * worse outcome than a missed animation:
 *
 *   - a synchronous first pass, so anything already on screen shows at once
 *     (requestAnimationFrame is throttled in background tabs and cannot be
 *     relied on for this)
 *   - a timeout that reveals everything regardless, in case the observer never
 *     fires at all
 *
 * The first section is skipped — it is above the fold on load and would flash.
 */
const FAILSAFE_MS = 4000;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = [...document.querySelectorAll('main > section')].slice(1);
    if (!sections.length) return;

    sections.forEach((el) => el.classList.add('reveal'));

    let io = null;
    const show = (el) => {
      el.classList.add('is-in');
      if (io) io.unobserve(el);
    };

    // Anything already on screen reveals immediately, without waiting on a frame.
    const showVisible = () =>
      sections.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) show(el);
      });

    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && show(e.target)),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 }
    );
    sections.forEach((el) => io.observe(el));
    showVisible();

    // Coming back to a backgrounded tab: re-check rather than trust the observer.
    const onVisible = () => { if (!document.hidden) showVisible(); };
    document.addEventListener('visibilitychange', onVisible);

    // Last resort — never leave content stuck at opacity 0.
    const failsafe = setTimeout(() => sections.forEach(show), FAILSAFE_MS);

    return () => {
      clearTimeout(failsafe);
      document.removeEventListener('visibilitychange', onVisible);
      io.disconnect();
      sections.forEach((el) => el.classList.remove('reveal', 'is-in'));
    };
  }, [pathname]);

  return null;
}
