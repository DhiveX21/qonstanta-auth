import React from "react";

type Props = {
  title?: string;
  name?: string;
  email?: string;
  school?: string;
  studentClass?: string;
  description?: string;
  scoreTotal?: string | number;
  scoreData?: Array<{
    chapter: string;
    true: string | number;
    false: string | number;
    empty: string | number;
    score: string | number;
  }>;
};

const BatchTryoutCertificate = (props: Props) => {
  return (
    <div
      className="relative"
      style={{
        width: "297mm !important",
        height: "210mm !important",
        aspectRatio: "297/210",
      }}
    >
      <img
        src="/images/certificate-fliped.png"
        alt="Certificate bg"
        className="absolute top-0 left-0 w-[297mm] h-[210mm] z-0"
      />
      <div className="relative w-full h-full z-10 flex-col gap-2 items-center justify-between flex">
        <div className="header w-full h-[200px] flex flex-col justify-center items-center">
          <img
            src="/images/qonstanta-logo-new.png"
            alt="Logo Qonstanta"
            style={{ width: "350px" }}
          />
        </div>
        <div className="content w-full flex flex-col items-center justify-center">
          <div className=" p-2 w-full flex flex-col items-center justify-center gap-2 ">
            <h1 className="text-2xl text-q_pink font-bold">Sertifikat Hasil</h1>
            {props.title && (
              <p className="font-bold text-q_textgray">{props.title}</p>
            )}
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl font-black text-q_pink">
                {props.name ?? ""}
              </h2>
              <div className="flex gap-6">
                <span className=" font-bold text-q_slate">
                  {props.email ?? ""}
                </span>
                {props.school && (
                  <>
                    <span className=" font-bold text-q_slate">|</span>
                    <span className=" font-bold text-q_slate">
                      {props.school}
                    </span>
                  </>
                )}
                {props.studentClass && (
                  <>
                    <span className=" font-bold text-q_slate">|</span>
                    <span className=" font-bold text-q_slate">
                      {props.studentClass}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4 p-4 w-full flex flex-col items-center justify-center gap-2">
            <p className="font-bold text-q_textgray">
              {props.description ?? ""}
            </p>
          </div>
          {props.scoreData && (
            <div className="  inline-block rounded-2xl border overflow-hidden">
              <table className="  ">
                <thead className="">
                  <tr className="bg-q_blue text-white ">
                    <th className="pb-2 px-2">Mata Pelajaran</th>
                    <th className="pb-2 px-2">Benar</th>
                    <th className="pb-2 px-2">Salah</th>
                    <th className="pb-2 px-2">Kosong</th>
                    <th className="pb-2 px-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {props.scoreData.map((item, index) => (
                    <tr
                      key={index}
                      className="font-bold text-q_navy text-xs text-center"
                    >
                      <td
                        style={{ paddingBottom: "15px" }}
                        className=" border px-2  text-q_pink text-left"
                      >
                        {item.chapter}
                      </td>
                      <td
                        style={{ paddingBottom: "15px" }}
                        className=" border px-2 "
                      >
                        {item.true}
                      </td>
                      <td
                        style={{ paddingBottom: "15px" }}
                        className=" border px-2 "
                      >
                        {item.false}
                      </td>
                      <td
                        style={{ paddingBottom: "15px" }}
                        className=" border px-2 "
                      >
                        {item.empty}
                      </td>
                      <td
                        style={{ paddingBottom: "15px" }}
                        className=" border px-2   text-q_blue"
                      >
                        {item.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className=" p-2 w-full flex flex-col items-center justify-center">
            <p className="font-bold text-q_textgray">Score Total IRT</p>
            <h3 className="text-2xl font-black text-q_blue italic ">
              {props.scoreTotal ?? ""}
            </h3>
          </div>
        </div>
        <div className="footer h-[200px] w-full flex justify-evenly items-center">
          <div className="secondary-sign w-full">
            <span></span>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-bold text-q_textgray text-center text-xs">
              Jl. Tebet Timur Dalam VIII No.39, Tebet, Jakarta Selatan <br />{" "}
              0822 1000 4002
              <br /> www.qonstanta.id
            </p>
          </div>
          <div className="sign w-full flex justify-center">
            <div className="relative text-xs flex flex-col items-center justify-center text-q_textgray font-bold w-fit">
              <img
                style={{ mixBlendMode: "multiply" }}
                className="w-[70px] absolute bottom-[15px]"
                src="/images/mr.surkam-sign.png"
                alt="sign id"
              />
              <span>Direktur utama Qonstanta</span>
              <hr className="w-full absolute bottom-[9px] border-q_textgray" />
              <span>Surkam, SSi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchTryoutCertificate;
