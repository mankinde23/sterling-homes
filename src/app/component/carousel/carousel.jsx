// // import React from 'react'

// // export default function Carousel() {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }
// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "../carouselarrow/carouselarrow";

// const EmblaCarousel = (props) => {
//   // const { slides, options } = props;
//   // const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//   //   Autoplay({ playOnInit: false, delay: 3000 }),
//   // ]);
//   // const [isPlaying, setIsPlaying] = useState(false);

//   // const {
//   //   prevBtnDisabled,
//   //   nextBtnDisabled,
//   //   onPrevButtonClick,
//   //   onNextButtonClick,
//   // } = usePrevNextButtons(emblaApi);

//   // const onButtonAutoplayClick = useCallback(
//   //   (callback) => {
//   //     const autoplay = emblaApi?.plugins()?.autoplay;
//   //     if (!autoplay) return;

//   //     const resetOrStop =
//   //       autoplay.options.stopOnInteraction === false
//   //         ? autoplay.reset
//   //         : autoplay.stop;

//   //     resetOrStop();
//   //     callback();
//   //   },
//   //   [emblaApi]
//   // );

//   // const toggleAutoplay = useCallback(() => {
//   //   const autoplay = emblaApi?.plugins()?.autoplay;
//   //   if (!autoplay) return;

//   //   const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
//   //   playOrStop();
//   // }, [emblaApi]);

//   // useEffect(() => {
//   //   const autoplay = emblaApi?.plugins()?.autoplay;
//   //   if (!autoplay) return;

//   //   setIsPlaying(autoplay.isPlaying());
//   //   emblaApi
//   //     .on("autoplay:play", () => setIsPlaying(true))
//   //     .on("autoplay:stop", () => setIsPlaying(false))
//   //     .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
//   // }, [emblaApi]);

//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     {
//       ...options,
//       loop: true, // Add loop option to enable looping
//     },
//     [Autoplay({ playOnInit: false, delay: 3000 })] // Move Autoplay plugin to options
//   );
//   const [isPlaying, setIsPlaying] = useState(false);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   const onButtonAutoplayClick = useCallback(
//     (callback) => {
//       const autoplay = emblaApi?.plugins()?.autoplay;
//       if (!autoplay) return;

//       const resetOrStop =
//         autoplay.options.stopOnInteraction === false
//           ? autoplay.reset
//           : autoplay.stop;

//       resetOrStop();
//       callback();
//     },
//     [emblaApi]
//   );

//   const toggleAutoplay = useCallback(() => {
//     const autoplay = emblaApi?.plugins()?.autoplay;
//     if (!autoplay) return;

//     const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
//     playOrStop();
//   }, [emblaApi]);

//   useEffect(() => {
//     const autoplay = emblaApi?.plugins()?.autoplay;
//     if (!autoplay) return;

//     setIsPlaying(autoplay.isPlaying());
//     emblaApi
//       .on("autoplay:play", () => setIsPlaying(true))
//       .on("autoplay:stop", () => setIsPlaying(false))
//       .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
//   }, [emblaApi]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">
//                 <span>money</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton
//             onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
//             disabled={prevBtnDisabled}
//           />
//           <NextButton
//             onClick={() => onButtonAutoplayClick(onNextButtonClick)}
//             disabled={nextBtnDisabled}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;

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

export function Carousel() {
  const { theme } = useTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 18000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative ">
      <div
        class="embla__viewport overflow-hidden w-[42rem] h-[25.6875rem]"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-5">
          <div
            className={` embla__slide   pt-[3.06rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem]  h-[25rem] overflow-hidden rounded-[0.4375rem] shadow-md flex flex-col items-center${
              theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
            }`}
          >
            <div className="w-[4.0625rem] h-[4.0625rem]">
              <div
                class="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[4.0625rem]"
                // style={{ backgroundImage: "url('/ahmad.png')" }}
              >
                <Image
                  src={ahmad}
                  alt=""
                  className="flex justify-center items-center"
                />
              </div>
            </div>
            <div className="flex h-[5.5rem] gap-[1.875rem] mt-[2.81rem]">
              <FaQuoteLeft className="text-sterling-theme  w-[0.625rem] h-[0.54456rem]" />
              <p className="text-nav-text text-center text-[0.8125rem] font-normal leading-normal w-[33.3125rem] h-[4rem]">
                Soji and Rukayat swiftly recognized a rapidly developing
                neighborhood in Houston for an early investment in rentals. I am
                pleased with the short-term rental performance and also
                assisting in expanding my investment portfolio.
              </p>
              <FaQuoteRight className="text-sterling-theme w-[0.625rem] h-[0.54456rem]" />
            </div>
            <div className="flex flex-col items-center gap-[0.25rem] w-[11.9375rem] mt-[5.44rem]">
              <p className="w-[8.75rem] h-[1.75rem] text-nav-text text-[1.25rem] font-medium leading-normal">
                Ahmad Isiaka
              </p>
              <p className="text-[0.8125rem] font-normal leading-normal text-testimonial-const">
                Homeowner | Houston, Texas
              </p>
            </div>
          </div>
          <div
            className={` embla__slide  pt-[3.06rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem] h-[25rem] overflow-hidden rounded-[0.4375rem]  shadow-md flex flex-col items-center${
              theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
            }`}
          >
            <div className="w-[4.0625rem] h-[4.0625rem]">
              <div class="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[4.0625rem]">
                <Image src={kabir} alt="" />
              </div>
            </div>
            <div className="flex h-[5.5rem] gap-[1.875rem] mt-[2.81rem]">
              <FaQuoteLeft className="text-sterling-theme  w-[0.625rem] h-[0.54456rem]" />
              <p className="text-nav-text text-center text-[0.8125rem] font-normal leading-normal  w-[33.3125rem] h-[5rem]">
                Previous realtors I worked with didn&apos;t conduct detailed
                risk evaluations during house searches. Rukki and Soji exceeded
                my expectations by thoroughly assessing area risks based on my
                criteria, negotiating a favorable deal, and managing the
                decoration of the rental property. The results have been
                outstanding!
              </p>
              <FaQuoteRight className="text-sterling-theme w-[0.625rem] h-[0.54456rem]" />
            </div>
            <div className="flex flex-col items-center gap-[0.25rem] w-[12.3125rem] mt-[4.44rem]">
              <p className="w-[7.3125rem] h-[1.875rem] text-nav-text text-[1.25rem] font-medium leading-normal">
                Kabir Wolly
              </p>
              <p className="text-[0.8125rem] font-normal leading-normal text-testimonial-const">
                Homeowner | Atlanta, Georgia
              </p>
            </div>
          </div>
          <div
            className={` embla__slide pt-[3.06rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem]  h-[25rem] overflow-hidden rounded-[0.4375rem] mr-[1.25rem]  shadow-md flex flex-col items-center${
              theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
            }`}
          >
            <div className="w-[4.0625rem] h-[4.0625rem]">
              <div class="bg-lightgray bg-center bg-cover bg-no-repeat rounded-[4.0625rem]">
                <Image src={rahman} alt="" />
              </div>
            </div>
            <div className="flex h-[5.5rem] gap-[1.875rem] mt-[2.81rem]">
              <FaQuoteLeft className="text-sterling-theme  w-[0.625rem] h-[0.54456rem]" />
              <p className="text-nav-text text-center text-[0.8125rem] font-normal leading-normal w-[33.3125rem] h-[4rem]">
                I couldn&apos;t have achieved a strong tax return without
                Sterling Homes. Their expert advice on home improvement
                strategies and real estate investor tax requirements ensured
                routine tax planning, resulting in significant gains on my
                investment. They are the best real estate tax consultants
                I&apos;ve ever worked with!
              </p>
              <FaQuoteRight className="text-sterling-theme w-[0.625rem] h-[0.54456rem]" />
            </div>
            <div className="flex flex-col items-center gap-[0.25rem] w-[14.0625rem] mt-[5.44rem]">
              <p className="w-[5.5625rem] h-[1.875rem] text-nav-text text-[1.25rem] font-medium leading-normal">
                Rahman
              </p>
              <p className="text-[0.8125rem] font-normal leading-normal text-testimonial-const">
                Homeowner | Baltimore, Maryland
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex  items-center justify-center w-auto h-[3.125rem] gap-[1.875rem] mt-[2.56rem]">
        <button
          className={`embla__next  hover:bg-sterling-theme border-[3px] rounded-full ${
            theme === "light"
              ? " bg-cars-b border-none"
              : " bg-testimonial-b border-sterling-theme bg-transparent"
          }`}
          onClick={scrollPrev}
        >
          <MdOutlineKeyboardArrowLeft className="w-[3.125rem] h-[3.125rem] text-our-service-text" />
        </button>
        <button
          className={`embla__next  hover:bg-sterling-theme border-[3px] rounded-full ${
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
  );
}
