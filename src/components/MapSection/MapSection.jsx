import { useEffect, useRef, useState } from "react";

const containerClass =
  "mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]";

const MapSection = () => {
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
        threshold: 0.14,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="map"
      ref={sectionRef}
      className="relative -mt-px overflow-hidden border-t-0 bg-[#f4f4f3] py-[42px] text-[#101010] max-[1180px]:py-[38px] max-[767px]:py-[32px] max-[480px]:py-[28px]"
    >
      <div className={containerClass}>
        {/* ==================== Google map ==================== */}

        <div
          className={`relative w-full overflow-hidden bg-[#e8ecef] transition-all duration-[900ms] ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative aspect-[1440/618] w-full overflow-hidden max-[991px]:aspect-[16/8.5] max-[767px]:aspect-[4/3] max-[520px]:aspect-[3/3.35]">
            <iframe
              title="NsuomNam Seafood and Fish location map"
              src="https://www.google.com/maps?q=NsuomNam%20Seafood%20and%20Fish%2C%20Cantonments%2C%20Accra%2C%20Ghana&z=15&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[8%] saturate-[0.95] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;