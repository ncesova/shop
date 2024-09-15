import {Link} from 'react-router-dom';
import {NavLink} from './NavLink';
import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

export function NavigationLinks() {
  return (
    <nav className="mx-auto hidden md:block">
      <ul className="flex h-16 w-full items-center gap-16 font-heading font-medium">
        <NavLink>
          <HomeIcon className="h-6 w-6" />
          <Link to={'/home'}>Home</Link>
        </NavLink>
        <NavLink>
          <ShoppingBagIcon className="h-6 w-6" />
          <Link to={'/store'}>Store</Link>
        </NavLink>
        <NavLink>
          <ShoppingCartIcon className="h-6 w-6" />
          <Link to={'/checkout'}>Checkout</Link>
        </NavLink>
      </ul>
    </nav>
  );
}
