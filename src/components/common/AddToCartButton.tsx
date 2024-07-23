import {useItems} from '../../App';
import {CartItem, Item} from '../../data/types';

export function AddToCartButton({item}: {item: Item}) {
  const {cart, setCart} = useItems();

  function isNotAdded() {
    return cart.filter((thing) => thing.id === item.id).length === 0;
  }

  function addQuantity() {
    const indexOfItem = cart.findIndex((thing) => {
      return thing.id === item.id;
    });
    const newCart = [...cart];
    newCart[indexOfItem] = {
      id: item.id,
      quantity: newCart[indexOfItem].quantity + 1,
      price: item.price,
    };
    setCart(newCart);
  }

  function subtractQuantity() {
    const indexOfItem = cart.findIndex((thing) => {
      return thing.id === item.id;
    });
    const newCart = [...cart];
    if (newCart[indexOfItem].quantity - 1 != 0) {
      newCart[indexOfItem] = {
        id: item.id,
        quantity: newCart[indexOfItem].quantity - 1,
        price: item.price,
      };
    } else {
      newCart.splice(indexOfItem, 1);
    }

    setCart(newCart);
  }

  function getQuantity() {
    const indexOfItem = cart.findIndex((thing) => {
      return thing.id === item.id;
    });
    return cart[indexOfItem].quantity;
  }

  return (
    <>
      {isNotAdded() ? (
        <button
          className="h-full min-h-10 w-full rounded-md bg-slate-200 p-2 font-body"
          onClick={() => {
            if (isNotAdded()) {
              const newCart = [...cart];
              newCart.push({
                id: item.id,
                quantity: 1,
                price: item.price,
              } as CartItem);
              setCart(newCart);
            } else {
              addQuantity;
            }
          }}>
          Buy
        </button>
      ) : (
        <div className="grid h-full min-h-10 w-full grid-cols-3 items-center rounded-md bg-slate-200 font-body">
          <button className="font-body text-lg" onClick={addQuantity}>
            +
          </button>
          <div className="flex items-center justify-center text-lg">
            {getQuantity()}
          </div>
          <button className="font-body text-lg" onClick={subtractQuantity}>
            -
          </button>
        </div>
      )}
    </>
  );
}
