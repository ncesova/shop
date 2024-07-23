import {useEffect, useState} from 'react';
import {CartItem, Item} from '../../data/types';
import {Link} from 'react-router-dom';
import {AddToCartButton} from '../common/AddToCartButton';

export function CheckoutItem({cartItem}: {cartItem: CartItem}) {
  const [img, setImg] = useState('../src/assets/images/loading.png');
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

  const fetchImage = async (url: string) => {
    const res = await fetch(url, {mode: 'cors'});
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  const fetchProduct = async (id: string) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => {
        setItem(json as Item);
        fetchImage((json as Item).image);
      });
  };

  useEffect(() => {
    fetchProduct(cartItem.id.toString());
  }, []);

  return (
    <div className="m-4 flex flex-col rounded-3xl bg-slate-100 p-4 md:flex-row">
      <Link to={'/store/' + cartItem.id}>
        <div className="flex h-full min-h-40 min-w-40 items-center justify-center rounded-3xl bg-white p-2">
          <img src={img} alt="" className="h-auto max-w-20" />
        </div>
      </Link>
      <div className="flex max-w-96 flex-col self-center p-2 md:w-full md:p-4">
        <div className="font-heading">{item.title}</div>
        <div className="font-body text-lg">{`${cartItem.price} * ${cartItem.quantity} = ${(cartItem.price * cartItem.quantity).toFixed(2)}$`}</div>
        <div className="h-20 md:py-8">
          <AddToCartButton item={item} />
        </div>
      </div>
    </div>
  );
}
