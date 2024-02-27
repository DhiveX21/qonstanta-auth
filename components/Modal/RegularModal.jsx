import React from "react";
import parse from "html-react-parser";

export default function RegularModal({
  buttonTitle = "Show Modal",
  buttonClass = "bg-q_blue py-2 px-4 rounded-lg shadow-none text-white font-bold hover:bg-q_lightBlue duration-300 hover:shadow-lg ",
  modalId = "exampleModalScrollable",
  modalTitle = "Modal title",
  modalContent = `<p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than th predefined max-height of modal, content will be cropped and scrollable within the modal. </p> <p>This content should appear at the bottom after you scroll.</p>`,
  modalButtontitle = "SaveChanges",
  additionalButton = null,
  children,
}) {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className={`${buttonClass}`}
        data-te-toggle="modal"
        data-te-target={`#${modalId}`}
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        {buttonTitle}
      </button>

      {/* <!-- Modal --> */}
      <div
        data-te-modal-init
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id={`${modalId}`}
        tabIndex="-1"
        aria-labelledby={`${modalId}Label`}
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] px-2 md:px-20"
        >
          <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 ">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 "
                id={`${modalId}Label`}
              >
                {modalTitle}
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative overflow-y-auto p-4">
              {children instanceof String ? parse(children) : children}
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 ">
              <button
                type="button"
                className="dont-bold py-2 px-4 mr-2"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>

              {modalButtontitle ? (
                <button
                  type="button"
                  className="bg-q_blue py-2 px-4 rounded-lg text-white font-bold"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {modalButtontitle}
                </button>
              ) : null}
              {additionalButton ? additionalButton : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
