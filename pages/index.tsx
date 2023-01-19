import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import MainLandingPage from "../components/MainLandingPage";
import { Tab } from "@headlessui/react";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import Basket from "../components/Basket";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  const showProducts = (category: number) => {
    return products
      .filter((item) => item.category._ref === categories[category]._id)
      .map((item) => <Product product={item} key={item._id} />);
  };

  return (
    <div>
      <Head>
        <title>ts-nextjs-apple-store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Basket />
      <main className="relative h-[200vh]">
        <MainLandingPage />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl block font-bold tracking-wide text-white md:text-5xl">
            Our Products:
          </h1>
        </div>
        <Tab.Group>
          <Tab.List className="flex justify-center">
            {categories.map((category) => (
              <Tab
                key={category._id}
                id={category._id}
                className={({ selected }) =>
                  `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-semibold outline-none md:py-4 md:px-6 md:text-base ${
                    selected
                      ? "borderGradient bg-[#cc318f] text-white"
                      : "border-b-2 border-[#35383C] text-[#747474]"
                  }`
                }
              >
                {category.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
            <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
            <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  );
};

export default Home;

// backend code

export const getServerSideProps: GetServerSideProps<Props> = async (contex) => {
  const products = await fetchProducts();
  const categories = await fetchCategories();
  const session = await getSession(contex);

  return {
    props: {
      products,
      categories,
      session,
    },
  };
};
