import React from "react";
import parse from "html-react-parser";

export default function SectionTitle({ title = "Title", desc }) {
  return (
    <div className="section-title">
      <div className="section-title__title  font-extrabold text-q_navy text-sm md:text-lg lg:text-xl">
        <h3>{title}</h3>
      </div>
      {desc ? (
        <div className="section-title__subtitle text-[15px] text-q_textgray text-xs md:text-base">
          <p>{parse(desc)}</p>
        </div>
      ) : null}
    </div>
  );
}
