import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="fixed left-3 top-3 z-100 -translate-y-40 rounded-lg bg-white px-4 py-2 text-navy-950 shadow-brand transition-transform focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
