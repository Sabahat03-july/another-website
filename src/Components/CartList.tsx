import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { IProduct } from './Navbar';
import { SetStateAction } from 'react';
import Image from 'next/image';

interface PropsType {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  cart: IProduct[];
  setCart: React.Dispatch<SetStateAction<IProduct[]>>;
}

const CartList = ({ id, image, name, price, quantity, cart, setCart }: PropsType) => {

  const removeFromCart = () => {
    // Remove the item from the cart by filtering out the item with the matching `id`
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);  // Update the cart state with the new filtered list
  };

  return (
    <div className="flex justify-between items-center py-4 border-b">
      {/* Product Information */}
      <div className="flex items-center gap-4">
        <Image src={image} alt={name} className="h-[80px] w-[80px] object-cover rounded-md" />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <div className="text-2xl cursor-pointer" onClick={removeFromCart}>
        <IoMdClose />
      </div>
    </div>
  );
};

export default CartList;
