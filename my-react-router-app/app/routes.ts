import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    //route("a", "routes/home.tsx"),
  ]),
] satisfies RouteConfig;
