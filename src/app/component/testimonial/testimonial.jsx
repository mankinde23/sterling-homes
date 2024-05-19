"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import test from "../../../../public/testimonial-image.png";
import EmblaCarousel, { Carousel } from "../carousel/carousel";

export default function Testimonial() {
  const { theme } = useTheme();
  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:block">
        <div
          className={`h-[47.875rem] w-auto py-[4.44rem] px-[3.88rem]  ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          id="testimonials"
        >
          <div className="flex  gap-[3.56rem]">
            <Image src={test} alt="" className="w-[55.3125rem] h-[39rem]" />
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
                className={` text-[0.75rem] font-semibold leading-normal mb-[2.19rem] ${
                  theme === "light"
                    ? " text-testimonial-text"
                    : "text-sterling-theme"
                }`}
              >
                what Our Clients Say
              </p>
              <div className="mb-[2.19rem]">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:hidden ">
        <div
          className={`h-[24.125rem] w-auto pt-[2.38rem] pr-[1.88rem] pb-[1.2rem] pl-[1.88rem] flex flex-col gap-[0.69rem] items-center ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          id="testimonials"
        >
          <div className="w-[8.5625rem] h-[3rem] flex flex-col gap-[0.1rem] items-center">
            <p
              className={` text-[1rem] font-semibold leading-normal ${
                theme === "light"
                  ? " text-sterling-theme"
                  : "text-our-service-text"
              }`}
            >
              Testimonials
            </p>
            <p
              className={` text-[0.6875rem] font-medium leading-normal ${
                theme === "light"
                  ? " text-testimonial-text"
                  : "text-sterling-theme"
              }`}
            >
              what Our Clients Say
            </p>
          </div>

          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
