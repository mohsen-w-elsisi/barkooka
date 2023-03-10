import { RouteDefinition } from "@solidjs/router";
import AboutPage from "./pages/About";

import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import PageNotFound from "./pages/PageNotFuond";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/week/:week",
    component: Magazine,
  },
  {
    path: "**",
    component: PageNotFound,
  },
];
