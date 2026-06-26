import { useEffect, useRef, useState } from "react";

import galleryLights from "../../assets/images/gallery/gallery-lights.png";
import galleryFountain from "../../assets/images/gallery/gallery-fountain.png";
import galleryPalm from "../../assets/images/gallery/gallery-palm.png";
import galleryTable from "../../assets/images/gallery/gallery-table.png";
import galleryPatio from "../../assets/images/gallery/gallery-patio.png";
import galleryDinner from "../../assets/images/gallery/gallery-dinner.png";
import galleryHall from "../../assets/images/gallery/gallery-hall.png";
import galleryCocktail from "../../assets/images/gallery/gallery-cocktail.png";
import galleryBuilding from "../../assets/images/gallery/gallery-building.png";
import galleryBar from "../../assets/images/gallery/gallery-bar.png";

const galleryItems = [
  {
    id: 1,
    image: galleryLights,
    alt: "Traditional coastal lighting fixtures",
    desktopPosition: "left-[0.081%] top-0 h-[23.929%] w-[32.63%]",
    responsivePosition:
      "max-[1024px]:col-span-5 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[80ms]",
  },
  {
    id: 2,
    image: galleryFountain,
    alt: "Coastal venue garden fountain",
    desktopPosition: "left-[33.766%] top-0 h-[33.155%] w-[45.536%]",
    responsivePosition:
      "max-[1024px]:col-span-7 max-[1024px]:aspect-[1.26/1] max-[640px]:col-span-12 max-[640px]:aspect-square",
    delay: "delay-[140ms]",
  },
  {
    id: 3,
    image: galleryPalm,
    alt: "Palm leaves around venue",
    desktopPosition: "left-[80.276%] top-[18.69%] h-[14.464%] w-[19.724%]",
    responsivePosition:
      "max-[1024px]:col-span-4 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[200ms]",
  },
  {
    id: 4,
    image: galleryTable,
    alt: "Restaurant table setting with glasses",
    desktopPosition: "left-0 top-[33.869%] h-[35.833%] w-[48.945%]",
    responsivePosition:
      "max-[1024px]:col-span-8 max-[1024px]:aspect-[1.25/1] max-[640px]:col-span-12 max-[640px]:aspect-square",
    delay: "delay-[260ms]",
  },
  {
    id: 5,
    image: galleryPatio,
    alt: "Outdoor coastal restaurant patio",
    desktopPosition: "left-[49.919%] top-[33.929%] h-[17.976%] w-[24.432%]",
    responsivePosition:
      "max-[1024px]:col-span-6 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[320ms]",
  },
  {
    id: 6,
    image: galleryDinner,
    alt: "Elegant dinner setting",
    desktopPosition: "left-[75.406%] top-[51.726%] h-[17.976%] w-[24.513%]",
    responsivePosition:
      "max-[1024px]:col-span-6 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[380ms]",
  },
  {
    id: 7,
    image: galleryHall,
    alt: "Restaurant interior hall",
    desktopPosition: "left-0 top-[70.476%] h-[14.821%] w-[20.13%]",
    responsivePosition:
      "max-[1024px]:col-span-4 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[440ms]",
  },
  {
    id: 8,
    image: galleryCocktail,
    alt: "Cocktail drink on wooden table",
    desktopPosition: "left-[21.185%] top-[85.179%] h-[14.821%] w-[20.049%]",
    responsivePosition:
      "max-[1024px]:col-span-4 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[500ms]",
  },
  {
    id: 9,
    image: galleryBuilding,
    alt: "Restaurant building exterior",
    desktopPosition: "left-[42.289%] top-[70.476%] h-[14.821%] w-[20.13%]",
    responsivePosition:
      "max-[1024px]:col-span-4 max-[1024px]:aspect-square max-[640px]:col-span-12",
    delay: "delay-[560ms]",
  },
  {
    id: 10,
    image: galleryBar,
    alt: "Coastal venue bar area",
    desktopPosition: "left-[63.474%] top-[70.476%] h-[29.524%] w-[36.445%]",
    responsivePosition:
      "max-[1024px]:col-span-12 max-[1024px]:aspect-[1.55/1] max-[640px]:aspect-square",
    delay: "delay-[620ms]",
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";

  return (
    <section
      id="map"
      ref={sectionRef}
      className="relative -mt-px overflow-hidden bg-[#f4f4f3] pb-[118px] pt-0 text-[#101010] max-[1280px]:pb-[104px] max-[900px]:pb-[84px] max-[640px]:pb-[70px]"
    >
      {/* ==================== Top seam cover ==================== */}

      <div className="pointer-events-none absolute -top-1 left-0 z-[2] h-2 w-full bg-[#f4f4f3]"></div>

      <div className="relative z-[5] mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]">
        {/* ==================== Gallery heading ==================== */}

        <div className="relative">
          <span
            className={`absolute left-0 top-[10px] font-[Inter,Arial,sans-serif] text-[10px] font-medium leading-none text-[#111111] transition-all duration-700 max-[900px]:static max-[900px]:mb-[12px] max-[900px]:block ${revealClass}`}
          >
            05
          </span>

          <h2
            className={`mx-auto m-0 max-w-[1180px] text-center font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[clamp(50px,4.45vw,72px)] font-medium uppercase leading-[0.94] tracking-[-0.064em] text-[#111111] transition-all delay-75 duration-700 max-[1180px]:max-w-[990px] max-[900px]:mx-0 max-[900px]:max-w-[780px] max-[900px]:text-left max-[900px]:text-[clamp(38px,7.3vw,64px)] max-[640px]:text-[clamp(31px,9.7vw,48px)] max-[640px]:leading-[0.98] max-[480px]:tracking-[-0.048em] ${revealClass}`}
          >
            In Our Venue, We Maintain A Coastal Ambiance With Traditional
            Ivorian Elements Like Ivorian Prints Tissues Walls And Wood
            Lighting Fixtures.
          </h2>
        </div>

        {/* ==================== Gallery collage ==================== */}

        <div className="relative mt-[42px] aspect-[1232/1680] w-full max-[1024px]:mt-[30px] max-[1024px]:grid max-[1024px]:aspect-auto max-[1024px]:grid-cols-12 max-[1024px]:gap-[14px] max-[640px]:mt-[24px] max-[640px]:gap-3">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`group absolute m-0 overflow-hidden bg-transparent p-0 transition-all duration-700 max-[1024px]:static max-[1024px]:h-auto max-[1024px]:w-full ${item.desktopPosition} ${item.responsivePosition} ${item.delay} ${revealClass}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="block h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;