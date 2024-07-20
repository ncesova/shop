import {Outlet} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';

export function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
