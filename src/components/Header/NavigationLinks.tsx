import {Link} from 'react-router-dom';
import {NavLink} from './NavLink';

export function NavigationLinks() {
  return (
    <nav className="mx-auto hidden md:block">
      <ul className="font-heading flex h-16 w-full items-center gap-16 font-medium">
        <NavLink>
          <Link to={'/home'}>Home</Link>
        </NavLink>
        <NavLink>
          <Link to={'/store'}>Store</Link>
        </NavLink>
        <NavLink>
          <Link to={'/checkout'}>Checkout</Link>
        </NavLink>
      </ul>
    </nav>
  );
}
