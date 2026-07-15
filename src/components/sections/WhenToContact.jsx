import { contactReasons } from "../../data/siteContent";
import Container from "../ui/Container";

export default function WhenToContact() {
  return (
    <section id="quando-procurar" className="py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex max-w-none flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
              O momento certo
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08] text-ink">
              Quando procurar a 1000B?
            </h2>
          </div>
          <p className="max-w-sm text-xl text-muted">
            Não espere o problema ficar caro para procurar orientação.
          </p>
        </div>

        <ol className="grid border-t border-line md:grid-cols-2 md:gap-x-14">
          {contactReasons.map((reason, index) => (
            <li
              key={reason}
              className="grid min-h-[108px] grid-cols-[54px_1fr] items-start gap-5 border-b border-line py-6"
            >
              <span className="text-3xl font-bold tracking-[0.14em] text-blue-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="m-0 text-[1.25rem] font-medium leading-relaxed text-ink">
                {reason}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
