import React, { useState } from "react";
import Header from "../Header";
import { useForm } from "react-hook-form";

function Login() {
  const [open, setOpen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  console.log(typeof errors);
  async function DataHandler(data) {
    console.log(data);
    reset();
  }
  return (
    <div className="">
      <button
        onClick={() => setOpen((c) => (c = true))}
        className="!bg-amber-600 !text-[15px] !m-0 hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !  "
      >
        Login
      </button>

      {open && (
        <div className="fixed flex top-0 left-0 h-lvh bg-transparent w-screen backdrop-blur-md justify-center items-center ">
          <div
            className="w-[25rem] bg-white shadow-2xs flex flex-col rounded-xl gap-0  "
            style={{
              height: `${Object.keys(errors).length > 0}?"30rem":"27rem"
            `,
            }}
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className=" self-end  w-fit h-fit  !text-[15px] !m-0 hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !  "
            >
              &#10060;
            </button>
            <form
              className="h-[100%] w-[100%] flex flex-col  text-black"
              style={{
                rowGap: Object.keys(errors).length > 0 ? "1.2rem" : "1rem",
              }}
            >
              <div className="text-3xl text-shadow-neutral-900 font-[500] font-serif ">
                Login
              </div>

              <div className="flex gap-4    justify-center">
                <label className="w-25 text-left justify-self-start">
                  Name
                </label>
                <input
                  className="rounded-xl outline-none outline-green-800 border-2 border-gray-400 "
                  {...register("name", {
                    required: "Name canot be null",
                  })}
                />
              </div>
              {errors.name && (
                <div className="text-red-900 text-[1rem] ">
                  {errors.name?.message}
                </div>
              )}

              <div className="flex gap-4   justify-center">
                <label className="w-25 text-left">National Id</label>
                <input
                  className="rounded-xl outline-none outline-green-800 border-2 border-gray-400 "
                  {...register("national", {
                    required: "National id canot be null",
                  })}
                />
              </div>
              {errors.national && (
                <div className="text-red-900 text-[1rem]">
                  {errors.national?.message}
                </div>
              )}
              <div className="flex gap-6 justify-center mb-3">
                <button
                  className="!bg-amber-600 w-fit h-fit self-center !text-[15px] !m-0 hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !  "
                  onClick={reset}
                  type="button"
                >
                  Reset
                </button>

                <button
                  className="!bg-green-600 w-fit h-fit self-center !text-[15px] !m-0 hover:outline-2 outline-green-200 !pt-1.5 !pb-1.5 !  "
                  onClick={handleSubmit(DataHandler)}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
