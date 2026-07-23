import { motion } from "motion/react";
import Container from "../../ui/Container";

export default function MythBreak() {
  return (
    <section
      aria-labelledby="mito-licitacao-title"
      className="relative overflow-hidden bg-navy-900 py-14 text-white sm:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(37,137,245,0.18),transparent_48%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-28 -top-32 size-80 rounded-full border border-cyan-400/10 shadow-[0_0_0_45px_rgba(61,215,255,0.025)]"
      />

      <Container className="relative z-10 grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
            Quebra de mito
          </p>

          <div className="relative mt-4 w-fit text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-none text-white/10">
            MITO
            <span
              aria-hidden="true"
              className="absolute left-0 top-1/2 h-1 w-full -rotate-6 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <h2
            id="mito-licitacao-title"
            className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08]"
          >
            Licitação é só para empresa grande?{" "}
            <span className="text-cyan-400">Mito.</span>
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Pequenas e médias empresas também vendem para o poder público. O que
            impede a maioria não é o tamanho, é a falta de preparo técnico. Quem
            está preparado sai na frente.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
