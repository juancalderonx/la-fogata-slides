import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideNavProps {
  totalSlides: number;
  slideIds: string[];
}

export default function SlideNav({ totalSlides, slideIds }: SlideNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slideIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [slideIds]);

  const scrollToSlide = (index: number) => {
    const el = document.getElementById(slideIds[index]);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center"
      aria-label="Navegación de slides"
    >
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSlide(i)}
          aria-label={`Ir al slide ${i + 1}`}
          className={cn(
            "rounded-full transition-all duration-300 focus:outline-none",
            activeIndex === i
              ? "w-2.5 h-8 bg-fire-orange shadow-[0_0_12px_rgba(255,106,26,0.8)]"
              : "w-2 h-2 bg-fogata-cream/30 hover:bg-fogata-cream/60 hover:scale-125"
          )}
        />
      ))}

      {/* Número de slide actual */}
      <span className="mt-3 font-body text-xs text-fogata-cream/40 tracking-widest tabular-nums">
        {String(activeIndex + 1).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
      </span>
    </nav>
  );
}
