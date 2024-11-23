// FeaturesProduct.tsx
import React from 'react';
import { IProduct } from './Navbar'; // Ensure IProduct is imported
import Product from './product';

interface FeaturesProductProps {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const FeaturesProduct = ({ cart, setCart }: FeaturesProductProps) => {
  const products = [
    { id: 1, name: 'Orange', price: 15, image: '/orange.jpg' },
    { id: 2, name: 'Cauliflower', price: 15, image: '/clouflower.jpg' },
    { id: 3, name: 'Eggplant', price: 20, image: '/eggplant.jpg' },
    // Add more products here
  ];

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesProduct;
