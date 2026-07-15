import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="bg-navy-900 bg-[radial-gradient(circle_at_80%_20%,rgba(24,196,244,0.24),transparent_32%)] py-20 text-white sm:py-24"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gray-300">
            Vamos conversar?
          </p>
          <h2 className="max-w-4xl text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08]">
            Sua empresa merece uma contabilidade que caminha junto.
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Quanto antes você organiza, menos você paga em erro depois.
          </p>
        </div>

        <WhatsAppButton
          message="Olá, quero falar com a 1000B"
          className="w-full lg:w-auto"
        >
          Falar com a 1000B agora
        </WhatsAppButton>
      </Container>
    </section>
  );
}
