import { useSlideAnimation } from "@/lib/useSlideAnimation";
import FireParticles from "@/components/ui/FireParticles";
import { asset } from "@/lib/utils";

interface Props {
  id: string;
}

export default function Slide08Cierre({ id }: Props) {
  const ref = useSlideAnimation();

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="slide grain-overlay overflow-hidden"
      style={{ background: "#0A0604" }}
    >
      {/* Máxima densidad de partículas — el cierre es el clímax visual */}
      <FireParticles count={40} xMin={5} xMax={95} variant="fire" intensity={0.75} originBottom={0} />
      <FireParticles count={25} xMin={10} xMax={90} variant="ember" intensity={0.55} originBottom={2} />
      <FireParticles count={28} xMin={5} xMax={95} variant="ash" intensity={0.3} originBottom={1} />

      {/* Sticker sheet fondo */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <img
          src={asset("assets/sticker-sheet-mascota-la-fogata.png")}
          alt=""
          className="w-full h-full object-cover select-none"
          draggable={false}
          style={{ opacity: 0.065 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(10,6,4,0.6) 0%, rgba(10,6,4,0.8) 50%, rgba(10,6,4,0.97) 100%)",
          }}
        />
      </div>

      {/* Glow central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(230,48,0,0.09) 0%, rgba(255,106,26,0.04) 40%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px fire-line" style={{ zIndex: 5 }} />

      {/* Content */}
      <div className="slide-content flex flex-col items-center justify-center text-center px-8 gap-8 max-w-3xl mx-auto">

        {/* Label */}
        <div className="animate-on-enter flex items-center gap-4">
          <div className="fire-line w-16" />
          <span className="font-body text-xs tracking-[0.5em] uppercase" style={{ color: "#E63000" }}>
            La Fogata Social Club
          </span>
          <div className="fire-line w-16" />
        </div>

        {/* Headline de cierre */}
        <div className="animate-on-enter delay-1 flex flex-col items-center gap-0">
          <h2
            className="font-display text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none"
            style={{ color: "#F5E6D3" }}
          >
            Una vez
          </h2>
          <h2
            className="font-display text-6xl md:text-8xl lg:text-[9rem] uppercase leading-none text-glow-red"
            style={{ color: "#E63000" }}
          >
            fogatero,
          </h2>
          <h2
            className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none mt-2"
            style={{ color: "rgba(245,230,211,0.6)" }}
          >
            siempre fogatero.
          </h2>
        </div>

        {/* Fire line */}
        <div className="animate-on-enter delay-2 fire-line w-52" />

        {/* Frase final */}
        <p
          className="animate-on-enter delay-3 font-body text-lg md:text-xl font-light leading-relaxed"
          style={{ color: "rgba(245,230,211,0.55)" }}
        >
          Esa es la comunidad que construimos.
          Esa es <span style={{ color: "#E63000" }} className="font-semibold">La Fogata</span>.
        </p>

        {/* Logo final */}
        <div className="animate-on-enter delay-4">
          <img
            src={asset("assets/logo-social-club-mascota.png")}
            alt="La Fogata Social Club"
            className="w-32 md:w-40 select-none mx-auto glow-orange"
            style={{ opacity: 0.65 }}
            draggable={false}
          />
        </div>

        {/* Tagline final */}
        <p
          className="animate-on-enter delay-5 font-body text-xs tracking-[0.45em] uppercase"
          style={{ color: "rgba(245,230,211,0.18)" }}
        >
          La Fogata Social Club · 2024
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px fire-line" style={{ zIndex: 5 }} />
    </section>
  );
}
