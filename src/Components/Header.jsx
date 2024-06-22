import React from "react";

const Header = () => {
  return (
    <div className="w-full h-1/4 flex items-center justify-center flex-col gap-1">
      <h1 className="text-4xl text-[white] font-bold">Our Collection</h1>
      <h2 className="text-2xl text-[#6F757C] font-semibold text-center w-3/5">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </h2>
    </div>
  );
};

export default Header;
