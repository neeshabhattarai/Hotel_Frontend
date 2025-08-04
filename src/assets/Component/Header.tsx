import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Signup from "./Signup/Signup";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>("");

  function HandleClick() {
    const display = document.querySelector(".display");

    if (open == false && display?.classList.contains("add")) {
      setOpen(true);
      display?.classList.remove("add");
    } else {
      setOpen(false);
      display?.classList.add("add");
    }
  }
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target) && open) {
        setOpen(false);
        document.querySelector(".display")?.classList.add("add");
      }
    });
  }, [ref, open, setOpen]);

  return (
    <div>
      <div ref={ref}>
        <div
          className="flex flex-col self-start  sm:hidden"
          style={{
            backgroundColor: `${
              open ? "var(--color-yellow-700) " : "transparent"
            }`,
            width: `${open ? "10rem" : "10%"}`,
          }}
        >
          <HiMenu size={"2rem"} color="white" onClick={HandleClick} />
        </div>
        <div className="display add  sm:hidden font-sans bg-yellow-700 flex flex-col gap-10  fixed z-10 font-[500] w-[10rem]  h-full sm:static  sm:flex-row  sm:h-15 pt-1 sm:gap-20 sm:bg-transparent cursor-pointer   justify-around  items-center text-neutral-50 ">
          <div className=" bg-amber-400  text-black text-[1rem] h-[5rem] sm:h-full w-[100px] font-serif rounded-b-lg flex items-center justify-center uppercase">
            luxury
          </div>
          <ul className="mt-1 h-full flex-col gap-10  items-start font-sans font-[500] flex sm:h-15 pt-1 sm:gap-20 cursor-pointer   sm:justify-around text-[1.1rem] sm:items-center text-white sm:flex-row">
            <Link
              to={"/home"}
              className="hover:border-b-2 !text-inherit hover:text-orange-300 border-black"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="hover:border-b-2 !text-inherit hover:text-orange-300 border-black"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className=" !text-inherit hover:border-b-2 hover:text-orange-300 border-black"
            >
              Contact
            </Link>
            <li className="flex flex-col gap-10  sm:flex-row sm:gap-1 text-black  items-center !hover:text-shadow-neutral-100 ">
              <div className="!text-inherit">
                <Signup />{" "}
              </div>
              <div className="!text-inherit">
                <button className="!bg-amber-600 !m-0 !text-[15px] hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !hover:text-shadow-neutral-100">
                  Log in
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden sm:flex font-sans bg-yellow-700  flex-col gap-10  fixed font-[500] w-[10rem]  h-full sm:static  sm:flex-row  sm:h-15 pt-1 sm:gap-20 sm:bg-transparent cursor-pointer   justify-around  items-center text-neutral-50 sm:w-lvw ">
        <div className=" bg-amber-400  text-black text-[1rem] h-[5rem] sm:h-full w-[100px] font-serif rounded-b-lg flex items-center justify-center uppercase">
          luxury
        </div>
        <ul className="mt-1 h-full flex-col gap-10  items-start font-sans font-[500] flex sm:h-15 pt-1 sm:gap-20 cursor-pointer   sm:justify-around text-[1.1rem] sm:items-center text-white sm:flex-row">
          <Link
            to={"/home"}
            className="hover:border-b-2 !text-inherit hover:text-orange-300 border-black"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hover:border-b-2 !text-inherit hover:text-orange-300 border-black"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className=" !text-inherit hover:border-b-2 hover:text-orange-300 border-black"
          >
            Contact
          </Link>
          <li className="flex flex-col gap-10  sm:flex-row sm:gap-1 text-black  items-center !hover:text-shadow-neutral-100 ">
            <div className="!text-inherit">
              {" "}
              <Signup />
            </div>
            <div className="!text-inherit">
              <button className="!bg-amber-600 !m-0 !text-[15px] hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !hover:text-shadow-neutral-100">
                Log in
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
