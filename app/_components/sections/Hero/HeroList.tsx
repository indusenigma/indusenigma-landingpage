"use client";

import "react-vertical-timeline-component/style.min.css";
import { Heros } from "../../constants";

const HeroListCard = ({ Heros }) => {
  return (
    <div className="bg-[#1d1836] opacity-85 rounded-xl w-96 p-4 flex flex-col items-center justify-between">
      <div>
        <h3 className="text-white text-[24px] font-bold">{Heros.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {Heros.company_name}
        </p>
      </div>

      <ul className="list-disc ml-5 space-y-2 ">
        {Heros.points.map((point, index) => (
          <li
            key={`hero-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <a href={Heros.link} className=" text-white text-[20px] " target="_blank">
        LINK
      </a>
    </div>
  );
};

const HeroList = () => {
  return (
    <>
      <div className="flex gap-6">
        {Heros.map((Heros, index) => (
          <HeroListCard key={`Hero-${index}`} Heros={Heros} />
        ))}
      </div>
    </>
  );
};

export default HeroList;
