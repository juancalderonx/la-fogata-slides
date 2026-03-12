import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";

interface Props {
  id: string;
}

export default function Slide01Hero({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay"
      style={{
        background: "radial-gradient(ellipse at 50% 60%, #2A0D04 0%, #150602 40%, #0A0604 100%)",
      }}
    >
      {/* Partículas de fuego desde el fondo */}
      <FireParticles count={30} xMin={15} xMax={85} variant="fire" intensity={0.75} originBottom={0} />
      {/* Partículas de ceniza/brasa más sutiles */}
      <FireParticles count={18} xMin={20} xMax={80} variant="ash" intensity={0.4} originBottom={2} />

      {/* Ambient glow circles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(230,48,0,0.12) 0%, rgba(255,106,26,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Thin fire line top */}
      <div className="absolute top-0 left-0 right-0 h-px fire-line opacity-60" style={{ zIndex: 4 }} />

      {/* Content */}
      <div className="slide-content flex flex-col items-center justify-center text-center px-8 gap-8">

        {/* Logo principal — el mapache con el wordmark */}
        <div className="animate-on-enter" style={{ animation: "float 6s ease-in-out infinite" }}>
          <img
            src="/assets/logo-social-club-mascota.png"
            alt="La Fogata Social Club"
            className="w-[340px] md:w-[420px] lg:w-[480px] glow-orange select-none"
            draggable={false}
          />
        </div>

        {/* Tagline principal */}
        <div className="animate-on-enter delay-2 flex flex-col items-center gap-3">
          <div className="fire-line w-48 mb-1" />
          <h1
            className="font-display text-5xl md:text-7xl uppercase tracking-wide text-glow-red leading-none"
            style={{ color: "#E63000" }}
          >
            No es un bar.
          </h1>
          <h2
            className="font-display text-4xl md:text-6xl uppercase tracking-wide leading-none"
            style={{ color: "#F5E6D3" }}
          >
            Es un parche.
          </h2>
          <div className="fire-line w-48 mt-1" />
        </div>

        {/* Sub-tagline */}
        <p
          className="animate-on-enter delay-3 font-body text-lg md:text-xl tracking-[0.35em] uppercase"
          style={{ color: "rgba(245, 230, 211, 0.5)" }}
        >
          Social Club&nbsp;&nbsp;·&nbsp;&nbsp;Vida Nocturna&nbsp;&nbsp;·&nbsp;&nbsp;Comunidad
        </p>
      </div>

      {/* Scroll hint — absolutamente fijado al bottom, separado del flow */}
      <div className="animate-on-enter delay-5 absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2" style={{ zIndex: 4 }}>
        <span
          className="font-body text-xs tracking-[0.3em] uppercase"
          style={{ color: "rgba(245, 230, 211, 0.35)" }}
        >
          Desliza para descubrir
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-fire-red/50 to-transparent animate-bounce" />
      </div>

      {/* Thin fire line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />
    </section>
  );
}
