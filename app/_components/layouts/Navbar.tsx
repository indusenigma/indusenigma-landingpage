'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={"/images/indusEnigmaLogo.png"} alt='logo' className='w-9 h-9 object-contain logo' />
          <p className='sm:block text-white text-[18px] font-bold cursor-pointer flex '>
          INDUS ENIGMA
          </p>
        </Link>

        <div className='sm:flex gap-5'>
          <div
              className={`top2 ${"text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer`}
            >
              Development
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar