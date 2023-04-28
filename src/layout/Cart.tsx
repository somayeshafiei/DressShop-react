import { ProductDetail } from '../Interfaces/Interfaces';
import { useState } from 'react';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import Checkout from './Checkout';
interface Props {
  cart: ProductDetail[];
}

export default function Cart({ cart }: Props) {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="w-full flex flex-col items-center gap-8 mb-5 xl:w-[70%]">
      <div className="border-b-2 border-gray-300 py-3 w-full text-center">
        <span>
          {cart.length > 0
            ? `You have ${cart.length} in the Cart`
            : 'Cart is empty'}
        </span>
      </div>
      <div className="flex flex-col items-start gap-8">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {cart.length > 0 ? (
        <div className="flex gap-28 pt-3 items-center">
          <span>
            Total: $
            {Math.floor(
              cart.reduce((total, item) => (total += item.totalPrice), 0)
            )}
          </span>
          <Button
            onClick={() => setCheckout(true)}
            text="Proceed"
            classes="bg-yellow-400 p-4 px-6 font-semibold"
          />
        </div>
      ) : (
        ''
      )}
      {checkout ? <Checkout /> : null}
    </div>
  );
}
