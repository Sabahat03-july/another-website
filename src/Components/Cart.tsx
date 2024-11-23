import React, { SetStateAction } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IProduct } from './Navbar'; // Assuming IProduct interface is imported from Navbar
import CartList from './CartList';

interface PropsType {
  setCartOpen: React.Dispatch<SetStateAction<boolean>>;
  cart: IProduct[];
  setCart: React.Dispatch<SetStateAction<IProduct[]>>; // Ensure setCart is passed properly
}

const Cart = ({ cart, setCartOpen, setCart }: PropsType) => {
  return (
    <div
      className={`fixed left-0 top-0 w-full min-h-screen bg-[#00000060] overflow-y-scroll transition-opacity duration-300 ease-in-out ${
        cart.length > 0 ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 999 }}
    >
      <div
        className={`max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 transition-transform duration-300 transform ${
          cart.length > 0 ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div
          className="text-3xl absolute right-0 top-0 m-6 cursor-pointer"
          onClick={() => setCartOpen(false)}
        >
          <IoMdClose />
        </div>

        <h2 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h2>

        <div className="mt-6 space-y-2">
          {/* Iterate over the cart items */}
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartList
                key={`cart-item-${item.id}`} // Ensure each item has a unique key
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                cart={cart}
                setCart={setCart}
              />
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
