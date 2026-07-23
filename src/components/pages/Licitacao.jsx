import About from "../sections/Licitacao/About";
import FAQ from "../sections/Licitacao/FAQ";
import FinalCTA from "../sections/Licitacao/FinalCTA";
import HeroLicitacao from "../sections/Licitacao/HeroLicitacao";
import MythBreak from "../sections/Licitacao/MythBreak";
import Services from "../sections/Licitacao/Services";
import Specialties from "../sections/Licitacao/Specialties";
import TaxSafety from "../sections/Licitacao/TaxSafety";
import WhenToContact from "../sections/Licitacao/WhenToContact";

const title =
  "Assessoria em Licitações e Regularização de Dívidas | 1000B Contabilidade";

const description =
  "Especialistas em licitações e processos licitatórios. Edital, certidões, habilitação e regularização de dívidas. Mais de 50 anos de experiência. Atendemos todo o Brasil.";

const url = "https://1000b.com.br/licitacao";

const image = "https://1000b.com.br/og-image.jpg";

export function meta() {
  return [
    {
      title,
    },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ];
}

export function links() {
  return [
    {
      rel: "canonical",
      href: url,
    },
  ];
}

export default function Licitacao() {
  return (
    <>
      <HeroLicitacao />
      <Specialties />
      <TaxSafety />
      <Services />
      <WhenToContact />
      <MythBreak />
      <About />
      <FAQ />
      <FinalCTA />
    </>
  );
}
