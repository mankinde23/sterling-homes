"use client";
import React, { useCallback } from "react";
import { useTheme } from "next-themes";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import ahmad from "../../../../public/ahmad.png";
import rahman from "../../../../public/rahman.png";
import kabir from "../../../../public/KABIR.png";
import ahmadm from "../../../../public/ahmadm.png";
import rahmanm from "../../../../public/Abdurm.png";
import kabirm from "../../../../public/KABIRm.png";
import { DotButton, useDotButton } from "../carouseldot/carouseldot";

export function Carousel() {
  const { theme } = useTheme();
  const [emblaRefm, emblaApim] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 18000 }),
  ]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 18000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // const scrollPrevm = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNextm = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:hidden">
        <div className="embla relative ">
          <div
            className="embla__viewport overflow-hidden w-[42rem] h-[25.6875rem] lg:w-auto lg:h-[18.5rem]"
            ref={emblaRef}
          >
            <div className="embla__container flex gap-5">
              <div
                className={` embla__slide   pt-[3.06rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem]  h-[25rem] overflow-hidden rounded-[0.4375rem] shadow-md flex flex-col items-center lg:px-[1rem] lg:pb-[1rem]${
                  theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
                }`}
              >
                <div className="w-[4.0625rem] h-[4.0625rem] lg:w-[2.5rem] lg:h-[2.5rem]">
                  <div
                    className="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[4.0625rem]"
                    // style={{ backgroundImage: "url('/ahmad.png')" }}
                  >
                    <Image
                      src={ahmad}
                      alt=""
                      className="flex justify-center items-center"
                    />
                  </div>
                </div>
                <div className="flex h-[5.5rem] gap-[1.875rem] mt-[2.81rem] lg:gap-[0.0625rem] lg:items-baseline lg:mt-[1.64rem]">
                  <FaQuoteLeft className="text-sterling-theme  w-[0.625rem] h-[0.54456rem] lg:w-auto lg:h-auto" />
                  <p className="text-nav-text text-center text-[0.8125rem] font-extralight leading-normal w-[33.3125rem] h-[4rem] lg:text-[0.6875rem] lg:w-auto">
                    Soji and Rukayat swiftly recognized a rapidly developing
                    neighborhood in Houston for an early investment in rentals.
                    I am pleased with the short-term rental performance and also
                    assisting in expanding my investment portfolio.
                  </p>
                  <FaQuoteRight className="text-sterling-theme w-[0.625rem] h-[0.54456rem] lg:w-auto lg:h-auto" />
                </div>
                <div className="flex flex-col items-center gap-[0.25rem] w-[11.9375rem] mt-[5.44rem] lg:mt-[2.5rem]">
                  <p className="w-[8.75rem] h-[1.75rem] text-nav-text text-[1.25rem] font-medium leading-normal lg:text-[0.75rem] lg:flex lg:justify-center lg:h-auto">
                    Ahmad Isiaka
                  </p>
                  <p className="text-[0.8125rem] font-normal leading-normal text-testimonial-const lg:text-[0.625rem]">
                    Homeowner | Houston, Texas
                  </p>
                </div>
              </div>
              <div
                className={` embla__slide  pt-[3.06rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem] h-[25rem] overflow-hidden rounded-[0.4375rem]  shadow-md flex flex-col items-center lg:px-[1rem] lg:pb-[1rem]${
                  theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
                }`}
              >
                <div className="w-[4.0625rem] h-[4.0625rem] lg:w-[2.5rem] lg:h-[2.5rem]">
                  <div class="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[4.0625rem]">
                    <Image src={kabir} alt="" />
                  </div>
                </div>
                <div className="flex h-[5.5rem] gap-[1.875rem] mt-[2.81rem] lg:gap-[0.0625rem] lg:items-baseline lg:mt-[1.64rem]">
                  <FaQuoteLeft className="text-sterling-theme  w-[0.625rem] h-[0.54456rem] lg:w-auto lg:h-auto" />
                  <p className="text-nav-text text-center text-[0.8125rem] font-extralight leading-normal  w-[33.3125rem] h-[5rem] lg:text-[0.6875rem] lg:w-auto">
                    Previous realtors I worked with didn&apos;t conduct detailed
                    risk evaluations during house searches. Rukki and Soji
                    exceeded my expectations by thoroughly assessing area risks
                    based on my criteria, negotiating a favorable deal, and
                    managing the decoration of the rental property. The results
                    have been outstanding!
                  </p>
                  <FaQuoteRight className="text-sterling-theme w-[0.625rem] h-[0.54456rem] lg:w-auto lg:h-auto" />
                </div>
                <div className="flex flex-col items-center gap-[0.25rem] w-[12.3125rem] mt-[4.44rem] lg:mt-[2.5rem]">
                  <p className="w-[7.3125rem] h-[1.875rem] text-nav-text text-[1.25rem] font-medium leading-normal lg:text-[0.75rem] lg:flex lg:justify-center lg:h-auto">
                    Kabir Wolly
                  </p>
                  <p className="text-[0.8125rem] font-normal leading-normal text-testimonial-const lg:text-[0.625rem]">
                    Homeowner | Atlanta, Georgia
                  </p>
                </div>
              </div>
              <div
                className={` embla__slide pt-[3.06rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem]  h-[25rem] overflow-hidden rounded-[0.4375rem] mr-[1.25rem]  shadow-md flex flex-col items-center lg:px-[1rem] lg:pb-[1rem]${
                  theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
                }`}
              >
                <div className="w-[4.0625rem] h-[4.0625rem] lg:w-[2.5rem] lg:h-[2.5rem]">
                  <div className="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[4.0625rem]">
                    <Image src={rahman} alt="" />
                  </div>
                </div>
                <div className="flex h-[5.5rem] gap-[1.875rem] mt-[2.81rem] lg:gap-[0.0625rem] lg:items-baseline lg:mt-[1.64rem]">
                  <FaQuoteLeft className="text-sterling-theme  w-[0.625rem] h-[0.54456rem] lg:w-auto lg:h-auto" />
                  <p className="text-nav-text text-center text-[0.8125rem] font-extralight leading-normal w-[33.3125rem] h-[4rem] lg:text-[0.6875rem] lg:w-auto">
                    I couldn&apos;t have achieved a strong tax return without
                    Sterling Homes. Their expert advice on home improvement
                    strategies and real estate investor tax requirements ensured
                    routine tax planning, resulting in significant gains on my
                    investment. They are the best real estate tax consultants
                    I&apos;ve ever worked with!
                  </p>
                  <FaQuoteRight className="text-sterling-theme w-[0.625rem] h-[0.54456rem] lg:w-auto lg:h-auto" />
                </div>
                <div className="flex flex-col items-center gap-[0.25rem] w-[14.0625rem] mt-[5.44rem] lg:mt-[2.5rem]">
                  <p className="w-[5.5625rem] h-[1.875rem] text-nav-text text-[1.25rem] font-medium leading-normal lg:text-[0.75rem] lg:flex lg:justify-center lg:h-auto">
                    Rahman
                  </p>
                  <p className="text-[0.8125rem] font-normal leading-normal text-testimonial-const lg:text-[0.625rem] ">
                    Homeowner | Baltimore, Maryland
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex  items-center justify-center w-auto h-[3.125rem] gap-[1.875rem] mt-[2.56rem] ml-[14rem] lg:ml-0">
            <button
              className={`embla__next  hover:bg-sterling-theme border-[3px] rounded-full transition duration-500 ease-in-out ${
                theme === "light"
                  ? " bg-cars-b border-none"
                  : " bg-testimonial-b border-sterling-theme bg-transparent"
              }`}
              onClick={scrollPrev}
            >
              <MdOutlineKeyboardArrowLeft className="w-[3.125rem] h-[3.125rem] text-our-service-text" />
            </button>
            <button
              className={`embla__next  hover:bg-sterling-theme border-[3px] rounded-full transition duration-500 ease-in-out ${
                theme === "light"
                  ? " bg-cars-b border-none"
                  : " bg-testimonial-b border-sterling-theme bg-transparent"
              }`}
              onClick={scrollNext}
            >
              <MdOutlineKeyboardArrowRight className="w-[50px] h-[50px] text-our-service-text" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile.... */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:block hidden">
        <div className="embla relative max-w-[20.625] ">
          <div
            className="embla__viewport overflow-hidden w-[19.625rem] h-[14.9375rem]"
            ref={emblaRefm}
          >
            <div className="embla__container flex gap-[4rem]">
              <div
                className={` embla__slide   pt-[1.5rem] pr-[1.63rem] pb-[0.75rem] pl-[1.69rem]  h-[13.9375rem] overflow-hidden rounded-[0.1875rem] shadow-md flex flex-col items-center${
                  theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
                }`}
              >
                <div className="w-[2.5rem] h-[2.5rem]">
                  <div
                    className="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[2.5rem]"
                    // style={{ backgroundImage: "url('/ahmad.png')" }}
                  >
                    <Image
                      src={ahmadm}
                      alt=""
                      className="flex justify-center items-center"
                    />
                  </div>
                </div>
                <div className="flex h-[4.64rem]  mt-[1.06rem]">
                  <FaQuoteLeft className="text-sterling-theme  w-[0.375rem] h-[0.31625rem]" />
                  <p className="text-footer-test text-center text-[0.5rem] font-normal leading-normal w-[16.43rem] h-[4.64rem]">
                    Soji and Rukayat swiftly recognized a rapidly developing
                    neighborhood in Houston for an early investment in rentals.
                    I am pleased with the short-term rental performance and also
                    assisting in expanding my investment portfolio.
                  </p>
                  <FaQuoteRight className="text-sterling-theme w-[0.375rem] h-[0.31625rem]" />
                </div>
                <div className="flex flex-col items-center gap-[0.3125rem] w-[9.25rem] mt-[1.17rem]">
                  <p className="w-[4.5rem] h-[1rem] text-nav-text text-[0.625rem] font-medium leading-normal">
                    Ahmad Isiaka
                  </p>
                  <p className="text-[0.5rem] font-normal leading-normal text-testimonial-const">
                    Homeowner | Houston, Texas
                  </p>
                </div>
              </div>
              <div
                className={` embla__slide   pt-[1.5rem] pr-[1.63rem] pb-[0.75rem] pl-[1.69rem]  h-[13.9375rem] overflow-hidden rounded-[0.1875rem]  shadow-md flex flex-col items-center${
                  theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
                }`}
              >
                <div className="w-[2.5rem] h-[2.5rem]">
                  <div className="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[2.5rem]">
                    <Image src={kabirm} alt="" />
                  </div>
                </div>
                <div className="flex h-[4.64rem] mt-[1.06rem]">
                  <FaQuoteLeft className="text-sterling-theme w-[0.375rem] h-[0.31625rem]" />
                  <p className="text-footer-test text-center text-[0.5rem] font-normal leading-normal w-[16.43rem] h-[4.64rem]">
                    Previous realtors I worked with didn&apos;t conduct detailed
                    risk evaluations during house searches. Rukki and Soji
                    exceeded my expectations by thoroughly assessing area risks
                    based on my criteria, negotiating a favorable deal, and
                    managing the decoration of the rental property. The results
                    have been outstanding!
                  </p>
                  <FaQuoteRight className="text-sterling-theme w-[0.375rem] h-[0.31625rem]" />
                </div>
                <div className="flex flex-col items-center  gap-[0.3125rem] w-[9.25rem] mt-[1.17rem]">
                  <p className="w-[3.6875rem] h-[1rem] text-nav-text text-[0.625rem] font-medium leading-normal">
                    Kabir Wolly
                  </p>
                  <p className="text-[0.5rem]  font-normal leading-normal text-testimonial-const">
                    Homeowner | Atlanta, Georgia
                  </p>
                </div>
              </div>
              <div
                className={` embla__slide pt-[1.5rem] pr-[1.63rem] pb-[0.75rem] pl-[1.69rem]  h-[13.9375rem] overflow-hidden rounded-[0.1875rem] mr-[1.25rem]  shadow-md flex flex-col items-center${
                  theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
                }`}
              >
                <div className="w-[2.5rem] h-[2.5rem]">
                  <div className="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[2.5rem]">
                    <Image src={rahmanm} alt="" />
                  </div>
                </div>
                <div className="flex  h-[4.64rem]  mt-[1.06rem]">
                  <FaQuoteLeft className="text-sterling-theme  w-[0.375rem] h-[0.31625rem]" />
                  <p className="text-footer-test text-center text-[0.5rem] font-normal leading-normal w-[16.43rem] h-[4.64rem]">
                    I couldn&apos;t have achieved a strong tax return without
                    Sterling Homes. Their expert advice on home improvement
                    strategies and real estate investor tax requirements ensured
                    routine tax planning, resulting in significant gains on my
                    investment. They are the best real estate tax consultants
                    I&apos;ve ever worked with!
                  </p>
                  <FaQuoteRight className="text-sterling-theme w-[0.375rem] h-[0.31625rem]" />
                </div>
                <div className="flex flex-col items-center  gap-[0.3125rem] w-[9.25rem] mt-[1.17rem]">
                  <p className="w-[2.75rem] h-[1rem] text-nav-text text-[0.625rem] font-medium leading-normal">
                    Rahman
                  </p>
                  <p className="text-[0.5rem] font-normal leading-normal text-testimonial-const">
                    Homeowner | Baltimore, Maryland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot ".concat(
                index === selectedIndex
                  ? " embla__dot--selected bg-sterling-theme"
                  : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}
