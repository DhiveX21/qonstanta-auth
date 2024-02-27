import IconButton from "@/components/Button/IconButton";
import Link from "next/link";
import React from "react";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="sidebar w-full">
      <div className="sidebar__wrapper bg-q_litebg p-4 rounded-2xl flex flex-col gap-2">
        <div className="sidebar__title text-xl text-q_navy font-extrabold">
          <h2>Akun</h2>
        </div>
        <div className="sidebar__nav w-full h-full">
          <div className="sidebar__nav__wrapper flex flex-col gap-14">
            <div className="flex w-full">
              <Link href={"/profile"} className="w-full">
                <IconButton
                  icon="/icon/profile.png"
                  buttonClass="bg-white border-q_blue border-2 p-2 rounded-lg hover:bg-q_blue text-q_blue hover:text-white duration-300 w-full"
                  text="Profil"
                  textClass=" flex  gap-2 font-bold text-center justify-center items-center"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
