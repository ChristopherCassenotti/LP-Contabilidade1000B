import Container from "../ui/Container";
import { ArrowRightIcon } from "../ui/Icons";
import { getWhatsAppUrl } from "../../utils/whatsapp";
import { motion } from "motion/react";

export default function TaxSafety() {
  return (
    <section
      id="tranquilidade"
      className="bg-navy-950 bg-[linear-gradient(115deg,rgba(7,62,128,0.72),transparent_45%)] py-20 text-white sm:py-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="flex min-h-[330px] flex-col justify-between rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_70%_25%,rgba(34,196,247,0.24),transparent_33%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-300">
            Tranquilidade fiscal
          </p>
          <div className="flex flex-col text-white/65 text-5xl">
            <span>1000B acompanha</span>
            <strong className="text-[clamp(2.4rem,5vw,7rem)] leading-none text-white">
              mês a mês
            </strong>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08]">
            O maior medo de todo empresário é a notificação do Fisco.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-white/75">
            Nota emitida errado. Imposto fora do prazo. Folha com
            inconsistência. Na maioria das vezes não é fraude, é falta de
            acompanhamento.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-white/75">
            A 1000B acompanha sua empresa mês a mês, antecipa riscos e avisa
            antes que o problema apareça.
          </p>
          <a
            href={getWhatsAppUrl(
              "Olá, quero uma contabilidade que acompanha minha empresa de perto",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-lg font-bold text-cyan-400"
          >
            Quero uma contabilidade que antecipa problemas
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
