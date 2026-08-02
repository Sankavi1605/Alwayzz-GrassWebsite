import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal. Returns a ref to put on a container; every descendant
 * carrying [data-reveal] fades and lifts in as it enters the viewport, once.
 *
 * Two things it deliberately handles:
 *
 * 1. The loading screen. It covers the page for 2.5s, and the hero is inside
 *    the viewport the whole time — so without gating, the hero would animate
 *    behind the white overlay and be sitting still by the time anyone saw it.
 *    App flips the ready flag when the overlay lifts.
 * 2. prefers-reduced-motion. Those users get the content revealed immediately
 *    rather than a shorter animation, since the point is no motion at all.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll('[data-reveal]'));
    if (root.hasAttribute('data-reveal')) targets.unshift(root);
    if (!targets.length) return undefined;

    const show = (el) => el.classList.add('is-revealed');

    // The hidden state lives in CSS, so anything that stops us from ever
    // observing would leave content permanently invisible. Bail to "shown"
    // rather than risk a blank section.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach(show);
      return undefined;
    }

    let observer;
    const start = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            show(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      targets.forEach((el) => observer.observe(el));
    };

    if (window.__alwayzzReady) {
      start();
      return () => observer && observer.disconnect();
    }

    window.addEventListener('alwayzz:ready', start, { once: true });
    return () => {
      window.removeEventListener('alwayzz:ready', start);
      if (observer) observer.disconnect();
    };
  }, []);

  return ref;
}
