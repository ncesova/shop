import {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';

export function NavLink({children, ...props}: PropsWithChildren) {
  return (
    <li
      className="transition-[border] duration-75 hover:border-b-4 hover:border-slate-500"
      {...props}>
      {children}
    </li>
  );
}
