import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Item} from '../../data/types';
import {AddToCartButton} from '../common/AddToCartButton';

export function ItemPage() {
  const [item, setItem] = useState<Item>({
    id: 0,
    title: 'Loading... ',
    price: 99.99,
    description: 'Loading... Loading... Loading... Loading... ',
    category: 'Loading...',
    image: '../src/assets/images/loading.png',
    rating: {
      rate: 0.0,
      count: 999,
    },
  });
  const {itemId} = useParams();
  const [img, setImg] = useState('../src/assets/images/loading.png');

  const fetchImage = async (url: string) => {
    const res = await fetch(url, {mode: 'cors'});
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  const fetchProduct = async () => {
    fetch(`https://fakestoreapi.com/products/${itemId}`, {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => {
        setItem(json as Item);
        fetchImage((json as Item).image);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, [itemId]);

  return (
    <div className="h-full w-full p-6 md:p-12">
      <div className="relative flex flex-col rounded bg-slate-100 p-3 pb-4 md:flex-row md:p-4">
        <div className="flex aspect-square h-full min-h-80 min-w-60 items-center justify-center rounded-3xl bg-white p-2">
          <img src={img} alt="" className="h-auto max-h-80 max-w-[80%]" />
        </div>
        <div className="flex max-w-prose flex-col md:p-4">
          <span className="p-1 font-heading text-base font-bold md:text-xl">
            {item?.title}
          </span>
          <span className="p-1 font-heading text-base font-semibold text-gray-500 md:text-lg">
            {item?.description}
          </span>
          <div className="font-body text-lg">Price: {item.price}$</div>

          <div className="mb-2 font-body text-sm">
            Rating: {item.rating.rate}/5
          </div>
          <div className="h-2xl w-full self-center md:w-[350px]">
            <AddToCartButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
