import React from "react";
import Checkbox from "./Checkbox";
import { GoInfo } from "react-icons/go";

interface Props {
  type: "radio" | "checkbox";
  title: string;
  id?: string;
  name?: string;
  info?: string | boolean;
}

function CheckBoxWithTitle(props: Props) {
  return (
    <div className="flex items-start space-x-2 text-base">
      <div className="">
        <Checkbox type="checkbox" name={props.name} id={props.id} />
      </div>
      <label
        htmlFor={props.id}
        className="text-sm xl:text-base mt-[-.1em] xl:mt-[-.2em] cursor-pointer -text-gray flex-1"
      >
        {props.title}
      </label>
      {props.info ? (
        <div className="flex">
          <GoInfo className="-text-gray text-base xl:text-lg" />
        </div>
      ) : null}
    </div>
  );
}

export default CheckBoxWithTitle;
