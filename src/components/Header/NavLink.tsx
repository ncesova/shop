import {PropsWithChildren} from 'react';

export function NavLink({children, ...props}: PropsWithChildren) {
  return (
    <li
      className="flex gap-2 transition-[border] duration-75 hover:border-b-4 hover:border-slate-500"
      {...props}>
      {children}
    </li>
  );
}
