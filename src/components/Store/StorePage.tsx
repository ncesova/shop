import Select from 'react-select';
import {StoreItem} from './StoreItem';
import {Item, Items} from '../../data/types';
import {useEffect, useMemo, useState} from 'react';
import {motion} from 'framer-motion';
import {routeVariants} from '../../App';

type Option = {
  value: string;
  label: string;
};

export function StorePage(this: any) {
  const [items, setItems] = useState<Items>([]);
  const [selectedOption, setSelectedOption] = useState<Option>({
    value: 'category',
    label: 'Category',
  });

  function fetchItems() {
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => setItems(json as Items));
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const sortedItems = useMemo(() => {
    let result = items;

    if (selectedOption.value === 'category') {
      result = [...items].sort((a: Item, b: Item) => {
        return b.category.localeCompare(a.category);
      });
    } else if (selectedOption.value === 'title') {
      result = [...items].sort((a: Item, b: Item) => {
        return a.title.localeCompare(b.title);
      });
    } else if (selectedOption.value === 'priceLow') {
      result = [...items].sort((a: Item, b: Item) => {
        return a.price - b.price;
      });
    } else if (selectedOption.value === 'priceHigh') {
      result = [...items].sort((a: Item, b: Item) => {
        return b.price - a.price;
      });
    }
    return result;
  }, [items, selectedOption]);

  useEffect(() => {
    fetchItems();
  }, []);

  const options = [
    {value: 'category', label: 'Category'},
    {value: 'title', label: 'Name'},
    {value: 'priceLow', label: 'Price ⬇️'},
    {value: 'priceHigh', label: 'Price ⬆️'},
  ];

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="initial"
      transition={{type: 'tween'}}
      className="StorePage">
      <div className="flex w-full items-center gap-4 px-8 py-2">
        <span>Sort by</span>
        <Select
          defaultValue={selectedOption}
          onChange={(item) => setSelectedOption(item as Option)}
          options={options}
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
            colors: {
              ...theme.colors,
              primary25: '#f1f5f9',
              primary: '#94a3b8',
            },
          })}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-2 xl:grid-cols-3">
        {sortedItems.map((item) => {
          return <StoreItem key={item.id} item={item} />;
        })}
      </div>
    </motion.div>
  );
}
