import React, { LegacyRef, ReactElement } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  title: string;
  subtitle: string;
  prevButton?: LegacyRef<HTMLButtonElement> | undefined;
  nextButton?: LegacyRef<HTMLButtonElement> | undefined;
  children?: JSX.Element | JSX.Element[];
  showPrevAndNextButtons?: boolean;
}

function Bar(props: Props) {
  const { showPrevAndNextButtons = true } = props;
  return (
    <header className="flex justify-between space-y-8 sm:space-y-0 sm:space-x-16 items-[unset] sm:items-center flex-col sm:flex-row">
      <div>
        <h1 className="text-2xl xl:text-[30px] font-bold mb-3">
          {props.title}
        </h1>
        <p className="text-sm xl:text-lg -text-blue font-normal">
          {props.subtitle}
        </p>
      </div>
      {props.children ? props.children : null}

      {showPrevAndNextButtons ? (
        <div className="flex space-x-4 justify-between sm:justify-start items-center flex-row">
          <button
            ref={props.prevButton}
            className="w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] rounded-full border-2 -border-blue flex items-center justify-center text-2xl  -text-blue"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            ref={props.nextButton}
            className="w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] rounded-full border-2 -border-green flex items-center justify-center text-2xl  text-white -bg-green"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Bar;
