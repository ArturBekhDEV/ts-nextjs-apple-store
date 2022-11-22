import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ts-nextjs-apple-store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello world!</h1>
    </div>
  );
};

export default Home;
