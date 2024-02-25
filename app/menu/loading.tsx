import React from "react";

function LoadingMenu() {
  return (
    <div className="w-full h-[100vh] min-h-[40rem] min-w-[30rem] grid place-items-center bg-blue-950">
      <div className="flex flex-col justify-center items-center bg-slate-200">
        <h2 className="text-7xl font-font1">Loading.. </h2>
        <p className="text-3xl font-font1">Looking for the Menu? please wait</p>
      </div>
    </div>
  );
}

export default LoadingMenu;
