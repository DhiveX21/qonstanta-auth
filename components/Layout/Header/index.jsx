import React from "react";
import Image from "next/image";

export default function Header(props) {
  return (
    <header className="header w-full fixed top-0 z-50 bg-white ">
      <div className="header__wrapper h-[50px] w-full flex flex-row-reverse  items-center p-3 shadow-md relative justify-between md:px-36 md:h-[70px] lg:justify-center lg:gap-4">
        {props.useSideBar ? (
          <picture className="lg:hidden" onClick={() => props.menuOpen()}>
            <Image
              width={20}
              height={20}
              src="/icon/dashboard.svg"
              alt="Menu"
            />
          </picture>
        ) : null}

        <div className="header__logo ">
          <picture>
            <img
              className="max-w-[130px] w-full md:max-w-[200px]"
              src="/images/qonstanta-logo.png"
              alt="Header Qonstanta"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}
