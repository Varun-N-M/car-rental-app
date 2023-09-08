"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SearchManufacturer } from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={` z-10 rounded-full ${otherClasses}`}>
    <Image
      src={`/magnifying-glass.svg`}
      width={40}
      height={40}
      className="object-contain "
      alt="search icon"
    />
  </button>
);

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter()

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(manufacturer === "" && model === ""){
      return alert("Please fill any one field")
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  };

  const updateSearchParams = (model:string,manufacturer:string) =>{
    const searchParams = new URLSearchParams(window.location.search)

    if(model){
      searchParams.set("model",model)
    }
    else{
      searchParams.delete('model')
    }
    if(manufacturer){
      searchParams.set("manufacturer",manufacturer)
    }
    else{
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName, {scroll:false} )
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-3xl relative flex justify-start items-center max-sm:flex-col max-sm:gap-5 gap-3"
    >
      <div className="relative flex flex-1 justify-start items-center max-sm:w-full rounded-lg">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative  shadow-xl rounded-lg">
        <Image
          src={`/model-icon.png`}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="something"
        />
        <input
          type="text"
          className="w-full h-[48px] pl-12 p-4  rounded-lg max-sm:rounded-full outline-none text-sm bg-gray-100 bg-opacity-50"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />

    </form>
  );
};




