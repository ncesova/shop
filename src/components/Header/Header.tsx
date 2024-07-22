import {BurgerMenu} from './BurgerMenu';
import {Logo} from './Logo';
import {NavigationLinks} from './NavigationLinks';

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-white px-8 shadow-sm">
      <Logo />
      <NavigationLinks />
      <BurgerMenu />
    </div>
  );
}
