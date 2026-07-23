import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./index.css";

const accountingSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://1000b.com.br/#accounting-service",
  name: "1000B Assessoria Contábil",
  url: "https://1000b.com.br/",
  logo: "https://1000b.com.br/logo.png",
  image: "https://1000b.com.br/og-image.jpg",
  description:
    "Assessoria contábil para empresas, licitações, produtores rurais, médicos e profissionais da saúde em todo o Brasil.",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  serviceType: [
    "Assessoria contábil",
    "Contabilidade empresarial",
    "Contabilidade para licitações",
    "Contabilidade para produtores rurais",
    "Contabilidade para médicos",
    "Contabilidade para profissionais da saúde",
  ],
};

export function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="1000B Assessoria Contábil" />

        <meta name="theme-color" content="#05275c" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="1000B Assessoria Contábil" />

        <meta name="twitter:card" content="summary_large_image" />

        <Meta />

        <Links />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(accountingSchema),
          }}
        />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
