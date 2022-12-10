import React from "react";

interface Props {
  type: "radio" | "checkbox";
  name?: string;
  id?: string;
}

function Checkbox(props: Props) {
  const { type, name, id } = props;
  return (
    <input
      type={type}
      name={name ? name : ""}
      id={id}
      className="checkbox-input appearance-none w-4 min-w-[1rem] h-4 bg-transparent border-2 -border-gray rounded cursor-pointer relative flex items-center justify-center"
    />
  );
}

export default Checkbox;

// 03115940727
