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

export function Carousel() {
  const { theme } = useTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
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
            className={` embla__slide   pt-[6.81rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem]  h-[25rem] overflow-hidden rounded-[0.4375rem] shadow-md${
              theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
            }`}
          >
            Slide 1
          </div>
          <div
            className={` embla__slide  pt-[6.81rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem] h-[25rem] overflow-hidden rounded-[0.4375rem]  shadow-md${
              theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
            }`}
          >
            Slide 2
          </div>
          <div
            className={` embla__slide pt-[6.81rem] pr-[4.13rem] pb-[3.94rem] pl-[4.13rem]  h-[25rem] overflow-hidden rounded-[0.4375rem] mr-[1.25rem]  shadow-md${
              theme === "light" ? " bg-testimonial-w" : " bg-testimonial-b"
            }`}
          >
            Slide 3
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
