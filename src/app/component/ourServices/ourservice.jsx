"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Ourservice() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`h-[47.875rem] w-auto px-[5.31rem] ${
          theme === "dark"
            ? "bg-our-service-b transition duration-500 ease-in-out"
            : "bg-our-service transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex flex-col w-[8.75rem] h-[3.6875rem]">
          <p className="text-about-s-w text-[1rem] font-medium leading-normal">
            Our
          </p>
          <h1
            className={` text-[1.75rem] font-semibold leading-normal ${
              theme === "light" ? "text-about-b" : "text-nav-text"
            }`}
          >
            Services
          </h1>
        </div>
      </div>
    </>
  );
}
