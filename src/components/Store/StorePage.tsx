import {useItems} from '../../App';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {StoreItem} from './StoreItem';
import {Item, Items} from '../../data/types';
import {useEffect, useReducer, useState} from 'react';

export function StorePage(this: any) {
  const options = ['Category', 'Name', 'Price'];
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const defaultOption = options[0];
  const [items, setItems] = useState<Items | null>(null);
  const [sort, setSort] = useState('Category');

  useEffect(() => {
    console.log('API fetch');
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => setItems(json as Items));
  }, []);

  function compareBy(thing: string, a: Item, b: Item): number {
    if (thing === 'Category') {
      return a.category.localeCompare(b.category);
    } else if (thing === 'Name') {
      return a.title.localeCompare(b.title);
    } else if (thing === 'Price') {
      return a.price - b.price;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    console.log('sorted');
    const newItems = items;
    newItems?.sort((a: Item, b: Item) => {
      return compareBy(sort, a, b);
    });
    setItems(newItems);
    forceUpdate();
  }, [sort]);

  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-4 px-8 py-2">
        <span>Sort by</span>
        <Dropdown
          options={options}
          value={sort}
          onChange={(cur) => {
            setSort(cur.value);
          }}
          placeholder="Select an option"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-2 xl:grid-cols-3">
        {items &&
          items.map((item) => {
            return <StoreItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
