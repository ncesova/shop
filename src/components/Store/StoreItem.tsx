import {useEffect, useState} from 'react';
import {Item} from '../../data/types';
import {Link} from 'react-router-dom';
import {AddToCartButton} from '../common/AddToCartButton';
interface StoreItemProps {
  item: Item;
}

export function StoreItem({item}: StoreItemProps) {
  const [img, setImg] = useState('../src/assets/images/loading.png');

  const fetchImage = async () => {
    console.log('trying to fetch image');
    const res = await fetch(item.image, {mode: 'cors'});
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="flex flex-col rounded-md bg-slate-50 p-4 shadow-sm md:flex-row">
      <Link to={'/store/' + item.id}>
        <div className="flex h-full min-h-40 min-w-40 items-center justify-center rounded-3xl bg-white p-2">
          <img src={img} alt="" className="h-auto max-w-20" />
        </div>
      </Link>
      <div className="relative flex w-full flex-col p-2 pb-14">
        <div className="flex-1 font-heading text-base font-bold">
          {item.title}
        </div>
        <div className="font-body">{item.price}$</div>
        <div className="font-body font-light text-gray-500">
          {item.category}
        </div>
        <AddToCartButton item={item} />
      </div>
    </div>
  );
}
