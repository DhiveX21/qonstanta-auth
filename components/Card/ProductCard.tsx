import React from "react";

type Props = {
  title?: string;
  price?: string;
  description?: any;
  buttonTitle?: string;
  facility?: string[];
  click?: () => void;
  image?: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-2xl h-full ">
      <div className="flex flex-col gap-2 justify-between h-full">
        <div>
          <picture>
            <img
              className="aspect-[16/9] object-contain mb-4"
              src={props.image}
              alt="products item"
            />
          </picture>
          <p className="mb-4 text-xl font-medium text-gray-800 ">
            {props.title ?? ""}
          </p>
          <p className="text-3xl font-bold text-q_blue ">
            {props.price ?? ""}
            <span className="text-sm text-gray-300">/ Akun</span>
          </p>
          <p className="mt-4 text-xs text-gray-600 max-h-32 overflow-y-scroll">
            {props.description ?? ""}
          </p>
          <ul className="w-full mt-6 mb-6 text-sm text-gray-600 ">
            {props.facility?.map((facilityItem: string, index: number) => (
              <li className="mb-3 flex items-center " key={index}>
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  stroke="currentColor"
                  fill="#10b981"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                </svg>
                {facilityItem}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={props.click}
            type="button"
            className="py-2 px-4 bg-q_blue hover:bg-q_lightBlue focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            {props.buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
