import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Button from "./Button";

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  const handleLogoutFunction = () => {
    toast.success("We hope to see you back here! Come on and join us!", {
      duration: 10000,
    });
    signOut();
  };

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
        <a className="headerLink">Contact</a>
      </div>

      <div className="flex items-center justify-center space-x-5 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[11px] text-[white]">
                {items.length}
              </span>
            )}
            <BriefcaseIcon className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={
                  session.user?.image ||
                  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                }
                alt=""
                className="rounded-full"
                width={34}
                height={34}
              />
            </div>
            <div className="flex mx-6 w-4 h-10 ">
              <Button title="Logout" onClick={handleLogoutFunction} />
            </div>
          </div>
        ) : (
          <UserIcon className="headerIcon" onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
};

export default Header;
