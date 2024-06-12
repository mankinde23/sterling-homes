"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import test from "../../../../public/testimonial-image.png";
import test2 from "../../../../public/test2.png";

import EmblaCarousel, { Carousel } from "../carousel/carousel";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Testimonial() {
  const { theme } = useTheme();
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
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:hidden">
        <div
          className={`h-auto w-auto py-[4.44rem] px-[3.23rem] lg:px-[3rem] ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          id="testimonials"
          ref={ref1}
        >
          <div className="flex  gap-[3.56rem] lg:gap-[2.51rem] lg:block">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: animateImage1 ? 1 : 0,
                y: animateImage1 ? 0 : 0,
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={test}
                alt=""
                className=" lg:hidden w-[46.09375rem] h-[39rem] "
              />
            </motion.div>
            <div className="w-[13rem] h-[4.5625rem] flex flex-col items-center gap-[0.25rem] lg:w-auto lg:h-auto xl:ml-0 ml-[5rem]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: shouldAnimate1 ? 1 : 0,
                  y: shouldAnimate1 ? 0 : 50,
                }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
                exit={{ opacity: 0 }}
              >
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
                  className={` text-[0.75rem] font-semibold leading-normal mb-[2.19rem] lg:flex lg:justify-center flex justify-center ${
                    theme === "light"
                      ? " text-testimonial-text"
                      : "text-sterling-theme"
                  }`}
                >
                  what Our Clients Say
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: shouldAnimateP ? 1 : 0,
                  y: shouldAnimateP ? 0 : 0,
                }}
                transition={{ duration: 1, ease: "easeIn" }}
                exit={{ opacity: 0 }}
                className="mb-[2.19rem] relative right-[6rem] lg:right-0"
              >
                <Carousel />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:block ">
        <div
          className={`h-[24.125rem] w-auto pt-[2.38rem] pr-[1.88rem] pb-[1.2rem] pl-[1.88rem] flex flex-col gap-[0.69rem] items-center md:h-auto ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
        >
          <div className="w-[8.5625rem] h-[3rem] flex flex-col gap-[0.1rem] items-center">
            <p
              className={` text-[1.25rem] font-semibold leading-normal ${
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
