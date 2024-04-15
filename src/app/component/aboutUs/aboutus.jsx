"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import mock from "../../../../public/video-mock.png";

export default function Aboutus() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`h-[53.575rem] w-auto ${
          theme === "dark"
            ? "bg-about-bg transition duration-500 ease-in-out"
            : "bg-nav-text transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex justify-center gap-[3.94rem] items-center pt-[6.25rem]">
          <div>
            <div className="h-[5.8125rem]">
              <h1
                className={` text-[3.3125rem] font-bold leading-normal ${
                  theme === "light" ? "text-about-b" : "text-nav-text"
                }`}
              >
                ABOUT US
              </h1>
              <p className=" text-sterling-theme text-[0.875rem] font-medium leading-[0.105rem]">
                Est . 2024, March.
              </p>
            </div>
            <div className=" h-[18.75rem] w-[30.625rem]">
              <p
                className={` text-[0.875rem] font-normal ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Established on June 11, 2022, by accomplished founders with
                extensive experience in technology across critical sectors in
                the United States, our mission is to ensure customers enjoy an
                exceptional experience throughout the entire lifecycle of home
                ownership. From the initial search for a home to the purchase
                process, ongoing house maintenance, and optimizing tax benefits
                for both residential and commercial properties, we are committed
                to delivering excellence. Through proactive measures to identify
                and assess property risks, we have successfully closed over 50
                homes for our customers since our inception, with a cumulative
                market value exceeding $20,000,000. We take pride in achieving
                appreciable equity growth for all our clients, distinguishing
                ourselves in both residential and commercial real estate
                sectors.
              </p>
            </div>
          </div>
          <div>
            <Image src={mock} className="w-[45.3125rem]" />
          </div>
        </div>
        <div className="gap-[9.0625rem] flex justify-center items-center mt-[7.56rem]">
          <div className="flex flex-col gap-[0.8125rem] w-[24.5rem]">
            <p
              className={` text-[1.25rem] font-semibold ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Commercial and Luxury Homes Focus
            </p>
            <p
              className={` text-[0.75rem] font-normal leading-normal h-[5.625rem] w-[19.18rem] ${
                theme === "light" ? "text-about-s-w" : "text-about-s-b"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur. In cras ornare urna ut.
              Purus eget amet ultrices vivamus eu. Pellentesque sagittis lacinia
              in volutpat. Lorem eu velit lobortis vel suspendisse nec.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[0.8125rem] w-[19.1875rem]">
            <p
              className={` text-[1.25rem] font-semibold ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Realtor Services Description
            </p>
            <p
              className={` text-[0.75rem] font-normal leading-normal h-[5.625rem] w-[19.18rem] ${
                theme === "light" ? "text-about-s-w" : "text-about-s-b"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur. In cras ornare urna ut.
              Purus eget amet ultrices vivamus eu. Pellentesque sagittis lacinia
              in volutpat. Lorem eu velit lobortis vel suspendisse nec.{" "}
            </p>
          </div>

          <div className="flex flex-col gap-[0.8125rem] w-[19.1875rem]">
            <p
              className={` text-[1.25rem] font-semibold ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Tax Advisory
            </p>
            <p
              className={` text-[0.75rem] font-normal leading-normal h-[5.625rem] w-[19.18rem] ${
                theme === "light" ? "text-about-s-w" : "text-about-s-b"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur. In cras ornare urna ut.
              Purus eget amet ultrices vivamus eu. Pellentesque sagittis lacinia
              in volutpat. Lorem eu velit lobortis vel suspendisse nec.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
