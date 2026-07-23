import About from "../sections/Home/About";
import FAQ from "../sections/Home/FAQ";
import FinalCTA from "../sections/Home/FinalCTA";
import Hero from "../sections/Home/Hero";
import Services from "../sections/Home/Services";
import Specialties from "../sections/Home/Specialties";
import TaxSafety from "../sections/Home/TaxSafety";
import WhenToContact from "../sections/Home/WhenToContact";

const title = "1000B Assessoria Contábil | Contabilidade em Todo o Brasil";

const description =
  "Assessoria contábil para empresas, licitações, produtores rurais, médicos e profissionais da saúde. Atendimento especializado em todo o Brasil.";

const url = "https://1000b.com.br/";

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

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <TaxSafety />
      <Services />
      <WhenToContact />
      <About />
      <FAQ />
      <FinalCTA />
    </>
  );
}
