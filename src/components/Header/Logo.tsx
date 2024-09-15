import {Link} from 'react-router-dom';

export function Logo() {
  return (
    <Link className="text-center font-heading text-3xl font-black" to={'/'}>
      Store
    </Link>
  );
}
