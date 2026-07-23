import { regularizacao } from "../../../data/siteContent";
import { getWhatsAppUrl } from "../../../utils/whatsapp";
import Container from "../../ui/Container";
import { ArrowRightIcon } from "../../ui/Icons";
import SectionHeading from "../../ui/SectionHeading";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="servicos" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="REGULARIZAÇÃO"
          title="Pendência com o Fisco não precisa ser o fim da linha."
          className="mb-12"
        />
        <p className="text-2xl max-w-7xl mb-6 text-gray-800/85">
          Dívidas tributárias, declarações em atraso e pendências na Receita têm
          sequência certa de regularização. Analisamos sua situação, montamos o
          caminho e deixamos sua empresa apta a disputar contratos públicos e
          crescer sem risco de autuação.
        </p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid overflow-hidden border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {regularizacao.map((regularizacao, index) => (
            <motion.article
              key={regularizacao}
              variants={{
                hidden: { opacity: 0, rotateX: -12, y: 28 },
                show: { opacity: 1, rotateX: 0, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="group min-h-[205px] border-b border-r border-line bg-white p-7 transition duration-200 hover:relative hover:z-10 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-brand"
            >
              <span className="block text-4xl font-bold tracking-[0.12em] text-blue-500 transition group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-12 text-3xl font-semibold leading-tight text-ink transition group-hover:text-white">
                {regularizacao}
              </h3>
            </motion.article>
          ))}
        </motion.div>
        <a
          href={getWhatsAppUrl(
            "Olá, quero regularizar pendências da minha empresa para licitar",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-xl font-bold text-blue-500"
        >
          Quero regularizar minha empresa
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Container>
    </section>
  );
}
