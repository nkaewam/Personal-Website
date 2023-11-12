"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const Name = () => {
  return (
    <>
      <div className="hidden text-[86px] font-serif -space-y-12 flex-col -mb-6 md:flex">
        <p>Nonthapat</p>
        <p>Kaewamporn</p>
      </div>
      <div className="absolute top-[72%] w-screen -mx-10 md:hidden">
        <Marquee className="text-[110px] font-serif">
          <p className="px-4">Nonthapat</p>
          <p className="px-4">Kaewamporn</p>
        </Marquee>
      </div>
    </>
  );
};

export default Name;
