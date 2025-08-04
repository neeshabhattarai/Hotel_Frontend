import React from "react";

function ImageContainer({ path, text }: { path: String; text: String }) {
  return (
    <div className="relative">
      <img src={path} className="  w-[50rem] h-[25rem] mt-10 m-auto"></img>
      <div className="absolute inline-flex justify-center font-[500] items-center bottom-[-5%] right-[43%] bg-white h-10 w-50 align-middle  text-xl text-black uppercase ">
        {text}
      </div>
    </div>
  );
}

export default ImageContainer;
