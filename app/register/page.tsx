import Image from "next/image";
import Link from "next/link";

function Register() {
  return (
    <div className="w-full min-h-screen py-24 grid place-items-center lg:flex lg:items-center lg:justify-center bg-gradient-to-br from-blue-400 to-purple-300">
      <div className="w-[40%] h-[43rem] 2xl:max-w-[40rem] bg-blue-400 shadow-lg rounded-r-lg hidden lg:flex flex-col pl-6 pr-3 pt-12 font-font1">
        <h1 className="text-white text-6xl mb-7">
          Come along,<span className="bg-purple-400 px-2 py-1">now!</span>
        </h1>
      </div>
      <form className="w-[90%] md:w-[60%] 2xl:max-w-[40rem] h-[43rem] lg:w-[40%] rounded-lg flex flex-col py-16 items-center bg-blue-500 bg-opacity-50 text-white border-8 border-zinc-700">
        <h1 className="text-6xl">
          <span className="bg-slate-500 px-2 py-1">Sign Up</span>Page
        </h1>
        <p className="mt-4">Sign Up now, join us!</p>
        <label className="mb-2 mt-10">Email</label>
        <input
          type="text"
          className="w-[80%] h-20 shrink-0 pl-5 text-black"
          placeholder="Email"
        />
        <label className="mb-2 mt-4">Password</label>
        <input
          type="text"
          className="w-[80%] h-20 shrink-0 pl-5 text-black"
          placeholder="Password"
        />
        <div className="flex mt-5">
          <input type="checkbox" className="mr-2" />
          <p className="text-sm">
            Do you want to get notification about news and updates from us?
          </p>
        </div>
        <button className="relative w-[80%] h-20 bg-blue-400 hover:border-2 mt-2 shrink-0 cursor-not-allowed group">
          Register
          <span className="absolute -bottom-8 right-0 left-0 mx-auto bg-slate-600 hidden group-hover:block">
            Currently Not Avaliable
          </span>
        </button>
        <div className="flex mt-1">
          <p>Have an account already?</p>
          <Link
            className="text-white bg-blue-300 hover:underline px-2"
            href="/login"
          >
            Login Page
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
