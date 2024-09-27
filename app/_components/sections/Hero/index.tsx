"use client";

import { useEffect, useRef } from "react";
import { init } from "ityped";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";
import "./Hero.scss";
import { motion } from "framer-motion";
import HeroList from "./HeroList";

export const Hero = () => {
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      init(spanRef.current, {
        showCursor: true,
        typeSpeed: 300,
        strings: [
          "Next JS, React JS ",
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
            <h1 className="font-black text-white text-[70px]">
              {`Hii there, I'm`}
            </h1>
            <p className="name text-[50px] text-[#915EFF]">Indus Engima</p>
          </div>
          <p className="text-[#dfd9ff] font-medium text-[20px] text-green-500">
            <span ref={spanRef}></span>
          </p>
          <div className="link1">
            <a href="https://github.com/shinchancode" target="_blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aarti-rathi-a6031814b/"
              target="_blank"
            >
              <ImLinkedin />
            </a>
            <a href="https://linktr.ee/rathi17" target="_blank">
              <BiLinkAlt />
            </a>
          </div>
        </div>
        <div className="imgcontainer1 absolute violet-gradient">
          <img src={"/Images/_DSC2063.JPG"} alt="" className="object-contain" />
        </div>
      </div>
      <div className="flex items-center gap-12 flex-col">
        <button className="w-60 h-10 text-lg text-slate-300 font-bold border rounded-3xl bg-[#915EFF] border-[#915EFF] hover:bg-[#573899] text-white">
          Hiring Us
        </button>
        <HeroList />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-10 flex justify-end items-center">
        <a href="#education">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
