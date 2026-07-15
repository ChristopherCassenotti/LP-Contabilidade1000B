import HeroVisual from "../layout/HeroVisual";
import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 text-white py-5"
    >
      <img
        src="/assets/globo.png"
        className="absolute -left-1/7 opacity-15"
        alt=""
        width={650}
      />
      <img
        src="/assets/leao.png"
        className="absolute left-7/9 opacity-0 lg:opacity-5"
        alt=""
        width={650}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_25%,rgba(24,196,244,0.18),transparent_29%),linear-gradient(115deg,rgba(7,56,120,0.92),rgba(3,27,69,0.98))]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-16 -z-10 size-[520px] rounded-full border border-cyan-400/10 shadow-[0_0_0_45px_rgba(61,215,255,0.025),0_0_0_90px_rgba(61,215,255,0.02)]"
      />

      <Container className="grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
        <div className="relative z-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] c">
            Assessoria contábil completa
          </p>
          <h1 className="text-[clamp(2.0rem,5.2vw,4.5rem)] font-semibold leading-[1.02]">
            Contabilidade que resolve.
            <br />
            Há mais de <span className="text-blue-500">50 anos.</span>
          </h1>
          <p className="mt-6 font-medium leading-relaxed text-white/75 text-lg">
            Especialistas em{" "}
            <span className="text-blue-500">
              licitações, produtor rural e profissionais da saúde.
            </span>{" "}
            Transformamos burocracia em solução para empresas e pessoas em todo
            o Brasil.
          </p>

          <div className=" mt-8 flex flex-col  gap-3 sm:flex-row">
            <WhatsAppButton message="Olá, quero falar com um contador da 1000B">
              Falar com um contador
            </WhatsAppButton>
            <a
              href="#sobre"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 px-5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
            >
              Conheça a 1000B
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-lg text-white/65">
            {[
              "Atendimento próximo",
              "Especialistas por segmento",
              "Atuação em todo o Brasil",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 before:size-1.5 before:rounded-full before:bg-cyan-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[540px] items-end justify-center self-end lg:h-[600px]">
          <div className="absolute inset-x-10 bottom-10 h-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
