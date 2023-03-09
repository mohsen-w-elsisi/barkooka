import { RouteDefinition } from "@solidjs/router";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFuond";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "**",
    component: PageNotFound,
  },
];
