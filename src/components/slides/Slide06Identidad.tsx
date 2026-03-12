import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";
import { asset } from "@/lib/utils";

interface Props {
  id: string;
}

const colores = [
  { hex: "#E63000", label: "Rojo Fuego", role: "Color principal" },
  { hex: "#FF6A1A", label: "Naranja Brasa", role: "Acento cálido" },
  { hex: "#FFB800", label: "Amarillo Llama", role: "Highlight" },
  { hex: "#F5E6D3", label: "Crema Noche", role: "Texto primario" },
  { hex: "#2A0D04", label: "Marrón Ascua", role: "Fondos medios" },
  { hex: "#0A0604", label: "Negro Carbón", role: "Fondo base" },
];

const logos = [
  { src: asset("assets/logo-social-club-mascota.png"), label: "Logo principal", desc: "Social Club — uso primario" },
  { src: asset("assets/logo-pack-la-fogata-v2.png"), label: "Logo pack", desc: "Variantes horizontal + ícono" },
  { src: asset("assets/logo-tipografico-la-fogata.png"), label: "Wordmark", desc: "Solo tipográfico — uso secundario" },
];

export default function Slide06Identidad({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay overflow-hidden"
      style={{ background: "#0A0604" }}
    >
      {/* Partículas sutiles en las esquinas */}
      <FireParticles count={14} xMin={0} xMax={20} variant="fire" intensity={0.45} originBottom={0} />
      <FireParticles count={14} xMin={80} xMax={100} variant="fire" intensity={0.45} originBottom={0} />
      <FireParticles count={10} xMin={10} xMax={90} variant="ash" intensity={0.2} originBottom={1} />

      <div className="absolute top-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />

      <div className="slide-content w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col gap-8 justify-center py-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="animate-on-enter flex items-center gap-3">
            <div className="fire-line w-16" />
            <span className="font-body text-sm tracking-[0.4em] uppercase" style={{ color: "#E63000" }}>
              Identidad visual
            </span>
            <div className="fire-line w-16" />
          </div>
          <h2 className="animate-on-enter delay-1 font-display text-5xl md:text-6xl uppercase leading-none">
            <span style={{ color: "#F5E6D3" }}>Así se ve </span>
            <span className="text-glow-red" style={{ color: "#E63000" }}>La Fogata</span>
          </h2>
          <p className="animate-on-enter delay-2 font-body text-base md:text-lg font-light" style={{ color: "rgba(245,230,211,0.45)" }}>
            Un sistema visual construido para ser reconocido a primera vista — en cualquier superficie.
          </p>
        </div>

        {/* Cuerpo: logos izq + colores der */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* ── Logos / variantes ── */}
          <div className="flex flex-col gap-4">
            <div className="animate-on-enter delay-2">
              <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(245,230,211,0.35)" }}>
                Logos & variantes
              </span>
            </div>
            <div className="animate-on-enter delay-3 flex flex-col gap-3">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(230,48,0,0.12)",
                  }}
                >
                  <div
                    className="w-24 h-16 flex items-center justify-center rounded-lg flex-shrink-0 overflow-hidden"
                    style={{ background: "#120604" }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.label}
                      className="w-full h-full object-contain p-1 select-none"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-sm font-semibold uppercase tracking-wide" style={{ color: "#F5E6D3" }}>
                      {logo.label}
                    </span>
                    <span className="font-body text-xs font-light" style={{ color: "rgba(245,230,211,0.4)" }}>
                      {logo.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tipografía */}
            <div className="animate-on-enter delay-4">
              <div
                className="p-4 rounded-xl flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(230,48,0,0.12)",
                }}
              >
                <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(245,230,211,0.35)" }}>
                  Tipografía
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl uppercase leading-none" style={{ color: "#E63000" }}>
                      Aa
                    </span>
                    <div className="flex flex-col">
                      <span className="font-body text-sm font-semibold" style={{ color: "#F5E6D3" }}>Alfa Slab One</span>
                      <span className="font-body text-xs font-light" style={{ color: "rgba(245,230,211,0.4)" }}>Display · Titulares</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-body text-2xl font-bold uppercase leading-none" style={{ color: "rgba(245,230,211,0.6)" }}>
                      Aa
                    </span>
                    <div className="flex flex-col">
                      <span className="font-body text-sm font-semibold" style={{ color: "#F5E6D3" }}>Barlow Condensed</span>
                      <span className="font-body text-xs font-light" style={{ color: "rgba(245,230,211,0.4)" }}>Body · Cuerpo de texto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Paleta de colores ── */}
          <div className="flex flex-col gap-4">
            <div className="animate-on-enter delay-2">
              <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(245,230,211,0.35)" }}>
                Paleta de colores
              </span>
            </div>

            <div className="animate-on-enter delay-3 grid grid-cols-2 gap-3">
              {colores.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(230,48,0,0.12)",
                  }}
                >
                  {/* Muestra de color */}
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0"
                    style={{
                      background: c.hex,
                      boxShadow: i < 3 ? `0 0 12px ${c.hex}55` : "none",
                      border: c.hex === "#0A0604" ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-body text-sm font-semibold truncate" style={{ color: "#F5E6D3" }}>
                      {c.label}
                    </span>
                    <span className="font-body text-xs font-light" style={{ color: "rgba(245,230,211,0.4)" }}>
                      {c.role}
                    </span>
                    <span className="font-body text-xs font-light tracking-wider" style={{ color: "rgba(245,230,211,0.25)" }}>
                      {c.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradiente de fuego */}
            <div className="animate-on-enter delay-4">
              <div
                className="p-4 rounded-xl flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(230,48,0,0.12)",
                }}
              >
                <span className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(245,230,211,0.35)" }}>
                  Gradiente de fuego
                </span>
                <div
                  className="w-full h-8 rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, #E63000 0%, #FF6A1A 50%, #FFB800 100%)",
                    boxShadow: "0 0 20px rgba(230,48,0,0.3)",
                  }}
                />
                <p className="font-body text-xs font-light" style={{ color: "rgba(245,230,211,0.35)" }}>
                  Uso en CTAs, separadores y elementos de acento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px fire-line opacity-40" style={{ zIndex: 4 }} />
    </section>
  );
}
