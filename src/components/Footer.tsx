import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-5 flex flex-col ">
      <div className="px-6 py-10 sm:px-16 flex flex-wrap justify-between gap-5 max-md:flex-col">
        <div className="flex-start flex-col gap-6">
          <Image
            src={`/logo.svg`}
            alt="logo"
            width={100}
            height={15}
            className="object-contain"
          />
          <p>
            Carhub 2023
            <br />
            All rights recieved &copy;
          </p>
        </div>
        <div className="w-full flex flex-1 md:justify-end gap-10 max-md:mt-10 flex-wrap">
          {footerLinks.map((items) => (
            <div key={items.title} className=" flex flex-col justify-between gap-6 min-w-[150px]">
              <h3 className="font-bold">{items.title}</h3>
              {items.links.map((content) => (
                <Link key={content.title} href={content.url}>
                  {content.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-10 sm:px-16 border-t border-gray-100 mt-5 flex-between  text-gray-600 flex-wrap gap-6">
        <p>@2023 Carhub. All Rights Reserved</p>
        <div className="flex-1 flex justify-center sm:justify-end gap-5 max-sm:mt-4">
          <Link href={`/`}>Privacy policy</Link>
          <Link href={`/`}>Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};
