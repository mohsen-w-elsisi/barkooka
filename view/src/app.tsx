import { useRoutes } from "@solidjs/router";

import { routes } from "./routes";
import NavBar from "./components/NavBar";

export default function App() {
  const Route = useRoutes(routes);

  return (
    <>
      <NavBar />
      <main>
        <Route />
      </main>
    </>
  );
}
