"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import mock from "../../../../public/video-mock.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Aboutus() {
  const { theme } = useTheme();
  // const ref1 = useRef(null);
  // const isInView = useInView(ref1, { once: true });
  // const isInView = useInView({ threshold: 0 });

  // const ref1 = useRef(null);
  // // const { ref: refInView, inView: isInView } = useInView({ threshold: 0 });
  // const isInView = useInView(ref1);

  // useEffect(() => {
  //   if (isInView) {
  //     // Your animation logic when the component is in view
  //     // console.log("Component is in view!");   animate={{ opacity: shouldAnimate && isInView ? 1 : 0, y: shouldAnimate && isInView ? 0 : 50 }}
  //   }
  // }, [isInView]);

  // const [shouldAnimate, setShouldAnimate] = useState(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShouldAnimate(true);
  //   }, 2000); // Adjust the delay as needed (in milliseconds)

  //   return () => clearTimeout(timeout);
  // }, []);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const [shouldAnimate1, setShouldAnimate1] = useState(false);
  const [animateImage1, setAnimateImage1] = useState(false);
  const [shouldAnimateP, setShouldAnimateP] = useState(false);

  useEffect(() => {
    if (isInView1) {
      setShouldAnimate1(true);
      const timeoutImage = setTimeout(() => {
        setAnimateImage1(true);
      }, 1000); // 2 seconds delay for image animation
      const timeoutP = setTimeout(() => {
        setShouldAnimateP(true);
      }, 1000); // 1 second delay for second paragraph animation

      return () => {
        clearTimeout(timeoutImage);
        clearTimeout(timeoutP);
      };
    }
  }, [isInView1]);

  return (
    <>
      <div
        className="sm:hidden 2xl:block 2xl-max:block xl:block lg:hidden  md:hidden 2xl-max:w-auto"
        id="about"
      >
        <div
          className={`h-auto w-auto px-[3.75rem] pb-[5rem] ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          id="about"
          ref={ref1}
        >
          <div className="flex  gap-[3.45rem] items-center pt-[5.25rem] justify-between flex-col">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: shouldAnimate1 ? 1 : 0,
                  y: shouldAnimate1 ? 0 : 0,
                }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
                exit={{ opacity: 0 }}
                className="h-auto"
              >
                <h1
                  className={` text-[3.3125rem] font-bold leading-normal ${
                    theme === "light" ? "text-about-b" : "text-nav-text"
                  }`}
                  style={{ fontFamily: " Montserrat, sans-serif" }}
                >
                  ABOUT US
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: animateImage1 ? 1 : 0,
                  y: animateImage1 ? 0 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                exit={{ opacity: 0 }}
                className="mt-[1.41rem]"
              >
                <Image src={mock} alt="video" className="" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: animateImage1 ? 1 : 0,
                y: animateImage1 ? 0 : 0,
              }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0 }}
              className=" h-auto w-auto mt-[1.87rem]"
            >
              <p
                className={` text-[1.25rem] font-normal text-justify leading-[2.55rem] hyphens-auto ${
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
                to delivering excellence.
              </p>
              <p
                className={` text-[1.25rem] font-normal text-justify leading-[2.55rem] mt-[1.87rem] hyphens-auto ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Through proactive measures to identify and assess property
                risks, we have successfully closed over 50 homes for our
                customers since our inception, with a cumulative market value
                exceeding $20,000,000. We take pride in achieving appreciable
                equity growth for all our clients, distinguishing ourselves in
                both residential and commercial real estate sectors.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: animateImage1 ? 1 : 0,
              y: animateImage1 ? 0 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="gap-[3.62rem] flex items-baseline justify-between mt-[7.56rem] w-auto h-auto flex-col"
          >
            <div className="flex flex-col gap-[0.81rem] ">
              <p
                className={` text-[1.375rem] font-semibold ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Commercial and Luxury Homes Focus
              </p>
              <p
                className={` text-[1.0625rem] font-normal  h-[5.625rem]  leading-normal ${
                  theme === "light" ? "text-about-s-w" : "text-about-s-b"
                }`}
              >
                Our company specializes in commercial and luxury home real
                estate, offering tailored solutions to meet client needs,
                ensuring seamless transactions, and delivering exceptional value
                and service.
              </p>
            </div>
            <div className="flex flex-col gap-[0.81rem]">
              <p
                className={` text-[1.375rem] font-semibold ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Realtor Services Description
              </p>
              <p
                className={` text-[1.0625rem] font-normal leading-normal h-[5.625rem]  ${
                  theme === "light" ? "text-about-s-w" : "text-about-s-b"
                }`}
              >
                Our realtor services provide expert guidance in buying or
                selling properties, ensuring a smooth process, maximizing value,
                and delivering personalized solutions to meet your real estate
                goals.
              </p>
            </div>

            <div className="flex flex-col gap-[0.81rem] ">
              <p
                className={` text-[1.375rem] font-semibold ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Tax Advisory
              </p>
              <p
                className={` text-[1.0625rem] font-normal leading-normal h-[5.625rem] ${
                  theme === "light" ? "text-about-s-w" : "text-about-s-b"
                }`}
              >
                Our tax advisory services offer expert guidance on tax planning
                and compliance, optimizing financial strategies, ensuring
                regulatory compliance, and maximizing tax savings for
                individuals and businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE ....... */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:block sm:block md:block">
        <div
          className={`h-auto w-auto  px-[1.87rem] pt-[3.06rem] pb-[3.75rem] ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          ref={ref1}
        >
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: shouldAnimate1 ? 1 : 0,
              y: shouldAnimate1 ? 0 : 0,
            }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
            exit={{ opacity: 0 }}
            className="h-[2.5625rem] w-auto"
          >
            <div></div>
            <h1
              className={` text-[1.5rem] font-bold leading-normal  ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
              style={{ fontFamily: " Montserrat, sans-serif" }}
            >
              ABOUT US
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: animateImage1 ? 1 : 0,
              y: animateImage1 ? 0 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="mt-[1.38rem]"
          >
            <Image src={mock} alt="" className="w-auto " />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: animateImage1 ? 1 : 0,
              y: animateImage1 ? 0 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className=" w-auto text-justify hyphens-auto mt-[1.75rem] flex flex-col gap-[3rem]"
          >
            <p
              className={` text-[0.875rem] font-extralight leading-[1.4875rem] ${
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
              to delivering excellence.{" "}
            </p>
            <p
              className={` text-[0.875rem] font-extralight leading-[1.4875rem] ${
                theme === "light" ? "text-about-t" : "text-nav-text"
              }`}
            >
              {" "}
              Through proactive measures to identify and assess property risks,
              we have successfully closed over 50 homes for our customers since
              our inception, with a cumulative market value exceeding
              $20,000,000. We take pride in achieving appreciable equity growth
              for all our clients, distinguishing ourselves in both residential
              and commercial real estate sectors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: animateImage1 ? 1 : 0,
              y: animateImage1 ? 0 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-[0.81rem] w-auto mt-[10rem]">
              <p
                className={` text-[0.875rem] font-semibold ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Commercial and Luxury Homes Focus
              </p>
              <p
                className={` text-[0.8125rem] font-thin leading-normal h-auto  text-justify  hyphens-auto ${
                  theme === "light" ? "text-about-s-w" : "text-about-s-b"
                }`}
              >
                Our company specializes in commercial and luxury home real
                estate, offering tailored solutions to meet client needs,
                ensuring seamless transactions, and delivering exceptional value
                and service.
              </p>
            </div>
            <div className="flex flex-col gap-[0.81rem] w-auto  mt-[3.62rem]">
              <p
                className={` text-[0.875rem] font-semibold ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Realtor Services Description
              </p>
              <p
                className={`text-[0.8125rem] font-thin leading-normal h-auto  text-justify hyphens-auto ${
                  theme === "light" ? "text-about-s-w" : "text-about-s-b"
                }`}
              >
                Our realtor services provide expert guidance in buying or
                selling properties, ensuring a smooth process, maximizing value,
                and delivering personalized solutions to meet your real estate
                goals.
              </p>
            </div>

            <div className="flex flex-col gap-[0.81rem] w-auto  mt-[3.62rem]">
              <p
                className={` text-[0.875rem] font-semibold ${
                  theme === "light" ? "text-about-t" : "text-nav-text"
                }`}
              >
                Tax Advisory
              </p>
              <p
                className={`text-[0.8125rem] font-thin leading-normal h-auto text-justify hyphens-auto ${
                  theme === "light" ? "text-about-s-w" : "text-about-s-b"
                }`}
              >
                Our tax advisory services offer expert guidance on tax planning
                and compliance, optimizing financial strategies, ensuring
                regulatory compliance, and maximizing tax savings for
                individuals and businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
