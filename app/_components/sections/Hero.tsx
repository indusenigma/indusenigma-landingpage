"use client";

import { useEffect, useRef } from "react";
import { init } from "ityped";

export const Hero = () => {
  const spanRef = useRef(null);
  useEffect(() => {
    if (spanRef.current) {
      init(spanRef.current, {
        showCursor: true,
        strings: [
          "Next JS,React JS ",
          "Three JS Generated 3D Models",
          "Powered By Open AI",
          "Mobile Apps Development Using React Native and Flutter",
          "Shopfiy Integration",
        ],
      });
    }
  }, []);
  return (
    <section className="w-full relative h-screen pt-12">
      <div className="flex mt-8 justify-between mx-12">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-black text-white text-[40px]">
              Hii there, I'm
            </h1>
            <p className="font-black text-[40px] text-[#915EFF]">
              Indus Engima
            </p>
          </div>
          <p className="text-[#dfd9ff] font-medium text-[16px]">
            <span ref={spanRef}></span>
          </p>
        </div>
        <div className="w-[200px] h-[250px]">
          <img src={"/images/logo.png"} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
};
