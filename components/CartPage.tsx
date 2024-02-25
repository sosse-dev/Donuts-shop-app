"use client";
import { useEffect, useState } from "react";

function CartPage({
  handleDelete,
  dataDonut,
  styleBtn,
}: {
  handleDelete: (id: number) => void;
  dataDonut: { title: string; price: number }[];
  styleBtn: string;
}) {
  const [openCart, setOpenCart] = useState(false);
  const [lengthData, setLengthData] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setLengthData(Object.keys(dataDonut).length);

    const nTotalPrice: () => number | undefined = () => {
      let nCek = 0;
      for (let i = 0; i < lengthData + 1; i++) {
        nCek += dataDonut[i]?.price ?? 0;
      }
      return nCek;
    };
    setTotalPrice(nTotalPrice() ?? 0);
  }, [dataDonut, lengthData]);

  return (
    <>
      {!openCart && (
        <button onClick={() => setOpenCart(true)} className={styleBtn}>
          <span className="text-5xl">🛒</span>
          <p className="absolute -top-3 -right-1 bg-slate-50 py-1 px-3 rounded-full">
            {lengthData - 1}
          </p>
        </button>
      )}
      {openCart && (
        <div className="fixed top-20 right-0 w-screen h-screen lg:right-10 lg:w-[24rem] lg:h-[80vh] lg:min-h-[20rem] lg:rounded-2xl max-h-[100rem] overflow-hidden bg-zinc-200 z-50 shadow-xl">
          <div className="absolute w-full pt-5 text-3xl font-thin lg:pt-6 lg:text-2xl text-center right-0 left-0 mx-auto">
            List Ordered
          </div>
          <button
            onClick={() => setOpenCart(false)}
            className="absolute right-0 top-0 w-20 h-20 bg-red-800 grid place-items-center font-bold text-3xl"
          >
            X
          </button>
          <div className="absolute bottom-20 lg:bottom-0 w-full h-24 flex flex-row-reverse border-t-4 border-zinc-700 bg-zinc-200 z-40">
            <div className="h-full flex flex-col justify-center pr-8">
              <button className="relative px-2 py-2 bg-blue-400 text-white text-2xl font-thin cursor-not-allowed group">
                Proceed
                <span className="absolute left-0 right-0 mx-auto w-fit h-fit lg:group-hover:block group-active:block lg:text-sm hidden px-2 py-2 bg-slate-500">
                  Not Availiable yet
                </span>
              </button>
              <p>Amount of Orders : {lengthData - 1}</p>
            </div>
            <div className="grow flex flex-col justify-center pl-5">
              <h2 className="text-3xl">Total</h2>
              <p className="text-zinc-800">{totalPrice}</p>
            </div>
          </div>

          <div className="absolute top-20 w-full h-full flex flex-col overflow-x-auto pb-64">
            {dataDonut.map(({ title, price }, i) => (
              <div key={i}>
                {title && price && (
                  <div
                    key={i}
                    className={`py-4 px-8 border-b-2 flex justify-between items-center ${
                      title.includes("Drink") ? "bg-blue-300" : ""
                    }`}
                  >
                    <div className="flex flex-col text-black">
                      <h1 className="text-3xl">{title}</h1>
                      <p>{price}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleDelete(i);
                      }}
                      className="w-12 h-full bg-red-700 grid place-items-center text-white font-bold py-3"
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
