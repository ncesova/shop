import {useOutletContext} from 'react-router-dom';
import {Items} from '../../data/types';
import {useItems} from '../../App';
import {StoreItem} from './StoreItem';

export function StorePage() {
  const {items} = useItems();
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-8 md:grid-cols-2">
      {items &&
        items.map((item) => {
          return <StoreItem key={item.id} item={item} />;
        })}
    </div>
  );
}
