"use client";
import React, { useState } from "react";
import axios from "axios";
import { validationSchema } from "@/utils/validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

const formValues = {
  name: "",
  email: "",
  message: "",
};
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setIsLoading(true);

      setButtonText("Sending...");

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      resetForm();
      toast.success("Form submitted successfully!");

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
      setShowConfetti(true);
      setIsLoading(false);

      setButtonText("Send");
    }
  };
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const [shouldAnimate1, setShouldAnimate1] = useState(false);
  const [animateImage1, setAnimateImage1] = useState(false);
  const [shouldAnimateP, setShouldAnimateP] = useState(false);

  useEffect(() => {
    if (isInView1) {
      setShouldAnimate1(true);
      const timeoutImage = setTimeout(() => {
        setAnimateImage1(true);
      }, 1000);
      const timeoutP = setTimeout(() => {
        setShouldAnimateP(true);
      }, 1500);

      return () => {
        clearTimeout(timeoutImage);
        clearTimeout(timeoutP);
      };
    }
  }, [isInView1]);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const [shouldAnimate2, setShouldAnimate2] = useState(false);
  const [animateImage2, setAnimateImage2] = useState(false);
  const [shouldAnimateP1, setShouldAnimateP1] = useState(false);

  useEffect(() => {
    if (isInView2) {
      setShouldAnimate2(true);
      const timeoutImage1 = setTimeout(() => {
        setAnimateImage2(true);
      }, 1000); // 2 seconds delay for image animation
      const timeoutP1 = setTimeout(() => {
        setShouldAnimateP1(true);
      }, 1000); // 1 second delay for second paragraph animation

      return () => {
        clearTimeout(timeoutImage1);
        clearTimeout(timeoutP1);
      };
    }
  }, [isInView2]);

  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:hidden">
        <div
          className="bg-cover h-[36.5rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100  "
          style={{
            backgroundImage: "url('/contact.png')",
          }}
          id="contact"
          ref={ref1}
        >
          <div className="flex  justify-between gap-[0.38rem] xl:justify-center">
            <div className="ml-[4rem]">
              <div className="w-auto h-[4.3125rem] mt-[6rem] lg:w-auto">
                {" "}
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: shouldAnimate1 ? 1 : 0,
                    y: shouldAnimate1 ? 0 : 50,
                  }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  exit={{ opacity: 0 }}
                  className="text-nav-text text-[4rem] font-semibold leading-normal lg:text-[2rem]"
                >
                  Sterling Homes
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: animateImage1 ? 1 : 0,
                  y: animateImage1 ? 0 : 0,
                }}
                transition={{ duration: 1, ease: "easeIn" }}
                exit={{ opacity: 0 }}
                className="w-[46.375rem] h-[5.5rem] mt-[1.81rem] lg:w-auto lg:mt-[-0.19rem]"
              >
                <p className="text-nav-text text-[1rem] font-extralight leading-[1.6rem] lg:text-[0.9375rem ]">
                  Unlock the door to your dream home with confidence , whether
                  you&apos;re seeking a cozy bungalow, a spacious family
                  retreat, or a sleek urban oasis, we are here to make your
                  dreams a reality. Let&apos;s find your perfect place to call
                  home together.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: shouldAnimateP ? 1 : 0,
                y: shouldAnimateP ? 0 : -100,
              }}
              transition={{ duration: 1.5, ease: "backOut" }}
              exit={{ opacity: 0 }}
              className="w-[24.21875rem] h-[34.4375rem] shadow-md bg-contact-section backdrop-blur-[20px] mr-[4.6rem] pr-[1.88rem] pl-[1.88rem] pt-[2.75rem] lg:w-[18.44469rem]"
            >
              <p className="text-nav-text text-[1.8rem] font-medium leading-normal w-[19.59406rem] h-[3.09475rem] lg:text-[1.5rem] lg:w-auto lg:h-auto">
                Contact us
              </p>
              <p className="text-nav-text w-[20.07069rem] h-[2.25rem] text-[0.6875rem] font-normal leading-[1rem] mt-[0.56rem] lg:w-auto lg:h-auto">
                We value your feedback and inquiries. Please fill out the form
                below, and we&apos;ll get back to you as soon as possible
              </p>
              <Formik
                initialValues={formValues}
                validationSchema={toFormikValidationSchema(validationSchema)}
                // onSubmit={() => handleSubmit(values)}
                // onSubmit={(values, { setSubmitting }) => {
                //   handleSubmit(values);
                //   setSubmitting(false);
                // }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  handleSubmit(values, { setSubmitting, resetForm });
                }}
              >
                {({ values, handleChange, isSubmitting }) => (
                  <Form className="">
                    <div className="w-[19.24481rem] h-[15.41325rem] flex flex-col gap-[2.5rem] mt-[2.5rem] lg:w-[14.60981rem] lg:h-[13.875rem]">
                      <div className="w-auto h-[3.47106rem] lg:w-auto">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={values.name}
                          onChange={handleChange}
                          className=" w-full h-[1.58rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.875rem] font-medium leading-normal ml-[0.5rem] lg:text-[0.75rem]"
                        />
                        <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-nav-text  mt-[0.27rem] lg:w-auto"></div>

                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-text-error text-[0.875rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem] ml-[0.5rem]"
                        />
                      </div>
                      <div className="w-auto h-[3.47106rem] lg:w-auto">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={values.email}
                          onChange={handleChange}
                          className="lg:text-[0.75rem] w-full h-[1.58rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.875rem] font-medium leading-normal  ml-[0.5rem]"
                        />
                        <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-nav-text  mt-[0.27rem] lg:w-auto"></div>

                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-text-error text-[0.875rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem] ml-[0.5rem]"
                        />
                      </div>
                      <div className="w-auto h-[3.47106rem] lg:w-auto">
                        <Field
                          type="text"
                          name="message"
                          placeholder="Message*"
                          value={values.message}
                          onChange={handleChange}
                          className="lg:text-[0.75rem] w-full h-[1.58rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.875rem] font-medium leading-normal  ml-[0.5rem]"
                        />
                        <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-nav-text mt-[0.27rem] lg:w-auto"></div>

                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-text-error text-[0.875rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem] ml-[0.5rem]"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className=" lg:w-[7.34981rem] lg:h-[2.6875rem] w-[10.125rem] h-[3rem] p-[0.5rem] gap-[0.5rem] flex justify-center items-center border-sterling-theme border-solid border-[0.7px] mt-[2.75rem] hover:bg-nav-text hover:text-about-b transition duration-500 ease-in-out text-nav-text"
                    >
                      <p className=" text-[0.8125rem] font-normal leading-normal  ">
                        {buttonText}
                      </p>
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="relative">
                <ToastContainer
                  position="top-center"
                  // autoClose={3000}
                  // hideProgressBar={false}
                  // newestOnTop={false}
                  // closeOnClick
                  // rtl={false}
                  // pauseOnFocusLoss
                  // draggable
                  // pauseOnHover
                  theme="light"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:block hidden">
        <div
          className="bg-cover h-[17rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 pt-[3.875rem] pr-[1.875rem] pb-[6.625rem] pl-[1.875rem] gap-[0.75rem] flex flex-col "
          style={{
            backgroundImage: "url('/contactm.png')",
          }}
          ref={ref2}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: shouldAnimate2 ? 1 : 0,
              y: shouldAnimate2 ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="text-nav-text text-[1.875rem] font-semibold leading-normal"
            style={{ fontFamily: " Montserrat, sans-serif" }}
          >
            Sterling Homes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: animateImage2 ? 1 : 0,
              y: animateImage2 ? 0 : 0,
            }}
            transition={{ duration: 1, ease: "easeIn" }}
            exit={{ opacity: 0 }}
            className="w-auto h-[3.625rem] "
          >
            <p className="text-nav-text text-[0.75rem] font-normal leading-[1rem]">
              Unlock the door to your dream home with confidence , whether
              you&apos;re seeking a cozy bungalow, a spacious family retreat, or
              a sleek urban oasis, we are here to make your dreams a reality.
              Let&apos;s find your perfect place to call home together.
            </p>
          </motion.div>
        </div>
        <div
          className="bg-cover h-[33rem] w-auto shadow-md bg-contact-section backdrop-blur-[20px] bg-no-repeat flex-shrink-0  scale-100 mt-[0rem] "
          style={{
            backgroundImage: "url('/contactusm.png')",
          }}
        >
          <div className="pl-[1.87rem] bg-contact-section backdrop-blur-[20px] h-[33rem] pt-[2.25rem] pr-[1.87rem]">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: shouldAnimate2 ? 1 : 0,
                y: shouldAnimate2 ? 0 : 50,
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              exit={{ opacity: 0 }}
              className="text-nav-text text-[2rem] font-medium leading-normal w-auto h-[2.43rem]"
            >
              Contact us
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: animateImage2 ? 1 : 0,
                y: animateImage2 ? 0 : 0,
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              exit={{ opacity: 0 }}
              className="text-nav-text w-auto h-[2.25rem] text-[0.625rem] font-normal leading-[1rem] mt-[0.94rem]"
            >
              We value your feedback and inquiries. Please fill out the form
              below, and we&apos;ll get back to you as soon as possible
            </motion.p>
            <Formik
              initialValues={formValues}
              validationSchema={toFormikValidationSchema(validationSchema)}
              // onSubmit={() => handleSubmit(values)}
              // onSubmit={(values, { setSubmitting }) => {
              //   handleSubmit(values);
              //   setSubmitting(false);
              // }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                handleSubmit(values, { setSubmitting, resetForm });
              }}
            >
              {({ values, handleChange, isSubmitting }) => (
                <Form className="">
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: animateImage2 ? 1 : 0,
                      y: animateImage2 ? 0 : 0,
                    }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    exit={{ opacity: 0 }}
                    className="w-auto h-[15.125rem] flex flex-col gap-[2.5rem] mt-[2.31rem]"
                  >
                    <div className="w-auto h-[3.375rem]">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={values.name}
                        onChange={handleChange}
                        className=" w-full h-[1.53rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.75rem] font-medium leading-normal  ml-[0.5rem]"
                      />
                      <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-nav-text  mt-[0.24rem]"></div>

                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-text-error text-[0.75rem] font-medium leading-normal w-auto mt-[0.62rem] ml-[0.5rem]"
                      />
                    </div>
                    <div className="w-auto h-[3.375rem]">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={values.email}
                        onChange={handleChange}
                        className=" w-full h-[1.53rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.75rem] font-medium leading-normal  ml-[0.5rem]"
                      />
                      <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-nav-text  mt-[0.27rem]"></div>

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-text-error text-[0.75rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem] ml-[0.5rem]"
                      />
                    </div>
                    <div className="w-auto h-[3.375rem]">
                      <Field
                        type="text"
                        name="message"
                        placeholder="Message*"
                        value={values.message}
                        onChange={handleChange}
                        className=" w-full h-[1.53rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.75rem] font-medium leading-normal  ml-[0.5rem]"
                      />
                      <div className="w-auto h-[0.125rem] rounded-[2.125rem] bg-nav-text mt-[0.27rem]"></div>

                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-text-error text-[0.75rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem] ml-[0.5rem]"
                      />
                    </div>
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: animateImage2 ? 1 : 0,
                      y: animateImage2 ? 0 : 0,
                    }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    exit={{ opacity: 0 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[8.5rem] h-[2.8125rem] p-[0.5rem] gap-[0.5rem] flex justify-center items-center border-sterling-theme border-solid border-[0.7px] mt-[3.25rem]"
                  >
                    <p className="text-nav-text text-[0.8125rem] font-normal leading-normal">
                      {buttonText}
                    </p>
                  </motion.button>
                </Form>
              )}
            </Formik>
            <div className="relative">
              <ToastContainer
                position="top-center"
                // autoClose={3000}
                // hideProgressBar={false}
                // newestOnTop={false}
                // closeOnClick
                // rtl={false}
                // pauseOnFocusLoss
                // draggable
                // pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
