import {useEffect, useState} from 'react';
import {Item} from '../../data/types';

interface StoreItemProps {
  item: Item;
}

export function StoreItem({item}: StoreItemProps) {
  const [img, setImg] = useState('');

  const fetchImage = async () => {
    console.log('trying to fetch');
    const res = await fetch(item.image, {mode: 'cors'});
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="flex flex-col rounded-md bg-slate-50 p-8 shadow-sm md:flex-row">
      <div className="flex aspect-square min-h-60 w-60 items-center justify-center rounded-3xl bg-white">
        <img src={img} alt="" className="h-auto max-w-32" />
      </div>
      <div className="p-2">
        <div className="font-heading font-bold">{item.title}</div>
        <div className="">{item.price}$</div>
        <div className="">{item.category}</div>
      </div>
    </div>
  );
}
