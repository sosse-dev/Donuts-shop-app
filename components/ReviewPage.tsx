import Image from "next/image";

function ReviewPage() {
  return (
    <>
      <div className="relative h-fit py-12 w-full bg-red-800 bg-opacity-30 shadow-2xl mt-12">
        <div className="h-full flex flex-col gap-y-6 md:grid md:grid-cols-3 md:place-items-center items-center justify-center">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className={`w-[90%] shadow-2xl flex flex-col pl-12 pr-10 py-12 bg-red-950 bg-opacity-30 rounded-lg`}
              >
                <div className="w-full">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/profile-picture.png"
                      width={80}
                      height={80}
                      alt="default-profile-picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-white text-2xl font-font1">
                  tlis eu pede mollis pretieger tincidunt. Cras dapibus.
                  porttitor econsequ eifendnim. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellasellusverra nulla utque rut.
                  Etitempus,usetentus, sem quam
                </p>
                <p className="w-full text-right text-2xl text-white font-thin mt-4 font-font1">
                  -Anonymous
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ReviewPage;
