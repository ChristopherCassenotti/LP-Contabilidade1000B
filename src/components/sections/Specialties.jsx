import { specialties } from "../../data/siteContent";
import Container from "../ui/Container";
import { ArrowRightIcon } from "../ui/Icons";
import SectionHeading from "../ui/SectionHeading";

export default function Specialties() {
  return (
    <section id="especialidades" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Como podemos ajudar"
          title="Três frentes em que a 1000B é referência."
          className="mb-12 "
        />

        <div className="grid gap-5 md:grid-cols-3">
          {specialties.map((item) => (
            <article
              key={item.number}
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
              <p className="mt-4 leading-relaxed text-xl text-muted">
                {item.description}
              </p>
              <a
                href={item.href}
                className="relative z-10 mt-7 text-xl inline-flex items-center gap-2 font-bold text-navy-700"
              >
                Saiba mais
                <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
