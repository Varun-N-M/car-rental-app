"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from "./CustomButton";

export const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-width relative flex flex-col xl:flex-row gap-5 z-0">
      <div className="flex-1 pt-28 px-6">
        <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-extrabold">
          Find, Book, Rent a car — Quickly and Easily..!
        </h1>
        <p className="mt-4 text-2xl font-light text-gray-600">
          Streamline your car rental experience with our effortless booking
          experience
        </p>
        <CustomButton
          title="Explore Cars"
          customStyle="bg-[#2B59FF] rounded-full mt-10"
          textStyle="text-white"
          handleClick={handleScroll}
        />
      </div>
      <div className="flex justify-end items-end w-full xl:flex-[1.5] xl:h-screen">
        <div className="relative w-[90%] h-[590px] xl:w-full xl:h-full">
          <Image src={`/hero.png`} fill alt="hero" className="object-contain" />
        </div>
        <div className="absolute -z-10 w-full h-[590px] -right-1/4 bg-repeat-round xl:-right-1/2 xl:-top-24 xl:h-screen">
          <Image src={`/hero-bg.png`} alt="hero-bg" fill/>
        </div>
      </div>
    </div>
  );
};
