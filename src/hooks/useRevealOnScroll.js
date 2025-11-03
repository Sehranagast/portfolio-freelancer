import { useEffect } from "react";

export default function useRevealOnScroll(selector = ".reveal") {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        if (!els.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("its-visible");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15}
        );

        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [selector]);
}