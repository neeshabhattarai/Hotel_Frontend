import React from "react";
import Header from "./Header";
import Body from "./Body";

function DifferentBackgroundImage({ path }: { path: String }) {
  return (
    <div
      style={{ backgroundImage: `url(/public/${path})` }}
      className="h-[70vh] sm:bg-no-repeat sm:bg-cover  sm:h-[90vh]  sm:w-screen sm:overflow-x-hidden sm:scrollbar-none "
    >
      <Header />
      <Body />
    </div>
  );
}

export default DifferentBackgroundImage;
