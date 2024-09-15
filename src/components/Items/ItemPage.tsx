import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Item} from '../../data/types';
import {AddToCartButton} from '../common/AddToCartButton';
import imgSrc from '/public/loading.png';
import {routeVariants} from '../../App';
import {motion} from 'framer-motion';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';

export function ItemPage() {
  const [item, setItem] = useState<Item>({
    id: 0,
    title: 'Loading... ',
    price: 99.99,
    description: 'Loading... Loading... Loading... Loading... ',
    category: 'Loading...',
    image: imgSrc,
    rating: {
      rate: 0.0,
      count: 999,
    },
  });
  const {itemId} = useParams();
  const [img, setImg] = useState(imgSrc);

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
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="initial"
      transition={{type: 'tween'}}
      className="h-full w-full p-6 md:p-12">
      <div className="flex px-1 pb-2">
        <Link to="/store">
          <ArrowLeftIcon className="h-10 w-10" />
        </Link>
      </div>
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
    </motion.div>
  );
}
