import {Outlet, useOutletContext} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {useEffect, useState} from 'react';
import {Items} from './data/types';

type AppContext = {items: Items | null};

export function App() {
  const [items, setItems] = useState<Items | null>(null);

  useEffect(() => {
    console.log('API fetch');
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => setItems(json as Items));
  }, []);

  return (
    <div className="w-screen">
      <Header />
      <Outlet context={{items} satisfies AppContext} />
    </div>
  );
}

export function useItems() {
  return useOutletContext<AppContext>();
}
