import { useState, useEffect, useRef } from "react";

export const useInView = ({
  threshold = 0.1,
  rootMargin = "0px",
  once = false,
} = {}) => {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState();
  const ref = useRef(null);
  const observedRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        if (isVisible || !once) {
          setInView(isVisible);
          setEntry(entry);
        }

        if (isVisible && once && observedRef.current) {
          observer.unobserve(observedRef.current);
        }
      },
      { threshold, rootMargin }
    );

    observedRef.current = ref.current;
    observer.observe(ref.current);

    return () => {
      if (observedRef.current) {
        observer.unobserve(observedRef.current);
        observedRef.current = null;
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, inView, entry };
};
