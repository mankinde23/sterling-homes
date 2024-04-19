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
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export function Carousel() {
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
    <div className="embla ">
      <div class="embla__viewport overflow-hidden  " ref={emblaRef}>
        <div className="embla__container flex h-full">
          <div className="embla__slide flex-shrink-0 flex min-w-0 w-full">
            Slide 1
          </div>
          <div className="embla__slide flex-shrink-0 flex min-w-0 w-full">
            Slide 2
          </div>
          <div className="embla__slide flex-shrink-0 flex min-w-0 w-full">
            Slide 3
          </div>
        </div>
      </div>
      <div>
        <button className="embla__prev" onClick={scrollPrev}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
