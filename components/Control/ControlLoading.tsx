import { IUseControlZustand } from "@/zustand/types/useControlZustand.type";
import useControlZustand from "@/zustand/useControlZustand";
import Image from "next/image";

export default function ControlLoading() {
  const loadingCondition = useControlZustand(
    (state: IUseControlZustand) => state.isPageLoading
  );
  return (
    <>
      {/* {1 === 1 ? ( */}
      {loadingCondition.active ? (
        <div
          className="control-loading w-screen h-screen fixed bg-white bg-opacity-90 "
          style={{ zIndex: 100 }}
        >
          <div className="control-loading__wrapper flex flex-col justify-center items-center h-full">
            <div className="control-loading__icon">
              <picture>
                <Image
                  width={30}
                  height={30}
                  className="w-[20vw]"
                  src={"/gif/loading-button.gif"}
                  alt="loading..."
                />
              </picture>

              {/* <video
                className="mb-[20px]"
                autoPlay
                playsInline
                muted
                loop
                width={150}
                src={loadingCondition.image}
              /> */}
            </div>
            <div className="text-4xl font-bold text-q_textgray">
              <h2>{loadingCondition.title}</h2>
            </div>
            <div className={` text-q_blue`}>
              <p>{loadingCondition.description}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
