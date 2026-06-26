import { useEffect, useRef, useState } from "react";

import ctaDishSmall from "../../assets/images/cta/cta-dish-small.png";
import ctaCrab from "../../assets/images/cta/cta-crab.png";
import ctaSeafood from "../../assets/images/cta/cta-seafood.png";

const containerClass =
  "mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]";

const CallToAction = () => {
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

  const textReveal = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-7 opacity-0";

  const imageReveal = isVisible
    ? "scale-100 opacity-100"
    : "scale-90 opacity-0";

  return (
    <section
      id="suppliers"
      ref={sectionRef}
      className="relative -mt-px overflow-hidden border-t-0 bg-[#f4f4f3] pb-[100px] pt-[20px] text-[#101010] outline-none max-[1180px]:pb-[42px] max-[1180px]:pt-[34px] max-[767px]:pb-[42px] max-[767px]:pt-[30px] max-[520px]:pb-[38px] max-[520px]:pt-[26px] max-[380px]:pb-[34px] max-[380px]:pt-[24px]"
    >
      <div className={containerClass}>
        {/* ==================== CTA heading ==================== */}

        <h2
          className={`m-0 w-full max-w-full overflow-visible text-center font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[clamp(42px,4.05vw,66px)] font-medium uppercase leading-[0.98] tracking-[-0.055em] text-[#111111] transition-all duration-700 max-[1380px]:text-[clamp(40px,4.15vw,58px)] max-[1180px]:text-[clamp(36px,4.55vw,52px)] max-[991px]:text-[clamp(33px,5.7vw,48px)] max-[767px]:text-[clamp(29px,8.2vw,42px)] max-[767px]:leading-[1.05] max-[767px]:tracking-[-0.045em] max-[520px]:text-[clamp(25px,8.3vw,36px)] max-[520px]:leading-[1.08] max-[380px]:text-[clamp(22px,8.2vw,32px)] ${textReveal}`}
        >
          <span className="flex w-full max-w-full flex-wrap items-center justify-center gap-x-[16px] gap-y-[4px] whitespace-normal transition-all duration-700 max-[1380px]:gap-x-[13px] max-[1180px]:gap-x-[11px] max-[767px]:gap-x-[8px] max-[767px]:gap-y-[5px] max-[520px]:gap-x-[7px]">
            <span>We Buy Our Products</span>

            <span>Only From</span>

            <span
              className={`inline-block h-[42px] w-[42px] shrink-0 overflow-hidden transition-all delay-[160ms] duration-700 max-[1380px]:h-[38px] max-[1380px]:w-[38px] max-[1180px]:h-[32px] max-[1180px]:w-[32px] max-[767px]:h-[27px] max-[767px]:w-[27px] max-[520px]:h-[24px] max-[520px]:w-[24px] ${imageReveal}`}
            >
              <img
                src={ctaDishSmall}
                alt="Fresh seafood dish"
                className="block h-full w-full object-cover object-center"
              />
            </span>

            <span>Trusted</span>
          </span>

          <span className="mt-[4px] flex w-full max-w-full flex-wrap items-center justify-center gap-x-[16px] gap-y-[4px] whitespace-normal transition-all delay-75 duration-700 max-[1380px]:gap-x-[13px] max-[1180px]:gap-x-[11px] max-[767px]:mt-[6px] max-[767px]:gap-x-[8px] max-[767px]:gap-y-[5px] max-[520px]:gap-x-[7px]">
            <span>Suppliers In Accrato</span>

            <span>Guarantee</span>

            <span
              className={`inline-block h-[42px] w-[136px] shrink-0 overflow-hidden transition-all delay-[230ms] duration-700 max-[1380px]:h-[36px] max-[1380px]:w-[118px] max-[1180px]:h-[31px] max-[1180px]:w-[102px] max-[767px]:h-[27px] max-[767px]:w-[86px] max-[520px]:h-[24px] max-[520px]:w-[76px] ${imageReveal}`}
            >
              <img
                src={ctaCrab}
                alt="Premium crab ingredient"
                className="block h-full w-full object-cover object-center"
              />
            </span>

            <span>The</span>
          </span>

          <span className="mt-[4px] flex w-full max-w-full flex-wrap items-center justify-center gap-x-[16px] gap-y-[4px] whitespace-normal transition-all delay-150 duration-700 max-[1380px]:gap-x-[13px] max-[1180px]:gap-x-[11px] max-[767px]:mt-[6px] max-[767px]:gap-x-[8px] max-[767px]:gap-y-[5px] max-[520px]:gap-x-[7px]">
            <span>Highest Quality</span>

            <span>Of</span>

            <span
              className={`inline-block h-[42px] w-[114px] shrink-0 overflow-hidden transition-all delay-[300ms] duration-700 max-[1380px]:h-[36px] max-[1380px]:w-[100px] max-[1180px]:h-[31px] max-[1180px]:w-[88px] max-[767px]:h-[27px] max-[767px]:w-[76px] max-[520px]:h-[24px] max-[520px]:w-[68px] ${imageReveal}`}
            >
              <img
                src={ctaSeafood}
                alt="Fresh seafood ingredients"
                className="block h-full w-full object-cover object-center"
              />
            </span>

            <span>Our Dishes.</span>
          </span>
        </h2>

        {/* ==================== CTA button ==================== */}

        <div
          className={`mt-[28px] flex w-full justify-center transition-all delay-[380ms] duration-700 max-[767px]:mt-[26px] max-[520px]:mt-[24px] ${textReveal}`}
        >
          <a
            href="#map"
            className="inline-flex h-[34px] w-[222px] items-center justify-center bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[14px] font-medium leading-none tracking-[0.01em] text-white no-underline transition duration-300 hover:-translate-y-1 hover:bg-[#c89061] max-[767px]:h-[40px] max-[767px]:w-[210px] max-[767px]:text-[13px] max-[380px]:h-[38px] max-[380px]:w-[196px] max-[380px]:text-[12px]"
          >
            Visit our restaurant
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;