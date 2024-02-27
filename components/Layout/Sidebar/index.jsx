import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="sidebar w-full">
      <div className="sidebar__wrapper bg-q_litebg p-4 rounded-2xl flex flex-col gap-12">
        <div className="sidebar__title text-xl text-q_navy font-extrabold">
          <h2>Menu</h2>
        </div>
        <div className="sidebar__nav w-full h-full">
          <div className="sidebar__nav__wrapper flex flex-col gap-14">
            <SidebarItem
              url="/dashboard"
              text="Dasbor"
              icon="/icon/dashboard.png"
            />
            <SidebarItem url="/result" text="Hasil" icon="/icon/results.png" />
            <SidebarItem
              url="/tryout"
              text="Tryout"
              icon="/icon/calendar.png"
            />
            <SidebarItem
              url="/ebook"
              text="Ebook"
              icon="/icon/ebook.png"
              isNew={true}
            />
            <SidebarItem
              url="/video"
              text="Video"
              icon="/icon/video.png"
              isNew={true}
            />
            <SidebarItem
              url="/"
              text="Perkembangan"
              icon="/icon/progress.png"
              isNew={true}
            />

            {/* <SidebarItem
              url="/edulive"
              text="Edulive"
              icon="/icon/live-streaming.png"
              isNew={true}
            /> */}
            {/* <SidebarItem
              url="/facility"
              text="Fasilitas"
              icon="/icon/setting.png"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
