import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <img
        alt="background"
        fetchPriority="high"
        width="1572"
        height="795"
        decoding="async"
        data-nimg="1"
        className="absolute  w-screen top-0  left-0 -z-10"
        src="/bg-grid.svg"
      />
      <div className="h-screen w-full relative "></div>
    </>
    test
  );
};
export default Hero;
