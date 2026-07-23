import {
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layout/SiteLayout.jsx", [
    index("components/pages/Home.jsx"),

    route(
      "licitacao",
      "components/pages/Licitacao.jsx",
    ),

    route(
      "*",
      "components/pages/NotFound.jsx",
    ),
  ]),
];