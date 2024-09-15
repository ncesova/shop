import {slide as Menu} from 'react-burger-menu';
import {NavLink} from './NavLink';
import {Link} from 'react-router-dom';

export function BurgerMenu() {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '32px',
      top: '14px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#020617',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#020617',
    },
    bmItemList: {
      color: '#f8fafc',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };
  return (
    <div className="md:hidden">
      <Menu right styles={styles}>
        <ul className="flex h-16 w-full flex-row items-center gap-16 font-heading text-xl font-medium">
          <NavLink>
            <Link to={'/home'}>— Home</Link>
          </NavLink>
          <NavLink>
            <Link to={'/store'}>— Store</Link>
          </NavLink>
          <NavLink>
            <Link to={'/checkout'}>— Checkout</Link>
          </NavLink>
        </ul>
      </Menu>
    </div>
  );
}
