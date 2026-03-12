import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";

interface Props {
  id: string;
}

const hitos = [
  {
    icon: "🔥",
    titulo: "Referente local",
    desc: "Convertirse en el punto de vida nocturna más reconocido de la ciudad.",
  },
  {
    icon: "🌆",
    titulo: "Expansión de ciudad",
    desc: "Llevar el concepto a otras ciudades manteniendo la esencia del Social Club.",
  },
  {
    icon: "📲",
    titulo: "Comunidad digital",
    desc: "Una base de seguidores que habla de La Fogata sin que nadie los invite.",
  },
  {
    icon: "🤝",
    titulo: "Modelo franquiciable",
    desc: "Una marca con identidad tan sólida que puede vivir sin depender de sus fundadores.",
  },
];

export default function Slide07Vision({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 80%, #200804 0%, #110402 50%, #0A0604 100%)",
      }}
    >
      {/* Partículas ascendentes — símbolo de crecimiento */}
      <FireParticles count={24} xMin={20} xMax={80} variant="fire" intensity={0.6} originBottom={0} />
      <FireParticles count={16} xMin={15} xMax={85} variant="ember" intensity={0.4} originBottom={2} />
      <FireParticles count={14} xMin={5} xMax={95} variant="ash" intensity={0.22} originBottom={1} />

      <div className="absolute top-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />

      <div className="slide-content w-full max-w-6xl mx-auto px-8 md:px-16 flex flex-col gap-10 justify-center">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="animate-on-enter flex items-center gap-3">
            <div className="fire-line w-12" />
            <span className="font-body text-sm tracking-[0.4em] uppercase" style={{ color: "#E63000" }}>
              La visión
            </span>
          </div>

          <div className="animate-on-enter delay-1">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none" style={{ color: "#F5E6D3" }}>
              A dónde va
            </h2>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none text-glow-red" style={{ color: "#E63000" }}>
              La Fogata
            </h2>
          </div>

          <p className="animate-on-enter delay-2 font-body text-lg md:text-xl font-light leading-relaxed max-w-2xl" style={{ color: "rgba(245,230,211,0.65)" }}>
            La Fogata no se construye para durar una temporada.
            Se construye para volverse{" "}
            <span style={{ color: "#FFB800" }} className="font-semibold">un referente</span>.
            Una marca que escala porque su identidad es más grande que un local.
          </p>
        </div>

        {/* Grid de hitos */}
        <div className="animate-on-enter delay-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hitos.map((h, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-5 rounded-2xl transition-all duration-300 group cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(230,48,0,0.13)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(230,48,0,0.07)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230,48,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230,48,0,0.13)";
              }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{h.icon}</span>
              <div className="flex flex-col gap-1">
                <span className="font-body text-base font-semibold uppercase tracking-wide" style={{ color: "#F5E6D3" }}>
                  {h.titulo}
                </span>
                <span className="font-body text-sm font-light leading-snug" style={{ color: "rgba(245,230,211,0.5)" }}>
                  {h.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — visitar la landing */}
        <div className="animate-on-enter delay-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="https://lafogata.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-body font-semibold text-base uppercase tracking-widest transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #E63000 0%, #C42800 100%)",
              color: "#F5E6D3",
              boxShadow: "0 0 30px rgba(230,48,0,0.4), 0 0 60px rgba(230,48,0,0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 50px rgba(230,48,0,0.65), 0 0 100px rgba(230,48,0,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(230,48,0,0.4), 0 0 60px rgba(230,48,0,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <span>🔥</span>
            Visitar La Fogata
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform duration-200">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </a>

          <div className="flex flex-col gap-0.5">
            <span className="font-body text-sm font-light" style={{ color: "rgba(245,230,211,0.45)" }}>
              Conoce la experiencia completa
            </span>
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: "rgba(245,230,211,0.22)" }}>
              lafogata.lovable.app
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />
    </section>
  );
}
