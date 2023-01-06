import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Header from "../components/Header";
import { selectBasketItems } from "../redux/basketSlice";
import CheckoutProducts from "./CheckoutProducts";
import Currency from "react-currency-formatter";
import { selectBasketTotal } from "../redux/basketSlice";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const router = useRouter();
  const [groupState, setGroupState] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((res, item) => {
      (res[item._id] = res[item._id] || []).push(item);
      return res;
    }, {} as { [key: string]: Product[] });
    setGroupState(groupedItems);
  }, [items]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#e0e5e7]">
      <Head>
        <title>Checkout Bag - Apple</title>
        <link rel="icon" href="/favicon.icon"></link>
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-bold lg:text-4xl">
            {items.length > 0 ? "Review your bag!" : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => {
                router.push("/");
              }}
            />
          )}
        </div>
        {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupState).map(([key, items]) => (
              <CheckoutProducts key={key} items={items} id={key} />
            ))}
            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal:</p>
                    <p>
                      <Currency quantity={basketTotal} currency="USD" />
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>Free!</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for:
                      <p className="flex cursor-pointer items-end text-blue-500 hover:text-blue-700">
                        Enter zip code.
                        <ChevronDownIcon className="h-6 w-6" />
                      </p>
                    </div>
                    <p>$</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 text-xl font-bold">
                  <h4>Total:</h4>
                  <h4>
                    <Currency quantity={basketTotal} />
                  </h4>
                </div>
              </div>

              <div className="my-14 space-y-4">
                <h4 className="text-xl font-bold">Let's go and checkout ?</h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="order-2 flex flex-1 flex-col items-center rounded-l bg-gray-300 p-8 py-12 text-center">
                    <h4 className="mb-4 flex flex-col text-xl font-bold">
                      <span>Pay Monthly</span>
                      <span>with Aplle Card</span>
                      <span>
                        $ 283.22/mo. at 0% APR. <sup className="-top-1"></sup>
                      </span>
                    </h4>
                    <Button title="Check Out Apple Card" />
                    <p className="mt-2 max-w-[240px] text-[13px]">
                      $ 0.00 due today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
