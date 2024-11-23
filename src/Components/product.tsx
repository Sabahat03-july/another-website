// Product.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from 'next/image'
import { IProduct } from './Navbar'; // Ensure IProduct is imported

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const Product = ({ id, name, price, image, cart, setCart }: ProductProps) => {
  const handleAddToCart = () => {
    const existingProduct = cart.find((product) => product.id === id);
    if (existingProduct) {
      // If the product is already in the cart, increment the quantity
      const updatedCart = cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      const newProduct: IProduct = { id, name, price, image, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <Image
          src={image}  // Dynamically set image source
          alt={name}
          width={300}
          height={300}
          className="object-cover rounded-md"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl">{name}</h2>
        <p>${price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
