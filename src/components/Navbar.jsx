import { useEffect, useRef, useState } from "react";
import useDeviceMode from "../hooks/useDeviceMode";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

function Navbar() {
  const { enableRichMotion, isMobile } = useDeviceMode();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  const scrollToSection = (href) => (event) => {
    event.preventDefault();
    const target = document.getElementById(href.replace("#", ""));

    if (!target) return;

    target.scrollIntoView({
      behavior: isMobile ? "auto" : "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sectionIds = [
      "home",
      ...navItems.map((item) => item.href.slice(1)),
      "contact",
    ];

    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 20);
      setVisible(currentY < lastScrollY.current || currentY < 80);
      lastScrollY.current = currentY;

      const scrollMarker = currentY + 140;
      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.offsetTop <= scrollMarker) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0.75rem 1rem",
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        transition: isMobile ? "none" : "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className="sm:px-5 sm:py-4"
    >
      <nav
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          background: atTop
            ? "rgba(13, 18, 32, 0.5)"
            : "rgba(13, 18, 32, 0.85)",
          backdropFilter: isMobile ? "blur(8px)" : "blur(24px)",
          WebkitBackdropFilter: isMobile ? "blur(8px)" : "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: atTop
            ? "none"
            : isMobile
              ? "0 8px 20px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
          transition: isMobile ? "none" : "background 0.3s ease, box-shadow 0.3s ease",
        }}
        className="rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={scrollToSection("#home")}
            className={`shrink-0 text-[0.82rem] font-bold tracking-[0.05em] text-white transition duration-200 sm:text-[0.88rem] ${
              enableRichMotion ? "hover:scale-[1.03] hover:opacity-90" : ""
            }`}
          >
            KeMoO
          </a>

          <div className="hidden items-center gap-5 md:flex lg:gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={scrollToSection(item.href)}
                  className={`pb-1 text-sm transition duration-200 ${
                    isActive
                      ? "border-b border-white/70 text-white"
                      : `border-b border-transparent text-slate-300/85 ${
                          enableRichMotion ? "hover:text-white" : ""
                        }`
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={scrollToSection("#contact")}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-sm transition duration-200 sm:px-4 sm:py-[0.55rem] ${
              activeSection === "contact"
                ? "border-sky-400/45 bg-sky-400/15 text-sky-300 shadow-[0_0_0_1px_rgba(56,189,248,0.2),0_10px_24px_rgba(8,145,178,0.15)]"
                : `border-sky-400/30 bg-sky-400/10 text-sky-400 ${
                    enableRichMotion ? "hover:border-sky-400/45 hover:bg-sky-400/20" : ""
                  }`
            } ${enableRichMotion ? "hover:-translate-y-px" : ""}`}
          >
            Contact
          </a>
        </div>

        <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1 md:hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={scrollToSection(item.href)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition duration-200 ${
                  isActive
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-transparent bg-transparent text-slate-300/80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
