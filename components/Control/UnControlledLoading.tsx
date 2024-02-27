export interface Props {
  image: string;
  title: string;
  description: string;
  size: string;
}

export default function UnControlledLoading(props: Props) {
  return (
    <>
      {/* {1 === 1 ? ( */}

      <div className="control-loading w-full bg-white bg-opacity-90 ">
        <div className="control-loading__wrapper flex flex-col justify-center items-center">
          <div
            className={`control-loading__icon`}
            style={{ width: props.size }}
          >
            <picture>
              <img
                className="w-[100%] aspect-[2 / 1]"
                src={props.image}
                alt="loading..."
              />
            </picture>
          </div>
          <div className="text-2xl font-bold text-q_textgray">
            <h2>{props.title}</h2>
          </div>
          <div className={` text-q_blue`}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
