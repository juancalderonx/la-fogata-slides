import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";
import { asset } from "@/lib/utils";

interface Props {
  id: string;
}

const experiences = [
  {
    icon: asset("assets/trago-fuego-icono.png"),
    title: "Eventos con DJ",
    desc: "Sets en vivo cada semana. La música no para.",
  },
  {
    icon: asset("assets/cumpleanos-fiesta-icono.png"),
    title: "Cumpleaños VIP",
    desc: "Canciones dedicadas, shows y beneficios exclusivos para el cumpleañero.",
  },
  {
    icon: asset("assets/calendario-check-icono.png"),
    title: "Reserva tu mesa",
    desc: "Fácil y rápido. Via WhatsApp o directamente en la web.",
  },
  {
    icon: asset("assets/menu-cocteles-icono.png"),
    title: "Cócteles artesanales",
    desc: "Tragos con identidad. Recetas propias que saben a La Fogata.",
  },
  {
    icon: asset("assets/reloj-horario-icono.png"),
    title: "Horarios estratégicos",
    desc: "Abrimos cuando la noche empieza a ponerse buena.",
  },
  {
    icon: asset("assets/ubicacion-mapa-icono.png"),
    title: "El punto de encuentro",
    desc: "Ese lugar al que siempre se vuelve y siempre se lleva a alguien nuevo.",
  },
];

export default function Slide04Experiencia({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay"
      style={{
        background: "radial-gradient(ellipse at 30% 70%, #1A0803 0%, #0D0503 50%, #0A0604 100%)",
      }}
    >
      {/* Partículas en los bordes laterales */}
      <FireParticles count={16} xMin={2} xMax={18} variant="fire" intensity={0.5} originBottom={0} />
      <FireParticles count={16} xMin={82} xMax={98} variant="fire" intensity={0.5} originBottom={0} />
      <FireParticles count={10} xMin={5} xMax={95} variant="ash" intensity={0.25} originBottom={1} />

      {/* Top ambient line */}
      <div className="absolute top-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />

      <div className="slide-content w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col gap-10 justify-center py-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="animate-on-enter flex items-center gap-3">
            <div className="fire-line w-16" />
            <span
              className="font-body text-sm tracking-[0.4em] uppercase"
              style={{ color: "#E63000" }}
            >
              La experiencia
            </span>
            <div className="fire-line w-16" />
          </div>

          <h2 className="animate-on-enter delay-1 font-display text-5xl md:text-7xl uppercase leading-none">
            <span style={{ color: "#F5E6D3" }}>Todo pasa en </span>
            <span className="text-glow-red" style={{ color: "#E63000" }}>La Fogata</span>
          </h2>

          <div className="animate-on-enter delay-2 fire-line w-48" />
        </div>

        {/* Grid de experiencias */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`animate-on-enter delay-${Math.min(i + 2, 5)} group flex flex-col gap-3 p-5 rounded-xl transition-all duration-300 cursor-default`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(230, 48, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(230, 48, 0, 0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230, 48, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230, 48, 0, 0.15)";
              }}
            >
              {/* Icono */}
              <div className="flex items-start gap-3">
                <img
                  src={exp.icon}
                  alt={exp.title}
                  className="w-10 h-10 object-contain flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ filter: "drop-shadow(0 0 8px rgba(230, 48, 0, 0.45))" }}
                  draggable={false}
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3
                  className="font-body text-base font-semibold tracking-wide uppercase"
                  style={{ color: "#F5E6D3" }}
                >
                  {exp.title}
                </h3>
                <p
                  className="font-body text-sm leading-snug font-light"
                  style={{ color: "rgba(245,230,211,0.5)" }}
                >
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom ambient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />
    </section>
  );
}
