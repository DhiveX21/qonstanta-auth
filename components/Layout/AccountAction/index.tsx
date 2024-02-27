import IconButton from "@/components/Button/IconButton";
import { signOut } from "next-auth/react";
import React from "react";
import { toast } from "react-toastify";

type Props = {};

const AccountAction = (props: Props) => {
  return (
    <div className="sidebar w-full">
      <div className="sidebar__wrapper bg-q_litebg p-4 rounded-2xl flex flex-col gap-2">
        <div className="sidebar__nav w-full h-full">
          <div className="sidebar__nav__wrapper flex flex-col gap-14">
            <IconButton
              click={() => {
                signOut({ callbackUrl: "/" });
                toast.success("Logged Out");
              }}
              icon="/icon/switch.png"
              buttonClass="bg-white border-q_pink border-2 p-2 rounded-lg hover:bg-q_pink text-q_pink hover:text-white duration-300"
              text="Keluar"
              textClass=" flex  gap-2 font-bold text-center justify-center items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAction;
