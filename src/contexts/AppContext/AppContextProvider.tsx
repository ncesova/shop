import {PropsWithChildren, useEffect, useState} from 'react';
import {AppContext} from './AppContext';
import {Items} from '../../data/types';

export function AppContextProvider({children, ...props}: PropsWithChildren) {
  const [items, setItems] = useState(new Array<Items>());

  useEffect(() => {
    console.log('API fetch');
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => setItems(json as Items[]));
  }, []);

  return <AppContext.Provider value={items}>{children}</AppContext.Provider>;
}
