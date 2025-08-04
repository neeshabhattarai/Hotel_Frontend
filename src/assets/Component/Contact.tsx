import React from "react";
import Header from "./Header";

function Contact() {
  return (
    <div className="h-[58rem] sm:h-[45rem] flex flex-col gap-20 mb-34">
      <div className="w-lvw h-[60rem] bg-blue-950 flex flex-col">
        <Header />
        <div className="h-[9rem] text-[24px] sm:h-[13rem]  inline-flex  justify-center items-center sm:text-[36px] uppercase text-white font-[500]">
          Contact-us
        </div>
      </div>
      <div className="h-[200rem] sm:h-[70vh] w-[70%] m-auto">
        <div className="uppercase justify-self-start text-xl font-bold font-serif ">
          we are here for you
        </div>
        <p className="mt-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem deserunt architecto numquam mollitia expedita hic?
          Cupiditate minus accusamus totam quisquam quia modi tempora illum
          cumque facere obcaecati? Non, autem similique.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-40 mt-15 justify-around">
          <div className="text-left ">
            <p>497 Evergreen Rd. Roseville,</p>
            <p>CA 95673</p>
            <p className="font-bold">View map</p>
            <p className="uppercase mt-5">contact no.</p>
            <p>
              Email: <em>luxuryhoteldesk@gmail.com</em>
            </p>
          </div>
          <div className="flex flex-col  text-right gap-3">
            <div className="flex flex-col text-left ">
              <label>Name</label>
              <input
                type="text"
                className="outline-black border-gray-300 border-2 "
              />
            </div>
            <div className="flex flex-col text-left">
              <label>Email Address</label>
              <input
                type="text"
                className="outline-black border-gray-300 border-2 "
              />
            </div>
            <div className="flex flex-col text-left">
              <label>Message</label>
              <textarea className="outline-black border-gray-300 border-2 h-[10rem] w-[20rem] " />
            </div>
            <button className="!bg-amber-500 self-center w-fit sm:self-end mb-10 sm:mb-0">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
