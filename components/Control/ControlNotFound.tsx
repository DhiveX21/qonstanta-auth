import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconButton from "../Button/IconButton";

type Props = {
  text?: string;
  textClass?: string;
  icon?: string;
  wrapperClass?: string;
  size?: number;
  backLink?: any;
};

export default function ControlNotFound({
  text = "Not Found",
  textClass = "text-xs text-q_textgray font-bold",
  icon = "/icon/notfound.svg",
  wrapperClass = "flex justify-center w-full flex-col items-center",
  size = 40,
  backLink = null,
}: Props) {
  return (
    <div className={`empty_data ${wrapperClass}`}>
      <picture>
        <Image src={icon} alt="Not Found" width={size} height={size} />
      </picture>
      <p className={`${textClass}`}>{text}</p>
      {backLink ? (
        <Link href={backLink}>
          <IconButton
            icon="/icon/turn-back.png"
            text="Puter balik ke page sebelumnya."
          />
        </Link>
      ) : null}
    </div>
  );
}
