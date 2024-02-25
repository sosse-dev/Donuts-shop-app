import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import ReviewPage from "@/components/ReviewPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
      title="image by freepik"
        className={`relative top-20 md:top-16 lg:top-16 h-[100vh] min-h-[30rem] w-full flex flex-col items-center justify-center bg-slate-700 bg-opacity-20`}
      >
        <Image
          className="object-cover mr-2 mb-3"
          src="/donuts-background.jpg"
          priority
          fill
          alt="donuts-background"
        />
        <div className="z-30">
          <h1
            className={`text-center text-[3.6rem] md:text-[8rem] bg-purple-400 bg-opacity-50 text-slate-50 font-font1`}
          >
            <span className="text-orange-200">Donuts</span>
            <span className="text-blue-100">Shop</span>
          </h1>
          <p
            className={`text-center text-[2.6rem] md:text-[5rem] text-slate-100 bg-blue-400 bg-opacity-40 font-font1`}
          >
            Looking For Donuts?. Hey this is
            <span className="bg-slate-600">Donuts Shop ..</span>
          </p>
        </div>
      </div>
      <div className="relative w-full h-fit pt-16 xl:pt-20 2xl:pt-36 bg-gradient-to-b from-purple-300 to-blue-300 grid place-items-center">
        <div className="w-[80%] xl:w-[70%] 2xl:max-w-[75rem] h-fit py-5 md:py-14 rounded-lg shadow-lg bg-blue-500 bg-opacity-40 flex flex-col items-center md:flex-row md:justify-center md:items-center">
          <div className="w-[17rem] md:w-[14rem] lg:w-[28rem] h-[30rem] py-8">
            <h1 className="lg:text-5xl text-4xl text-white mb-2 font-font1">
              About Our
              <span className="bg-slate-500 px-2 bg-opacity-70">
                {"'"}Donuts Shop{"'"}
              </span>
            </h1>
            <p className="text-zinc-200 font-font1 text-3xl md:text-2xl lg:text-4xl">
              tlam dictum felis eu pede mollis pretieger tincidunt. Cras
              dapibus. porttitor econsequ eifendnim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellasellusverra nulla utque rut.
              Etiam rhoncus. Maecenas tempus,usetentus, sem quam semper liber
            </p>
          </div>
          <div title="image by catalyststuff" className="w-[20rem] md:w-[20rem] h-[30rem] overflow-visible">
            <Image
              src="/donut-logo.png"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              alt="donut-shop-logo"
            />
          </div>
        </div>
      </div>
      <MainPage>
        <ReviewPage />
      </MainPage>
      <Footer />
    </>
  );
}
