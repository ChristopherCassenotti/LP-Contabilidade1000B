import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Specialties from "./components/sections/Specialties";
import TaxSafety from "./components/sections/TaxSafety";
import WhenToContact from "./components/sections/WhenToContact";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-3 top-3 z-[100] -translate-y-40 rounded-lg bg-white px-4 py-2 text-navy-950 shadow-brand transition-transform focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Specialties />
        <TaxSafety />
        <Services />
        <WhenToContact />
        <About />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
