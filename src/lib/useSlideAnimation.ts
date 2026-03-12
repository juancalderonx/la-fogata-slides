import { useEffect, useRef } from "react";

/**
 * Hook que activa las animaciones de entrada cuando el slide
 * entra en el viewport usando IntersectionObserver.
 */
export function useSlideAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animatables = el.querySelectorAll<HTMLElement>(".animate-on-enter");
          if (entry.isIntersecting) {
            animatables.forEach((el) => el.classList.add("visible"));
          } else {
            // Reseteamos para que vuelva a animar si se navega de regreso
            animatables.forEach((el) => el.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
