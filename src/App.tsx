import {Outlet, useOutletContext} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {useEffect, useState} from 'react';
import {Items} from './data/types';

type AppContext = {
  cart: Items | null;
  setCart: React.Dispatch<React.SetStateAction<Items | null>>;
};

export function App() {
  const [cart, setCart] = useState<Items | null>(null);

  return (
    <div className="w-screen">
      <Header />
      <Outlet context={{cart, setCart} satisfies AppContext} />
    </div>
  );
}

export function useItems() {
  return useOutletContext<AppContext>();
}
