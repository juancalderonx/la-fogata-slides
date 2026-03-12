import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";

interface Props {
  id: string;
}

export default function Slide02Fogatazo({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay"
      style={{
        background: "radial-gradient(ellipse at 70% 50%, #1C0A02 0%, #0F0503 50%, #0A0604 100%)",
      }}
    >
      {/* Partículas — más concentradas en la zona del logo */}
      <FireParticles count={22} xMin={55} xMax={90} variant="fire" intensity={0.6} originBottom={0} />
      <FireParticles count={14} xMin={50} xMax={95} variant="ember" intensity={0.35} originBottom={3} />

      {/* Background text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-display text-[22vw] uppercase leading-none whitespace-nowrap"
          style={{ color: "rgba(230, 48, 0, 0.04)" }}
        >
          FOGATA
        </span>
      </div>

      {/* Layout: texto izq, imagen der */}
      <div className="slide-content w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda — texto */}
        <div className="flex flex-col gap-7">
          {/* Label */}
          <div className="animate-on-enter flex items-center gap-3">
            <div className="fire-line w-12" />
            <span
              className="font-body text-sm tracking-[0.4em] uppercase"
              style={{ color: "#E63000" }}
            >
              El concepto
            </span>
          </div>

          {/* Título */}
          <div className="animate-on-enter delay-1">
            <h2
              className="font-display text-6xl md:text-8xl uppercase leading-none text-glow-red"
              style={{ color: "#E63000" }}
            >
              Fogatazo
            </h2>
            <h3
              className="font-display text-4xl md:text-5xl uppercase leading-none mt-1"
              style={{ color: "#F5E6D3" }}
            >
              ¿O qué?
            </h3>
          </div>

          {/* Divider */}
          <div className="animate-on-enter delay-2 fire-line w-full max-w-xs" />

          {/* Cuerpo */}
          <p
            className="animate-on-enter delay-2 font-body text-xl md:text-2xl leading-relaxed font-light"
            style={{ color: "rgba(245, 230, 211, 0.75)" }}
          >
            No viniste a tomar. Viniste a{" "}
            <span style={{ color: "#E63000" }} className="font-semibold">sentirla</span>.
            La Fogata es el lugar donde el ambiente lo pones tú,
            la música te jala, y las ganas de volver siempre ganan.
          </p>

          {/* Highlight quote */}
          <div
            className="animate-on-enter delay-3 border-l-2 pl-5 py-1"
            style={{ borderColor: "#E63000" }}
          >
            <p
              className="font-body text-lg md:text-xl font-semibold tracking-wide uppercase"
              style={{ color: "#FFB800" }}
            >
              "El plan de la noche empieza aquí."
            </p>
          </div>

          {/* Tres pillars */}
          <div className="animate-on-enter delay-4 flex gap-6 mt-2">
            {["Música", "Ambiente", "Comunidad"].map((pill) => (
              <span
                key={pill}
                className="font-body text-sm tracking-[0.25em] uppercase px-4 py-2 rounded-full border"
                style={{
                  borderColor: "rgba(230, 48, 0, 0.4)",
                  color: "rgba(245, 230, 211, 0.6)",
                  background: "rgba(230, 48, 0, 0.06)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Columna derecha — mascota */}
        <div className="animate-on-enter delay-2 flex items-center justify-center relative">
          {/* Glow detrás de la imagen */}
          <div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(230,48,0,0.18) 0%, transparent 70%)",
            }}
          />
          <img
            src="/assets/logo-mascota-la-fogata.png"
            alt="Mascota La Fogata"
            className="relative w-[280px] md:w-[380px] lg:w-[420px] glow-orange select-none"
            style={{ animation: "float 5s ease-in-out infinite" }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
