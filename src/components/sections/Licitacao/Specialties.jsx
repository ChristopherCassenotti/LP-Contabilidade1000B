import { situation } from "../../../data/siteContent";
import Container from "../../ui/Container";
import { ArrowRightIcon } from "../../ui/Icons";
import SectionHeading from "../../ui/SectionHeading";
import { motion } from "motion/react";
import WhatsAppButton from "../../ui/WhatsAppButton";

export default function Specialties() {
  return (
    <section id="especialidades" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="SITUAÇÕES COMUNS"
          title="Você está passando por alguma dessas situações?"
          className="mb-12 "
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-5 md:grid-cols-3"
        >
          {situation.map((item) => (
            <motion.article
              key={item.number}
              variants={{
                hidden: { opacity: 0, y: 38, scale: 0.97 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group relative min-h-[365px] overflow-hidden rounded-[18px] border border-line bg-white p-8 shadow-[0_14px_38px_rgba(6,39,86,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-500/60 hover:shadow-brand"
            >
              <div className="absolute -bottom-24 -right-20 size-48 rounded-full bg-cyan-500/10" />
              <span className="block text-2xl font-bold tracking-[0.12em] text-blue-500">
                {item.number}
              </span>
              <span
                aria-hidden="true"
                className="absolute right-7 top-7 grid size-13 place-items-center rounded-full bg-cyan-100 text-2xl text-navy-700"
              >
                {item.symbol}
              </span>
              <h3 className="mt-16 max-w-[245px] text-3xl font-semibold leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-xl text-muted mb-6">
                {item.description}
              </p>
              <WhatsAppButton message="Olá, quero verificar se minha empresa está pronta para licitar">
                Saiba Mais
              </WhatsAppButton>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
