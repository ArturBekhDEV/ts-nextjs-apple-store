import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";
import { fetchLineItems } from "../utils/fetchLineItems";
//   import { fetchLineItems } from "../utils/fetchLineItems";
//   import { useSession } from "next-auth/react";

interface Props {
  products: StripeProduct[];
}

const Success = ({ products }: Props) => {
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width:1024px" });
  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

  const handleShow = () => {
    setShowOrderSummary(!showOrderSummary);
  };

  const subtotal = products.reduce((acc, item) => {
    return acc + item.price.unit_amount / 100;
  }, 0);

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

          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}
              </p>
              <h4 className="text-lg">
                Thank you!
                {/* {session ? session_user?.name?.split('')[0]: 'Guest'} */}
              </h4>
            </div>
          </div>

          <div className="mx-4 divide-y divide-gray-300 rounded-sm border-grey-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your order is confirmed</p>
              <p className="text-sm text-grey-700">
                {" "}
                We???ve accepted your order, and we???re getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-grey-600">
                Other tracking number:
              </p>
              <p>CBDE832842</p>
            </div>
          </div>

          <div className="my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14">
            <p>Order updates</p>
            <p className="text-sm text-gray-600">
              You???ll get shipping and delivery updates by email and text.
            </p>
          </div>
          <div>
            <p className="hidden lg:inline">Need Help? Contact us</p>
            {mounted && (
              <Button
                title="Continue Shopping"
                onClick={() => router.push("/")}
                width={isTabletOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </div>
        </section>

        {mounted && (
          <section>
            <div
              className={`w-full ${
                showOrderSummaryCondition && "border-b"
              } border-gray-300 text-sm lg:hidden`}
            >
              <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                <button
                  onClick={() => handleShow}
                  className="flex items-center space-x-2"
                >
                  <ShoppingCartIcon className="h-6 w-" />
                  <p>Show order summary</p>
                  {showOrderSummaryCondition ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 " />
                  )}
                </button>

                <p className="text-xl font-medium text-black">
                  <Currency quantity={subtotal + 20} />
                </p>
              </div>
            </div>

            {showOrderSummaryCondition && (
              <div>
                <div>
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 text-sm font-medium"
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-sm border border-gray-300 bg-[#F1F1F1] text-xs text-white">
                        <div className="relative h-7 w-7 animate-bounce rounded-md">
                          <Image
                            src="https://rb.gy/vsvv2o"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[gray] text-xs">
                          {item.quantity}
                        </div>
                      </div>
                      <p className="flex-1">{item.description}</p>
                      <p>
                        <Currency
                          quantity={item.price.unit_amount / 100}
                          currency={item.currency}
                        />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Success;
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);
  return {
    props: {
      products,
    },
  };
};
