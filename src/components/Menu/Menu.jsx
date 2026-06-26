import { useEffect, useRef, useState } from "react";

import salmonPlate from "../../assets/images/menu/menu-salmon-plate.png";
import salmonBowl from "../../assets/images/menu/menu-salmon-bowl.png";
import salmonSauce from "../../assets/images/menu/menu-salmon-sauce.png";
import salmonFillet from "../../assets/images/menu/menu-salmon-fillet.png";
import salmonDelicacy from "../../assets/images/menu/menu-salmon-delicacy.png";
import soupBlack from "../../assets/images/menu/menu-soup-black.png";
import soupRed from "../../assets/images/menu/menu-soup-red.png";
import stewPan from "../../assets/images/menu/menu-stew-pan.png";
import soupBowl from "../../assets/images/menu/menu-soup-bowl.png";

const Menu = () => {
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

  const revealClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";

  const imageClass =
    "h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[1.04]";

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f4f3] pb-[120px] pt-[106px] text-[#101010] max-[1280px]:pb-[104px] max-[1280px]:pt-[92px] max-[900px]:py-[84px] max-[640px]:py-[70px]"
    >
      <div className="mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]">
        {/* ==================== Menu top heading ==================== */}

        <div className="relative">
          <span
            className={`absolute left-0 top-[9px] font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-none text-[#111111] transition-all duration-700 max-[900px]:static max-[900px]:mb-5 max-[900px]:block ${revealClass}`}
          >
            02
          </span>

          <h2
            className={`mx-auto m-0 max-w-[1270px] text-center font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[clamp(48px,4.42vw,74px)] font-medium uppercase leading-[0.94] tracking-[-0.065em] text-[#111111] transition-all delay-75 duration-700 max-[1180px]:max-w-[1000px] max-[900px]:mx-0 max-[900px]:max-w-[820px] max-[900px]:text-left max-[900px]:text-[clamp(42px,9vw,74px)] max-[640px]:text-[clamp(34px,11vw,54px)] max-[480px]:tracking-[-0.05em] ${revealClass}`}
          >
            Our Eatery Provides An Array Of Quality Ingredients, Crafting A
            Diverse Range Of Flavourful Dishes.
          </h2>
        </div>

        {/* ==================== Salmon dishes grid ==================== */}

        <div className="mt-[54px] grid grid-cols-3 gap-[14px] max-[900px]:mt-10 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          <div className="col-span-2 grid grid-cols-2 gap-[14px] max-[640px]:col-span-1 max-[640px]:grid-cols-1">
            <figure
              className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[120ms] duration-700 ${revealClass}`}
            >
              <img
                src={salmonPlate}
                alt="Grilled salmon with salad and fries"
                className={imageClass}
              />
            </figure>

            <figure
              className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[180ms] duration-700 ${revealClass}`}
            >
              <img
                src={salmonBowl}
                alt="Salmon rice bowl"
                className={imageClass}
              />
            </figure>

            <figure
              className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[240ms] duration-700 ${revealClass}`}
            >
              <img
                src={salmonSauce}
                alt="Salmon with sauce"
                className={imageClass}
              />
            </figure>

            <figure
              className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[300ms] duration-700 ${revealClass}`}
            >
              <img
                src={salmonFillet}
                alt="Salmon fillet with greens"
                className={imageClass}
              />
            </figure>
          </div>

          <div className="flex min-h-full flex-col max-[900px]:col-span-2 max-[900px]:grid max-[900px]:grid-cols-2 max-[900px]:gap-[14px] max-[640px]:col-span-1 max-[640px]:grid-cols-1">
            <span
              className={`font-[Inter,Arial,sans-serif] text-[10px] font-medium leading-none text-[#111111] transition-all delay-[260ms] duration-700 max-[900px]:hidden ${revealClass}`}
            >
              01
            </span>

            <div
              className={`mb-[28px] mt-auto transition-all delay-[340ms] duration-700 max-[900px]:mb-0 max-[900px]:mt-0 max-[900px]:flex max-[900px]:items-end max-[640px]:block ${revealClass}`}
            >
              <div>
                <h3 className="m-0 font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[31px] font-medium uppercase leading-[0.95] tracking-[-0.058em] text-[#111111] max-[1280px]:text-[26px] max-[640px]:text-[30px]">
                  Exquisite Salmon Delicacies
                </h3>

                <p className="m-0 mt-[13px] max-w-[448px] font-[Inter,Arial,sans-serif] text-[12px] font-semibold leading-[1.28] tracking-[0.005em] text-[#111111] max-[640px]:text-[13px] max-[640px]:leading-[1.42]">
                  Discover a tantalizing array of seafood delights that await
                  you. Explore our menu and immerse yourself in a culinary
                  journey that will satisfy your cravings for the finest flavors
                  from the sea.
                </p>
              </div>
            </div>

            <figure
              className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[420ms] duration-700 max-[900px]:aspect-square ${revealClass}`}
            >
              <img
                src={salmonDelicacy}
                alt="Exquisite salmon delicacy plate"
                className={imageClass}
              />
            </figure>
          </div>
        </div>

        {/* ==================== Seafood soups heading ==================== */}

        <h2
          className={`m-0 mt-[82px] max-w-full whitespace-nowrap font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[clamp(92px,8.2vw,148px)] font-medium uppercase leading-[0.78] tracking-[-0.078em] text-[#101010] transition-all delay-150 duration-700 max-[1400px]:text-[clamp(88px,8vw,118px)] max-[1280px]:text-[clamp(76px,8.7vw,108px)] max-[900px]:mt-[72px] max-[900px]:whitespace-normal max-[900px]:text-[clamp(64px,13vw,112px)] max-[640px]:mt-[58px] max-[640px]:text-[clamp(47px,15vw,78px)] ${revealClass}`}
        >
          Fresh Seafood Soups
        </h2>

        {/* ==================== Seafood soups grid ==================== */}

        <div className="mt-[50px] grid grid-cols-3 gap-[14px] max-[900px]:mt-10 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          <figure
            className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[180ms] duration-700 ${revealClass}`}
          >
            <img
              src={soupBlack}
              alt="Black bowl seafood soup"
              className={imageClass}
            />
          </figure>

          <div
            className={`pt-[4px] transition-all delay-[240ms] duration-700 max-[900px]:order-3 max-[640px]:order-none ${revealClass}`}
          >
            <p className="m-0 max-w-[440px] font-[Inter,Arial,sans-serif] text-[12px] font-semibold leading-[1.25] tracking-[0.005em] text-[#111111] max-[640px]:text-[13px] max-[640px]:leading-[1.42]">
              Our seafood chowder is a symphony of flavors and fragrances
              derived from the ocean. Meticulously chosen fresh seafood elements
              harmoniously blend together to provide an unforgettable gustatory
              journey.
            </p>
          </div>

          <figure
            className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[300ms] duration-700 max-[900px]:order-2 ${revealClass}`}
          >
            <img
              src={soupRed}
              alt="Red bowl seafood soup"
              className={imageClass}
            />
          </figure>

          <figure
            className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[360ms] duration-700 max-[900px]:order-4 max-[640px]:order-none ${revealClass}`}
          >
            <img src={stewPan} alt="Seafood stew pan" className={imageClass} />
          </figure>

          <figure
            className={`group m-0 aspect-square overflow-hidden bg-[#dededc] transition-all delay-[420ms] duration-700 max-[900px]:order-5 max-[640px]:order-none ${revealClass}`}
          >
            <img
              src={soupBowl}
              alt="Spicy seafood soup bowl"
              className={imageClass}
            />
          </figure>

          <div
            className={`flex items-end pb-[33px] transition-all delay-[480ms] duration-700 max-[900px]:order-6 max-[900px]:pb-0 max-[640px]:order-none ${revealClass}`}
          >
            <div>
              <h3 className="m-0 font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[31px] font-medium uppercase leading-[0.95] tracking-[-0.058em] text-[#111111] max-[1280px]:text-[26px] max-[640px]:text-[30px]">
                Full Menu
              </h3>

              <p className="m-0 mt-[13px] max-w-[448px] font-[Inter,Arial,sans-serif] text-[12px] font-semibold leading-[1.28] tracking-[0.005em] text-[#111111] max-[640px]:text-[13px] max-[640px]:leading-[1.42]">
                Discover a tantalizing array of seafood delights that await you.
                Explore our menu and immerse yourself in a culinary journey that
                will satisfy your cravings for the finest flavors from the sea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;