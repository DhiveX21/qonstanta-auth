import React from "react";
import Link from "next/link";

export default function SidebarItem({
  icon = "./icon/dashboard.svg",
  text = "Dashboard",
  url = "/dashboard",
  isNew = false,
}) {
  return (
    <Link href={url}>
      <div className="sidebar__nav__item flex justify-start gap-4 items-center font-extrabold text-q_slate group animation-popup">
        <span className="group-hover:text-q_navy duration-500 group-hover:drop-shadow-[0_0_3px_#fb748f]">
          {text}
        </span>
        <picture className=" duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:drop-shadow-[0_0_3px_#fb748f]">
          <img width={25} src={icon} alt="shortcut" />
        </picture>
        {isNew && (
          <div className="animate-bounce text-xs rounded-md bg-q_pink p-[1px] shadow-q_blue shadow-sm">
            <span className=" rounded-lg p-1 text-white font-bold">Baru</span>
          </div>
        )}
      </div>
    </Link>
  );
}
