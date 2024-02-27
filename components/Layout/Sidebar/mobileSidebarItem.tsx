import React from "react";
import Link from "next/link";

export default function MobileSidebarItem({
  icon = "./icon/dashboard.svg",
  text = "Dashboard",
  url = "/dashboard",
  isNew = false,
}) {
  return (
    <Link href={url}>
      <div className="sidebar__nav__item relative p-4 border-2 rounded-lg border-q_pink flex justify-center drop-shadow-[2px_2px_2px_#33333361] bg-white flex-col gap-1 items-center font-extrabold text-q_slate group animation-popup">
        <picture className=" duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:drop-shadow-[0_0_3px_#fb748f]">
          <img width={20} src={icon} alt="shortcut" />
        </picture>
        <span className="group-hover:text-q_navy text-sm duration-500 group-hover:drop-shadow-[0_0_3px_#fb748f]">
          {text}
        </span>
        {isNew && (
          <div className="animate-bounce absolute top-0 right-0 text-xs rounded-md bg-q_pink p-[1px] shadow-q_blue shadow-sm">
            <span className=" rounded-lg p-1 text-white font-bold">Baru</span>
          </div>
        )}
      </div>
    </Link>
  );
}
