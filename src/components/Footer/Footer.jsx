import brandIcon from "../../assets/images/icons/brand-icon.svg";
import footerDish from "../../assets/images/footer/footer-dish.png";

const containerClass =
  "mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]";

const navLinks = [
  {
    id: 1,
    label: "History",
    href: "#history",
  },
  {
    id: 2,
    label: "Menu",
    href: "#menu",
  },
  {
    id: 3,
    label: "Trim",
    href: "#trim",
  },
  {
    id: 4,
    label: "Map",
    href: "#map",
  },
];

const socialLinks = [
  {
    id: 1,
    label: "Instagram",
    href: "#",
  },
  {
    id: 2,
    label: "Telegram",
    href: "#",
  },
  {
    id: 3,
    label: "Youtube",
    href: "#",
  },
  {
    id: 4,
    label: "Twitter",
    href: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative -mt-px overflow-hidden bg-[#111111] text-white">
      {/* ==================== Footer main ==================== */}

      <div className={`${containerClass} pt-[58px] pb-8 max-[991px]:py-[48px] max-[640px]:py-[42px]`}>
        <div className="grid grid-cols-[1.25fr_0.72fr_0.72fr_1fr] items-start gap-[54px] border-b border-white/10 pb-[48px] max-[1180px]:gap-10 max-[991px]:grid-cols-2 max-[991px]:gap-x-12 max-[991px]:gap-y-12 max-[640px]:grid-cols-1 max-[640px]:gap-y-10 max-[640px]:pb-10">
          {/* ==================== Footer brand ==================== */}

          <div className="max-w-[315px] max-[640px]:mx-auto max-[640px]:max-w-[360px] max-[640px]:text-center">
            <a
              href="#home"
              className="inline-flex items-center gap-0 text-white no-underline max-[640px]:justify-center"
              aria-label="NSUOMNAM home"
            >
              <img
                src={brandIcon}
                alt=""
                className="h-[50px] w-[50px] object-contain max-[767px]:h-[44px] max-[767px]:w-[44px]"
              />

              <span className="relative top-[5px] font-['Times_New_Roman',Georgia,serif] text-[26px] font-normal uppercase leading-none tracking-[-0.8px] text-white max-[767px]:text-[23px]">
                NSUOMNAM
              </span>
            </a>

            <p className="m-0 mt-[22px] font-[Inter,Arial,sans-serif] text-[13px] font-normal leading-[1.65] text-white/45 max-[640px]:mx-auto max-[640px]:max-w-[310px]">
              Fresh coastal flavors, refined seafood dishes, and a warm dining
              experience crafted for every guest.
            </p>

            <div className="mt-[24px] font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-[1.65] tracking-[0.02em] text-white/35">
              <p className="m-0">10:45AM</p>
              <p className="m-0">E138°00&apos; N36°00&apos;</p>
            </div>
          </div>

          {/* ==================== Footer navigation ==================== */}

          <nav
            className="font-[Inter,Arial,sans-serif] max-[640px]:text-center"
            aria-label="Footer navigation"
          >
            <h3 className="m-0 mb-[18px] text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#d8a06e]">
              Explore
            </h3>

            <div className="flex flex-col gap-[12px] max-[640px]:items-center">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-fit text-[14px] font-medium leading-none text-white/78 no-underline transition duration-300 hover:translate-x-1 hover:text-white max-[640px]:hover:translate-x-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* ==================== Footer social links ==================== */}

          <nav
            className="font-[Inter,Arial,sans-serif] max-[640px]:text-center"
            aria-label="Social links"
          >
            <h3 className="m-0 mb-[18px] text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#d8a06e]">
              Social
            </h3>

            <div className="flex flex-col gap-[12px] max-[640px]:items-center">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-fit text-[14px] font-medium leading-none text-white/42 no-underline transition duration-300 hover:translate-x-1 hover:text-white max-[640px]:hover:translate-x-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* ==================== Footer action ==================== */}

          <div className="justify-self-end text-right max-[991px]:justify-self-start max-[991px]:text-left max-[640px]:justify-self-center max-[640px]:text-center">
            <h3 className="m-0 font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[34px] font-medium uppercase leading-[0.95] tracking-[-0.055em] text-white max-[767px]:text-[31px]">
              Taste The Sea
            </h3>

            <p className="m-0 mt-[14px] max-w-[225px] font-[Inter,Arial,sans-serif] text-[12px] font-normal leading-[1.55] text-white/40 max-[640px]:mx-auto">
              Thank you for choosing Emperor Restaurant.
            </p>

            <button
              type="button"
              className="relative mt-[24px] inline-flex h-[38px] w-[152px] cursor-pointer items-center justify-center border border-[#d8a06e] bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[12px] font-semibold leading-none text-white transition duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#d8a06e]"
              aria-label="Shopping cart"
            >
              Shopping cart

              <span className="absolute -right-[7px] -top-[7px] grid h-[16px] w-[16px] place-items-center rounded-full bg-white font-[Inter,Arial,sans-serif] text-[9px] font-bold leading-none text-[#141414]">
                0
              </span>
            </button>
          </div>
        </div>

        {/* ==================== Footer image strip ==================== */}

        <figure className="relative m-0 mt-[34px] h-[108px] w-full overflow-hidden bg-[#191919] max-[991px]:h-[96px] max-[640px]:mt-[30px] max-[640px]:h-[86px] max-[420px]:h-[76px]">
          <img
            src={footerDish}
            alt="Fresh seafood dish"
            className="h-full w-full transition object-cover duration-700 hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.64)_0%,rgba(17,17,17,0.06)_42%,rgba(17,17,17,0.64)_100%)]"></div>
        </figure>

        {/* ==================== Footer bottom ==================== */}

        <div className="flex items-center justify-between gap-6 pt-8 max-[767px]:flex-col max-[767px]:gap-3 max-[767px]:text-center">
          <p className="m-0 font-[Inter,Arial,sans-serif] text-[11px] font-bold uppercase leading-none tracking-[0.09em] text-white/55 max-[520px]:text-[10px] max-[520px]:leading-[1.5]">
            © {currentYear} NSUOMNAM Seafood Restaurant. All Rights Reserved.
          </p>

          <p className="m-0 font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-none tracking-[0.04em] text-white/30 max-[520px]:text-[10px]">
            Crafted with fresh seafood passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;