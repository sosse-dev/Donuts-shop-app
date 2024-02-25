import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className="w-full min-h-screen py-24 grid place-items-center lg:flex lg:items-center lg:justify-center bg-gradient-to-br from-blue-400 to-purple-300">
      <div className="w-[40%] 2xl:max-w-[40rem] h-[43rem] bg-blue-400 shadow-lg rounded-r-lg hidden lg:flex flex-col pl-6 pr-3 pt-12 font-font1">
        <h1 className="text-white text-6xl mb-7">
          <span className="bg-slate-500 px-1">Login Page .. .</span>
        </h1>
      </div>
      <form className="w-[90%] md:w-[60%] 2xl:max-w-[40rem] h-[43rem] lg:w-[40%] rounded-lg flex flex-col py-12 items-center bg-blue-500 bg-opacity-50 text-white border-8 border-zinc-800">
        <h1 className="text-6xl">Login</h1>
        <label className="mb-2 mt-8">Email</label>
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

        <button className="relative w-[80%] h-20 bg-blue-400 hover:border-2 mt-6 shrink-0 cursor-not-allowed group">
          Login
          <span className="absolute -bottom-8 right-0 left-0 mx-auto bg-slate-600 hidden group-hover:block">
            Currently Not Avaliable
          </span>
        </button>
        <div className="flex mt-1">
          <p>You don{"'"}t have any account yet?</p>
          <Link
            className="text-white bg-blue-300 hover:underline px-2"
            href="/register"
          >
            Sign Up Page
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
