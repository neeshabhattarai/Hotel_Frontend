import React, { useState } from "react";
import Header from "../Header";

function Signup() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOpen((c) => (c = true))}
        className="!bg-amber-600 !text-[15px] !m-0 hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !  "
      >
        Sign Up
      </button>

      {open && (
        <div className="fixed top-0 left-0 h-screen bg-transparent w-screen backdrop-blur-md flex justify-center items-center ">
          <div className="h-[20rem] w-[20rem] bg-white shadow-2xs rounded-xl flex flex-col gap-10 justify-center ">
            <p>This is the sign up page</p>
            <button
              onClick={() => setOpen(false)}
              className="!bg-amber-600 w-fit h-fit self-center !text-[15px] !m-0 hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !  "
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
