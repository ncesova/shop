import {slide as Menu} from 'react-burger-menu';
import {NavLink} from './NavLink';
import {Link} from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/24/outline';

export function BurgerMenu() {
  return (
    <div className="flex items-center md:hidden">
      <Link to={'/checkout'}>
        <ShoppingCartIcon className="h-12 w-12 rounded-lg bg-slate-200 p-2" />
      </Link>
    </div>
  );
}
