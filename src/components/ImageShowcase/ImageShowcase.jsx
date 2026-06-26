import { useEffect, useRef, useState } from "react";

import lobsterImage from "../../assets/images/showcase/lobster-chopsticks.png";

const ImageShowcase = () => {
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
        threshold: 0.18,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trim"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black max-[991px]:min-h-[760px] max-[767px]:min-h-[680px] max-[520px]:min-h-[590px]"
    >
      {/* ==================== Image showcase background ==================== */}

      <div
        className={`absolute inset-0 transition-all duration-[1300ms] ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
        }`}
      >
        <img
          src={lobsterImage}
          alt="Lobster held by chopsticks"
          className="h-full w-full object-cover object-center max-[991px]:object-[58%_center] max-[767px]:object-[62%_center] max-[520px]:object-[66%_center]"
        />
      </div>

      {/* ==================== Soft black vignette ==================== */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_45%,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_36%,rgba(0,0,0,0.42)_100%)]"></div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.22)_100%)]"></div>
    </section>
  );
};

export default ImageShowcase;