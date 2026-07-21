import { company, navItems } from "../../data/siteContent";
import Container from "../ui/Container";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_0.7fr_1fr] md:gap-16">
        <div>
          <img
            src="/assets/logo-1000b.webp"
            alt="1000B Assessoria Contábil"
            className="w-[132px]"
          />
          <p className="mt-6 max-w-sm text-white/65">
            Contabilidade estratégica para empresas e pessoas que querem crescer
            com organização, prevenção e segurança.
          </p>
          <a
            href="https://www.instagram.com/assessoria.1000b/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-semibold text-cyan-400 hover:text-white"
          >
            {company.instagram}
          </a>
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <h3 className="mb-3 text-base font-semibold">Navegação</h3>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/65 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <h3 className="mb-3 text-base font-semibold">Contato</h3>
          <address className="text-white/65 not-italic">
            {company.address}
          </address>
          <a
            href={`tel:+554235223145`}
            className="text-white/65 transition hover:text-cyan-400"
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="text-white/65 transition hover:text-cyan-400"
          >
            {company.email}
          </a>
        </div>
      </Container>
      </motion.div>

      <Container className="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/45 sm:flex-row">
        <span>© {new Date().getFullYear()} 1000B Assessoria Contábil.</span>
        <span>Todos os direitos reservados.</span>
      </Container>
    </footer>
  );
}
