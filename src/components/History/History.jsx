import { useEffect, useRef, useState } from "react";

import historyMain from "../../assets/images/history/history-main.png";
import historyCooking from "../../assets/images/history/history-cooking.png";
import historyPan from "../../assets/images/history/history-pan.png";

const History = () => {
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

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-8 opacity-0";

  return (
    <section
      id="history"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f4f3] py-[108px] text-[#101010] max-[1100px]:py-[94px] max-[900px]:py-[84px] max-[640px]:py-[72px] max-[420px]:py-16"
    >
      <div className="mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]">
        {/* ==================== History top content ==================== */}

        <div className="grid grid-cols-[390px_390px_1fr] items-start gap-x-10 max-[1280px]:grid-cols-[300px_370px_1fr] max-[1280px]:gap-x-[34px] max-[1100px]:grid-cols-[80px_1fr_1fr] max-[1100px]:gap-x-[30px] max-[900px]:grid-cols-1 max-[900px]:gap-y-[22px] max-[640px]:gap-y-[18px]">
          <span
            className={`inline-block pt-[7px] font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-none text-[#111111] transition-all duration-700 max-[900px]:pt-0 ${revealClass}`}
          >
            01
          </span>

          <h2
            className={`m-0 max-w-[410px] font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[clamp(34px,2.6vw,43px)] font-medium uppercase leading-[0.98] tracking-[-0.055em] text-[#101010] transition-all delay-75 duration-700 max-[1280px]:text-[clamp(32px,2.85vw,40px)] max-[1100px]:max-w-[390px] max-[900px]:max-w-[650px] max-[900px]:text-[clamp(38px,7vw,62px)] max-[900px]:leading-[0.94] max-[640px]:text-[clamp(34px,11vw,54px)] max-[640px]:leading-[0.95] max-[640px]:tracking-[-0.045em] max-[420px]:text-[clamp(31px,10.5vw,46px)] ${revealClass}`}
          >
            Emperor&apos;s Cooking Dynasty: The History Of Our Cuisine
          </h2>

          <div
            className={`max-w-[405px] transition-all delay-150 duration-700 max-[1100px]:max-w-full max-[900px]:max-w-[620px] ${revealClass}`}
          >
            <p className="m-0 font-[Inter,Arial,sans-serif] text-[15px] font-medium leading-[1.26] tracking-[0.005em] text-[#111111] max-[1280px]:text-sm max-[900px]:text-[15px] max-[900px]:leading-[1.38] max-[640px]:text-sm max-[640px]:leading-[1.45] max-[420px]:text-[13.5px]">
              Our esteemed chef, renowned for their passion and expertise in
              seafood cuisine, elevates the freshest catches into culinary works
              of art that will delight your senses. With an unwavering
              dedication to sourcing the highest quality seafood, our chef is
              deeply committed to sustainability and responsible fishing
              practices, ensuring that each ingredient is not only delicious but
              also ethically sourced.
            </p>

            <p className="m-0 mt-[29px] font-[Inter,Arial,sans-serif] text-[15px] font-medium leading-[1.26] tracking-[0.005em] text-[#111111] max-[1280px]:text-sm max-[900px]:mt-5 max-[900px]:text-[15px] max-[900px]:leading-[1.38] max-[640px]:text-sm max-[640px]:leading-[1.45] max-[420px]:text-[13.5px]">
              Drawing inspiration from global flavors and techniques, our chef
              combines traditional culinary wisdom with innovative approaches to
              create unforgettable dishes. From succulent crab cakes with a hint
              of Cajun spice to seared tuna atop a bed of vibrant seaweed salad.
            </p>
          </div>
        </div>

        {/* ==================== History image gallery ==================== */}

        <div className="mt-[34px] grid grid-cols-[2fr_1fr_1fr] grid-rows-[320px_320px] gap-x-3.5 max-[1500px]:grid-rows-[320px_320px] max-[1280px]:grid-rows-[292px_292px] max-[1100px]:grid-rows-[260px_260px] max-[900px]:mt-[38px] max-[900px]:grid-cols-2 max-[900px]:grid-rows-none max-[900px]:gap-3.5 max-[640px]:mt-[34px] max-[640px]:grid-cols-1">
          <figure
            className={`group m-0 row-span-2 overflow-hidden bg-[#dededc] transition-all delay-[220ms] duration-700 max-[900px]:col-span-2 max-[900px]:row-auto max-[900px]:h-[520px] max-[640px]:col-auto max-[640px]:h-auto max-[640px]:aspect-[1/1.08] ${revealClass}`}
          >
            <img
              src={historyMain}
              alt="Chef preparing fresh seafood"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[1.03]"
            />
          </figure>

          <figure
            className={`group m-0 overflow-hidden bg-[#dededc] transition-all delay-[320ms] duration-700 max-[900px]:h-[270px] max-[640px]:h-auto max-[640px]:aspect-[1.08/1] ${revealClass}`}
          >
            <img
              src={historyCooking}
              alt="Chef cooking seafood in a pan"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[1.03]"
            />
          </figure>

          <figure
            className={`group col-start-3 row-start-2 m-0 overflow-hidden bg-[#dededc] transition-all delay-[420ms] duration-700 max-[900px]:col-auto max-[900px]:row-auto max-[900px]:h-[270px] max-[640px]:h-auto max-[640px]:aspect-[1.08/1] ${revealClass}`}
          >
            <img
              src={historyPan}
              alt="Fresh seafood being cooked"
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[1.03]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default History;