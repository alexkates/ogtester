import { HeaderNav } from "./header-nav";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <HeaderNav />
      <ModeToggle />
    </header>
  );
}

export default Header;
