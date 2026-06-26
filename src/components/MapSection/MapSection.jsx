import { useEffect, useRef, useState } from "react";

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
        threshold: 0.12,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="map"
      ref={sectionRef}
      className="relative -mt-px w-full overflow-hidden border-t-0 bg-[#f4f4f3] p-0 text-[#101010]"
    >
      {/* ==================== Google map full width ==================== */}

      <div
        className={`relative w-full overflow-hidden bg-[#e8ecef] transition-all duration-[900ms] ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="relative h-[520px] w-full overflow-hidden max-[1180px]:h-[470px] max-[991px]:h-[430px] max-[767px]:h-[380px] max-[520px]:h-[330px] max-[380px]:h-[300px]">
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
    </section>
  );
};

export default MapSection;