import React from "react";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <div
      className="relative pt-40 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "50vh",
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover shadow-md"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="">
              <h1 className="text-white font-semibold text-5xl">
                Get the job done right
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Mull solutions is a dynamic engineering firm that specializes in
                analyzing data, advanced telemetrics, and meeting deadlines
                ahead of schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-500 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
}
