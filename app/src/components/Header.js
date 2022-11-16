import { HeaderLink } from "./Links/HeaderLink";
import { LogoLink } from "./Links/LogoLink";

export function Header() {
  return (
    <header className="main-header">
      <LogoLink to="/..">Welcome to Lucid Words!</LogoLink>
      <HeaderLink to="/login">Log in</HeaderLink>
      <HeaderLink to="/signup">Register</HeaderLink>
    </header>
  );
}
