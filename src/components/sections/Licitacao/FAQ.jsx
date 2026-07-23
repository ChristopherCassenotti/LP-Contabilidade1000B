import { useState } from "react";
import { faqsLicitacao } from "../../../data/siteContent";
import Container from "../../ui/Container";
import { AnimatePresence, motion } from "motion/react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
            Dúvidas frequentes
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08] text-ink">
            Pergunte. A 1000B responde com clareza.
          </h2>

          <div className="mt-8 flex items-center gap-4 rounded-[18px] border border-line bg-surface p-5">
            <div className="grid size-13 shrink-0 place-items-center rounded-full bg-navy-900 font-bold text-white">
              1B
            </div>
            <div>
              <strong className="text-ink">Assistente 1000B</strong>
              <p className="mt-1 text-sm text-muted">
                Selecione uma pergunta para ver a resposta.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="border-t border-line"
        >
          {faqsLicitacao.map((faq, index) => {
            const open = activeIndex === index;

            return (
              <motion.article
                key={faq.question}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="border-b border-line"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setActiveIndex(open ? null : index)}
                  className="grid min-h-[106px] w-full grid-cols-[1fr_40px] items-center gap-6 bg-transparent py-6 text-left text-[1.2rem] font-semibold text-ink"
                >
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className={`grid size-10 place-items-center rounded-full text-2xl transition duration-200 ${
                      open
                        ? "rotate-45 bg-navy-900 text-white"
                        : "bg-cyan-100 text-navy-900"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pr-0 text-muted text-lg transition-all duration-300 sm:pr-16 ${open ? "pb-7 opacity-100" : "pb-0 opacity-0"}`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
