import { services } from "../../../data/siteContent";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="servicos" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Serviços completos"
          title="Tudo que sua empresa precisa em um só lugar."
          className="mb-12"
        />

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
          {services.map((service, index) => (
            <motion.article
              key={service}
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
                {service}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
