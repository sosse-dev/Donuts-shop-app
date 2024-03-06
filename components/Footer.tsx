import { footerMenu } from "@/data";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="w-full h-fit bg-blue-700 bg-opacity-70">
        <div className="flex flex-col justify-around">
          <div className="w-fit h-fit text-4xl text-white py-12 px-5 md:px-16 font-font1">
            <h1 className="text-4xl">Donuts, donuts and Donuts!!</h1>
            <p className="text-2xl text-zinc-200 lg:pr-36">
              ifendnim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellasellusverra nulla utque rut.
            </p>
            <p className="text-3xl font-semibold text-zinc-100 mt-5">
              Social Media
            </p>
            <div className="flex gap-x-2 mt-1">
              <a
                target="_blank"
                href="https://www.instagram.com/sosse.dev"
                title="Instagram by icons8"
                className="w-12 h-12 bg-white hover:scale-110 rounded-full"
                aria-label="instagram"
              >
                <Image
                  src="/instagram.png"
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                  alt="instagram icon"
                />
              </a>
              <a
                target="_blank"
                href="https://wa.me/62882019600180"
                title="Whatsapp by icons8"
                className="w-12 h-12 bg-white hover:scale-110 rounded-full"
                aria-label="whatsapp"
              >
                <Image
                  src="/whatsapp.png"
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                  alt="whatsapp icon"
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/people/Ahmad-Sosse/pfbid02QqMvBwCbprkHDxNH6juf239Xusc4ominF6jaM4E1nQFTVVeL6P4i8jonV39PJPNnl/?locale=id_ID"
                title="Facebook by icons8"
                className="w-12 h-12 bg-white hover:scale-110 rounded-full"
                aria-label="facebook"
              >
                <Image
                  src="/facebook.png"
                  width={30}
                  height={30}
                  className="w-full h-full object-cover"
                  alt="facebook icon"
                />
              </a>
            </div>
          </div>
          <div className="w-[80%] xl:w-[70%] h-fit pl-8 gap-y-24 lg:pl-16 xl:pl-24 md:gap-x-9 lg:gap-x-12 xl:gap-x-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-12">
            {footerMenu.map(({ title, menu }, i) => (
              <div
                key={i}
                className={`${
                  i === 4 ? "md:hidden" : "block"
                } flex flex-col gap-y-4 md:gap-y-2 pl-7`}
              >
                <h2 className="text-5xl font-font1 text-white pl-2 hover:bg-slate-700">
                  {title}
                </h2>
                {menu.map((data, i) => (
                  <Link
                    key={i}
                    href={`/${
                      data == "Sign Up"
                        ? "register"
                        : data === "Login"
                        ? "login"
                        : data
                    }`}
                    className="text-left text-zinc-200 pl-2 hover:bg-slate-500"
                  >
                    {data}
                  </Link>
                ))}
              </div>
            ))}
            <div
              className={`w-[18rem] flex flex-col gap-y-4 md:gap-y-2 pl-7 mb-12`}
            >
              <h2 className="text-4xl font-font1 text-white pl-2 hover:bg-slate-700">
                Images and Icons by
              </h2>
              <a
                target="_blank"
                href="https://www.freepik.com/free-ai-image/delicious-donuts-ai-generated_59583140.htm#query=donut&position=14&from_view=keyword&track=sph&uuid=50c0ba13-062e-44b5-b748-45c2918f47c8"
                className="text-left text-zinc-200 pl-2 hover:bg-slate-500"
              >
                freepik
              </a>
              <a
                target="_blank"
                href="https://www.freepik.com/free-vector/flying-doughnut-melted-cartoon-icon-illustration_11787899.htm#query=donut%20logo&position=3&from_view=search&track=ais&uuid=0b572d56-8f76-49a2-b957-e14c035c4860"
                className="text-left text-zinc-200 pl-2 hover:bg-slate-500"
              >
                catalyststuff
              </a>
              <p className="text-left text-zinc-200 pl-2 hover:bg-slate-500">
                icons8
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
