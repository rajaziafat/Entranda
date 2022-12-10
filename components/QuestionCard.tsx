import Link from "next/link";
import React from "react";

interface Props {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  email: string;
  phoneNumber: string;
}

function QuestionCard(props: Props) {
  return (
    <div
      className="p-8 md:p-10 xl:p-[60px] text-center flex flex-col items-center rounded-[12px]"
      style={{ backgroundColor: props.color }}
    >
      <div className="rounded-full bg-white w-10 h-10 md:w-14 md:h-14 xl:w-[80px] xl:h-[80px] mb-6 xl:mb-10 flex justify-center items-center">
        <img src={props.icon} className="w-[40%]" alt="" />
      </div>

      <h1 className="text-center text-base md:text-lg xl:text-[26px] text-white mb-6 font-medium">
        {props.title}
      </h1>

      <p className="text-center text-xs md:text-sm xl:text-lg opacity-[0.8] leading-[1.4] font-normal text-white w-[16em] mb-10 md:mb-12">
        {props.subtitle}
      </p>

      <div>
        <Link href={`mailto:${props.email}`}>
          <a
            target="_blank"
            className="flex text-center text-xs md:text-sm xl:text-lg text-white mb-2 font-medium leading-[1]"
          >
            {props.email}
          </a>
        </Link>
        <Link href={`tel:${props.phoneNumber}`}>
          <a
            target="_blank"
            className="flex text-center text-xs md:text-sm xl:text-lg text-white font-medium"
          >
            {props.phoneNumber}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default QuestionCard;
