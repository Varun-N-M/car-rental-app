"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { CarDetails } from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

export const CarCards = ({ car }: CarCardProps) => {
  const { make, model, city_mpg, year, drive, transmission } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-start bg-[#F5F8FF] hover:bg-white hover:shadow-md rounded-3xl p-4">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="text-[32px] font-extrabold flex">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="my-3 relative w-full h-40 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="card-image"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full group mt-2">
        <div className="w-full flex flex-row items-center justify-between group-hover:invisible">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={`/steering-wheel.svg`}
              alt="transmission"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={`/tire.svg`}
              alt="drive"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={`/gas.svg`}
              alt="mileage"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>{city_mpg} mpg</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute z-10 w-full">
          <CustomButton
            title="View more"
            customStyle="bg-[#2B59FF] w-full rounded-full"
            textStyle="text-white"
            rightIcon="/right-arrow.svg"
            handleClick={()=>setIsopen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen = {isOpen} car={car} closeModel = {()=>setIsopen(false)}/>
    </div>
  );
};
