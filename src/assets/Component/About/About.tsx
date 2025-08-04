import React from "react";
import DifferentBackgroundImage from "../DifferentBackgroundImage";
import FacilitiesPage from "./FacilitiesPage";

function About() {
  return (
    <div className="flex flex-col justify-center w-lvw">
      <DifferentBackgroundImage
        path={
          "type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer.jpg"
        }
      />
      <FacilitiesPage />
    </div>
  );
}

export default About;
