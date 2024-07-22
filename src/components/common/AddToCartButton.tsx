import {useOutletContext} from 'react-router-dom';
import {useItems} from '../../App';
import {Item, Items} from '../../data/types';

export function AddToCartButton({item}: {item: Item}) {
  const {cart, setCart} = useItems();
  return (
    <button
      className="absolute bottom-0 w-full rounded-md bg-slate-200 p-2 font-body"
      onClick={() => {
        console.log('Button with Item: ', item.title);
        let newCart: Items | null = null;
        if (!cart) {
          newCart = Array<Item>(item);
        } else {
          newCart = cart;
          newCart.push(item);
        }
        setCart(newCart);
      }}>
      Buy
    </button>
  );
}
