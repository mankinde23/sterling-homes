"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/sterling-logo.png";
import Link from "next/link";
import DarkModeToggle from "../darmodetoggle/darkmodetoggle";

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
        <div className="w-auto">
          <ul className="flex justify-between items-center w-[32.5rem] gap-[1.09rem] px-[1.25rem] py-[0rem] h-[2.375rem]">
            <li className=" text-nav-text">
              <Link href="">Home </Link>
            </li>
            <li className=" text-nav-text">
              <Link href="">About </Link>
            </li>
            <li className=" text-nav-text">
              <Link href="">Services </Link>
            </li>
            <li className=" text-nav-text">
              <Link href="">Testimonials </Link>
            </li>
            <li className=" text-nav-text">
              <Link href="">Contact </Link>
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
