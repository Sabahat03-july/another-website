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

    { id: 1, name: 'Orange', price: 15, image: '/orange.jpg', width: 300, height: 300 },
    { id: 2, name: 'Cauliflower', price: 15, image: '/clouflower.jpg', width: 300, height: 300  },
    { id: 3, name: 'Eggplant', price: 20, image: '/eggplant.jpg', width: 300, height: 300  },
    { id: 4, name: 'Orange', price: 15, image: '/carrorts.jpg' },
    { id: 5, name: 'Cauliflower', price: 15, image: '/berry.jpg', width: 300, height: 300  },
    { id: 6, name: 'Eggplant', price: 20, image: '/mango.png', width: 300, height: 300  },
    { id: 7, name: 'Orange', price: 15, image: '/pineapple.jpg' },
    { id: 8, name: 'Cauliflower', price: 15, image: '/clouflower.jpg', width: 300, height: 300  },
    { id: 9, name: 'Eggplant', price: 20, image: '/eggplant.jpg', width: 300, height: 300  },






    // Add more products here
  ];

  return (
    <div id='shop'>
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
    </div>

  );
};
export default FeaturesProduct;
