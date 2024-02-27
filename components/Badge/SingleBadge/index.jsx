import React from "react";
import Link from "next/link";

export default function SingleBadge({
  url = "/dashboard",
  title = "Title",
  textClass = "whitespace-nowrap text-xs md:text-base",
  badgeClass = "text-center text-white px-4 py-2 rounded-lg min-w-[100px]  w-fit bg-q_blue  hover:shadow-md hover:shadow-q_blue duration-200 text-xs md:text-sm",
}) {
  return (
    <Link href={url}>
      <div className={`single-badge ${badgeClass}`}>
        <p className={`${textClass}`}>{title}</p>
      </div>
    </Link>
  );
}
