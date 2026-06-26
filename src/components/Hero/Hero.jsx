import heroImage from "../../assets/images/hero.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050504] max-[991px]:min-h-[780px] max-[767px]:min-h-[720px] max-[480px]:min-h-[680px]"
    >
      {/* ==================== Hero background image ==================== */}

      <div className="absolute inset-0 z-[1] overflow-hidden">
        <img
          src={heroImage}
          alt="Fresh seafood bowl"
          className="hero-image-reveal h-full w-full scale-[1.01] object-cover object-center brightness-100 contrast-[1.02] saturate-[1.03]"
        />
      </div>

      {/* ==================== Hero reference overlay ==================== */}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.14)_25%,rgba(0,0,0,0.02)_52%,rgba(0,0,0,0.26)_75%,rgba(0,0,0,0.72)_100%)] max-[767px]:bg-[linear-gradient(180deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.14)_38%,rgba(0,0,0,0.58)_100%)]"></div>

      <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.04)_30%,rgba(0,0,0,0.02)_68%,rgba(0,0,0,0.32)_100%)]"></div>

      {/* ==================== Hero content container same as header ==================== */}

      <div className="relative z-[5] mx-auto min-h-screen w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[991px]:flex max-[991px]:min-h-[780px] max-[991px]:flex-col max-[991px]:items-start max-[991px]:pt-[140px] max-[767px]:min-h-[720px] max-[767px]:w-[calc(100%_-_30px)] max-[767px]:pt-[128px] max-[480px]:min-h-[680px] max-[480px]:pt-[124px] max-[380px]:w-[calc(100%_-_24px)]">
        {/* ==================== Hero title ==================== */}

        <h1 className="hero-text-up absolute left-0 right-0 top-[150px] m-0 block w-full max-w-full overflow-hidden whitespace-nowrap font-['Cormorant_Garamond','Didot','Bodoni_72','Times_New_Roman',serif] text-[clamp(110px,10.12vw,146px)] font-light uppercase leading-[0.76] tracking-[-0.086em] text-white [text-shadow:0_5px_22px_rgba(0,0,0,0.22)] max-[1399px]:text-[clamp(101px,9.75vw,136px)] max-[1399px]:tracking-[-0.087em] max-[1280px]:top-[145px] max-[1280px]:text-[clamp(91px,9.25vw,118px)] max-[1280px]:tracking-[-0.083em] max-[1180px]:top-[138px] max-[1180px]:text-[clamp(78px,8.55vw,100px)] max-[1180px]:tracking-[-0.075em] max-[991px]:static max-[991px]:max-w-[760px] max-[991px]:overflow-visible max-[991px]:whitespace-normal max-[991px]:text-[clamp(74px,13.5vw,112px)] max-[991px]:leading-[0.86] max-[991px]:tracking-[-0.055em] max-[767px]:text-[clamp(52px,16.8vw,88px)] max-[767px]:leading-[0.9] max-[767px]:tracking-[-0.052em] max-[480px]:text-[clamp(45px,16vw,68px)] max-[480px]:leading-[0.92]">
          SAVOUR REAL SEAFOOD
        </h1>

        {/* ==================== Hero paragraph ==================== */}

        <p className="hero-text-up-delay absolute left-[10px] top-[296px] m-0 w-[365px] font-[Inter,Arial,sans-serif] text-[15.5px] font-normal leading-[1.27] tracking-[0.01em] text-white [text-shadow:0_5px_16px_rgba(0,0,0,0.45)] max-[1399px]:top-[292px] max-[1399px]:w-[360px] max-[1399px]:text-[15px] max-[1280px]:top-[272px] max-[1280px]:w-[350px] max-[1280px]:text-[14.5px] max-[1180px]:top-[246px] max-[1180px]:w-[330px] max-[1180px]:text-[14px] max-[991px]:static max-[991px]:mt-[22px] max-[991px]:w-[min(420px,100%)] max-[991px]:text-[16px] max-[991px]:leading-[1.35] max-[767px]:mt-4 max-[767px]:w-[min(355px,100%)] max-[767px]:text-[15px] max-[767px]:leading-[1.42] max-[480px]:mt-[14px] max-[480px]:w-[min(330px,100%)] max-[480px]:text-[14px] max-[480px]:leading-[1.42]">
          With a deep-rooted love for all things seafood, our talented chefs
          combine culinary expertise with creativity to craft dishes that
          celebrate the ocean&apos;s treasures.
        </p>
      </div>
    </section>
  );
};

export default Hero;