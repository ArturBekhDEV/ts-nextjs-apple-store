import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Header from "../components/Header";
import Product from "../components/Product";
import { selectBasketItems } from "../redux/basketSlice";

const Checkout = () => {
  const items = useSelector(selectBasketItems);
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
    <div>
      <Head>
        <title>Checkout Bag - Apple</title>
        <link rel="icon" href="/favicon.icon"></link>
      </Head>
      <Header />
      <main>
        <div>
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
          <div>
            {Object.entries(groupState).map(([key, item]) => (
            //   <CheckoutProduct />;
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
