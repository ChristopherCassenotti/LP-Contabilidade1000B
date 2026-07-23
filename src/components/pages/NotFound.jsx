import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-5 py-20 text-center">
      <div className="max-w-xl">
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
          Erro 404
        </span>

        <h1 className="mt-4 text-6xl font-bold text-navy-950 sm:text-8xl">
          Página não encontrada
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-slate-600">
          O endereço acessado não existe ou pode ter sido alterado.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan-500 px-7 font-semibold text-navy-950 transition hover:bg-cyan-400"
        >
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
