import React from "react";

interface Props {
  label?: string | null;
  value?: string | null;
  color?: string;
  labelClass?: string;
  valueClass?: string;
}

export default function LabelAndValue({
  label = "Title :",
  value = "Value",
  color = "q_textgray",
  labelClass = "font-bold text-xs md:text-sm lg:text-base",
  valueClass = "text-xs md:text-sm lg:text-base",
}: Props) {
  return (
    <div
      className={`label-and-value flex  text-${color} items-start  text-center flex-row gap-2 md:items-center`}
    >
      <div className={`label-and-value__label ${labelClass}`}>
        {label && <h5>{label}</h5>}
      </div>
      <div className={`label-and-value__value ${valueClass} `}>
        {value && <p>{value}</p>}
      </div>
    </div>
  );
}
