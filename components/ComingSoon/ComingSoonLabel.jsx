import React from "react";

export default function ComingSoonLabel({ children, textClass }) {
  return (
    <div className="coming-soon-label w-full h-full relative z-10 ">
      <div className=" w-full h-full">{children}</div>
      <div className="coming-soon-label__wrapper w-full h-full absolute top-0 right-0 z-50 flex justify-center items-center bg-white bg-opacity-60">
        <div
          className={`coming-soon-label__badge font-black text-3xl drop-shadow-[0_0_2px_#000]  text-white rotate-[315deg] ${textClass}`}
        >
          <p>Coming Soon!</p>
        </div>
      </div>
    </div>
  );
}
