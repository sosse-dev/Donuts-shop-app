"use client";
import { useState } from "react";
import CartPage from "@/components/CartPage";

function AllMenu() {
  const [donutInCart, setDonutInCart] = useState<
    { title: string; price: number }[]
  >([
    {
      title: "",
      price: 0,
    },
  ]);
  const handleAddCart = (title: string, price: number) => {
    setDonutInCart([
      ...donutInCart,
      {
        title,
        price,
      },
    ]);
  };

  const handleDelete = (id: number) => {
    let copyCart: any[] = donutInCart;
    const newCC = copyCart.filter((_, i) => i !== id);
    setDonutInCart(newCC);
  };

  return (
    <div className="relative right-0 left-0 mx-auto min-w-[20rem] w-full xl:max-w-[100rem] h-screen z-40 min-h-fit overflow-x-auto lg:overflow-x-hidden">
      <CartPage
        handleDelete={handleDelete}
        dataDonut={donutInCart}
        styleBtn="fixed hidden lg:block right-10 top-24 w-20 h-20 border-4 border-zinc-800 bg-white rounded-full z-40"
      />
      <div className="absolute top-0 z-30 hidden lg:block w-full h-full">
        <div className="grid min-h-[85rem] place-items-center bg-gradient-to-br from-purple-400 to-blue-700 overflow-x-hidden">
          <div className="grid grid-cols-2  place-items-center mt-5 w-full py-14 h-fit pl-4 gap-x-0">
            <div className="min-h-[70rem]w-[35rem] z-20 opacity-90 flex flex-col justify-center items-end">
              <h1 className="text-[5rem] h-fit bg-slate-200 px-4 py-1 font-font1">
                Menu Time
              </h1>
              <h2 className="text-[3.2rem] font-font1 mt-2">
                <span className="text-orange-200">Donuts</span> Here..
              </h2>
              <div className="mt-1 text-[2.6rem] space-y-2 font-font1">
                <h2 className="text-[4rem] text-slate-200 w-full py-1 px-48 bg-slate-700 font-font1">
                  Demo
                </h2>
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <p key={i} className="text-end">
                      🍩Donut {i + 1}{" "}
                      <span className="text-blue-100 ml-10">
                        {(i + 1) * 1000}
                      </span>{" "}
                      <button
                        onClick={() =>
                          handleAddCart("Donut " + (i + 1), (i + 1) * 1000)
                        }
                        className="px-4 py-2 z-30 hover:bg-orange-950 hover:text-slate-200 hover:rounded-none transition-all text-[1.4rem] ml-4 bg-orange-200 rounded-lg font-bold"
                      >
                        Order
                      </button>
                    </p>
                  ))}
              </div>
              <div className="mt-8 text-[2.6rem] space-y-2 font-font1">
                <h2 className="text-[4rem] text-slate-200 w-full py-1 px-8 bg-slate-700 font-font1">
                  Demo
                </h2>
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <p key={i}>
                      🍩Donut {i + 5}{" "}
                      <span className="text-blue-100 ml-10">
                        {(i + 1) * 5000}
                      </span>{" "}
                      <button
                        onClick={() =>
                          handleAddCart("Donut " + (i + 5), (i + 1) * 5000)
                        }
                        className="px-10 py-2 hover:bg-orange-950 hover:text-slate-200 hover:rounded-none transition-all text-[1.8rem] ml-4 bg-orange-200 rounded-lg font-bold"
                      >
                        Order
                      </button>
                    </p>
                  ))}
              </div>
              <div className="mt-8 text-[2.6rem] space-y-2 font-font1">
                <h2 className="text-[4rem] text-slate-200 w-full py-1 px-40 bg-slate-700 font-font1">
                  Demo
                </h2>
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <p key={i} className="text-end text-slate-300">
                      🍩Donut {i + 10}{" "}
                      <span className="text-blue-100 ml-10">
                        {(i + 1) * 2000}
                      </span>{" "}
                      <button
                        onClick={() =>
                          handleAddCart("Donut " + (i + 9), (i + 1) * 2000)
                        }
                        className="px-4 py-2 text-slate-700 hover:bg-orange-950 hover:text-slate-200 hover:rounded-none transition-all text-[1.4rem] ml-4 bg-orange-200 rounded-lg font-bold"
                      >
                        Order
                      </button>
                    </p>
                  ))}
              </div>
            </div>
            {/* Drink below here */}
            <div className="min-h-[70rem] w-[30rem] z-20 opacity-90">
              <div className="min-h-[70rem] w-[35rem] ml-4 flex flex-col justify-start items-start">
                <h2 className="text-[2.6rem] font-font1">
                  <span className="text-blue-100">Need Drinks? </span>
                  <span className="px-1 ml-2 bg-slate-700 text-slate-200">
                    below here...
                  </span>
                </h2>
                <div className="mt-2 text-[2.2rem] font-font1 space-y-1">
                  <h2 className="text-[3.4rem] w-full py-1 px-56 bg-slate-300 font-font1">
                    Demo
                  </h2>
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <p key={i} className=" text-slate-200">
                        🥛Drink {i + 1}{" "}
                        <span className="text-slate-100 ml-6">
                          {(i + 1) * 1000}
                        </span>{" "}
                        <button
                          onClick={() =>
                            handleAddCart("Drink " + (i + 1), (i + 1) * 1000)
                          }
                          className="px-4 py-2 text-slate-700 hover:bg-blue-950 hover:text-slate-200 hover:rounded-none transition-all bg-orange-200 ml-3 rounded-lg text-[1.4rem] font-bold"
                        >
                          Order
                        </button>
                      </p>
                    ))}
                </div>
                <div className="mt-8 text-[2.2rem] font-font1 space-y-1">
                  <h2 className="text-[3.4rem] w-full py-1 px-36 bg-slate-300 font-font1">
                    Demo
                  </h2>
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <p key={i} className="text-slate-100">
                        🥛Drink {i + 5}{" "}
                        <span className="text-slate-100 ml-5">
                          {(i + 1) * 2000}
                        </span>
                        <button
                          onClick={() =>
                            handleAddCart("Drink " + (i + 5), (i + 1) * 2000)
                          }
                          className="px-4 py-2 hover:bg-blue-950 text-slate-700 hover:text-slate-200 hover:rounded-none transition-all bg-orange-200 ml-3 rounded-lg text-[1.4rem] font-bold"
                        >
                          Order
                        </button>
                      </p>
                    ))}
                </div>
                <div className="mt-8 text-[2.2rem] font-font1 space-y-1">
                  <h2 className="text-[3.4rem] w-full py-1 px-24 bg-slate-300 font-font1">
                    Demo
                  </h2>
                  {Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <p key={i} className="text-slate-100">
                        🥛Drink {i + 9}{" "}
                        <span className="text-slate-100 ml-6">
                          {(i + 1) * 2100}
                        </span>{" "}
                        <button
                          onClick={() =>
                            handleAddCart("Drink " + (i + 9), (i + 1) * 2100)
                          }
                          className="px-4 py-2 text-slate-700 hover:bg-blue-950 hover:text-slate-200 hover:rounded-none transition-all bg-orange-200 ml-3 rounded-lg text-[1.4rem] font-bold"
                        >
                          Order
                        </button>
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[250rem] pb-12 lg:hidden w-full bg-gradient-to-b from-purple-400 to-blue-400 overflow-hidden">
        <div className="w-full h-[50%] pt-32 sm:pl-40 flex flex-col space-y-14">
          <CartPage
            handleDelete={handleDelete}
            dataDonut={donutInCart}
            styleBtn="fixed bottom-8 right-5 w-20 h-20 border-4 border-zinc-800 bg-white rounded-full z-40"
          />
          <div className="relative flex flex-col">
            <h1 className="-top-0 text-[2.1rem] font-font1">
              <span className="text-[7rem] text-red-100">Menu</span> .. 🍩Donut
              first...
            </h1>
            <h2 className="text-[9rem] bg-opacity-60 bg-white font-font1">
              Demo
            </h2>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="mt-0 text-[3rem] font-font1 flex items-center"
                >
                  <button
                    onClick={() =>
                      handleAddCart("Donut " + (i + 1), (i + 1) * 1000)
                    }
                    className="p-3 mr-2 text-3xl rounded-lg bg-blue-400 font-bold"
                  >
                    Order
                  </button>
                  Donut {i + 1} ... {(i + 1) * 1000}
                </p>
              ))}
          </div>
          <div className="flex flex-col">
            <h2 className="text-[8rem] bg-opacity-90 bg-white font-font1">
              Demo
            </h2>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="mt-2 text-[2.6rem] font-font1 flex items-center"
                >
                  <button
                    onClick={() =>
                      handleAddCart("Donut " + (i + 5), (i + 1) * 5000)
                    }
                    className="p-3 mr-2 text-3xl rounded-lg bg-blue-400 font-bold"
                  >
                    Order
                  </button>
                  Donut {i + 5} ... {(i + 1) * 5000}
                </p>
              ))}
          </div>
          <div className="flex flex-col">
            <h2 className="text-[6rem] text-slate-200 bg-opacity-50 bg-blue-900 font-font1">
              Demo
            </h2>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="mt-0 text-[3rem] font-font1 flex items-center"
                >
                  <button
                    onClick={() =>
                      handleAddCart("Donut " + (i + 9), (i + 1) * 2000)
                    }
                    className="p-3 mr-2 text-3xl rounded-lg bg-blue-400 font-bold"
                  >
                    Order
                  </button>
                  Donut {i + 9} ... {(i + 1) * 2000}
                </p>
              ))}
          </div>
        </div>
        {/* 🥛Drink Menu */}
        <div className="w-full h-[100%] pt-24 sm:pl-40 flex flex-col space-y-10 ">
          <div className="flex flex-col">
            <h1 className="-top-0 text-[2.1rem] sm:-ml-24 text-red-100 font-font1">
              <span className="text-[4rem] text-blue-100">🥛Drink? ..</span>
              please, take a look..
            </h1>
            <h2 className="text-[8rem] sm:-ml-40 bg-opacity-90 bg-white font-font1">
              Demo
            </h2>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="mt-2 sm:-ml-24 text-[3.5rem] font-font1 flex items-center"
                >
                  <button
                    onClick={() =>
                      handleAddCart("Drink " + (i + 1), (i + 1) * 1000)
                    }
                    className="p-3 mr-2 text-3xl rounded-lg bg-orange-200 bg-opacity-80 font-bold"
                  >
                    Order
                  </button>
                  Drink {i + 1} ... {(i + 1) * 1000}
                </p>
              ))}
          </div>

          <div className="flex flex-col">
            <h2 className="text-[9rem] bg-opacity-60 bg-white font-font1">
              Demo
            </h2>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="mt-0  text-[3rem] font-font1 flex items-center "
                >
                  <button
                    onClick={() =>
                      handleAddCart("Drink " + (i + 5), (i + 1) * 2000)
                    }
                    className="p-3 mr-2 text-3xl rounded-lg bg-orange-200 bg-opacity-80 font-bold"
                  >
                    Order
                  </button>
                  Drink {i + 5} ... {(i + 1) * 2000}
                </p>
              ))}
          </div>
          <div className="flex flex-col">
            <h2 className="text-[8rem] bg-opacity-90 bg-white font-font1">
              Demo
            </h2>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="mt-2 sm:-ml-24 text-[3.5rem] font-font1 flex items-center"
                >
                  <button
                    onClick={() =>
                      handleAddCart("Drink " + (i + 9), (i + 1) * 2100)
                    }
                    className="p-3 mr-2 text-3xl rounded-lg bg-orange-200 bg-opacity-80 font-bold"
                  >
                    Order
                  </button>
                  Drink {i + 9} ... {(i + 1) * 2100}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMenu;
