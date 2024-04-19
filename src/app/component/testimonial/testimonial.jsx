"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import test from "../../../../public/testimonial-image.png";
import EmblaCarousel, { Carousel } from "../carousel/carousel";

// const OPTIONS = { loop: true };
// const SLIDE_COUNT = 3;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Testimonial() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`h-[47.875rem] w-auto py-[4.44rem] px-[3.88rem]  ${
          theme === "dark"
            ? "bg-about-bg transition duration-500 ease-in-out"
            : "bg-nav-text transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex  gap-[3.56rem]">
          <Image src={test} className="w-[55.3125rem] h-[39rem]" />
          <div className="w-[13rem] h-[4.5625rem] flex flex-col items-center gap-[0.25rem]">
            <p
              className={` text-[2rem] font-semibold leading-normal ${
                theme === "light"
                  ? " text-sterling-theme"
                  : "text-our-service-text"
              }`}
            >
              Testimonials
            </p>
            <p
              className={` text-[0.75rem] font-semibold leading-normal ${
                theme === "light"
                  ? " text-testimonial-text"
                  : "text-sterling-theme"
              }`}
            >
              what Our Clients Say
            </p>
          </div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </>
  );
}
