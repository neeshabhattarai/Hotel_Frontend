import React from "react";

function Body() {
  return (
    <div className=" text-left ml-10 sm:text-center ">
      <div className="sm:flex sm:flex-col   sm:h-full    sm:pl-40 pl-0 sm:pt-40 pt-20 font-serif text-white sm:text-left">
        <h2 className="sm:text-[32px] p-0 m-0 tracking-[3px]  h-[25px] w-170  uppercase text-[20px] sm:[10px] ">
          Welcome to
        </h2>
        <p className="sm:text-[80px]  sm:h-[100px] uppercase text tracking-[5px] font-[400px] font-fansong text-white text-[45px] h-[58px] sm:justify-self-center">
          Luxury
        </p>
        <h2 className="uppercase tracking-[4px] text-white text-2xl">hotels</h2>
        <p className="text-white">Book your stay and enjoy your Luxury</p>
      </div>
      <button className="text-black outline-none !bg-amber-600 font-sans uppercase mt-20 ">
        Book now!
      </button>
    </div>
  );
}

export default Body;
