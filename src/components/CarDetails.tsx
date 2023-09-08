"use client";

import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";
import { join } from "path";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModel: () => void;
}

export const CarDetails = ({ car, isOpen, closeModel }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={`relative z-10`} onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center items-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full bg-white max-w-lg min-h-[95vh] overflow-y-auto rounded-3xl p-6 shadow-xl flex flex-col gap-5 text-left transform transition-all">
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute z-10 w-fit bg-[#F5F8FF] rounded-full p-2 top-2 right-2"
                  >
                    <Image
                      src={`/close.svg`}
                      width={20}
                      height={20}
                      alt="close"
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative bg-pattern bg-cover bg-center w-full h-40 rounded-2xl">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="main profile"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="relative w-full h-24 bg-[#F5F8FF] rounded-lg flex items-center justify-center">
                        <Image
                          src={generateCarImageUrl(car,"29")}
                          alt="main profile"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-full h-24 bg-[#F5F8FF] rounded-lg ">
                        <Image
                          src={generateCarImageUrl(car,"33")}
                          alt="main profile"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-full h-24 bg-[#F5F8FF] rounded-lg">
                        <Image
                          src={generateCarImageUrl(car,"13")}
                          alt="main profile"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between w-full text-right"
                          key={key}
                        >
                          <h2 className="capitalize">
                            {key.split("_").join(" ")}
                          </h2>
                          <p className="text-black capitalize font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
