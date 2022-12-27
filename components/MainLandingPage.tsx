import React, { useState, useEffect, use } from "react";
import Spline from "@splinetool/react-spline";
import Button from "./Button";
import Image from "next/image";

const MainLandingPahe = () => {
  const [object, setObject] = useState(true);

  if (typeof window !== "undefined") {
    const w = window.innerWidth;
    useEffect(() => {
      if (w < 770) {
        setObject(false);
      }
    }, [w]);
  }

  return (
    <section className="sticky top-0 mx-auto h-screen max-w-[1350px] items-center justify-between px-8 lg:flex text-center lg:text-left">
      <div className="space-y-12">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            By Innovation
          </span>
          <span className="block font-bold">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      {object ? (
        <div className="relative hidden transition-all duration-500 md:block ">
          <Spline
            className="mx-auto"
            scene="https://prod.spline.design/KKoTrCA0O4mcYlrG/scene.splinecode"
          />
        </div>
      ) : (
        <div className="mx-auto relative h-[500px] w-[300px] transition-all duration-500">
          <Image src="/weird-250.gif" layout="fill" objectFit="contain" />
        </div>
      )}
    </section>
  );
};

export default MainLandingPahe;
