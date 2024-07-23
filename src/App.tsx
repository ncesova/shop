import {Outlet, useOutletContext} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {useState} from 'react';
import {CartItem} from './data/types';

type AppContext = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="App">
      <Header />
      <Outlet context={{cart, setCart} satisfies AppContext} />
    </div>
  );
}

export function useItems() {
  return useOutletContext<AppContext>();
}
