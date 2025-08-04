import React, { type DetailedHTMLProps, type ImgHTMLAttributes } from "react";

function ImageandText({
  text,
  title,
  src,
}: {
  text: String;
  title: String;
  src:
    | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    | undefined;
}) {
  return (
    <div className="sm:flex sm:flex-row sm:gap-1 sm:pt-5 sm:items-center sm:justify-center  sm:text-left sm:w-[60%] w-fit flex-col items-start">
      <div className="sm:w-[40%] sm:h-[30%] sm:border-l-2 sm:mt-5 sm:pl-10 sm:border-gray-400 m-auto w-[80%] mb-6">
        <div className="font-serif text-2xl font-semibold text-green-950">
          {title}
        </div>
        <p className="pt-4 text-justify w-[90%] ">{text}</p>
        <button className="uppercase mt-3 !pl-4 !pr-4 !pt-2 !pb-2 !bg-amber-400">
          Explore
        </button>
      </div>
      <img src={src} className="w-[25rem] h-[18rem] sm:m-auto" />
    </div>
  );
}

export default ImageandText;
