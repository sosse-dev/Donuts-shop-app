function Form() {
  return (
    <div className="w-full h-full py-12 md:grid place-items-center font-font1">
      <div className="w-full md:w-[80%] xl:w-[70%] 2xl:w-[50%] h-fit flex flex-col md:flex-row md:justify-around justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[22rem] md:w-[23rem] h-[34rem] md:h-[38rem] bg-blue-400 bg-opacity-60 flex flex-col justify-center items-center rounded-lg shadow-lg"
        >
          <h2 className=" shrink-0 text-white text-6xl md:px-2">
            Contact<span className="bg-slate-500 px-1">Us</span>
          </h2>
          <p className="text-zinc-200 text-3xl mt-2 md:px-2">
            or send email below here!
          </p>
          <label className="w-[80%] mt-2 text-2xl text-zinc-100 shrink-0">
            Name
          </label>
          <input
            type="text"
            className="w-[80%] h-14 shrink-0 font-thin indent-4"
            placeholder="Name"
          />
          <label className="w-[80%] mt-2 text-2xl text-zinc-100 shrink-0">
            Email
          </label>
          <input
            type="text"
            className="w-[80%] h-14 shrink-0 font-thin indent-4"
            placeholder="Email"
          />
          <label className="w-[80%] mt-2 text-2xl text-zinc-100 shrink-0">
            Message
          </label>
          <input
            type="text"
            className="w-[80%] h-20 shrink-0 font-thin indent-4"
            placeholder="Message"
          />
          <button className="relative w-[80%] py-4 bg-slate-500 mt-7 text-white hover:bg-blue-300 text-2xl cursor-not-allowed group">
            Send !
            <span className="absolute -bottom-8 right-0 left-0 mx-auto bg-slate-600 hidden group-hover:block">
              Currently Not Avaliable
            </span>
          </button>
        </form>
        <div className="w-[80%] lg:w-[30rem] h-[24rem] flex flex-col">
          <h1 className="text-white text-5xl lg:text-6xl mt-8 lg:mt-0">
            Need <span className="bg-purple-900 px-2 bg-opacity-60">Help?</span>
            , please Contact Us!
          </h1>
          <p className="pt-4 pb-2 pl-4 shadow-lg rounded-sm text-zinc-100 bg-blue-500 mt-3 text-3xl md:text-4xl">
            Num <span className="font-thin">xxx xxx xxxx</span>
          </p>
          <p className="pb-6 pl-4 shadow-lg rounded-sm text-zinc-100 bg-blue-500 text-3xl md:text-4xl">
            GMAIL <span className="font-thin">sosse3135@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
