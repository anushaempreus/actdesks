"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Global scroll-reveal: fades + slides each <main> section into view as it
// enters the viewport. Sections already visible on load are left untouched
// (no flash), and everything is skipped for users who prefer reduced motion.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer: IntersectionObserver | null = null;

    // Small delay lets the new page's layout settle before measuring, so
    // section positions are reliable.
    const timer = setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("main section")
      );
      const vh = window.innerHeight;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );

      targets.forEach((el) => {
        // Only animate sections that start below the fold, so above-the-fold
        // content (heroes) never flashes.
        if (el.getBoundingClientRect().top > vh * 0.9) {
          el.classList.add("reveal-init");
          observer?.observe(el);
        }
      });
    }, 60);

    // Safety net: never leave a section hidden, even if the observer misses it.
    const safety = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal-init:not(.reveal-in)")
        .forEach((el) => el.classList.add("reveal-in"));
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safety);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
