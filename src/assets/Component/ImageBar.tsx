import React from "react";
import textImage from "../../../public/istockphoto-119926339-612x612.webp";
import ImageandText from "./ImageandText";

function ImageBar() {
  return (
    <div className="inline-block m-auto w-[80%]  align-middle text-black sm:w-[95%]">
      <div className="sm:text-center">
        All our room types are including complementary breakfast
      </div>
      <div className="flex flex-col justify-center items-center">
        <ImageandText
          title={"Luxury redefined"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. set sheets containing Lorem Ipsum passages, and more recently ."
          }
          src={textImage}
        />
        <ImageandText
          title={"Luxury redefined"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. set sheets containing Lorem Ipsum passages, and more recently ."
          }
          src={textImage}
        />
      </div>
    </div>
  );
}

export default ImageBar;
