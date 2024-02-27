import Image from "next/image";
import React from "react";

type Props = {
  text?: string;
  type?: "button" | "reset" | "submit" | undefined;
  icon?: string;
  buttonClass?: string;
  textClass?: string;
  click?: () => any;
};

const IconButton = (props: Props) => {
  return (
    <button
      type={props.type}
      onClick={props.click}
      className={`group animation-popup ${
        props.buttonClass
          ? props.buttonClass
          : "bg-q_navy  px-4 py-2 rounded-lg hover:bg-opacity-90 hover:shadow-sm duration-300"
      }`}
    >
      <span
        className={`${
          props.textClass
            ? props.textClass
            : "flex items-center gap-2 text-white font-bold justify-center text-xs md:text-base"
        }`}
      >
        {props.icon ? (
          <picture className="group-hover:animate-pulse">
            <Image
              width={20}
              height={20}
              src={props.icon ? props.icon : "/icon/share.svg"}
              alt="Button Icon"
            />
          </picture>
        ) : null}
        {props.text}
      </span>
    </button>
  );
};

export default IconButton;
