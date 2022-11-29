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
      <main>
        <MainLandingPage/>
      </main>
    </div>
  );
};

export default Home;
