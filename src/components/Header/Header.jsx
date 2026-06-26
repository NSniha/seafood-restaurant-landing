import { useEffect, useState } from "react";

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ==================== Header navbar ==================== */}

      <header className="absolute left-0 top-0 z-[100] w-full bg-transparent py-7 max-[1180px]:py-[22px] max-[767px]:py-[18px]">
        <div className="mx-auto grid w-[calc(100%-56px)] max-w-[1384px] grid-cols-[220px_1fr_220px] items-center max-[1180px]:w-[calc(100%-42px)] max-[1180px]:max-w-[1080px] max-[1180px]:grid-cols-[1fr_auto] max-[767px]:w-[calc(100%-30px)] max-[380px]:w-[calc(100%-24px)]">
          <a
            href="#home"
            className="inline-flex w-fit items-center text-white no-underline"
            aria-label="NSUOMNAM Home"
          >
            <span className="font-['Times_New_Roman',Georgia,serif] text-[16px] font-normal leading-none tracking-[-0.7px] text-white max-[767px]:text-[15px]">
              NSUOMNAM
            </span>
          </a>

          <nav
            className="flex items-center justify-center gap-[clamp(34px,4.3vw,68px)] pl-1.5 max-[1180px]:hidden"
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

          <div className="flex items-center justify-end gap-3.5">
            <button
              className="relative inline-flex h-6 w-[126px] cursor-pointer items-center justify-center border-0 bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-none text-white transition duration-300 hover:-translate-y-px hover:bg-[#e1ad7d] max-[767px]:h-6 max-[767px]:w-[116px] max-[767px]:text-[10px] max-[520px]:hidden"
              type="button"
              aria-label="Shopping cart"
            >
              <span>Shopping cart</span>

              <span className="absolute -right-[7px] -top-[7px] grid h-[13px] w-[13px] place-items-center rounded-full bg-white font-[Inter,Arial,sans-serif] text-[8px] font-bold leading-none text-[#1d1712]">
                0
              </span>
            </button>

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
        className={`fixed right-0 top-0 z-[120] h-screen w-[min(82vw,360px)] bg-[rgba(8,7,6,0.97)] p-7 backdrop-blur-[18px] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] max-[520px]:w-[min(86vw,340px)] max-[520px]:p-6 max-[380px]:w-[88vw] max-[380px]:p-[22px] ${
          isMenuOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="inline-flex w-fit items-center text-white no-underline"
            onClick={closeMenu}
          >
            <span className="font-['Times_New_Roman',Georgia,serif] text-[16px] font-normal leading-none tracking-[-0.7px] text-white max-[767px]:text-[15px]">
              NSUOMNAM
            </span>
          </a>

          <button
            className="h-9 w-9 cursor-pointer rounded-full border border-white/15 bg-white/[0.06] text-[26px] leading-none text-white"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="mt-[72px] flex flex-col gap-7 max-[520px]:mt-[66px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="font-['Times_New_Roman',Georgia,serif] text-[38px] font-normal leading-none text-white no-underline transition duration-300 hover:translate-x-1 hover:text-[#d8a06e] max-[520px]:text-center max-[520px]:text-[22px]"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="absolute bottom-8 left-7 right-7 h-[46px] cursor-pointer border-0 bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[13px] font-semibold text-white max-[520px]:bottom-7 max-[520px]:left-6 max-[520px]:right-6"
          type="button"
        >
          Shopping cart
          <span className="ml-2">0</span>
        </button>
      </aside>
    </>
  );
};

export default Header;