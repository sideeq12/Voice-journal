import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("start", "routes/start.tsx"),
  route("results", "routes/results.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
