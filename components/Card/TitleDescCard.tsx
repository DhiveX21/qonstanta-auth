import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  cardClass: string;
  titleClass: string;
  descClass: string;
  url: string | null;
  batch_name?: string
}

export default function TitleDescCard({
  title = "Title",
  desc = "Description",
  cardClass = "flex flex-col gap-2 bg-white p-4 rounded-xl border-q_blue border-2 shadow-md group hover:bg-q_blue duration-200",
  titleClass = "font-extrabold text-q_navy  group-hover:text-white duration-300 text-sm md:text-base lg:text-xl",
  descClass = "text-q_blue text-xs md:text-sm group-hover:text-white duration-500",
  url = null,
  batch_name = undefined,
}: Props) {
  return (
    <>
      {url ? (
        <Link href={url}>
          <div className={`title-desc-card ${cardClass} `}>
            <div className={`title-desc-card__title ${titleClass} `}>
              <h4>{title}</h4>
            </div>
            <div className={`title-desc-card__desc ${descClass} `}>
              <p>{desc}</p>
            </div>
            <br />
            {batch_name && (
              <center>
                <p className="text-q_blue text-xs">{batch_name}</p>
              </center>
            )}
          </div>
        </Link>
      ) : (
        <div className={`title-desc-card ${cardClass} `}>
          <div className={`title-desc-card__title ${titleClass} `}>
            <h4>{title}</h4>
          </div>
          <div className={`title-desc-card__desc ${descClass} `}>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
