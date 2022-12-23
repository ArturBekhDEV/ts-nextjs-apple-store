import React from "react";
import Spline from "@splinetool/react-spline";
import Button from "./Button";

const MainLandingPahe = () => {
  return (
    <section className="sticky top-0 mx-auto h-screen max-w-[1350px] items-center justify-between px-8 lg:flex text-center  lg:text-left">
      <div className="space-y-8">
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

      <div className="relative hidden transition-all duration-500 sm:block ">
        <Spline
          className="mx-auto"
          scene="https://prod.spline.design/KKoTrCA0O4mcYlrG/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default MainLandingPahe;
