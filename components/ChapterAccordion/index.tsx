import {
  IChapterGetAllByFilterData,
  ISubjectGetAllData,
} from "@/_types/response.type";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ControlNotFound from "../Control/ControlNotFound";

type Props = {
  subject: ISubjectGetAllData[] | undefined;
  callback: (data: any) => any;
  chapter: IChapterGetAllByFilterData[];
};

const ChapterAccordion = (props: Props) => {
  const [showLevel2, setShowLevel2] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<
    ISubjectGetAllData | undefined
  >(undefined);
  const [selectedChapter, setSelectedChapter] = useState<
    IChapterGetAllByFilterData | undefined
  >(undefined);

  useEffect(() => {
    let callbackData = {
      chapter: selectedChapter,
      subject: selectedSubject,
    };

    props.callback(callbackData);
  }, [selectedSubject, selectedChapter]);

  return (
    <div className="chapter-list-card bg-gradient-to-r from-q_blue to-q_lightBlue  rounded-2xl p-4">
      <div id={`accordion1`}>
        <div className=" rounded-lg bg-white ">
          <h2 className="mb-0" id={`heading1`}>
            <button
              className="group relative flex w-full items-center rounded-[15px] border-0 bg-white py-2 md:py-3 lg:py-2 px-2 md:px-3 lg:px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
              type="button"
              data-te-collapse-init
              data-te-target={`#collapse1`}
              aria-expanded="true"
              aria-controls={`collapse1`}
            >
              <div className=" text-q_navy font-extrabold  rounded-lg  drop-shadow-md">
                <div className="md:text-xl font-black text-q_navy">
                  <h3>List Bab</h3>
                </div>
                <div className="md:text-md font-bold text-q_textgray">
                  <p>Ini adalah list Bab untukmu.</p>
                </div>
              </div>
              <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id={`collapse1`}
            className="!visible"
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby={`heading1`}
            data-te-parent={`#accordion1`}
          >
            <div className="chapter-list-card__wrapper bg-white relative p-2 rounded-b-lg shadow-[inset_0_0_10px_#3333332a]">
              <div className="relative overflow-hidden">
                <div className="level1 p-2 w-full h-full min-h-[400px] max-h-[200px] md:max-h-[400px] lg:max-h-[600px] overflow-y-scroll aspect-[2 / 6] ">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-q_pink ">Mapel</span>
                      <p>
                        <Image
                          src="/icon/ebook.png"
                          alt="left chevron"
                          height={15}
                          width={15}
                          className=" rotate-12"
                        />
                      </p>
                    </div>
                    <hr />
                    {props?.subject?.map((item) => (
                      <>
                        <div
                          key={item._id}
                          className="flex items-center gap-1 cursor-pointer group/item"
                          onClick={() => {
                            setShowLevel2(true);
                            setSelectedSubject(item);
                          }}
                        >
                          <h4 className="font-bold text-sm text-q_navy group-hover/item:text-q_pink">
                            {item.name}
                          </h4>
                        </div>
                        <hr />
                      </>
                    ))}
                  </div>
                </div>
                <div
                  className={`level2 p-2 h-full w-full absolute top-0 duration-500 bg-white ${
                    showLevel2 ? "left-0" : "left-[-100%]"
                  }`}
                >
                  <div className="flex flex-col gap-2 h-full">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2 justify-between w-full">
                        <div
                          className="cursor-pointer flex gap-1 items-center"
                          onClick={() => setShowLevel2(false)}
                        >
                          <p>
                            <Image
                              src="/icon/right-chevron-blue.png"
                              alt="left chevron"
                              height={15}
                              width={15}
                              className="opacity-40 rotate-180"
                            />
                          </p>
                          <h4 className="text-md font-black text-q_slate">
                            Back
                          </h4>
                        </div>
                        <div className="flex gap-2 items-center">
                          <span className="font-bold text-q_pink ">Bab</span>
                          <p>
                            <Image
                              src="/icon/ebook.png"
                              alt="left chevron"
                              height={15}
                              width={15}
                              className="rotate-12"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {props?.chapter?.filter(
                      (chapterItem: IChapterGetAllByFilterData) =>
                        chapterItem.subject_id === selectedSubject?._id
                    ).length > 0 ? (
                      props?.chapter
                        ?.filter(
                          (chapterItem: IChapterGetAllByFilterData) =>
                            chapterItem.subject_id === selectedSubject?._id
                        )
                        .map((item, index) => (
                          <>
                            <div
                              key={item._id}
                              className={`flex items-center gap-1 cursor-pointer group/item p-2 duration-500 ${
                                selectedChapter?._id === item._id
                                  ? "bg-gradient-to-r from-q_blue to-q_lightBlue rounded-lg pl-6 duration-500"
                                  : "bg-gradient-to-r from-white to-white duration-500"
                              } `}
                              onClick={() => {
                                let tempItem = { ...item, index: index };
                                setSelectedChapter(tempItem);
                              }}
                            >
                              <h4
                                className={`font-bold text-sm text-q_navy ${
                                  selectedChapter?._id === item._id
                                    ? "text-white"
                                    : "group-hover/item:text-q_pink"
                                }`}
                              >
                                {item.name}
                              </h4>
                            </div>
                            <hr />
                          </>
                        ))
                    ) : (
                      <div className="flex items-center h-full justify-center">
                        <ControlNotFound
                          text="Belum Ada Bab 😭"
                          icon="/images/empty.png"
                          size={1000}
                          textClass="font-black text-xl text-q_navy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterAccordion;
