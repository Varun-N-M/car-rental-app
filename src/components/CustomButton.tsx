import { CustomButtonProps } from "@/types";
import React from "react";
import Image from "next/image";

export const CustomButton = ({
  title,
  btnType,
  customStyle,
  handleClick,
  textStyle,
  rightIcon
}: CustomButtonProps) => {
  return (
    <button className={`custom-btn ${customStyle}`} type={btnType || "button"} onClick={handleClick}>
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right-arrow" fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};
