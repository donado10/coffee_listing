import React from "react";
import bgImage from "../assets/bg-cafe.jpg";

const Background = () => {
  return (
    <div className="background absolute w-screen h-120vh flex items-center justify-center flex-col -z-10">
      <img src={bgImage} className="w-full h-[45vh]" alt="background image" />
      <div className="bg-black h-[135vh] w-screen"></div>
    </div>
  );
};

export default Background;
