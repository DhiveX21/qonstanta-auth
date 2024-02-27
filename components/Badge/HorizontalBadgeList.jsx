import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import SingleBadge from "./SingleBadge";
import Image from "next/image";
import ControlNotFound from "../Control/ControlNotFound";

export default function HorizontalBadgeList({
  title = "title",
  desc = "Description",
  data = [
    {
      url: "/dashboard",
      title: "Penalaran Umum",
    },
    {
      url: "/dashboard",
      title: "Penalaran Umum",
    },
    {
      url: "/dashboard",
      title: "Penalaran Umum",
    },
  ],
}) {
  //   const randomColor = () => {
  //     const color = ["bg-q_lightPink", "bg-q_lightBlue", "bg-q_lightYellow"];
  //     const random = color[Math.floor(Math.random() * color.length)];
  //     return random;
  //   };

  //   let colorPattern = [];
  //   data.map((item) => {
  //     colorPattern = [...colorPattern, randomColor()];
  //   });
  //   console.log(colorPattern);

  return (
    <div className="horizontal-badge-list animation-popup">
      <div className="horizontal-badge-list__wrapper flex-col flex md:gap-2">
        <div className="horizontal-badge-list__title text-q_navy animation-popup-1 text-sm md:text-lg lg:text-xl font-extrabold">
          <h3>{title}</h3>
        </div>
        <div className="horizontal-badge-list__item flex gap-2 overflow-x-scroll animation-popup-2 py-2">
          {data.length > 0 ? (
            data.map((item, index) => (
              <SingleBadge key={index} url={item.url} title={item.title} />
            ))
          ) : (
            <ControlNotFound
              text="this is Empty"
              wrapperClass="flex items-center gap-2"
              textClass="text-sm font-bold text-q_blue"
            />
          )}
        </div>
        <div className="horizontal-badge-list__desc text-q_textgray leading-4 text-xs md:text-sm  animation-popup-3">
          <p>{parse(desc)}</p>
        </div>
      </div>
    </div>
  );
}
