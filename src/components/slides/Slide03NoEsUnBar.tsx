import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";
import { asset } from "@/lib/utils";

interface Props {
  id: string;
}

const pillars = [
  {
    emoji: "🎭",
    title: "Identidad propia",
    desc: "Una marca con personalidad, mascota y universo visual que nadie más tiene.",
  },
  {
    emoji: "🎵",
    title: "Música que mueve",
    desc: "DJs, sets en vivo y curación sonora que define el mood de cada noche.",
  },
  {
    emoji: "🔥",
    title: "Ambiente que se siente",
    desc: "Desde que entras lo notas. Luces, energía, gente — todo conecta.",
  },
  {
    emoji: "🤝",
    title: "Comunidad que regresa",
    desc: "No son clientes, son fogateros. Los que dicen 'Fogatazo o qué?' sin pensarlo.",
  },
];

export default function Slide03NoEsUnBar({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay overflow-hidden"
      style={{ background: "#0A0604" }}
    >
      {/* Partículas desde la línea central hacia ambos lados */}
      <FireParticles count={20} xMin={45} xMax={55} variant="fire" intensity={0.7} originBottom={0} />
      <FireParticles count={12} xMin={42} xMax={58} variant="ash" intensity={0.3} originBottom={1} />

      {/* Split background: mitad izquierda tono rojo muy oscuro */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(42,13,4,0.9) 0%, rgba(20,6,2,0.95) 100%)",
          zIndex: 1,
        }}
      />
      {/* Línea divisoria central con gradiente fuego */}
      <div
        className="absolute left-1/2 top-0 h-full w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(230,48,0,0.5) 30%, rgba(255,106,26,0.6) 50%, rgba(230,48,0,0.5) 70%, transparent)",
          zIndex: 4,
        }}
      />

      <div className="slide-content w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full" style={{ zIndex: 2 }}>

        {/* Izquierda — "Los bares sirven tragos" */}
        <div className="flex flex-col justify-center items-start gap-6 pr-12 py-16">
          <div className="animate-on-enter">
            <span
              className="font-body text-xs tracking-[0.5em] uppercase"
              style={{ color: "rgba(245,230,211,0.35)" }}
            >
              Los demás
            </span>
          </div>

          <div className="animate-on-enter delay-1">
            <p
              className="font-body text-3xl md:text-4xl font-light leading-snug"
              style={{ color: "rgba(245,230,211,0.4)" }}
            >
              "Un bar sirve tragos,
              <br />
              pone música
              <br />y cobra la entrada."
            </p>
          </div>

          <div className="animate-on-enter delay-2">
            <img
              src={asset("assets/logo-tipografico-la-fogata.png")}
              alt="La Fogata"
              className="w-40 opacity-20 select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Derecha — "La Fogata construye momentos" */}
        <div className="flex flex-col justify-center items-start gap-8 pl-12 py-16">
          <div className="animate-on-enter">
            <span
              className="font-body text-xs tracking-[0.5em] uppercase"
              style={{ color: "#E63000" }}
            >
              La Fogata
            </span>
          </div>

          <div className="animate-on-enter delay-1">
            <h2
              className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight text-glow-red"
              style={{ color: "#E63000" }}
            >
              Construye
            </h2>
            <h2
              className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight"
              style={{ color: "#F5E6D3" }}
            >
              momentos.
            </h2>
            <h2
              className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight"
              style={{ color: "#FFB800" }}
            >
              Construye
            </h2>
            <h2
              className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-tight"
              style={{ color: "#F5E6D3" }}
            >
              comunidad.
            </h2>
          </div>

          {/* Divider */}
          <div className="animate-on-enter delay-2 fire-line w-40" />

          {/* Pillars grid */}
          <div className="animate-on-enter delay-3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 p-3 rounded-lg"
                style={{
                  background: "rgba(230, 48, 0, 0.06)",
                  border: "1px solid rgba(230, 48, 0, 0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{p.emoji}</span>
                  <span
                    className="font-body text-sm font-semibold tracking-wide uppercase"
                    style={{ color: "#E63000" }}
                  >
                    {p.title}
                  </span>
                </div>
                <p
                  className="font-body text-sm leading-snug font-light"
                  style={{ color: "rgba(245,230,211,0.55)" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
