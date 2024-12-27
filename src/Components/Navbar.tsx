import React, { SetStateAction } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;  // 
}

interface PropsType {
  setCartOpen: React.Dispatch<SetStateAction<boolean>>;
  cart: IProduct[];  // cart should be an array of IProduct
}

const Navbar = ({ cart, setCartOpen }: PropsType) => {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      {/* Top section of the navbar */}
      <div className="container mx-auto flex items-center justify-between gap-8 py-4">
        {/* Logo */}
        <div className="text-4xl font-semibold">Logo</div>

        {/* Cart and Heart Icons */}
        <div className="flex gap-4 text-2xl text-gray-500">
          <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
            <MdOutlineShoppingCart />
            {/* Cart item count */}
            <div className="bg-accent text-white text-sm rounded-full w-5 h-5 grid place-items-center absolute left-[12px] top-[-13px]">
              {cart.length > 0 ? cart.length : 0}  {/* Display 0 if cart is empty */}
            </div>
          </div>
          <div>
            <FaRegHeart />
          </div>
        </div>
      </div>

      {/* Search input for larger screens */}
      <div className="relative w-full hidden sm:block py-4">
        <input
          className="py-2 px-4 pr-12 outline-none border border-gray-300 rounded-full w-full focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="I'm shopping for..."
          aria-label="Search for products"
        />
        <button className="absolute right-0 top-0 bg-accent hover:bg-accentDark text-white text-md flex items-center gap-2 px-4 h-full rounded-full">
          <p>SEARCH</p>
          <IoSearch className="text-xl" />
        </button>
      </div>

      {/* Bottom section with navigation and support */}
      <div className="border-t border-b border-gray-300 lg:block hidden">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Navigation menu */}
          <div className="flex items-center gap-12">
            <button className="bg-accent text-white flex items-center gap-4 py-2 px-4 rounded-full">
              <CiMenuFries size={24} />
              <p>BROWSE CATEGORY</p>
            </button>
            <ul className="flex items-center gap-6">
              <li className="text-lg font-medium"><Link href={"/"}>HOME</Link></li>
              <li className="text-lg font-medium">ABOUT</li>
              <li className="text-lg font-medium"><Link href={"#shop"}>SHOP</Link></li>
              <li className="text-lg font-medium">VEGS</li>
              <li className="text-lg font-medium">ABOUT US</li>
            </ul>
          </div>

          {/* Support section */}
          <div className="flex items-center gap-4 text-gray-500">
            <BiSupport size={24} />
            <p className="text-sm">(0300-0000000)</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
