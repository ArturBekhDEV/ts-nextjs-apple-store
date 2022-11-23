import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#eaeef0] p-5">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-10 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">About</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
        <a className="headerLink">Contact us</a>
      </div>

      {/* <div className="flex md:w-1/5">hello</div> */}
    </header>
  );
};

export default Header;
