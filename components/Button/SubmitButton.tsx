import React from "react";
import Image from "next/image";
import useControlZustand from "@/zustand/useControlZustand";

interface IProps {
  type?: "submit" | "button" | "reset" | undefined;
  text?: string;
  buttonClass?: string;
  textClass?: string;
}

export default function SubmitButton(props: IProps) {
  const { isPostLoading } = useControlZustand();
  return (
    <button
      type={props.type}
      className={`${
        props.buttonClass
          ? props.buttonClass
          : "w-full py-3 bg-q_lightBlue text-white rounded-md text-sm"
      } ${
        isPostLoading.active ? "bg-q_litegray" : ""
      } flex justify-center animation-popup`}
      disabled={isPostLoading.active}
    >
      {isPostLoading.active ? (
        <Image
          className="drop-shadow-md animation-popup"
          src={"/gif/loading-button.gif"}
          width={30}
          height={30}
          alt="loading..."
        />
      ) : (
        <p className={`${props.textClass} animation-popup`}>
          {props.text ? props.text : "Submit"}
        </p>
      )}
    </button>
  );
}
