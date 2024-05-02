"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/sterling-logo.png";
// import Link from "next/link";
import { Link } from "react-scroll";
import DarkModeToggle from "../darmodetoggle/darkmodetoggle";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
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
                duration={500}
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
                duration={500}
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
                duration={500}
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
                duration={500}
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
                offset={28}
                duration={500}
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
    </>
  );
}
