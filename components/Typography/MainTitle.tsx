import { title } from "process";
import React from "react";

interface Props {
  title?: string;
  subTitle?: string;
}

export default function MainTitle({
  title = "Welcome",
  subTitle = "To our Learning System..., Have Fun",
}: Props) {
  return (
    <div className="main-title animation-popup">
      <div className="main-title__wrapper flex flex-col">
        <h2 className="font-black text-q_navy text-xl md:text-2xl animation-popup-2 ">
          {title}
        </h2>
        <p className="font-bold text-q_blue text-sm md:text-base lg:text-lg animation-popup-3">
          {subTitle}
        </p>
      </div>
    </div>
  );
}
