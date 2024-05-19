"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/sterling-logo.png";
import mlogo from "../../../../public/navbar-mobile.png";
// import Link from "next/link";
import { Link } from "react-scroll";
import DarkModeToggle from "../darmodetoggle/darkmodetoggle";
import { useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:block">
        <div className="fixed top-0 left-0 w-full z-50 h-[4.4375rem]  flex justify-between items-center backdrop-blur-[7px] bg-navbar-bg">
          <div className="ml-[5.94rem]">
            <Link href="/">
              <Image
                src={logo}
                alt=""
                quality={100}
                className="w-[91px] h-[64.55px]"
              />
            </Link>
          </div>
          <div className="w-auto active:text-sterling-theme">
            <ul className="flex justify-between items-center w-[32.5rem] gap-[1.09rem] px-[1.25rem] py-[0rem] h-[2.375rem]  ">
              <li className="text-nav-text">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-28}
                  duration={900}
                >
                  <p className=" hover:text-sterling-theme hover:cursor-pointer  ">
                    Home{" "}
                  </p>
                </Link>
              </li>
              <li className="text-nav-text">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={24}
                  duration={900}
                >
                  <p className=" hover:text-sterling-theme hover:cursor-pointer ">
                    {" "}
                    About{" "}
                  </p>
                </Link>
              </li>
              <li className=" text-nav-text">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-25}
                  duration={900}
                >
                  <p className=" hover:text-sterling-theme hover:cursor-pointer">
                    {" "}
                    Services{" "}
                  </p>
                </Link>
              </li>
              <li className=" text-nav-text">
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-28}
                  duration={900}
                >
                  <p className=" hover:text-sterling-theme hover:cursor-pointer">
                    {" "}
                    Testimonials{" "}
                  </p>
                </Link>
              </li>
              <li className=" text-nav-text">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={900}
                >
                  <p className=" hover:text-sterling-theme hover:cursor-pointer">
                    {" "}
                    Contact{" "}
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-[4.69rem]">
            <DarkModeToggle />
          </div>
        </div>
      </div>

      {/* MOBILE...................................... */}
      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:hidden">
        <div className="fixed top-0 w-full z-50 h-[4rem] flex justify-between items-center backdrop-blur-[7px] bg-navbar-bg pl-[0.94rem] pr-[1.88rem] pt-[1rem] pb-[0.73rem]">
          <div className="h-[2.26rem] flex  justify-center items-center gap-[12.625rem] w-auto">
            <div className="w-[3.9375rem] h-[2.26906rem]">
              <Image src={mlogo} alt="" quality={100} className="" />
            </div>
          </div>
          <div className="w-auto h-[2.25rem] flex justify-center gap-[1.25rem] hover:cursor-pointer mt-[0.8rem]">
            <DarkModeToggle />
            <div className="flex justify-center">
              {" "}
              <IoIosMenu className=" text-nav-text h-[1.73rem] w-[2.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
