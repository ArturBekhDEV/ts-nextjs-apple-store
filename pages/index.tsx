import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainLandingPage from "../components/MainLandingPage";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ts-nextjs-apple-store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh]">
        <MainLandingPage />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <h1 className="text-center text-4xl font-bold tracking-wide text-white md:text-5xl">
          Hello
        </h1>
      </section>
    </div>
  );
};

export default Home;
