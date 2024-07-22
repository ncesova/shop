import {useItems} from '../../App';
import Select from 'react-select';
import {StoreItem} from './StoreItem';
import {Item, Items} from '../../data/types';
import {useEffect, useReducer, useState} from 'react';

type Option = {
  value: string;
  label: string;
};

export function StorePage(this: any) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [items, setItems] = useState<Items | null>(null);

  const [selectedOption, setSelectedOption] = useState<Option>({
    value: 'category',
    label: 'Category',
  });

  useEffect(() => {
    console.log('API fetch');
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => setItems(json as Items));
  }, []);

  function compareBy(thing: string, a: Item, b: Item): number {
    if (thing === 'category') {
      return b.category.localeCompare(a.category);
    } else if (thing === 'title') {
      return a.title.localeCompare(b.title);
    } else if (thing === 'price') {
      return a.price - b.price;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    console.log('sorted');
    const newItems = items;
    newItems?.sort((a: Item, b: Item) => {
      return compareBy(selectedOption.value, a, b);
    });
    setItems(newItems);
    forceUpdate();
  }, [selectedOption]);

  const options = [
    {value: 'category', label: 'Category'},
    {value: 'title', label: 'Name'},
    {value: 'price', label: 'Price'},
  ];

  return (
    <div className="">
      <div className="flex w-full items-center gap-4 px-8 py-2">
        <span>Sort by</span>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
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
