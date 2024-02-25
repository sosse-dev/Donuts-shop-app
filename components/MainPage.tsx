"use client";
import Link from "next/link";
import Form from "./Form";
import Image from "next/image";
import React from "react";

function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full h-fit py-12 bg-blue-300 grid place-items-center">
        <div className="w-[85%] xl:w-[75%] 2xl:w-[85%] 2xl:max-w-[120rem] h-fit py-8 flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-7">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div key={i}>
                <div className="w-full h-fit py-8 shadow-lg bg-purple-700 bg-opacity-40 rounded-lg mt-14 flex flex-col overflow-hidden">
                  <div
                    key={i}
                    className="h-[16rem] bg-blue-100 mb-5 grid place-items-center"
                  >
                    <Image
                      src="/no-image.png"
                      title="icon by icons8"
                      width={100}
                      height={100}
                      alt="no-image"
                      className="w-[30%] h-[30%] object-contain"
                    />
                  </div>
                  <h2 className="text-4xl pl-5 md:pl-3 text-white font-font1">
                    Information {i + 1}
                  </h2>
                  <p className="text-zinc-100 px-5 md:pl-3 md:pr-1">
                    tlam dictum felis eu pede mollis pretieger tincidunt. Cras
                    dapibus.
                  </p>
                </div>
                <p className="text-white text-sm px-4 flex flex-col items-center">
                  --
                  <span className="text-md py-1 px-3 bg-blue-500 bg-opacity-50 rounded-full">
                    {i}
                  </span>
                  --
                </p>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`relative box-border overflow-hidden flex flex-col pt-12 lg:items-center w-full h-fit bg-gradient-to-br lg:border-8 border-slate-200 from-purple-400 to-blue-500`}
      >
        <div className="w-fit h-24 m-auto flex items-center gap-x-4 text-5xl font-font1">
          <h1 className="text-white bg-blue-500 border-4 shadow-lg">
            Open The Menu, Click here =={">>"}
          </h1>
          <Link
            href="/menu"
            className="mx-auto px-4 py-3 bg-yellow-900 text-zinc-800 border-4 border-slate-100 font-font1 text-4xl rounded-lg lg:hover:px-10 lg:hover:text-3xl lg:hover:shadow-lg transition-all"
          >
            🍩🥛
          </Link>
        </div>
        {children}
        <Form />
      </div>
    </>
  );
}

export default MainPage;
