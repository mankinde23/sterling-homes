"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/sterling-logo.png";
import mlogo from "../../../../public/navbar-mobile.png";
import logonm from "../../../../public/navbar-logom.png";
// import Link from "next/link";
import { Link } from "react-scroll";
import DarkModeToggle from "../darmodetoggle/darkmodetoggle";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menuOpen state
  };

  const handleCloseMenu = (elementId) => {
    setMenuOpen(false); // Close the menu when a link is clicked
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:hidden  md:hidden">
        <div className="fixed top-0 left-0 w-full z-50 h-[4.4375rem]  flex justify-between items-center backdrop-blur-[7px] bg-navbar-bg">
          <div className="ml-[0.94rem]">
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
                  <p className=" hover:text-sterling-theme hover:cursor-pointer transition duration-500 ease-in-out ">
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
                  <p className=" hover:text-sterling-theme hover:cursor-pointer transition duration-500 ease-in-out ">
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
                  <p className=" hover:text-sterling-theme hover:cursor-pointer transition duration-500 ease-in-out">
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
                  <p className=" hover:text-sterling-theme hover:cursor-pointer transition duration-500 ease-in-out">
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
                  <p className=" hover:text-sterling-theme hover:cursor-pointer transition duration-500 ease-in-out">
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

      {/* tab */}
      {/* <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:block sm:hidden md:block">
        <div className="fixed top-0 w-full z-50 h-[4rem] flex justify-between items-center backdrop-blur-[7px] bg-navbar-bg pl-[0.94rem] pr-[1.88rem] pt-[1rem] pb-[0.73rem]">
          <div className="h-[2.26rem] flex  justify-center items-center gap-[12.625rem] w-auto">
            <div className="w-[3.9375rem] h-[2.26906rem]">
              <Image src={logonm} alt="" quality={100} className="" />
            </div>
          </div>
          <div className="w-auto h-[2.25rem] flex justify-center gap-[1.25rem] hover:cursor-pointer mt-[0.8rem]">
            <DarkModeToggle />

            <div
              className="flex justify-center z-10 hover:cursor-pointer"
              onClick={handleMenu}
            >
              {" "}
              {menuOpen ? (
                <IoIosMenu className="h-[1.73rem] w-[2.5rem] text-nav-text" />
              ) : (
                <IoIosMenu className="h-[1.73rem] w-[2.5rem] text-nav-text" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } backdrop-blur-lg bg-navbar-bg z-[100] flex flex-col  h-full pt-[1.2rem] ease-out duration-500`}
        >
          <div className="flex justify-between items-center w-full px-8 ">
            <div></div>
            <div className="w-[3.9375rem] h-[2.26906rem]">
              <Image src={mlogo} alt="Logo" quality={100} />
            </div>
            <IoClose
              className="h-[1.73rem] w-[2.5rem] hover:cursor-pointer text-nav-text"
              onClick={handleMenu}
            />
          </div>
          <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[1.17rem] p-[0rem]"></div>
          <ul className="flex flex-col  gap-8 mt-8 w-full p-8 ">
            <li
              className="text-lg font-thin flex gap-[7.69rem] justify-between  h-[1.8125rem] hover:text-header-text "
              onClick={() => handleCloseMenu("heromm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem]"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Home
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem]  justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("aboutmm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal md:text-[1rem] lg:text-[1rem] xl:text-[1rem] "
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                About
              </p>

              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem] justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("servicesmm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem]"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Services
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem] justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("testimonialsmm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem]"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Testimonials
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem]  justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("contactmm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem]"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Contact
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
          </ul>
        </div>
      </div> */}

      {/* MOBILE...................................... */}
      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:block sm:block md:block">
        <div className="fixed top-0 w-full z-50 h-[4rem] flex justify-between items-center backdrop-blur-[7px] bg-navbar-bg pl-[0.94rem] pr-[1.88rem] pt-[1rem] pb-[0.73rem]">
          <div className="h-[2.26rem] flex  justify-center items-center gap-[12.625rem] w-auto">
            <div className="w-[3.9375rem] h-[2.26906rem]">
              <Image src={logonm} alt="" quality={100} className="" />
            </div>
          </div>
          <div className="w-auto h-[2.25rem] flex justify-center gap-[1.25rem] hover:cursor-pointer mt-[0.8rem]">
            <DarkModeToggle />

            <div
              className="flex justify-center z-10 hover:cursor-pointer"
              onClick={handleMenu}
            >
              {" "}
              {menuOpen ? (
                <IoIosMenu className="h-[1.73rem] w-[2.5rem] text-nav-text" />
              ) : (
                <IoIosMenu className="h-[1.73rem] w-[2.5rem] text-nav-text" />
              )}
            </div>
            {/* fixed top-0 left-0 right-0 bottom-0 flex w-full h-full text-center ease-in duration-500 z-[100] overflow-y-auto p-[32px] flex-col 
              fixed top-0 left-[-100%] right-0 bottom-0 block w-full h-screen transition-colors ease-out duration-500 */}
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } backdrop-blur-lg bg-navbar-bg z-[100] flex flex-col  h-full pt-[1.2rem] ease-out duration-500`}
        >
          <div className="flex justify-between items-center w-full px-8 ">
            <div></div>
            <div className="w-[3.9375rem] h-[2.26906rem]">
              <Image src={mlogo} alt="Logo" quality={100} />
            </div>
            <IoClose
              className="h-[1.73rem] w-[2.5rem] hover:cursor-pointer text-nav-text"
              onClick={handleMenu}
            />
          </div>
          <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[1.17rem] p-[0rem]"></div>
          <ul className="flex flex-col  gap-8 mt-8 w-full p-8 ">
            <li
              className="text-lg font-thin flex gap-[7.69rem] justify-between  h-[1.8125rem] hover:text-header-text "
              onClick={() => handleCloseMenu("herom")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem] font-normal"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Home
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem]  justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("aboutm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal md:text-[1rem] lg:text-[1rem] xl:text-[1rem] font-normal "
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                About
              </p>

              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem] justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("servicesm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem] font-normal"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Services
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem] justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("testimonialsm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem] font-normal"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Testimonials
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
            <li
              className="text-lg font-thin flex gap-[7.69rem]  justify-between  h-[1.8125rem] hover:text-header-text"
              onClick={() => handleCloseMenu("contactm")}
            >
              <p
                className="w-[6.875rem] text-[0.75rem] text-nav-text leading-normal  md:text-[1rem] lg:text-[1rem] xl:text-[1rem] font-normal"
                style={{ fontFamily: " Montserrat, sans-serif" }}
              >
                Contact
              </p>
              <IoIosArrowForward className="text-nav-text" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
