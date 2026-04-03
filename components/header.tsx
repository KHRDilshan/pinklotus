'use client';

import Image from "next/image";
import Link from "next/link";
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 bg-white backdrop-blur-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
    <Link href="/" className="flex items-center">
      <Image
        src="/Logo.png" // replace with your logo path
        alt="Pink Lotus Luxury Hotel"
        width={70} // adjust width as needed
        height={50} // adjust height as needed
        className="object-contain"
      />
    </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link 
            href="#suites" 
            className="text-sm tracking-widest text-primary/80 hover:text-accent transition-colors"
          >
            SUITES
          </Link>
          <Link 
            href="#dining" 
            className="text-sm tracking-widest text-primary/80 hover:text-accent transition-colors"
          >
            DINING
          </Link>
          <Link 
            href="#experiences" 
            className="text-sm tracking-widest text-primary/80 hover:text-accent transition-colors"
          >
            EXPERIENCES
          </Link>
          <Link 
            href="#contact" 
            className="text-sm tracking-widest text-primary/80 hover:text-accent transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        {/* Book Button */}
        <div className="hidden md:block">
          <button className="px-8 py-3 bg-[#dd1155] text-white text-xs font-medium tracking-widest hover:bg-accent/90 transition-colors rounded-sm">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/5">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link 
              href="#suites" 
              className="text-sm tracking-widest text-primary/80"
            >
              SUITES
            </Link>
            <Link 
              href="#dining" 
              className="text-sm tracking-widest text-primary/80"
            >
              DINING
            </Link>
            <Link 
              href="#experiences" 
              className="text-sm tracking-widest text-primary/80"
            >
              EXPERIENCES
            </Link>
            <Link 
              href="#contact" 
              className="text-sm tracking-widest text-primary/80"
            >
              CONTACT
            </Link>
            <button className="w-full px-8 py-3 bg-accent text-white text-xs font-medium tracking-widest rounded-sm mt-4">
              BOOK NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
