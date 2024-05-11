"use client";
import React, { useState } from "react";
import axios from "axios";
import { validationSchema } from "@/utils/validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

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

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
      setIsLoading(false);

      setButtonText("Send");
    }
  };

  return (
    <div
      className="bg-cover h-[36.5rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100  "
      style={{
        backgroundImage: "url('/contact.png')",
      }}
      id="contact"
    >
      <div className="flex  justify-center gap-[0.38rem]">
        <div className="ml-[4rem]">
          <div className="w-[51.4375rem] h-[4.3125rem] mt-[6rem]">
            {" "}
            <p className="text-nav-text text-[4rem] font-semibold leading-normal">
              Sterling Homes
            </p>
          </div>
          <div className="w-[47.375rem] h-[5.5rem] mt-[1.81rem]">
            <p className="text-nav-text text-[1rem] font-normal leading-[1.6rem]">
              Unlock the door to your dream home with confidence , whether
              you&apos;re seeking a cozy <br /> bungalow, a spacious family
              retreat, or a sleek urban oasis, we are here to make your dreams a
              reality. Let&apos;s find your perfect place to call home together.
            </p>
          </div>
        </div>
        <div className="w-[29.0625rem] h-[34.4375rem] shadow-md bg-contact-section backdrop-blur-[20px] mr-[4.6rem] pr-[] pl-[1.88rem] pt-[2.75rem]">
          <p className="text-nav-text text-[1.8rem] font-medium leading-normal w-[19.59406rem] h-[3.09475rem]">
            Contact us
          </p>
          <p className="text-nav-text w-[20.07069rem] h-[2.25rem] text-[0.625rem] font-normal leading-[1rem] mt-[0.56rem]">
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
                <div className="w-[23.09375rem] h-[15.41325rem] flex flex-col gap-[2.5rem] mt-[2.5rem]">
                  <div className="w-[22.75rem] h-[3.47106rem]">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={values.name}
                      onChange={handleChange}
                      className=" w-full h-[1.58rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.875rem] font-medium leading-normal ml-[0.5rem]"
                    />
                    <div className="w-[22.96875rem] h-[0.125rem] rounded-[2.125rem] bg-sterling-theme  mt-[0.27rem]"></div>

                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-text-error text-[0.875rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem]"
                    />
                  </div>
                  <div className="w-[22.75rem] h-[3.47106rem]">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={values.email}
                      onChange={handleChange}
                      className=" w-full h-[1.58rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.875rem] font-medium leading-normal  ml-[0.5rem]"
                    />
                    <div className="w-[22.96875rem] h-[0.125rem] rounded-[2.125rem] bg-sterling-theme  mt-[0.27rem]"></div>

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-text-error text-[0.875rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem]"
                    />
                  </div>
                  <div className="w-[22.75rem] h-[3.47106rem]">
                    <Field
                      type="text"
                      name="message"
                      placeholder="Message*"
                      value={values.message}
                      onChange={handleChange}
                      className=" w-full h-[1.58rem] bg-transparent focus:outline-none focus:shadow-none text-nav-text text-[0.875rem] font-medium leading-normal  ml-[0.5rem]"
                    />
                    <div className="w-[22.96875rem] h-[0.125rem] rounded-[2.125rem] bg-sterling-theme mt-[0.27rem]"></div>

                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-text-error text-[0.875rem] font-medium leading-normal w-[12.5rem] mt-[0.38rem]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[10.125rem] h-[3rem] p-[0.5rem] gap-[0.5rem] flex justify-center items-center border-sterling-theme border-solid border-[0.7px] mt-[2.75rem]"
                >
                  <p className="text-nav-text text-[0.8125rem] font-normal leading-normal">
                    {buttonText}
                  </p>
                </button>
              </Form>
            )}
          </Formik>
          <div className="relative">
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />

            {/* {showConfetti && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
