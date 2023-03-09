import logo from "../assets/logo/black.svg";
import { Link } from "@solidjs/router";

export default function NavBar() {
  return (
    <header class="navbar">
      <div class="navbar-brand">
        <span class="navbar-item">
          <img src={logo} alt="" />
        </span>
      </div>

      <nav class="navbar-end">
        <span class="navbar-item">
          <Link href="/about">about</Link>
        </span>
      </nav>
    </header>
  );
}
