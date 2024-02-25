"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navigateToMenu = () => {
    router.push("/");
  };

  const handleAbout = () => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollTo(0, 700);
      }, 300);
    }
    scrollTo(0, 700);
    setShowNav(false);
  };

  return (
    <div
      className={`fixed z-50 flex justify-between 
         "bg-opacity-100" 
        top-0 w-full h-[5rem] md:h-[4rem] bg-blue-400 md:pr-4`}
    >
      {/* Container Menu Nav Mobile */}
      <div
        className={`absolute md:hidden duration-[0.5s] ${
          showNav ? "translate-x-0" : "translate-x-[1000px]"
        } transition-transform right-0 pt-3 w-[100vw] h-[100dvh] bg-blue-400`}
      >
        <div className="w-[100vw] h-[3.5rem] flex items-center justify-end">
          <svg
            className="text-white h-[1.6rem] w-[1.6rem] mr-8 cursor-pointer"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            onClick={() => setShowNav(false)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          {/* Menu Nav Mobile */}
          <div className="absolute w-[100vw] h-full bg-blue-400 text-slate-600 top-20 text-lg flex flex-col font-font1">
            <button
              onClick={() => setShowNav(false)}
              className="w-full py-8 indent-2 text-slate-200 text-5xl"
            >
              <Link className="grow" href="/">
                Menu
              </Link>
            </button>
            <button
              onClick={handleAbout}
              className="w-full py-8 indent-2 text-5xl text-slate-200"
            >
              About
            </button>
            <button
              onClick={() => setShowNav(false)}
              className="w-full py-8 indent-2 text-5xl text-zinc-700 bg-orange-300"
            >
              <Link className="grow" href="/menu">
                Foods and Drinks!!
              </Link>
            </button>
            <button
              onClick={() => setShowNav(false)}
              className="w-full py-8 indent-2 text-5xl text-slate-50 bg-blue-300"
            >
              <Link className="grow" href="/register">
                Sign Up
              </Link>
            </button>
            <button
              onClick={() => setShowNav(false)}
              className="w-full py-8 indent-2 text-5xl text-slate-50 bg-blue-300"
            >
              <Link className="grow" href="/login">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="w-12 h-12 my-auto ml-4 rounded-full grid place-items-center bg-white"
      ></Link>
      <div className="hidden h-full md:flex font-font1">
        <div className="h-full grid place-items-center text-3xl text-white hover:text-slate-800 hover:bg-slate-300 cursor-pointer px-3 ml-36">
          <Link href="/">Main</Link>
        </div>
        <div className="h-full grid place-items-center text-3xl text-white hover:scale-x-105 transition-all bg-amber-500 hover:bg-zinc-50 hover:text-orange-500 cursor-pointer px-3">
          <Link href="/menu">Donuts And Drinks!</Link>
        </div>
        <div className="h-full grid place-items-center text-3xl text-white hover:text-slate-800 hover:bg-slate-300 cursor-pointer px-3">
          <button onClick={handleAbout}>About</button>
        </div>
      </div>
      <div className="hidden h-full w-fit md:flex font-thin">
        <Link
          href="/register"
          className="w-[6rem] h-full grid place-items-center text-xl font-semibold text-white hover:bg-blue-500 cursor-pointer px-3"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="w-[6rem] h-full grid place-items-center text-xl font-semibold text-white hover:bg-blue-500 cursor-pointer px-3"
        >
          Login
        </Link>
      </div>
      <div className="h-16 w-16 my-auto mr-3 md:hidden grid place-items-center rounded-full bg-white">
        <svg
          className="text-zinc-800 h-[1.6rem] w-[1.6rem] cursor-pointer"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          onClick={() => setShowNav(true)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
