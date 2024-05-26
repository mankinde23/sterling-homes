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
        className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:block 2xl-max:w-auto"
        id="about"
      >
        <div
          className={`h-[53.575rem] w-auto px-[4.51rem]  ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          id="about"
        >
          <div className="flex  justify-between gap-[3.94rem] items-center pt-[6.25rem]">
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
              <div className=" h-[18.75rem] w-[35.625rem] mt-[2.69rem]">
                <p
                  className={` text-[0.875rem] font-normal text-justify ${
                    theme === "light" ? "text-about-t" : "text-nav-text"
                  }`}
                >
                  Established on June 11, 2022, by accomplished founders with
                  extensive experience in technology across critical sectors in
                  the United States, our mission is to ensure customers enjoy an
                  exceptional experience throughout the entire lifecycle of home
                  ownership. From the initial search for a home to the purchase
                  process, ongoing house maintenance, and optimizing tax
                  benefits for both residential and commercial properties, we
                  are committed to delivering excellence. Through proactive
                  measures to identify and assess property risks, we have
                  successfully closed over 50 homes for our customers since our
                  inception, with a cumulative market value exceeding
                  $20,000,000. We take pride in achieving appreciable equity
                  growth for all our clients, distinguishing ourselves in both
                  residential and commercial real estate sectors.
                </p>
              </div>
            </div>
            <div>
              <Image src={mock} alt="" className="w-[45.3125rem]" />
            </div>
          </div>
          <div className="gap-[9.0625rem] flex  justify-between items-center mt-[7.56rem] w-auto h-[7.93rem]">
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
                Our company specializes in commercial and luxury home real
                estate, offering tailored solutions to meet client needs,
                ensuring seamless transactions, and delivering exceptional value
                and service.
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
                Our realtor services provide expert guidance in buying or
                selling properties, ensuring a smooth process, maximizing value,
                and delivering personalized solutions to meet your real estate
                goals.
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
                Our tax advisory services offer expert guidance on tax planning
                and compliance, optimizing financial strategies, ensuring
                regulatory compliance, and maximizing tax savings for
                individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE ....... */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:hidden">
        <div
          className={`h-[68.125rem] w-auto  px-[1.87rem] pt-[3.06rem] ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
        >
          <div className="h-[2.5625rem] w-auto">
            <div></div>
            <h1
              className={` text-[1.5rem] font-bold leading-normal  ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
              style={{ fontFamily: " Montserrat, sans-serif" }}
            >
              ABOUT US
            </h1>
            <p
              className=" text-sterling-theme text-[0.4375rem]
               font-medium leading-normal] mt-[0.25rem] tracking-[0.0525rem]"
              style={{ fontFamily: " Montserrat, sans-serif" }}
            >
              Est . 2024, March.
            </p>
          </div>
          <div className="mt-[1.38rem]">
            <Image src={mock} alt="" className="w-auto " />
          </div>

          <div className=" w-auto text-justify hyphens-auto mt-[1.75rem]">
            <p
              className={` text-[0.6875rem] font-extralight  ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Established on June 11, 2022, by accomplished founders with
              extensive experience in technology across critical sectors in the
              United States, our mission is to ensure customers enjoy an
              exceptional experience throughout the entire lifecycle of home
              ownership. From the initial search for a home to the purchase
              process, ongoing house maintenance, and optimizing tax benefits
              for both residential and commercial properties, we are committed
              to delivering excellence. Through proactive measures to identify
              and assess property risks, we have successfully closed over 50
              homes for our customers since our inception, with a cumulative
              market value exceeding $20,000,000. We take pride in achieving
              appreciable equity growth for all our clients, distinguishing
              ourselves in both residential and commercial real estate sectors.
            </p>
          </div>

          <div className="flex flex-col gap-[0.81rem] w-auto mt-[3.94rem]">
            <p
              className={` text-[0.875rem] font-semibold ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Commercial and Luxury Homes Focus
            </p>
            <p
              className={` text-[0.6875rem] font-thin leading-normal h-[6rem]  text-justify  hyphens-auto ${
                theme === "light" ? "text-about-s-w" : "text-about-s-b"
              }`}
            >
              Our company specializes in commercial and luxury home real estate,
              offering tailored solutions to meet client needs, ensuring
              seamless transactions, and delivering exceptional value and
              service.
            </p>
          </div>
          <div className="flex flex-col gap-[0.81rem] w-auto  mt-[0.31rem]">
            <p
              className={` text-[0.875rem] font-semibold ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Realtor Services Description
            </p>
            <p
              className={`text-[0.6875rem] font-thin leading-normal h-[6rem]  text-justify hyphens-auto ${
                theme === "light" ? "text-about-s-w" : "text-about-s-b"
              }`}
            >
              Our realtor services provide expert guidance in buying or selling
              properties, ensuring a smooth process, maximizing value, and
              delivering personalized solutions to meet your real estate goals.
            </p>
          </div>

          <div className="flex flex-col gap-[0.81rem] w-auto  mt-[0.31rem]">
            <p
              className={` text-[0.875rem] font-semibold ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              Tax Advisory
            </p>
            <p
              className={`text-[0.6875rem] font-thin leading-normal h-[6rem] text-justify hyphens-auto ${
                theme === "light" ? "text-about-s-w" : "text-about-s-b"
              }`}
            >
              Our tax advisory services offer expert guidance on tax planning
              and compliance, optimizing financial strategies, ensuring
              regulatory compliance, and maximizing tax savings for individuals
              and businesses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
