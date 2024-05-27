"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Founders() {
  const { theme } = useTheme();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const [shouldAnimate1, setShouldAnimate1] = useState(false);
  const [animateImage1, setAnimateImage1] = useState(false);

  useEffect(() => {
    if (isInView1) {
      setShouldAnimate1(true);
      const timeoutImage = setTimeout(() => {
        setAnimateImage1(true);
      }, 1500); // 2 seconds delay for image animation

      return () => {
        clearTimeout(timeoutImage);
      };
    }
  }, [isInView1]);
  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:block">
        <div
          className={`h-[60.1875rem] w-auto py-[4.5rem] flex ${
            theme === "dark"
              ? "bg-our-service-b transition duration-500 ease-in-out"
              : "bg-profile-b transition duration-500 ease-in-out"
          }`}
          ref={ref1}
        >
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: shouldAnimate1 ? 1 : 0,
              y: shouldAnimate1 ? 0 : 0,
            }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.6 }}
            exit={{ opacity: 0 }}
            className="flex w-[22.3125rem] h-[8.75rem] px-[3.0625rem] py-[0rem] flex-col gap-[0.73rem] mt-[16.72rem]"
          >
            <div className=" w-[19.25rem] gap-[0.8125rem] flex items-center">
              <div className="w-[3.75rem] h-[0.125rem] rounded-[2.125rem] bg-sterling-theme"></div>
              <p className="text-sterling-theme text-[0.9375rem] font-semibold tracking-[0.10313rem] leading-normal">
                FOUNDERS{" "}
              </p>
            </div>
            <p
              className={` text-[2.5rem] font-semibold leading-normal tracking-[0.4rem] ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
            >
              PROFILE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: animateImage1 ? 1 : 0,
              x: animateImage1 ? 0 : -100,
            }}
            transition={{ duration: 1.5, ease: "backOut" }}
            exit={{ opacity: 0 }}
            className="flex gap-[4.87rem] items-center"
          >
            <div
              className="bg-cover pt-[2.06rem] h-[50.375rem] w-[28.3125rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col gap-[29.92rem] "
              style={{
                backgroundImage: "url('founder.png')",
              }}
            >
              <div className="flex justify-end">
                <div className="w-[10.0625rem] h-[2.5254rem]  px-[1.19rem] bg-sterling-theme justify-center flex-col items-start">
                  <p
                    className="text-[0.75rem] font-medium leading-[1rem] text-nav-text my-[0.76rem]"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    FOUNDER
                  </p>
                </div>
              </div>
              <div className="w-[28.3125rem] h-[16.1875rem] bg-navbar-bg backdrop-blur-[20px] ">
                <div className="h-[1.5rem] w-[23.9375rem] flex justify-between items-center ml-[1.69rem] mt-[1.94rem] mr-[2.69rem]">
                  <p className="text-nav-text text-[1.25rem] font-semibold leading-normal">
                    Adesoji Bello
                  </p>
                  <div className="flex w-[4.4375rem] h-[1.8125rem] gap-[0.6875rem]">
                    <a
                      href="https://www.linkedin.com/in/adesoji-bello-ba930556/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-full bg-founders-link hover:bg-link-hover transition duration-500 ease-in-out">
                        <IoLogoLinkedin className="text-founders-socials" />
                      </div>
                    </a>

                    <a
                      href="https://twitter.com/sojiadvanced"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-full bg-founders-link hover:bg-link-hover transition duration-500 ease-in-out">
                        <FaXTwitter className="text-founders-socials" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-[24.5rem] h-[9.75rem] ml-[1.69rem]  mr-[2.13rem] mt-[1.88rem]">
                  <p className="text-[0.75rem] font-medium leading-[1.21925rem] text-founders-text">
                    Soji is a skilled commercial realtor and seasoned home
                    leasing <br />
                    service agent. With expertise in real estate tax planning
                    and <br />
                    filing, Soji excels in maximizing returns for real estate{" "}
                    investors <br /> across the United States.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-cover pt-[2.06rem] h-[50.375rem] w-[28.3125rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col gap-[29.92rem] "
              style={{
                backgroundImage: "url('co-founder.png')",
              }}
            >
              <div className="flex justify-end">
                <div className="w-[10.0625rem] h-[2.5254rem]  px-[1.19rem] bg-sterling-theme justify-center flex-col items-start">
                  <p
                    className="text-[0.75rem] font-medium leading-[1rem] text-nav-text my-[0.76rem]"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    CO. FOUNDER
                  </p>
                </div>
              </div>
              <div className="w-[28.3125rem] h-[16.1875rem] bg-navbar-bg backdrop-blur-[20px] ">
                <div className="h-[1.5rem] w-[23.9375rem] flex justify-between items-center ml-[1.69rem] mt-[1.94rem] mr-[2.69rem]">
                  <p className="text-nav-text text-[1.25rem] font-semibold leading-normal">
                    Rukayat Adeosun
                  </p>
                  <div className=" w-[4.4375rem] h-[1.8125rem] flex justify-end">
                    <a
                      href="https://www.linkedin.com/in/rukayat-adeosun-287438147/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-full bg-founders-link hover:bg-link-hover transition duration-500 ease-in-out">
                        <IoLogoLinkedin className="text-founders-socials" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-[24.5rem] h-[9.75rem] ml-[1.69rem]  mr-[2.13rem] mt-[1.88rem]">
                  <p className="text-[0.75rem] font-medium leading-[1.21925rem] text-founders-text">
                    With over 5 years of expertise in real estate transactions,{" "}
                    <br />
                    including buying and selling homes and negotiating <br />{" "}
                    exceptional deals for clients, Rukayat also specializes in
                    creating <br /> captivating interior designs that enhance
                    the appeal and <br /> ambiance of rental properties.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile ...... */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:hidden ">
        <div
          className={`h-[95rem] w-auto pt-[1.88rem] ${
            theme === "dark"
              ? "bg-our-service-b transition duration-500 ease-in-out"
              : "bg-profile-b transition duration-500 ease-in-out"
          }`}
        >
          <div className="flex w-[6.875rem] h-[2.625rem] flex-col px-[1.87rem]">
            <div className=" w-[5.6875rem] gap-[0.5rem] flex items-center h-[1.125rem]">
              <div className="w-[1.625rem] h-[0.0625rem] rounded-[2.125rem] bg-sterling-theme"></div>
              <p className="text-sterling-theme text-[0.5rem] font-semibold tracking-[0.055rem] leading-normal">
                FOUNDERS{" "}
              </p>
            </div>
            <p
              className={` text-[1.25rem] font-semibold leading-normal tracking-[0.2rem] ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
            >
              PROFILE
            </p>
          </div>

          <div className="flex gap-[3.19rem]  px-[1.87rem] flex-col mt-[1.56rem]">
            <div
              className="bg-cover h-[41.4375rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col gap-[23.75rem] "
              style={{
                backgroundImage: "url('foundermt.png')",
              }}
            >
              <div className="flex justify-end mt-[1.8rem]">
                <div className="w-[7.70031rem] h-[2.07731rem] px-[1.19rem] bg-sterling-theme justify-center flex-col items-start">
                  <p
                    className="text-[0.75rem] font-medium leading-[1rem] text-nav-text my-[0.54rem]"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    FOUNDER
                  </p>
                </div>
              </div>
              <div className="w-auto h-[13.8125rem] bg-navbar-bg backdrop-blur-[20px] ">
                <div className="h-[1.5rem] w-auto flex justify-between items-center ml-[1.19rem] mt-[2.19rem] mr-[1.63rem]">
                  <p className="text-nav-text text-[1rem] font-semibold leading-normal">
                    Adesoji Bello
                  </p>
                  <div className="flex w-[4.4375rem] h-[1.8125rem] gap-[0.69rem]">
                    <a
                      href="https://www.linkedin.com/in/adesoji-bello-ba930556/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-full bg-founders-link">
                        <IoLogoLinkedin className="text-founders-socials" />
                      </div>
                    </a>

                    <a
                      href="https://twitter.com/sojiadvanced"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-full bg-founders-link">
                        <FaXTwitter className="text-founders-socials" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-auto h-[7.75rem] ml-[1.19rem]  mr-[1.63rem] mt-[1.06rem]">
                  <p className="text-[0.65rem] font-normal  text-founders-text">
                    Soji is a skilled commercial realtor and seasoned home
                    leasing service agent. With expertise in real estate tax
                    planning and filing, Soji excels in maximizing returns for
                    real estate investors across the United States.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-cover  h-[41.4375rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col gap-[23.75rem] "
              style={{
                backgroundImage: "url('co-foundermtt.png')",
              }}
            >
              <div className="flex justify-end mt-[1.8rem]">
                <div className="w-[7.70031rem] h-[2.07731rem]    px-[1.19rem] bg-sterling-theme justify-center flex-col items-start">
                  <p
                    className="text-[0.75rem] font-medium leading-[1rem] text-nav-text my-[0.54rem]"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    CO. FOUNDER
                  </p>
                </div>
              </div>
              <div className="w-auto h-[13.8125rem] bg-navbar-bg backdrop-blur-[20px] ">
                <div className="h-[1.5rem] w-auto flex justify-between items-center ml-[1.19rem] mt-[2.19rem] mr-[1.63rem]">
                  <p className="text-nav-text text-[1rem] font-semibold leading-normal">
                    Rukayat Adeosun
                  </p>
                  <div className=" w-[4.4375rem] h-[1.8125rem] flex justify-end">
                    <a
                      href="https://www.linkedin.com/in/rukayat-adeosun-287438147/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-[1.875rem] h-[1.875rem] flex items-center justify-center rounded-full bg-founders-link">
                        <IoLogoLinkedin className="text-founders-socials" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-auto  h-[7.75rem] ml-[1.19rem]  mr-[1.63rem] mt-[1.06rem]">
                  <p className="text-[0.65rem] font-normal leading-[1.01606rem] text-founders-text">
                    With over 5 years of expertise in real estate transactions,
                    including buying and selling homes and negotiating
                    exceptional deals for clients, Rukayat also specializes in
                    creating captivating interior designs that enhance the
                    appeal and ambiance of rental properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
