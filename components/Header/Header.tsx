"use client";

import { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import Logo from "./Logo/Logo";
import { FaBars } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-5 fixed top-0 w-full z-50">
      <div className="container">
        <div className="header-background blur-sm"></div>
        <nav className="flex justify-between items-center relative">
          <span>
            <FaBars
              size={25}
              className="cursor-pointer"
              color="#fff"
              onClick={() => setIsOpen(true)}
            />
          </span>
          <Logo src="https://assets.website-files.com/632b356cbea6db8b490879b2/636e61a6e880a28a49265c86_Asset%203.svg" />
          <span className="flex gap-4">
            <Link href="/our-tequila" className="btn btn-primary">
              Shop Now
            </Link>
            <Button className="btn btn-secondary" type="button">
              <BsBag size={20} />
            </Button>
          </span>
        </nav>
      </div>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 px-4 bg-black bg-opacity-95 w-full h-screen text-white py-10 md:px-48 flex flex-col justify-between transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition duration-300 ease-in-out`}
        >
          <IoCloseSharp
            size={40}
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4"
          />
          <Link
            href="/"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/our-tequila"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            Our Tequila
          </Link>
          <Link
            href="/our-story"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/recipe-builder"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            Recipe Builder
          </Link>
          <Link
            href="/news"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            href="/events"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="inline-block my-8 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
