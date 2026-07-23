import Container from "../../ui/Container";
import { ArrowRightIcon } from "../../ui/Icons";
import { getWhatsAppUrl } from "../../../utils/whatsapp";
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
          className="flex min-h-[330px] flex-col justify-between rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_70%_25%,rgba(34,196,247,0.24),transparent_33%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-300">
            ASSESSORIA INDEPENDENTE
          </p>
          <div className="flex flex-col text-white/85 text-4xl">
            <span>Mantenha seu contador.</span>
            <strong className="text-[clamp(2.4rem,5vw,3rem)] leading-none text-white">
              Não perca licitações.
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
            Você NÃO precisa trocar de contador.
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-white/75">
            Muitos empresários deixam de vender para o poder público porque
            acham que precisam mudar toda a contabilidade. Não precisam. A 1000B
            presta assessoria em licitações inclusive para empresas que não são
            clientes fixos.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-white/75">
            Você continua com o seu contador. Nós cuidamos da parte técnica:
            edital, documentação e habilitação.
          </p>
          <a
            href={getWhatsAppUrl(
              "Olá, já tenho contador e quero assessoria só para licitações",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-lg font-bold text-cyan-400"
          >
            Pedir análise pelo WhatsApp
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
