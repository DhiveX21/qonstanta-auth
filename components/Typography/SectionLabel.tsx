import React from "react";
import LabelAndValue from "./LabelAndValue";
import parse from "html-react-parser";

type Props = {
  titleLabel?: string | null;
  titleValue?: string | null;
  desc?: string;
};

const SectionLabel = (props: Props) => {
  return (
    <div className="totalList bg-q_litebg p-4 rounded-lg h-full md:rounded-xl">
      <div className="totalList__wrapper flex items-center justify-center flex-col gap-2">
        <div className="totalList__title">
          <LabelAndValue
            label={props.titleLabel}
            value={props.titleValue}
            labelClass=" font-black text-q_navy drop-shadow-lg text-base md:text-2xl"
            valueClass=" font-black text-q_lightBlue drop-shadow-lg text-base w-full text-center md:w-auto md:text-2xl"
          />
        </div>
        <div className="totalList__desc text-q_textgray text-xs md:text-sm lg:text-base">
          {props?.desc && <p>{parse(props.desc)}</p>}
        </div>
      </div>
    </div>
  );
};

export default SectionLabel;
