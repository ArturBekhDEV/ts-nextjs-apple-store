import React from "react";
import Spline from "@splinetool/react-spline";
import Button from "./Button";

const MainLandingPahe = () => {
  return (
    <section className=" sticky top-0 mx-auto h-screen max-w-[1350px] items-center justify-between px-8 lg:flex ">
      <div className="space-y-4">
        <h1 className="space-y-4 text-6xl font-bold lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered.
          </span>
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Innovations.
          </span>
          <span className="block">Changing world.</span>
          <div className="text-xl space-x-4">
            <Button title="Buy now" />
            <a className="link text-sm font-bold">Learn More</a>
          </div>
        </h1>
      </div>
      <div className="relative hidden transition-all duration-500 sm:inline lg:h-[650px] lg:w-[600px] content-center">
        <Spline scene="https://prod.spline.design/KKoTrCA0O4mcYlrG/scene.splinecode" />
      </div>
    </section>
  );
};

export default MainLandingPahe;
