import React from "react";
import DifferentBackgroundImage from "./DifferentBackgroundImage";
import ImageBar from "./ImageBar";

function Home() {
  return (
    <div className="flex flex-col w-lvw gap-8 ">
      <DifferentBackgroundImage path={"pink.avif"} />
      <ImageBar />
    </div>
  );
}

export default Home;
