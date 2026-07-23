import { steps, stepsTitles } from "../../../data/siteContent";
import Container from "../../ui/Container";
import { motion } from "motion/react";

export default function WhenToContact() {
  return (
    <section id="quando-procurar" className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex max-w-none flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
              PROCESSO SIMPLES
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08] text-ink">
              Como funciona
            </h2>
          </div>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid border-t border-line md:grid-cols-1 md:gap-x-14"
        >
          {steps.map((steps, index) => (
            <motion.li
              key={steps}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -24 : 24 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="flex flex-col min-h-[108px] items-start gap-5 border-b border-line py-6"
            >
              <span className="text-3xl font-bold tracking-[0.14em] text-blue-500 flex-row">
                Passo {String(index + 1).padStart(2, "0")} ·{" "}
                {stepsTitles[index]}
              </span>
              <p className="m-0 text-[1.5rem] font-medium leading-relaxed text-ink">
                {steps}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
