"use client";

import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

export const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");



  const filteredManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s/g, ""))
        );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center ">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <div className="relative w-full cursor-default overflow-hidden overflow-y-auto rounded-lg  text-left bg-gray-100 bg-opacity-50 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm px-3">
            <Combobox.Button className="absolute top-[14px]">
              <Image
                src={`/car-logo.svg`}
                alt="make-loge"
                width={20}
                height={20}
                className="object-contain"
              />
            </Combobox.Button>
            <Combobox.Input
              className="w-full h-[48px] pl-8 p-4 rounded-lg bg-transparent outline-none text-sm"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufacturer.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#2B59FF] text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
