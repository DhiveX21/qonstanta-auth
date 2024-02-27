import Link from "next/link";
import React from "react";
import MobileSidebarItem from "./mobileSidebarItem";

export default function MobileSidebar() {
  return (
    <div className="sidebar w-full">
      <div className="sidebar__wrapper bg-q_litebg p-4 rounded-2xl flex flex-col gap-2">
        <div className="sidebar__title text-xl text-q_navy font-extrabold">
          <h2>Menu</h2>
        </div>
        <div className="sidebar__nav w-full h-full">
          <div className="sidebar__nav__wrapper grid grid-flow-row grid-cols-3 gap-2">
            <MobileSidebarItem
              url="/dashboard"
              text="Dasbor"
              icon="/icon/dashboard.png"
            />
            <MobileSidebarItem
              url="/result"
              text="Hasil"
              icon="/icon/results.png"
            />
            <MobileSidebarItem
              url="/tryout"
              text="Tryout"
              icon="/icon/calendar.png"
            />
            <MobileSidebarItem
              url="/ebook"
              text="Ebook"
              icon="/icon/ebook.png"
              isNew={true}
            />
            <MobileSidebarItem
              url="/video"
              text="Video"
              icon="/icon/video.png"
              isNew={true}
            />

            {/* <MobileSidebarItem
              url="/edulive"
              text="Edulive"
              icon="/icon/live-streaming.png"
              isNew={true}
            /> */}
            {/* <MobileSidebarItem
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
