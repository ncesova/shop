import {useOutletContext} from 'react-router-dom';
import {useItems} from '../../App';

export function CheckoutPage() {
  const {cart, setCart} = useItems();
  console.log(cart);
  return (
    <div className="">
      Checkout:
      {cart.map((item) => {
        return (
          <div key={item.id} className="">
            {item.quantity}
          </div>
        );
      })}
    </div>
  );
}
