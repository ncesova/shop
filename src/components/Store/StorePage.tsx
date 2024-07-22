import {useItems} from '../../App';
import {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {StoreItem} from './StoreItem';
import {Item} from '../../data/types';

export function StorePage(this: any) {
  const {items} = useItems();
  const [workItems, setWorkItems] = useState(items);
  const options = ['Category', 'Name', 'Price'];
  const defaultOption = options[0];
  function sortBy(thing: string) {
    if (thing === 'Category') {
      const newArray = workItems?.sort((a: Item, b: Item) => {
        return a.category.localeCompare(b.category);
      });
      setWorkItems(newArray!);
    } else if (thing === 'Name') {
      const newArray = workItems?.sort((a: Item, b: Item) => {
        return a.title.localeCompare(b.title);
      });
      setWorkItems(newArray!);
    }
  }
  return (
    <div className="w-full">
      <div className="flex">
        <span>Sort by</span>
        <Dropdown
          options={options}
          value={defaultOption}
          onChange={(cur) => {
            sortBy(cur.value);
          }}
          placeholder="Select an option"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
        {items &&
          items.map((item) => {
            return <StoreItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
