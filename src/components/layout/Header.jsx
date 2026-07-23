import { useEffect, useMemo, useState } from "react";
import { navItems } from "../../data/siteContent";
import { useActiveSection } from "../../hooks/useActiveSection";
import Container from "../ui/Container";
import { MenuIcon } from "../ui/Icons";
import WhatsAppButton from "../ui/WhatsAppButton";
import { motion } from "motion/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(
    () => navItems.map(({ href }) => href.replace("#", "")),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 text-white backdrop-blur-xl"
    >
      <Container className="grid min-h-[78px] grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[170px_1fr_auto]">
        <a href="/" aria-label="1000B Assessoria Contábil — Início">
          <img
            src="/assets/logo-1000b.webp"
            alt="1000B Assessoria Contábil"
            className="w-[132px]"
          />
        </a>

        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={`fixed inset-x-0 top-[78px] z-40 flex flex-col border-t border-white/10 bg-navy-950/99 px-5 pb-7 pt-4 transition duration-300 lg:static lg:z-auto lg:flex lg:translate-y-0 lg:flex-row lg:items-center lg:justify-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-[130%] opacity-0 lg:pointer-events-auto"
          }`}
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`relative border-b border-white/10 px-1 py-4 text-[0.95rem] font-medium text-white/90 transition hover:text-white lg:border-0 lg:py-7 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-4 lg:after:h-0.5 lg:after:origin-left lg:after:bg-cyan-500 lg:after:transition-transform ${
                  active ? "lg:after:scale-x-100" : "lg:after:scale-x-0"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <WhatsAppButton
          message="Olá, quero falar com a 1000B"
          className="hidden lg:inline-flex"
          variant="green"
        >
          Fale Conosco
        </WhatsAppButton>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </Container>
    </motion.header>
  );
}
