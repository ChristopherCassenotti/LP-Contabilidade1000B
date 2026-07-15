import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function About() {
  return (
    <section id="sobre" className="bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <div className="relative">
          <img
            src="/assets/equipe.JPG"
            alt="Equipe da 1000B Assessoria Contábil"
            width="230"
            height="301"
            loading="lazy"
            className="min-h-[350px] w-full rounded-[28px] object-cover object-top shadow-brand sm:min-h-[570px]"
          />
          <div className="absolute -bottom-5 right-3 flex flex-col rounded-[18px] border-[6px] border-surface bg-navy-900 px-7 py-6 text-white shadow-brand sm:-right-6 sm:bottom-10">
            <strong className="text-3xl text-cyan-400">+50 anos</strong>
            <span>de história</span>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
            Nossa história
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08] text-ink">
            Mais de 50 anos ao lado de quem empreende e produz.
          </h2>
          <p className="mt-6 leading-relaxed text-muted text-lg">
            A história da 1000B começa com João Luís Agustini e Carlos Agustini,
            há mais de 50 anos. Desde o início, a contabilidade aqui nunca foi
            apenas cumprir obrigações. Sempre foi entender a realidade de quem
            empreende, produz, investe e gera trabalho.
          </p>
          <p className="mt-4 leading-relaxed text-muted text-lg">
            Hoje, com gestão familiar e profissional e sócios ativos no
            atendimento, a 1000B atende empresas de vários segmentos, produtores
            rurais, profissionais autônomos e pessoas físicas em todo o Brasil.
          </p>
          <blockquote className="my-8 border-l-4 border-cyan-500 py-4 pl-6 text-xl font-semibold text-navy-900">
            Contabilidade não é só imposto. É organização, prevenção e decisão
            segura.
          </blockquote>
          <WhatsAppButton message="Olá, quero conhecer a 1000B">
            Falar com a 1000B
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
