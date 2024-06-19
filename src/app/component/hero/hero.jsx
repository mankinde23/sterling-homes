"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
export default function Hero() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div
        className="sm:hidden 2xl:block 2xl-max:block xl:hidden lg:hidden  md:hidden"
        id="hero"
      >
        <div
          className="bg-cover h-[64rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
          style={{
            backgroundImage: "url('/landing-img3.png')",
          }}
        >
          <div className="flex justify-center items-end ">
            <div className=" mt-[19.88rem]">
              <motion.h1
                // initial={{ opacity: 100, y: 50 }}
                // animate={{ opacity: 50, y: 0 }}
                // exit={{ opacity: 0 }}
                // transition={{ duration: 1.5, ease: "easeIn" }}

                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 50, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                exit={{ opacity: 0 }}
                className="text-nav-text font-ameretto text-[4.6875rem] leading-normal tracking-[0.9375rem] font-normal"
              >
                STERLING HOMES
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex justify-center items-center text-footer-test1 text-[0.8125rem] font-extralight"
              >
                Building dreams, one home at a time, with integrity and
                excellence
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex justify-center items-center mt-[4rem]"
              >
                <Link href="/catalogue">
                  <button className="w-[11.9375rem] h-[2.875rem] p-[0.5rem] gap-[0.5rem] bg-sterling-theme hover:bg-sterling-hover transition duration-500 ease-in-out">
                    <p className="text-nav-text text-[1rem] font-light leading-normal">
                      View Catalogue
                    </p>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* TAB */}

      <div className="sm:hidden 2xl:hidden 2xl-max:hidden xl:block lg:block  md:block">
        <div
          className="bg-cover h-[57.3125rem] w-full bg-light-gray bg-no-repeat flex-shrink-0  scale-100"
          style={{
            backgroundImage: "url('/landingt-img2.png')",
          }}
        >
          <div className="flex justify-center items-end ">
            <div className=" mt-[19.88rem]">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 50, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                exit={{ opacity: 0 }}
                className="text-nav-text font-ameretto text-[3.4375rem] leading-normal tracking-[0.9375rem] font-normal"
              >
                STERLING HOMES
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex justify-center items-center text-footer-test1 text-[0.8125rem] font-extralight"
              >
                Building dreams, one home at a time, with integrity and
                excellence
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex justify-center items-center mt-[4rem]"
              >
                <Link href="/catalogue">
                  <button className="w-[11.9375rem] h-[2.875rem] p-[0.5rem] gap-[0.5rem] bg-sterling-theme hover:bg-sterling-hover transition duration-500 ease-in-out">
                    <p className="text-nav-text text-[1rem] font-light leading-normal">
                      View Catalogue
                    </p>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:hidden">
        <div
          className="bg-cover h-[42.0625rem] w-full bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
          style={{
            backgroundImage: "url('/landingt-img2.png')",
          }}
        >
          <div className="flex justify-center items-end w-full">
            <div className=" mt-[17.69rem]">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 50, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                exit={{ opacity: 0 }}
                className="text-nav-text font-ameretto text-[1.875rem] leading-normal  font-normal tracking-[0.375rem]"
              >
                STERLING HOMES
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex justify-center items-center text-footer-test1 text-[0.4375rem]  font-extralight mt-[0.75rem]"
              >
                Building dreams, one home at a time, with integrity and
                excellence
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="flex justify-center items-center mt-[1.56rem]"
              >
                <Link href="/catalogue">
                  <button className="w-[6.6875rem] h-[1.6875rem] p-[0.5rem] gap-[0.5rem] bg-sterling-theme">
                    <p className="text-nav-text text-[0.625rem] font-light leading-normal">
                      View Catalogue
                    </p>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
