"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Ourservice() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`h-[47.875rem] w-auto px-[5.31rem]  pt-[3.5rem] ${
          theme === "dark"
            ? "bg-our-service-b transition duration-500 ease-in-out"
            : "bg-profile-b transition duration-500 ease-in-out"
        }`}
        id="services"
      >
        <div className="flex flex-col w-[8.75rem] h-[3.6875rem]">
          <p className="text-about-s-w text-[1rem] font-medium leading-normal  ">
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
        <div className="flex gap-[10.81rem] justify-between items-center mt-[2.81rem]">
          <div
            className="bg-cover pt-[21.375rem] h-[31.8125rem] w-[19.25rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
            style={{
              backgroundImage: "url('/service1.png')",
            }}
          >
            <div className="h-[10.4375rem] w-[19.25rem] pt-[0.9375rem] pr-[2.125rem] pb-[1.1875rem] pl-[0.8125rem] flex gap-[0.6875rem] flex-col  backdrop-blur-[7px] bg-navbar-bg">
              <div className="flex flex-col">
                <p className="text-[1rem] font-semibold leading-normal text-our-service-text">
                  Home Buying & Selling
                </p>
                <p className="text-[0.625rem] leading-normal font-normal text-our-servicet mt-[0.62rem] w-[16.3125rem] h-[2.53125rem]">
                  Helping clients navigate the process of buying and selling
                  both residential and commercial <br /> properties.
                </p>
              </div>
              <button className="w-[6.375rem] h-[2.1875rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] mt-[0.69rem]">
                <p className=" text-our-service-text text-[0.6875rem] font-semibold leading-normal">
                  Learn More
                </p>
              </button>
            </div>
          </div>

          <div
            className="bg-cover pt-[21.375rem] h-[31.8125rem] w-[19.25rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
            style={{
              backgroundImage: "url('/services2.png')",
            }}
          >
            <div className="h-[10.4375rem] w-[19.25rem] pt-[0.9375rem] pr-[2.125rem] pb-[1.1875rem] pl-[0.8125rem] flex gap-[0.6875rem] flex-col  backdrop-blur-[7px] bg-navbar-bg">
              <div className="flex flex-col">
                <p className="text-[1rem] font-semibold leading-normal text-our-service-text">
                  Home Leasing Service
                </p>
                <p className="text-[0.625rem] leading-normal font-normal text-our-servicet mt-[0.62rem] w-[16.3125rem] h-[2.53125rem]">
                  Facilitating quicker rental property leases by accurately
                  pricing properties to attract tenants <br /> efficiently.{" "}
                </p>
              </div>
              <button className="w-[6.375rem] h-[2.1875rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] mt-[0.69rem]">
                <p className=" text-our-service-text text-[0.6875rem] font-semibold leading-normal">
                  Learn More
                </p>
              </button>
            </div>
          </div>

          <div
            className="bg-cover pt-[21.375rem] h-[31.8125rem] w-[19.25rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
            style={{
              backgroundImage: "url('/services3.png')",
            }}
          >
            <div className="h-[10.4375rem] w-[19.25rem] pt-[0.9375rem] pr-[2.125rem] pb-[1.1875rem] pl-[0.8125rem] flex gap-[0.6875rem] flex-col  backdrop-blur-[7px] bg-navbar-bg">
              <div className="flex flex-col">
                <p className="text-[1rem] font-semibold leading-normal text-our-service-text">
                  Tax Preparation & Filing
                </p>
                <p className="text-[0.625rem] leading-normal font-normal text-our-servicet mt-[0.62rem] w-[16.3125rem] h-[2.53125rem]">
                  Providing strategic tax planning and filing services tailored
                  for real estate investors to optimize <br /> tax benefits and
                  maximize gains.
                </p>
              </div>
              <button className="w-[6.375rem] h-[2.1875rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] mt-[0.69rem]">
                <p className=" text-our-service-text text-[0.6875rem] font-semibold leading-normal">
                  Learn More
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
