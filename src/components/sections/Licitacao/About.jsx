import Container from "../../ui/Container";
import WhatsAppButton from "../../ui/WhatsAppButton";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="sobre" className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -45, rotate: -1.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="/assets/equipe.webp"
            alt="Equipe da 1000B Assessoria Contábil"
            width="230"
            height="300"
            loading="lazy"
            className="min-h-[350px] w-full rounded-[28px] object-cover object-right shadow-brand sm:min-h-[570px]"
          />
          <div className="absolute -bottom-5 right-3 flex flex-col rounded-[18px] border-[6px] border-surface bg-navy-900 px-7 py-6 text-white shadow-brand sm:-right-6 sm:bottom-10">
            <strong className="text-3xl text-cyan-400">+50 anos</strong>
            <span>de história</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
            Nossa história
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08] text-ink">
            Mais de 50 anos ao lado de quem empreende e produz.
          </h2>
          <p className="mt-6 leading-relaxed text-muted text-lg mb-6">
            A história da 1000B começa com João Luís e Carlos Agustini, há mais
            de 50 anos. Gestão familiar e profissional, sócios ativos no
            atendimento e especialidade em licitações, S/A e produtor rural.
            Contabilidade não é só imposto. É organização, prevenção e decisão
            segura.
          </p>

          <WhatsAppButton message="Olá, quero falar sobre licitações">
            Falar com a 1000B
          </WhatsAppButton>
        </motion.div>
      </Container>
    </section>
  );
}
