import {Outlet, useLocation, useOutletContext} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {useState} from 'react';
import {CartItem} from './data/types';
import {AnimatePresence} from 'framer-motion';

type AppContext = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence key={location.key}>
        <Outlet context={{cart, setCart} satisfies AppContext} />
      </AnimatePresence>
    </div>
  );
}

export function useItems() {
  return useOutletContext<AppContext>();
}

export const routeVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
};
