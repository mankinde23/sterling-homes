"use client";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../../public/sterling-logo-footer.png";
import logom from "../../../../public/sterling-logo-footerm.png";
import { FaXTwitter } from "react-icons/fa6";
// import Link from "next/link";
import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Footer() {
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
        className="sm:hidden 2xl:block 2xl-max:block xl:block lg:hidden  md:hidden"
        style={{ width: "auto" }}
        ref={ref1}
      >
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: shouldAnimate1 ? 1 : 0,
            y: shouldAnimate1 ? 0 : 0,
          }}
          transition={{ duration: 1, ease: "easeIn" }}
          exit={{ opacity: 0 }}
          className="w-auto h-[28.375rem] bg-footer-b"
        >
          <div className="flex gap-[2rem] items-center justify-center pt-[6.5rem] px-[3.75rem]">
            <div className="w-[51.875rem] h-[8.6875rem] flex gap-[4.25rem] justify-between">
              <div className="w-auto h-[8.68rem]">
                <p className="w-auto h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem]">
                  MORE INFO
                </p>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-28}
                  duration={900}
                  className="transition duration-500 ease-in-out hover:cursor-pointer"
                >
                  <p className="w-auto h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1">
                    Our Services
                  </p>
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  // offset={-28}
                  duration={900}
                  className="transition duration-500 ease-in-out hover:cursor-pointer"
                >
                  <p className="w-auto h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1">
                    About Us
                  </p>
                </Link>
              </div>
              <div className="w-auto h-[8.68rem]">
                <p className="w-auto h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem]">
                  FOLLOW US
                </p>
                <a
                  href="https://www.twitter.com/sterlinghomes22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-[1rem] items-center"
                >
                  <FaXTwitter className="w-[1.0625rem] h-[1.0625rem] text-footer-test1" />
                  <p className="text-[1rem] font-light leading-[3rem] tracking-[0.04rem] text-footer-test1">
                    Twitter
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/sterlinghomes22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-[1rem] items-center"
                >
                  <FaInstagram className=" w-[1.0625rem] h-[1.0625rem] text-footer-test1" />
                  <p className="text-[0.9375rem] font-normal leading-[3rem] tracking-[0.0375rem] text-footer-test1">
                    Instagram
                  </p>
                </a>
              </div>
              <div className="w-auto h-[8.68rem]">
                <p className="w-auto h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem]">
                  CONTACT US
                </p>
                <a href="mailto:help@sterlinghms.com?subject=Sterling Home's Inquiry&body=Hello, I would like to inquire about your catalogue.">
                  <p className="w-auto h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1">
                    help@sterlinghms.com
                  </p>
                </a>

                <p className="w-auto h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1">
                  +1 (770) 480-9107
                </p>
              </div>
            </div>
            <div className="w-[16.75rem] h-[10.99219rem]">
              <Image src={logo} alt="" />
            </div>
          </div>
          <div className="h-[0.125rem] rounded-[2.125rem] bg-footer-s mx-[5.5rem] mt-[4.84rem] 2xl-max:w-auto"></div>
          <div className="flex justify-center items-center mt-[1.72rem]">
            <p className="w-[20.125rem] h-[2.4375rem] text-[0.6875rem] font-normal leading-normal text-copy-t flex justify-center items-center">
              Copyright © 2024 Sterling Homes,All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* TAB */}
      <div
        className="sm:hidden 2xl:hidden 2xl-max:hidden xl:hidden lg:block  md:hidden hidden"
        style={{ width: "auto" }}
      >
        <div className="w-auto h-[28.375rem] bg-footer-b">
          <div className="flex gap-[2rem] items-center justify-center pt-[6.5rem]">
            <div className="w-[62.25rem] h-[8.6875rem] flex gap-[4.25rem] lg:w-auto lg:gap-[9.92rem]">
              <div className="w-[17.91rem] h-[8.68rem] lg:w-auto lg:h-auto">
                <p className="w-[17.0625rem] h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem] lg:text-[0.875rem] lg:w-auto">
                  MORE INFO
                </p>
                <Link
                  to="servicesm"
                  spy={true}
                  smooth={true}
                  offset={-28}
                  duration={900}
                  className="transition duration-500 ease-in-out hover:cursor-pointer"
                >
                  <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1 lg:text-[0.6875rem] lg:w-auto lg:h-auto">
                    Our Services
                  </p>
                </Link>
                <Link
                  to="aboutm"
                  spy={true}
                  smooth={true}
                  // offset={-28}
                  duration={900}
                  className="transition duration-500 ease-in-out hover:cursor-pointer"
                >
                  <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1 lg:text-[0.6875rem] lg:w-auto lg:h-auto">
                    About Us
                  </p>
                </Link>
              </div>
              <div className="w-[17.91rem] h-[8.68rem] lg:w-auto lg:h-auto">
                <p className="w-[17.0625rem] h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem] lg:text-[0.875rem] lg:w-auto">
                  FOLLOW US
                </p>
                <a
                  href="https://www.twitter.com/sterlinghomes22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-[1rem] items-center"
                >
                  <FaXTwitter className="w-[1.0625rem] h-[1.0625rem] text-footer-test1" />
                  <p className="text-[1rem] font-light leading-[3rem] tracking-[0.04rem] text-footer-test1 lg:text-[0.6875rem] lg:w-auto lg:h-auto">
                    Twitter
                  </p>
                </a>
                <a
                  href="https://www.instagram.com/sterlinghomes22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-[1rem] items-center"
                >
                  <FaInstagram className=" w-[1.0625rem] h-[1.0625rem] text-footer-test1" />
                  <p className="text-[0.9375rem] font-normal leading-[3rem] tracking-[0.0375rem] text-footer-test1 lg:text-[0.6875rem] lg:w-auto lg:h-auto">
                    Instagram
                  </p>
                </a>
              </div>
              <div className="w-[17.91rem] h-[8.68rem] lg:w-auto lg:h-auto">
                <p className="w-[17.0625rem] h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem] lg:text-[0.875rem] lg:w-auto">
                  CONTACT US
                </p>
                <a href="mailto:help@sterlinghms.com?subject=Sterling Home's Inquiry&body=Hello, I would like to inquire about your catalogue.">
                  <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1 lg:text-[0.6875rem] lg:w-auto lg:h-auto">
                    help@sterlinghms.com
                  </p>
                </a>

                <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test1 lg:text-[0.6875rem] lg:w-auto lg:h-auto">
                  +1 (770) 480-9107
                </p>
              </div>
            </div>
            <div className="w-[16.75rem] h-[10.99219rem] lg:hidden">
              <Image src={logo} alt="" />
            </div>
          </div>
          <div className="w-[81rem] h-[0.125rem] rounded-[2.125rem] bg-footer-s mx-[5.5rem] mt-[4.84rem] 2xl-max:w-auto"></div>
          <div className="flex justify-center items-center mt-[1.72rem]">
            <p className="w-[20.125rem] h-[2.4375rem] text-[0.6875rem] font-normal leading-normal text-copy-t flex justify-center items-center">
              Copyright © 2024 Sterling Homes,All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:block hidden">
        <div className="w-auto h-[36.6875rem] bg-footer-b px-[1.87rem]">
          <div className="flex gap-[4.56rem] items-center pt-[4.81rem] justify-between">
            <div className="w-auto h-[8.68rem] flex flex-col">
              <p className="w-[5.1875rem]  h-[2.6875rem] text-sterling-theme text-[0.875rem] font-medium leading-[3rem] tracking-[0.05rem]">
                MORE INFO
              </p>
              <Link
                to="servicesm"
                spy={true}
                smooth={true}
                offset={-28}
                duration={900}
                className="transition duration-500 ease-in-out"
              >
                <p className="w-auto h-[2.6875rem] text-[0.6875rem]  leading-[3rem]  text-footer-test1">
                  Our Services
                </p>
              </Link>
              <Link
                to="aboutm"
                spy={true}
                smooth={true}
                offset={-28}
                duration={900}
                className="transition duration-500 ease-in-outr"
              >
                <p className="w-auto h-[2.6875rem] text-[0.6875rem]  leading-[3rem]  text-footer-test1">
                  About Us
                </p>
              </Link>
            </div>
            <div className="w-auto h-[8.68rem] flex flex-col">
              <p className="w-auto h-[2.6875rem] text-sterling-theme text-[0.875rem] font-medium leading-[3rem] tracking-[0.05rem]">
                FOLLOW US
              </p>
              <a
                href="https://www.twitter.com/sterlinghomes22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-[1rem] items-center"
              >
                <FaXTwitter className="w-[1.0625rem] h-[1.0625rem] text-footer-test1" />
                <p className="text-[0.6875rem]  leading-[3rem] tracking-[0.04rem] text-footer-test1">
                  Twitter
                </p>
              </a>
              <a
                href="https://www.instagram.com/sterlinghomes22/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-[1rem] items-center"
              >
                <FaInstagram className=" w-[1.0625rem] h-[1.0625rem] text-footer-test1" />
                <p className="text-[0.6875rem] leading-[3rem] tracking-[0.0375rem] text-footer-test1">
                  Instagram
                </p>
              </a>
            </div>
          </div>

          <div className="w-auto h-[8.68rem] flex flex-col mt-[1.75rem]">
            <p className="w-auto h-[2.6875rem] text-sterling-theme text-[0.875rem] font-medium leading-[3rem] tracking-[0.05rem]">
              CONTACT US
            </p>
            <a href="mailto:help@sterlinghms.com?subject=Sterling Home's Inquiry&body=Hello, I would like to inquire about your catalogue.">
              <p className="w-auto h-[2.6875rem] text-[0.6875rem]  leading-[3rem]  text-footer-test1">
                help@sterlinghms.com
              </p>
            </a>
            <a href="tel:+17704809107">
              <p className="w-auto h-[2.6875rem] text-[0.6875rem]  leading-[3rem]  text-footer-test1">
                +1 (770) 480-9107
              </p>
            </a>
          </div>
          <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-footer-s  mt-[4.37rem] px-[0rem]"></div>
          <p className="w-auto h-[2.25rem] text-[0.625rem] font-normal leading-normal text-copy-t flex justify-center items-center mt-[1.13rem]">
            Copyright © 2024 Sterling Homes,All rights reserved.
          </p>
          <div className="flex justify-center items-center mt-[0.38rem]">
            <div className="w-[2.6875rem] h-[1.76rem] ">
              <Image src={logom} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
