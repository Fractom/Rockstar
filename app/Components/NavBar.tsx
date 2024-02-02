"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-white " id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
          Dropdown
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-[30px] origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/rdr2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Red Dead Redemption 2</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">GTA 5</Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">GTA Online</Link>
          </div>
        </div>
      )}
    </div>
  );
};

function Navbar (){
  return(
  <nav className="bg-black h-[112px]">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex px-2 lg:px-0 xl:w-1/4 mt-[56px]">
          <div className="flex-shrink-0">
            <Image className='mr-20' src="/Logo.svg" alt="Logo" width={53} height={54} />
          </div>
          <div className="hidden lg:block lg:w-80">
            <div className="flex items-baseline">
              <Dropdown />
              <Link href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">Home</Link>
              <Link href="/news" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700">News</Link>
            </div>
          </div>
        </div>
        <div className="flex px-2 lg:px-0 xl:w-1/4 mt-[56px] justify-end">
          <button className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded">
            Orange button
          </button>
        </div>
      </div>
    </div>
  </nav>
)};

export default Navbar;
