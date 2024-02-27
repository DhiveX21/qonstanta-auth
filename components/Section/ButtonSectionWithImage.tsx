import IconButton from "@/components/Button/IconButton";

import React from "react";

type Props = {
  imagePath?: string;
  buttonIconPath?: string;
  buttonClass?: string;
  buttonTitle?: string;
  buttonType: "button" | "reset" | "submit";
  buttonAction?: () => any;
  height: string;
};

const ButtonSectionWithImage = (props: Props) => {
  return (
    <div className="flex gap-2 bg-gradient-to-r from-q_blue to-q_lightBlue p-4 rounded-xl items-center shadow-sm">
      <div
        style={{
          backgroundImage: `url('${props.imagePath || ""}')`,
          height: props.height + "px",
        }}
        className={`w-3/5 bg-no-repeat bg-cover bg-center `}
      ></div>
      <div className="w-2/5 flex items-center justify-center">
        <div>
          <IconButton
            type={`${props.buttonType}`}
            icon={`${props.buttonIconPath ?? ""}`}
            text={`${props.buttonTitle ?? ""}`}
            buttonClass={`${
              props.buttonClass ??
              "bg-q_pink hover:bg-q_lightPink p-4 rounded-lg duration-300"
            }`}
            click={props.buttonAction}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonSectionWithImage;
