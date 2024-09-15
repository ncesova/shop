import {motion} from 'framer-motion';
import {routeVariants, useItems} from '../../App';
import {CheckoutItem} from './CheckoutItem';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';

export function CheckoutPage() {
  const {cart} = useItems();
  console.log(cart);
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="initial"
      transition={{type: 'tween'}}
      className="flex flex-col">
      <div className="flex px-4 pt-2">
        <Link to="/store">
          <ArrowLeftIcon className="h-10 w-10" />
        </Link>
      </div>
      <div className="m-4 flex flex-row items-center justify-around rounded-lg bg-slate-200 p-2 font-body text-lg font-semibold md:p-4">
        <span>TOTAL: {total}$</span>
        <button
          className="rounded-sm bg-green-500 px-12 py-2 text-white"
          onClick={() => alert('You bought something✨✨✨')}>
          PAY
        </button>
      </div>
      {cart.map((item) => {
        return (
          <div key={item.id} className="">
            <CheckoutItem cartItem={item} />
          </div>
        );
      })}
    </motion.div>
  );
}
