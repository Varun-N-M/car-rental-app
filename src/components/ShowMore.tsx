"use client";

import { ShowMoreProps } from "@/types";
import React from "react";
import { CustomButton } from "./CustomButton";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

export const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          customStyle="bg-[#2B59FF] rounded-full mt-10"
          textStyle="text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
