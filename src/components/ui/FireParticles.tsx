import { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  delay: number;
  x: number;
  size: number;
  drift: number;
  duration: number;
}

interface FireParticlesProps {
  count?: number;
  /** Zona horizontal desde donde nacen las partículas (0-100%) */
  xMin?: number;
  xMax?: number;
  /** Color base: "fire" (rojo/naranja) | "ember" (naranja/amarillo) | "ash" (ceniza/blanco) */
  variant?: "fire" | "ember" | "ash";
  /** Opacidad máxima de las partículas */
  intensity?: number;
  /** Desde dónde se originan (bottom %) */
  originBottom?: number;
}

/** Colores según variante */
const COLORS = {
  fire: {
    inner: "hsl(14, 100%, 60%)",
    outer: "hsl(14, 100%, 40%)",
    blur: 1,
  },
  ember: {
    inner: "hsl(40, 100%, 70%)",
    outer: "hsl(22, 100%, 52%)",
    blur: 0.5,
  },
  ash: {
    inner: "hsl(30, 20%, 80%)",
    outer: "hsl(30, 10%, 55%)",
    blur: 1.5,
  },
};

const FireParticle = ({
  delay,
  x,
  size,
  drift,
  duration,
  variant,
  intensity,
  originBottom,
}: Particle & { variant: "fire" | "ember" | "ash"; intensity: number; originBottom: number }) => {
  const colors = COLORS[variant];

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: `${originBottom}%`,
        background: `radial-gradient(circle, ${colors.inner} 0%, ${colors.outer} 45%, transparent 75%)`,
        filter: `blur(${size > 4 ? colors.blur : 0}px)`,
      }}
      initial={{ opacity: 0, y: 0, scale: 0.4 }}
      animate={{
        opacity: [0, intensity, intensity * 0.7, intensity * 0.3, 0],
        y: [0, -100, -220, -360, -480],
        x: [0, drift * 0.3, drift * 0.7, drift, drift * 0.8],
        scale: [0.4, 1, 0.8, 0.5, 0.1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 1.5,
        ease: "easeOut",
      }}
    />
  );
};

export default function FireParticles({
  count = 28,
  xMin = 10,
  xMax = 90,
  variant = "fire",
  intensity = 0.85,
  originBottom = 0,
}: FireParticlesProps) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        delay: (i / count) * 4 + Math.random() * 1.5,
        x: xMin + Math.random() * (xMax - xMin),
        size: variant === "ash" ? 1 + Math.random() * 3 : 2 + Math.random() * 5,
        drift: (Math.random() - 0.5) * 70,
        duration: 2.5 + Math.random() * 2.5,
      })),
    [count, xMin, xMax, variant]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      {particles.map((p) => (
        <FireParticle
          key={p.id}
          {...p}
          variant={variant}
          intensity={intensity}
          originBottom={originBottom}
        />
      ))}
    </div>
  );
}
