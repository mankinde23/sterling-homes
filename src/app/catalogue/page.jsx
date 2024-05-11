"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdBed, MdKeyboardArrowLeft } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath, FaBed } from "react-icons/fa";
import Image from "next/image";
import catalogued from "../../../public/cataloguesterlingd.png";
import cataloguew from "../../../public/cataloguesterlingw.png";
import Link from "next/link";

export default function Catalogue() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`h-[90.375rem] w-auto px-[4.51rem]   ${
          theme === "dark"
            ? "bg-about-bg transition duration-500 ease-in-out"
            : "bg-nav-text transition duration-500 ease-in-out"
        }`}
      >
        <div className="flex pt-[3.69rem] justify-center items-center w-[53rem] h-[4.3125rem] gap-[27.125rem]">
          <Link href="/">
            <div className="w-[5.0625rem] h-[2.63rem] p-[0.625rem] flex justify-center items-center ml-[2.44rem]">
              <MdKeyboardArrowLeft className="w-[2rem] h-[2.5rem] text-sterling-theme" />
            </div>
          </Link>

          <div className="w-[20.8125rem] h-[4.3125rem]">
            <p
              className={` text-[3.125rem] font-semibold leading-normal ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
            >
              CATALOGUE
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 auto-rows-auto gap-x-[6.81rem] gap-y-[5.38rem] mt-[4.69rem] ml-[4.37rem]">
          <div
            className="bg-cover w-[22.5rem] h-[32.5rem] pt-[2.19rem] gap-[14.125rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col"
            style={{
              backgroundImage: "url('catalogue1.png')",
            }}
          >
            <div className="flex justify-end">
              <div className="w-[10.0625rem] h-[2.5254rem]  px-[1.19rem] bg-sterling-theme justify-center flex-col items-start">
                <p
                  className="text-[0.75rem] font-medium leading-[1rem] text-nav-text my-[0.76rem]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Popular
                </p>
              </div>
            </div>
            <div className="w-[22.5rem] h-[13.8125rem] bg-navbar-bg backdrop-blur-[11.5px] ">
              <div className="w-[7.712rem] h-[1.3125rem] flex gap-[0.5rem] items-center ml-[1.25rem] mt-[1.25rem]">
                <FaLocationDot className="text-nav-text" />
                <p className="text-nav-text text-[1rem] font-medium leading-normal">
                  Atlanta, GA
                </p>
              </div>
              <div className="w-[22.384rem] h-[0.125rem] rounded-[2.125rem] bg-catalogue-stroke mt-[1.19rem]"></div>
              <div className="w-[20.25rem] h-[1.1875rem] gap-[2.06rem] flex ml-[1.25rem] mt-[1.194rem]">
                <div className="w-[4.375rem] h-[1rem] gap-[0.5rem] flex">
                  <MdBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    4 Beds
                  </p>
                </div>
                <div className="w-[4.875rem] h-[1.1875rem] gap-[0.5rem] flex">
                  <FaBath className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    3 baths
                  </p>
                </div>
                <div className="w-[6.86rem] h-[1rem] gap-[0.5rem] flex">
                  <FaBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    5 bedrooms
                  </p>
                </div>
              </div>
              <a
                href="https://www.airbnb.com/rooms/1023002234867475054?guests=1&adults=1&s=67&unique_share_id=4a81a368-7bbe-4ddb-9607-58241c016468"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[7.77rem] h-[2.625rem] p-[0.5rem] flex justify-center items-center bg-testimonial-w mt-[3.12rem] ml-[1.25rem]">
                  <p className="text-footer-test text-[0.68rem] font-semibold leading-normal">
                    View
                  </p>
                </button>
              </a>
            </div>
          </div>

          <div
            className="bg-cover w-[22.5rem] h-[32.5rem] pt-[18.69rem]  bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col"
            style={{
              backgroundImage: "url('catalogue2.png')",
            }}
          >
            <div className="w-[22.5rem] h-[13.8125rem] bg-navbar-bg backdrop-blur-[11.5px] ">
              <div className="w-[7.712rem] h-[1.3125rem] flex gap-[0.5rem] items-center ml-[1.25rem] mt-[1.25rem]">
                <FaLocationDot className="text-nav-text" />
                <p className="text-nav-text text-[1rem] font-medium leading-normal">
                  Houston, TX
                </p>
              </div>
              <div className="w-[22.384rem] h-[0.125rem] rounded-[2.125rem] bg-catalogue-stroke mt-[1.19rem]"></div>
              <div className="w-[20.25rem] h-[1.1875rem] gap-[2.06rem] flex ml-[1.25rem] mt-[1.194rem]">
                <div className="w-[4.375rem] h-[1rem] gap-[0.5rem] flex">
                  <MdBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    3 Beds
                  </p>
                </div>
                <div className="w-[4.875rem] h-[1.1875rem] gap-[0.5rem] flex">
                  <FaBath className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    3 baths
                  </p>
                </div>
                <div className="w-[6.86rem] h-[1rem] gap-[0.5rem] flex">
                  <FaBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    3 bedrooms
                  </p>
                </div>
              </div>
              <a
                href="http://airbnb.com/h/peachtreevilla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[7.77rem] h-[2.625rem] p-[0.5rem] flex justify-center items-center bg-testimonial-w mt-[3.12rem] ml-[1.25rem]">
                  <p className="text-footer-test text-[0.68rem] font-semibold leading-normal">
                    View
                  </p>
                </button>
              </a>
            </div>
          </div>

          <div
            className="bg-cover w-[22.5rem] h-[32.5rem] pt-[18.69rem]  bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col"
            style={{
              backgroundImage: "url('catalogue3.png')",
            }}
          >
            <div className="w-[22.5rem] h-[13.8125rem] bg-navbar-bg backdrop-blur-[11.5px] ">
              <div className="w-[7.712rem] h-[1.3125rem] flex gap-[0.5rem] items-center ml-[1.25rem] mt-[1.25rem]">
                <FaLocationDot className="text-nav-text" />
                <p className="text-nav-text text-[1rem] font-medium leading-normal">
                  Decatur, GA
                </p>
              </div>
              <div className="w-[22.384rem] h-[0.125rem] rounded-[2.125rem] bg-catalogue-stroke mt-[1.19rem]"></div>
              <div className="w-[20.25rem] h-[1.1875rem] gap-[2.06rem] flex ml-[1.25rem] mt-[1.194rem]">
                <div className="w-[4.375rem] h-[1rem] gap-[0.5rem] flex">
                  <MdBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    5 Beds
                  </p>
                </div>
                <div className="w-[5.4rem] h-[1.1875rem] gap-[0.5rem] flex">
                  <FaBath className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal ">
                    3.5 baths
                  </p>
                </div>
                <div className="w-[6.86rem] h-[1rem] gap-[0.5rem] flex">
                  <FaBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    5 bedrooms
                  </p>
                </div>
              </div>
              <a
                href="https://www.airbnb.com/slink/1HE3zTsw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[7.77rem] h-[2.625rem] p-[0.5rem] flex justify-center items-center bg-testimonial-w mt-[3.12rem] ml-[1.25rem]">
                  <p className="text-footer-test text-[0.68rem] font-semibold leading-normal">
                    View
                  </p>
                </button>
              </a>
            </div>
          </div>

          <div
            className="bg-cover w-[22.5rem] h-[32.5rem] pt-[18.69rem]  bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col"
            style={{
              backgroundImage: "url('catalogue4.png')",
            }}
          >
            {" "}
            <div className="w-[22.5rem] h-[13.8125rem] bg-navbar-bg backdrop-blur-[11.5px] ">
              <div className="w-[7.712rem] h-[1.3125rem] flex gap-[0.5rem] items-center ml-[1.25rem] mt-[1.25rem]">
                <FaLocationDot className="text-nav-text" />
                <p className="text-nav-text text-[1rem] font-medium leading-normal">
                  Atlanta, GA
                </p>
              </div>
              <div className="w-[22.384rem] h-[0.125rem] rounded-[2.125rem] bg-catalogue-stroke mt-[1.19rem]"></div>
              <div className="w-[20.25rem] h-[1.1875rem] gap-[2.06rem] flex ml-[1.25rem] mt-[1.194rem]">
                <div className="w-[4.375rem] h-[1rem] gap-[0.5rem] flex">
                  <MdBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    6 Beds
                  </p>
                </div>
                <div className="w-[4.875rem] h-[1.1875rem] gap-[0.5rem] flex">
                  <FaBath className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    3 baths
                  </p>
                </div>
                <div className="w-[6.86rem] h-[1rem] gap-[0.5rem] flex">
                  <FaBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    4 bedrooms
                  </p>
                </div>
              </div>
              <a
                href="https://www.airbnb.com/rooms/1072418144909338947?guests=1&adults=1&s=67&unique_share_id=8b6b590e-4902-4272-ab9e-1e045b66d620"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[7.77rem] h-[2.625rem] p-[0.5rem] flex justify-center items-center bg-testimonial-w mt-[3.12rem] ml-[1.25rem]">
                  <p className="text-footer-test text-[0.68rem] font-semibold leading-normal">
                    View
                  </p>
                </button>
              </a>
            </div>
          </div>

          <div
            className="bg-cover w-[22.5rem] h-[32.5rem] pt-[18.69rem]  bg-light-gray bg-no-repeat flex-shrink-0  scale-100 flex flex-col"
            style={{
              backgroundImage: "url('catalogue5.png')",
            }}
          >
            <div className="w-[22.5rem] h-[13.8125rem] bg-navbar-bg backdrop-blur-[11.5px] ">
              <div className="w-[7.712rem] h-[1.3125rem] flex gap-[0.5rem] items-center ml-[1.25rem] mt-[1.25rem]">
                <FaLocationDot className="text-nav-text" />
                <p className="text-nav-text text-[1rem] font-medium leading-normal">
                  Smyrna, GA
                </p>
              </div>
              <div className="w-[22.384rem] h-[0.125rem] rounded-[2.125rem] bg-catalogue-stroke mt-[1.19rem]"></div>
              <div className="w-[20.25rem] h-[1.1875rem] gap-[2.06rem] flex ml-[1.25rem] mt-[1.194rem]">
                <div className="w-[4.375rem] h-[1rem] gap-[0.5rem] flex">
                  <MdBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    3 Beds
                  </p>
                </div>
                <div className="w-[4.875rem] h-[1.1875rem] gap-[0.5rem] flex">
                  <FaBath className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    2 baths
                  </p>
                </div>
                <div className="w-[6.86rem] h-[1rem] gap-[0.5rem] flex">
                  <FaBed className="text-nav-text" />
                  <p className="text-nav-text text-[0.8125rem] font-medium leading-normal">
                    2 bedrooms
                  </p>
                </div>
              </div>
              <a
                href="https://www.airbnb.com/rooms/983602425583222262?guests=1&adults=1&s=67&unique_share_id=6d5af7dc-3d7b-4ffd-87a5-55537f0c548e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[7.77rem] h-[2.625rem] p-[0.5rem] flex justify-center items-center bg-testimonial-w mt-[3.12rem] ml-[1.25rem]">
                  <p className="text-footer-test text-[0.68rem] font-semibold leading-normal">
                    View
                  </p>
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <div className="w-[16.75rem] h-[14.9375rem] ">
              {theme === "light" ? (
                <Image src={catalogued} alt="Dark Mode Image" quality={100} />
              ) : (
                <Image src={cataloguew} alt="Light Mode Image" quality={100} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
