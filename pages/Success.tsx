// import {
//     CheckIcon,
//     ChevronDownIcon,
//     ChevronUpIcon,
//     ShoppingCartIcon,
//   } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
//   import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";
//   import { fetchLineItems } from "../utils/fetchLineItems";
//   import { useSession } from "next-auth/react";

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <div>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </header>

      <main className="">
        <section className="order-2 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div className="relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex">
              <Image
                src="https://rb.gy/vsvv2o"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>

          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div>
              <p>Order #{session_id?.slice(-5)}</p>
              <h4>
                Thank you!
                {/* {session ? session_user?.name?.split('')[0]: 'Guest'} */}
              </h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Success;
