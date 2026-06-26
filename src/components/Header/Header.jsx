import { useEffect, useState } from "react";

import brandIcon from "../../assets/images/icons/brand-icon.svg";

const navItems = [
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
    label: "Gallery",
    href: "#gallery",
  },
  {
    id: 5,
    label: "Suppliers",
    href: "#suppliers",
  },
  {
    id: 6,
    label: "Map",
    href: "#map",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ==================== Header navbar ==================== */}

      <header className="absolute left-0 top-0 z-[100] w-full bg-transparent py-3 max-[1180px]:py-[22px] max-[767px]:py-[18px]">
        <div className="mx-auto grid w-[calc(100%_-_56px)] max-w-[1384px] grid-cols-[230px_1fr_230px] items-center max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[1180px]:grid-cols-[1fr_auto] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]">
          {/* ==================== Header brand ==================== */}

          <a
            href="#home"
            className="relative top-[-4px] inline-flex w-fit items-center text-white no-underline"
            aria-label="NSUOMNAM Home"
          >
            <img
              src={brandIcon}
              alt=""
              className="h-[34px] w-[34px] object-contain max-[767px]:h-[32px] max-[767px]:w-[32px]"
            />

            <span className="relative top-[5px] font-['Times_New_Roman',Georgia,serif] text-[20px] font-normal uppercase leading-none tracking-[-0.75px] text-white max-[767px]:text-[18px]">
              NSUOMNAM
            </span>
          </a>

          {/* ==================== Desktop navigation ==================== */}

          <nav
            className="flex items-center justify-center gap-[clamp(18px,2.45vw,42px)] pl-1.5 max-[1180px]:hidden"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group relative font-[Inter,Arial,sans-serif] text-[13px] font-medium leading-none text-white no-underline transition-colors duration-300 hover:text-[#dca16c]"
              >
                {item.label}

                <span className="absolute -bottom-[9px] left-1/2 h-px w-0 -translate-x-1/2 bg-white/80 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* ==================== Header actions ==================== */}

          <div className="flex items-center justify-end gap-3.5">
            <a
              href="#menu"
              className="relative inline-flex h-8 w-[130px] cursor-pointer items-center justify-center border-0 bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-none text-white no-underline transition duration-300 hover:-translate-y-px hover:bg-[#e1ad7d] max-[767px]:h-6 max-[767px]:w-[116px] max-[767px]:text-[10px] max-[520px]:hidden"
              aria-label="Shopping cart"
            >
              <span>Shopping cart</span>

              <span className="absolute -right-[7px] -top-[7px] grid h-[13px] w-[13px] place-items-center rounded-full bg-white font-[Inter,Arial,sans-serif] text-[8px] font-bold leading-none text-[#1d1712]">
                0
              </span>
            </a>

            <button
              className="relative hidden h-[38px] w-[38px] cursor-pointer rounded-full border border-white/30 bg-white/[0.06] p-0 max-[1180px]:inline-block max-[767px]:h-9 max-[767px]:w-9"
              type="button"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span
                className={`absolute left-[10px] h-px w-4 rounded-full bg-white transition-all duration-300 max-[767px]:left-[9px] ${
                  isMenuOpen ? "top-[18px] rotate-45" : "top-[13px]"
                }`}
              ></span>

              <span
                className={`absolute left-[10px] top-[18px] h-px w-4 rounded-full bg-white transition-all duration-300 max-[767px]:left-[9px] ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>

              <span
                className={`absolute left-[10px] h-px w-4 rounded-full bg-white transition-all duration-300 max-[767px]:left-[9px] ${
                  isMenuOpen ? "top-[18px] -rotate-45" : "top-[23px]"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* ==================== Mobile menu overlay ==================== */}

      <div
        className={`fixed inset-0 z-[110] bg-black/55 transition-all duration-300 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenu}
      ></div>

      {/* ==================== Mobile menu ==================== */}

      <aside
        className={`fixed right-0 top-0 z-[120] h-screen w-[min(82vw,360px)] overflow-y-auto bg-[rgba(8,7,6,0.97)] p-7 backdrop-blur-[18px] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] max-[520px]:w-[min(86vw,340px)] max-[520px]:p-6 max-[380px]:w-[88vw] max-[380px]:p-[22px] ${
          isMenuOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="inline-flex w-fit items-center text-white no-underline"
            onClick={closeMenu}
          >
            <img
              src={brandIcon}
              alt=""
              className="h-[32px] w-[32px] object-contain"
            />

            <span className="relative top-[5px] font-['Times_New_Roman',Georgia,serif] text-[18px] font-normal uppercase leading-none tracking-[-0.75px] text-white">
              NSUOMNAM
            </span>
          </a>

          <button
            className="h-9 w-9 cursor-pointer border-0 bg-transparent text-[30px] leading-none text-white"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="mt-[68px] flex flex-col gap-6 max-[520px]:mt-[58px] max-[520px]:gap-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="font-['Times_New_Roman',Georgia,serif] text-[34px] font-normal leading-none text-white no-underline transition duration-300 hover:translate-x-1 hover:text-[#d8a06e] max-[520px]:text-center max-[520px]:text-[24px]"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#menu"
          className="mt-[58px] inline-flex h-[46px] w-full cursor-pointer items-center justify-center border-0 bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[13px] font-semibold text-white no-underline max-[520px]:mt-[52px]"
          onClick={closeMenu}
        >
          Shopping cart
          <span className="ml-2">0</span>
        </a>
      </aside>
    </>
  );
};

export default Header;