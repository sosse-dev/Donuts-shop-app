import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-y-2 bg-blue-400">
      <h1 className="text-3xl lg:text-4xl font-thin text-white">
        Could{"'"}not find the page
      </h1>
      <Link
        href="/"
        className="w-fit h-fit px-3 py-2 bg-green-400 text-black hover:bg-green-800 hover:text-white hover:border-4 transition-all rounded-md mt-2 hover:mt-0"
      >
        Home
      </Link>
    </div>
  );
}

export default NotFound;
