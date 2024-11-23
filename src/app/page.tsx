"use client"
import Cart from '@/Components/Cart'
import FeaturesProduct from '@/Components/FeaturesProduct'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Navbar, { IProduct } from '@/Components/Navbar'
import Services from '@/Components/Services'
import React, { useState } from 'react'

const Home = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <main>
      {/* Navbar */}
      <Navbar cart={cart} setCartOpen={setCartOpen} />
      
      {/* Other Sections */}
      <Hero />
      <Services />
      <FeaturesProduct cart={cart} setCart={setCart} />
      <Footer />
      
      {/* Cart */}
      {cartOpen && <Cart cart={cart} setCart={setCart} setCartOpen={setCartOpen} />}
    </main>
  );
}

export default Home;
