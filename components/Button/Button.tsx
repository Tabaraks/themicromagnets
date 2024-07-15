import React from "react";
import { ButtonType } from "@/types/common";

const Button = ({ text, ...props }: ButtonType) => {
  return (
    <button
      className="py-2 px-[25px] rounded-full text-white btn text-base tracking-[1px]"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
