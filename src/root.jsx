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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGTHST3V');`,
          }}
        />
        {/* End Google Tag Manager */}

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGTHST3V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
