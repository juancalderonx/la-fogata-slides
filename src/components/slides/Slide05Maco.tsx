import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";

interface Props {
  id: string;
}

const expresiones = [
  { label: "De pie con estilo", desc: "El anfitrión de la noche." },
  { label: "Expresión pícara", desc: "Siempre con algo en mente." },
  { label: "Buena vibra", desc: "Shaka. El parche empieza." },
  { label: "Puro corazón", desc: "Porque esto se hace con amor." },
];

export default function Slide05Maco({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #200800 0%, #130401 45%, #0A0604 100%)",
      }}
    >
      {/* Partículas de fuego concentradas alrededor de Maco */}
      <FireParticles count={28} xMin={40} xMax={85} variant="fire" intensity={0.65} originBottom={0} />
      <FireParticles count={15} xMin={35} xMax={90} variant="ember" intensity={0.4} originBottom={3} />
      <FireParticles count={12} xMin={10} xMax={40} variant="ash" intensity={0.25} originBottom={1} />

      {/* Watermark de fondo */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none overflow-hidden select-none"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-display text-[28vw] uppercase leading-none"
          style={{ color: "rgba(230,48,0,0.035)" }}
        >
          MACO
        </span>
      </div>

      <div className="slide-content w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* ── Columna izquierda: texto + expresiones ── */}
        <div className="flex flex-col gap-7">

          {/* Label */}
          <div className="animate-on-enter flex items-center gap-3">
            <div className="fire-line w-12" />
            <span className="font-body text-sm tracking-[0.4em] uppercase" style={{ color: "#E63000" }}>
              La mascota
            </span>
          </div>

          {/* Nombre */}
          <div className="animate-on-enter delay-1">
            <h2
              className="font-display text-8xl md:text-9xl uppercase leading-none text-glow-red"
              style={{ color: "#E63000" }}
            >
              Maco
            </h2>
            <p className="font-body text-xl md:text-2xl font-light mt-2" style={{ color: "rgba(245,230,211,0.55)" }}>
              El mapache. El anfitrión. El alma.
            </p>
          </div>

          {/* Divider */}
          <div className="animate-on-enter delay-2 fire-line w-full max-w-xs" />

          {/* Por qué un mapache */}
          <div className="animate-on-enter delay-2 flex flex-col gap-2">
            <p className="font-body text-lg md:text-xl leading-relaxed font-light" style={{ color: "rgba(245,230,211,0.75)" }}>
              Los mapaches se meten donde no los invitan,
              disfrutan la noche y <span style={{ color: "#E63000" }} className="font-semibold">siempre vuelven</span>.
              Exactamente como los fogateros.
            </p>
          </div>

          {/* Quote */}
          <div className="animate-on-enter delay-3 border-l-2 pl-5 py-1" style={{ borderColor: "#E63000" }}>
            <p className="font-body text-base md:text-lg font-semibold tracking-wide uppercase" style={{ color: "#FFB800" }}>
              "No es solo una mascota —<br />es el vocero de la marca."
            </p>
          </div>

          {/* Grid de expresiones */}
          <div className="animate-on-enter delay-4 grid grid-cols-2 gap-3">
            {expresiones.map((exp, i) => (
              <div
                key={i}
                className="flex flex-col gap-0.5 px-3 py-2 rounded-lg"
                style={{
                  background: "rgba(230,48,0,0.06)",
                  border: "1px solid rgba(230,48,0,0.14)",
                }}
              >
                <span className="font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#E63000" }}>
                  {exp.label}
                </span>
                <span className="font-body text-xs font-light" style={{ color: "rgba(245,230,211,0.45)" }}>
                  {exp.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Columna derecha: collage visual de Maco ── */}
        <div className="animate-on-enter delay-2 relative flex flex-col gap-4 items-center">

          {/* Imagen principal: hoja de estudio vol2 v2 (la más colorida) */}
          <div className="relative w-full">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(230,48,0,0.15) 0%, transparent 70%)",
              }}
            />
            <img
              src="/assets/hoja-estudio-mascota-volumen-2-v2.png"
              alt="Maco — Hoja de estudio expresiones Vol. II"
              className="w-full rounded-2xl select-none relative"
              style={{
                border: "1px solid rgba(230,48,0,0.2)",
                boxShadow: "0 0 40px rgba(230,48,0,0.15), 0 0 80px rgba(230,48,0,0.06)",
              }}
              draggable={false}
            />
          </div>

          {/* Fila inferior: expresiones v1 + mascota aislada */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <img
              src="/assets/hoja-estudio-mascota-expresiones.png"
              alt="Maco — Expresiones"
              className="w-full rounded-xl select-none opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{
                border: "1px solid rgba(230,48,0,0.15)",
                boxShadow: "0 0 20px rgba(230,48,0,0.1)",
              }}
              draggable={false}
            />
            <img
              src="/assets/logo-mascota-la-fogata.png"
              alt="Maco — Logo"
              className="w-full rounded-xl select-none opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{
                border: "1px solid rgba(230,48,0,0.15)",
                boxShadow: "0 0 20px rgba(230,48,0,0.1)",
              }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
