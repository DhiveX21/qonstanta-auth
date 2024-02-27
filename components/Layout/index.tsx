import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ControlLoading from "../Control/ControlLoading";
import { toast } from "react-toastify";
import useControlZustand from "@/zustand/useControlZustand";
import { IUseControlZustand } from "@/zustand/types/useControlZustand.type";
import ControlNotFound from "../Control/ControlNotFound";
import AccountAction from "./AccountAction";
import FirstLoginForm from "@/widgets/FirstLoginForm";
import ProfileCard from "./ProfileCard";
import MobileSidebar from "./Sidebar/mobileSidebar";
// import ProfileButton from "./ProfileCard";
// import ProfileCard from "./ProfileCard";

export default function Layout({
  children,
  useSideBar = true,
  isError = false,
  errorMessage = "",
}: any) {
  const {
    setIsPageLoading,
    setControlMediaQuery,
    controlMenuPopup,
    setControlMenuPopup,
  } = useControlZustand();

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const { data: session, status }: any = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.

      signOut({
        callbackUrl: "/",
        redirect: true,
      });
    },
  });

  useEffect(() => {
    if (router.query.errorT) toast.error(router.query.errorT);
    if (router.query.successT) toast.error(router.query.successT);
    if (router.query.warningT) toast.error(router.query.warningT);
    const handleRouteChange = (cond: boolean) => {
      setIsPageLoading({
        active: cond,
        title: "Loading",
        description: "Please Wait",
      });
    };

    router.events.on("routeChangeStart", () => {
      handleRouteChange(true);
    });
    router.events.on("routeChangeComplete", () => {
      handleRouteChange(false);
    });
    return () => {
      router.events.off("routeChangeStart", () => {
        handleRouteChange(true);
      });
      router.events.off("routeChangeComplete", () => {
        handleRouteChange(false);
      });
    };
  }, [router.events]);

  useEffect(() => {
    let mediaQuery = null;

    if (window.matchMedia("(max-width: 767px)").matches) {
      mediaQuery = "mobile";
    } else if (window.matchMedia("(max-width: 1023px)").matches) {
      mediaQuery = "tablet";
    } else if (window.matchMedia("(min-width: 1025px)").matches) {
      mediaQuery = "desktop";
    }
    setControlMediaQuery(mediaQuery);
    return () => {
      setControlMediaQuery(null);
    };
  }, []);

  return (
    <div className="relative">
      <ControlLoading />
      {session?.credentials?.studentData?.school_name === "" && (
        <FirstLoginForm
          show={
            session?.credentials?.studentData?.school_name === "" ? true : false
          }
        />
      )}
      <Header
        menuOpen={() =>
          setControlMenuPopup({
            active: !controlMenuPopup?.active,
            menuList: [],
          })
        }
        useSideBar={useSideBar}
      ></Header>
      {useSideBar ? (
        <div className="flex w-full p-0 md:p-4 gap-6 max-w-[1280px] m-auto">
          <div className="sidebar-desktop hidden lg:flex flex-col gap-5  w-1/5 pt-20  h-full ">
            <ProfileCard />
            <Sidebar></Sidebar>
            <AccountAction />
          </div>
          {controlMenuPopup?.active ? (
            <div className="sidebar-mobile w-4/5 h-screen top-0 fixed bg-white z-40 animation-popup animation-wobble md:w-2/5 shadow-lg p-6 lg:hidden flex flex-col gap-2 pt-16">
              <ProfileCard />
              <MobileSidebar />
              <AccountAction />
            </div>
          ) : null}
          <div
            onClick={() => {
              if (controlMenuPopup?.active) {
                setControlMenuPopup({
                  active: false,
                  menuList: [],
                });
              }
            }}
            className="layout-main-content w-full p-4 pt-16 md:px-32 lg:p-0 lg:pt-20 lg:w-4/5"
          >
            {isError ? (
              <div className="flex h-full w-full items-center justify-center">
                <div className="w-2/3 mt-32 md:w-1/3">
                  <ControlNotFound
                    icon="/images/confuse.svg"
                    size={500}
                    text={errorMessage}
                  />
                </div>
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full p-0 md:p-4 gap-6 max-w-[1280px] m-auto">
          <div className="layout-main-content w-full p-4 pt-16 md:px-32 lg:p-0 lg:pt-20 ">
            {isError ? (
              <div className="flex h-full w-full items-center justify-center">
                <div className="w-2/3 mt-32 md:w-1/3">
                  <ControlNotFound
                    icon="/images/confuse.svg"
                    size={500}
                    text={errorMessage}
                  />
                </div>
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      )}
    </div>
  );
}
