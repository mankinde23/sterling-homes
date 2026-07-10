"use client";
import React from "react";
import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const docs = [
  {
    title: "Tax Questionnaire",
    description:
      "Complete this questionnaire to help us prepare your tax documentation accurately.",

    href: "https://docs.google.com/forms/d/e/1FAIpQLSdeJp2lq83lxrUDRNYo6AfPM_9isyE4i0sZU2YLewZ0i-8VPg/viewform",
    cta: "Fill Out Form",
  },
  {
    title: "Real Estate Questionnaire",
    description:
      "Tell us about your property needs so we can serve you better.",

    href: "https://docs.google.com/forms/d/e/1FAIpQLSfTJ8xXkwKR9uylMKSxit9SDGVbYjYmViQibnyrNjbJmUC77A/viewform",
    cta: "Fill Out Form",
  },
];

function DocCard({ doc, size = "desktop" }) {
  const { theme } = useTheme();
  const styles = {
    desktop: {
      card: "w-[24rem] p-[2rem]",
      title: "text-[1.25rem]",
      desc: "text-[0.75rem] mt-[0.75rem]",
      btn: "w-[11.9375rem] h-[2.875rem] mt-[2rem]",
      btnText: "text-[1rem]",
    },
    mobile: {
      card: "w-full max-w-[20rem] p-[1.25rem]",
      title: "text-[0.9375rem]",
      desc: "text-[0.6875rem] mt-[0.5rem]",
      btn: "w-[6.6875rem] h-[1.6875rem] mt-[1.25rem]",
      btnText: "text-[0.625rem]",
    },
  }[size];

  return (
    <div
      className={`flex flex-col items-start transition duration-500 ease-in-out ${
        theme === "dark" ? "bg-[#1C1C1C]" : "bg-light-gray"
      } ${styles.card}`}
    >
      <p
        className={`text-sterling-theme font-semibold leading-normal ${styles.title}`}
      >
        {doc.title}
      </p>
      <p
        className={`font-medium leading-normal ${
          theme === "dark" ? "text-white" : "text-testimonial-text"
        } ${styles.desc}`}
      >
        {doc.description}
      </p>
      <a href={doc.href} target="_blank" rel="noopener noreferrer">
        <button
          className={`p-[0.5rem] gap-[0.5rem] bg-sterling-theme hover:bg-sterling-hover transition duration-500 ease-in-out ${styles.btn}`}
        >
          <p
            className={`text-nav-text font-light leading-normal ${styles.btnText}`}
          >
            {doc.cta}
          </p>
        </button>
      </a>
    </div>
  );
}

export default function Resources() {
  const { theme } = useTheme();

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const [shouldAnimate1, setShouldAnimate1] = useState(false);
  const [shouldAnimateCards1, setShouldAnimateCards1] = useState(false);

  useEffect(() => {
    if (isInView1) {
      setShouldAnimate1(true);
      const timeoutCards = setTimeout(() => {
        setShouldAnimateCards1(true);
      }, 1000);
      return () => clearTimeout(timeoutCards);
    }
  }, [isInView1]);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const [shouldAnimate2, setShouldAnimate2] = useState(false);
  const [shouldAnimateCards2, setShouldAnimateCards2] = useState(false);

  useEffect(() => {
    if (isInView2) {
      setShouldAnimate2(true);
      const timeoutCards = setTimeout(() => {
        setShouldAnimateCards2(true);
      }, 1000);
      return () => clearTimeout(timeoutCards);
    }
  }, [isInView2]);

  return (
    <>
      {/* DESKTOP / TAB */}
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block md:hidden">
        <div
          className={`h-auto w-auto py-[4.44rem] px-[3.96rem] lg:px-[3rem] ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          ref={ref1}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: shouldAnimate1 ? 1 : 0,
                y: shouldAnimate1 ? 0 : 50,
              }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-[0.25rem]"
            >
              <p
                className={`text-[2rem] font-semibold leading-normal ${
                  theme === "light"
                    ? "text-sterling-theme"
                    : "text-our-service-text"
                }`}
              >
                Resources
              </p>
              <p
                className={`text-[0.75rem] font-semibold leading-normal mb-[2.19rem] flex justify-center ${
                  theme === "light"
                    ? "text-testimonial-text"
                    : "text-sterling-theme"
                }`}
              >
                Forms and Documents in One Place
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: shouldAnimateCards1 ? 1 : 0, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap justify-center gap-[2.5rem] lg:gap-[2rem]"
            >
              {docs.map((doc) => (
                <DocCard key={doc.title} doc={doc} size="desktop" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:block hidden">
        <div
          className={`h-auto w-auto pt-[2.38rem] pr-[1.88rem] pb-[2.38rem] pl-[1.88rem] flex flex-col gap-[0.69rem] items-center ${
            theme === "dark"
              ? "bg-about-bg transition duration-500 ease-in-out"
              : "bg-nav-text transition duration-500 ease-in-out"
          }`}
          ref={ref2}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: shouldAnimate2 ? 1 : 0,
              y: shouldAnimate2 ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-[0.1rem] items-center"
          >
            <p
              className={`text-[1.25rem] font-semibold leading-normal ${
                theme === "light"
                  ? "text-sterling-theme"
                  : "text-our-service-text"
              }`}
            >
              Resources
            </p>
            <p
              className={`text-[0.6875rem] font-medium leading-normal ${
                theme === "light"
                  ? "text-testimonial-text"
                  : "text-sterling-theme"
              }`}
            >
              Forms and Documents in One Place
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: shouldAnimateCards2 ? 1 : 0, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-[1.25rem] mt-[1rem] w-full"
          >
            {docs.map((doc) => (
              <DocCard key={doc.title} doc={doc} size="mobile" />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
