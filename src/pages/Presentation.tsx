import SlideNav from "@/components/ui/SlideNav";
import Slide01Hero from "@/components/slides/Slide01Hero";
import Slide02Fogatazo from "@/components/slides/Slide02Fogatazo";
import Slide03NoEsUnBar from "@/components/slides/Slide03NoEsUnBar";
import Slide04Experiencia from "@/components/slides/Slide04Experiencia";
import Slide05Maco from "@/components/slides/Slide05Maco";
import Slide06Identidad from "@/components/slides/Slide06Identidad";
import Slide07Vision from "@/components/slides/Slide07Vision";
import Slide08Cierre from "@/components/slides/Slide08Cierre";

const SLIDE_IDS = [
  "slide-01",
  "slide-02",
  "slide-03",
  "slide-04",
  "slide-05",
  "slide-06",
  "slide-07",
  "slide-08",
];

export default function Presentation() {
  return (
    <div className="relative">
      {/* Dots de navegación lateral */}
      <SlideNav totalSlides={8} slideIds={SLIDE_IDS} />

      <Slide01Hero       id={SLIDE_IDS[0]} />
      <Slide02Fogatazo   id={SLIDE_IDS[1]} />
      <Slide03NoEsUnBar  id={SLIDE_IDS[2]} />
      <Slide04Experiencia id={SLIDE_IDS[3]} />
      <Slide05Maco       id={SLIDE_IDS[4]} />
      <Slide06Identidad  id={SLIDE_IDS[5]} />
      <Slide07Vision     id={SLIDE_IDS[6]} />
      <Slide08Cierre     id={SLIDE_IDS[7]} />
    </div>
  );
}
