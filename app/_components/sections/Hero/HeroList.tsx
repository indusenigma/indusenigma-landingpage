"use client";

import "react-vertical-timeline-component/style.min.css";
import { HeroCard } from "../../constants";

interface HeroListCardProps {
  company_name?: string;
  title: string;
  link?: string;
  points: string[];
}
const HeroListCard: React.FC<HeroListCardProps> = ({
  title,
  company_name,
  points,
  link,
}) => {
  return (
    <div className="bg-[#1d1836] opacity-85 rounded-xl w-96 p-4 flex flex-col items-center justify-between">
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {company_name}
        </p>
      </div>

      <ul className="list-disc ml-5 space-y-2 ">
        {points.map((point, index) => (
          <li
            key={`hero-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <a href={link} className="text-white text-[20px]" target="_blank" rel="noopener noreferrer">
        LINK
      </a>
    </div>
  );
};

const HeroList = () => {

  return (
    <div className="flex gap-6">
      {HeroCard.map((hero, index) => (
        <HeroListCard key={`hero-${index}`} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;