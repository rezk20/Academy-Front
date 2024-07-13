import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <Image
        layout="fill"
        src="/bg-grid.svg"
        alt="background"
        className="w-screen h-screen absolute top-0 left-0 -z-50"
      />
      <div className="h-screen w-full relative "></div>
    </>
  );
};
export default Hero;
