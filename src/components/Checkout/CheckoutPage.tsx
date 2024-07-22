import {useItems} from '../../App';

export function CheckoutPage() {
  const {cart} = useItems();
  console.log(cart);
  return (
    <div className="flex w-full items-center justify-center">
      {cart?.map((item) => {
        console.log(item);
        return (
          <div key={item.id} className="">
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
