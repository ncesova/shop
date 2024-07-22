import {useParams} from 'react-router-dom';
import {useItems} from '../../App';
import {useEffect, useState} from 'react';
import {Item} from '../../data/types';

export function ItemPage() {
  const [item, setItem] = useState<Item>();
  const {itemId} = useParams();
  const [img, setImg] = useState('../src/assets/images/loading.png');

  const fetchImage = async (url: string) => {
    const res = await fetch(url, {mode: 'cors'});
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  const fetchProduct = async (id: string) => {
    fetch(`https://fakestoreapi.com/products/${itemId}`, {mode: 'cors'})
      .then((res) => res.json())
      .then((json) => {
        setItem(json as Item);
        fetchImage((json as Item).image);
      });
  };

  useEffect(() => {
    fetchProduct(itemId!);
  }, [itemId]);

  return (
    <div className="h-screen w-full">
      <img src={img} alt="" height="300px" width="300px" />
    </div>
  );
}
