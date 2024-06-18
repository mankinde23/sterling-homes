"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Modal from "../modal/modal";
import { IoClose } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Ourservice({ onClose }) {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
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
      }, 1000); // 2 seconds delay for image animation
      const timeoutP = setTimeout(() => {
        setShouldAnimateP(true);
      }, 1500); // 1 second delay for second paragraph animation

      return () => {
        clearTimeout(timeoutImage);
        clearTimeout(timeoutP);
      };
    }
  }, [isInView1]);

  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:hidden  md:hidden">
        <div
          className={`h-auto w-auto px-[3.96rem]  pt-[4.25rem] pb-[3.19rem] ${
            theme === "dark"
              ? "bg-our-service-b transition duration-500 ease-in-out"
              : "bg-profile-b transition duration-500 ease-in-out"
          }`}
          id="services"
          ref={ref1}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 0 }}
            animate={{
              opacity: shouldAnimate1 ? 1 : 0,
              y: shouldAnimate1 ? 0 : 50,
            }}
            // transition={{ duration: 1.5, ease: "easeIn" }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
            exit={{ opacity: 0 }}
            className="flex flex-col w-[8.75rem] h-[3.6875rem]"
          >
            <p className="text-about-s-w text-[1rem] font-medium leading-normal  ">
              Our
            </p>
            <h1
              className={` text-[1.75rem] font-semibold leading-normal ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
            >
              Services
            </h1>
          </motion.div>
          <div className="flex justify-between items-center mt-[2.81rem] xl:gap-[2.5rem]">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: animateImage1 ? 1 : 0,
                y: animateImage1 ? 0 : 0,
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              exit={{ opacity: 0 }}
              className="bg-cover pt-[25.44rem]  w-[20rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100  "
              style={{
                backgroundImage: "url('/service1.png')",
              }}
            >
              {/* w-[16.3125rem] h-[2.53125rem] */}
              <div className="h-auto w-auto pt-[1.50513rem] pr-[1.1rem] pb-[1.35rem] pl-[0.72rem] flex gap-[0.6875rem] flex-col  backdrop-blur-[7px] bg-navbar-bg xl:w-auto">
                <div className="flex flex-col">
                  <p className="text-[1.125rem] font-semibold leading-normal text-our-service-text">
                    Home Buying & Selling
                  </p>
                  <p className="text-[0.875rem] leading-normal font-normal text-our-servicet mt-[0.62rem] ">
                    Helping clients navigate the process of buying and selling
                    both residential and commercial properties.
                  </p>
                </div>

                <button
                  className="w-[6.375rem] h-[2.1875rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] mt-[0.69rem] hover:bg-sterling-hover transition duration-500 ease-in-out"
                  onClick={() =>
                    openModal(
                      <div>
                        <div className="flex justify-between items-center mt-[3.25rem]">
                          <div></div>
                          <div className="w-auto h-[1.875rem] flex justify-center">
                            <h2
                              className="text-nav-text text-[2rem] font-semibold leading-normal"
                              style={{ fontFamily: " Montserrat, sans-serif" }}
                            >
                              Home Buying & Selling
                            </h2>
                          </div>
                          <span
                            className=" flex justify-end top-0 right-0 mr-[4rem] cursor-pointer text-nav-text hover:text-sterling-theme  mt-[1rem] transition duration-500 ease-in-out"
                            onClick={closeModal}
                          >
                            <IoClose className="w-[2.5625rem] h-[2.5625rem]  flex justify-center items-center " />
                          </span>
                        </div>
                        <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[2.69rem]"></div>
                        <div className="flex justify-center items-center">
                          {" "}
                          <div className="w-[43.6875rem] h-[22.5rem] overflow-y-auto max-h-96 mt-[2.19rem]  mb-[2.19rem] ">
                            <div className="text-nav-text text-[1.25rem] font-normal leading-[1.5475rem] text-justify pr-[1rem]">
                              <p className="text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                {" "}
                                Buying a home, whether residential or
                                commercial, involves a multifaceted process that
                                requires the expertise of a knowledgeable
                                realtor. As your trusted real estate
                                professional, I am committed to guiding you
                                through every step of the homebuying journey
                                with personalized attention and expert advice.
                                For residential homebuyers, the process
                                typically begins with understanding your needs
                                and preferences, including location, budget, and
                                desired amenities. I will assist you in
                                searching for suitable properties, scheduling
                                viewings, and negotiating offers to secure the
                                best deal possible. Throughout the transaction,
                                I will provide valuable insights and
                                recommendations to ensure a smooth and
                                successful purchase.{" "}
                              </p>{" "}
                              <p className="text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem] mt-[2.19rem]">
                                For commercial property buyers, the homebuying
                                process involves a different set of
                                considerations tailored to business needs. As
                                your realtor specializing in commercial real
                                estate, I will work closely with you to identify
                                properties that align with your business
                                objectives and investment goals. This may
                                include assessing factors such as location
                                demographics, zoning regulations, and potential
                                rental income. I will assist in conducting due
                                diligence, evaluating financial feasibility, and
                                negotiating terms with sellers or landlords.
                                Whether you are looking to purchase office
                                space, retail storefronts, or industrial
                                properties, I will leverage my expertise to
                                facilitate a seamless transaction and help you
                                achieve your commercial real estate objectives.
                              </p>{" "}
                              <p className="mt-[2.19rem] text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                {" "}
                                In both residential and commercial real estate
                                transactions, my role extends beyond property
                                search and negotiation. I am dedicated to
                                providing ongoing support and guidance
                                throughout the closing process, coordinating
                                inspections, appraisals, and legal documentation
                                to ensure a successful and stress-free closing.
                                As your realtor, I am committed to delivering
                                exceptional service, transparency, and
                                professionalism to help you achieve your real
                                estate goals effectively and efficiently. Let me
                                be your trusted partner in navigating the
                                complexities of homebuying and securing the
                                property that meets your needs and exceeds your
                                expectations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  <p className=" text-our-service-text text-[0.8125rem] font-light leading-normal">
                    Learn More
                  </p>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{
                opacity: shouldAnimateP ? 1 : 0,
                x: shouldAnimateP ? 0 : -150,
              }}
              transition={{ duration: 1.5, ease: "backOut" }}
              exit={{ opacity: 0 }}
              className="bg-cover  pt-[25.44rem]  w-[20rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
              style={{
                backgroundImage: "url('/services2.png')",
              }}
            >
              <div className="h-auto w-auto pt-[1.50513rem] pr-[1.1rem] pb-[1.35rem] pl-[0.72rem] flex gap-[0.6875rem] flex-col  backdrop-blur-[7px] bg-navbar-bg xl:w-auto">
                <div className="flex flex-col">
                  <p className="text-[1.125rem] font-semibold leading-normal text-our-service-text">
                    Home Leasing Service
                  </p>
                  <p className="text-[0.875rem] leading-normal font-normal text-our-servicet mt-[0.62rem]">
                    Facilitating quicker rental property leases by accurately
                    pricing properties to attract tenants efficiently.{" "}
                  </p>
                </div>
                <button
                  className="w-[6.375rem] h-[2.1875rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] mt-[0.69rem] hover:bg-sterling-hover transition duration-500 ease-in-out"
                  onClick={() =>
                    openModal(
                      <div>
                        <div className="flex justify-between items-center mt-[3.25rem]">
                          <div></div>
                          <div className="w-auto h-[1.875rem] flex justify-center">
                            <h2
                              className="text-nav-text text-[2rem] font-semibold leading-normal"
                              style={{ fontFamily: " Montserrat, sans-serif" }}
                            >
                              Home Leasing Service
                            </h2>
                          </div>
                          <span
                            className=" flex justify-end top-0 right-0  mr-[4rem] cursor-pointer text-nav-text hover:text-sterling-theme mt-[1rem] transition duration-500 ease-in-out "
                            onClick={closeModal}
                          >
                            <IoClose className="w-[2.5625rem] h-[2.5625rem]  flex justify-center items-center " />
                          </span>
                        </div>
                        <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[2.69rem]"></div>
                        <div className="flex justify-center items-center">
                          {" "}
                          <div className="w-[43.6875rem] h-[22.5rem] overflow-y-auto max-h-96 mt-[2.19rem]  mb-[2.19rem] text-justify pr-[1rem]">
                            <div className="text-nav-text text-[1.25rem] font-normal leading-[1.5475rem]">
                              <p className="text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                As a seasoned realtor offering home leasing
                                services, I specialize in facilitating seamless
                                and efficient rental transactions for both
                                landlords and tenants. Home leasing involves
                                connecting property owners with prospective
                                tenants, managing lease agreements, and
                                overseeing the rental process from start to
                                finish. For landlords, I handle the marketing of
                                rental properties, conducting property showings,
                                screening tenants, and negotiating lease terms.
                                I strive to find qualified tenants quickly while
                                maximizing rental income and ensuring a positive
                                rental experience for property owners.{" "}
                              </p>{" "}
                              <p className="mt-[2.19rem] text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                For tenants seeking to lease a home, I assist in
                                identifying suitable rental properties based on
                                preferences such as location, budget, and
                                amenities. I guide tenants through the
                                application process, including completing rental
                                applications, conducting background checks, and
                                reviewing lease agreements. I prioritize clear
                                communication and transparency to ensure tenants
                                fully understand their rights and
                                responsibilities as renters. My goal is to match
                                tenants with the right rental property that
                                meets their needs and provides a comfortable
                                living environment.
                              </p>{" "}
                              <p className="mt-[2.19rem] text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                Throughout the home leasing process, I am
                                committed to providing personalized attention
                                and exceptional service to all parties involved.
                                I handle the coordination of move-in and
                                move-out procedures, address maintenance issues
                                promptly, and serve as a reliable point of
                                contact for any rental-related inquiries or
                                concerns. With my expertise in home leasing and
                                property management, I strive to make the rental
                                experience hassle-free and rewarding for both
                                landlords and tenants. Whether you are a
                                property owner looking to rent out your home or
                                a tenant searching for a rental property, I am
                                here to assist you every step of the way and
                                ensure a successful and mutually beneficial
                                leasing arrangement.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  <p className=" text-our-service-text text-[0.8125rem] font-light leading-normal">
                    Learn More
                  </p>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -250 }}
              animate={{
                opacity: shouldAnimateP ? 1 : 0,
                x: shouldAnimateP ? 0 : -250,
              }}
              transition={{ duration: 1.5, ease: "backOut" }}
              exit={{ opacity: 0 }}
              className="bg-cover pt-[25.44rem]  w-[20rem] bg-light-gray bg-no-repeat flex-shrink-0  scale-100"
              style={{
                backgroundImage: "url('/services3.png')",
              }}
            >
              <div className="h-auto w-auto pt-[1.50513rem] pr-[1.1rem] pb-[1.35rem] pl-[0.72rem] flex gap-[0.6875rem] flex-col  backdrop-blur-[7px] bg-navbar-bg xl:w-auto">
                <div className="flex flex-col">
                  <p className="text-[1.125rem] font-semibold leading-normal text-our-service-text">
                    Tax Preparation & Filing
                  </p>
                  <p className="text-[0.875rem] leading-normal font-normal text-our-servicet mt-[0.62rem]">
                    Providing strategic tax planning and filing services
                    tailored for real estate investors to optimize <br /> tax
                    benefits and maximize gains.
                  </p>
                </div>
                <button
                  className="w-[6.375rem] h-[2.1875rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] mt-[0.69rem] hover:bg-sterling-hover transition duration-500 ease-in-out"
                  onClick={() =>
                    openModal(
                      <div>
                        <div className="flex justify-between items-center mt-[3.25rem]">
                          <div></div>
                          <div className="w-auto h-[1.875rem] flex justify-center">
                            <h2
                              className="text-nav-text text-[2rem] font-semibold leading-normal"
                              style={{ fontFamily: " Montserrat, sans-serif" }}
                            >
                              Tax Preparation & Filing
                            </h2>
                          </div>
                          <span
                            className=" flex justify-end top-0 right-0  mr-[4rem] cursor-pointer text-nav-text hover:text-sterling-theme  mt-[1rem] transition duration-500 ease-in-out"
                            onClick={closeModal}
                          >
                            <IoClose className="w-[2.5625rem] h-[2.5625rem]  flex justify-center items-center  " />
                          </span>
                        </div>
                        <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[2.69rem]"></div>
                        <div className="flex justify-center items-center">
                          {" "}
                          <div className="w-[43.6875rem] h-[22.5rem] overflow-y-auto max-h-96 mt-[2.19rem] mb-[2.19rem] ">
                            <div className="text-nav-text text-[1.25rem] font-normal leading-[1.5475rem] text-justify pr-[1rem]">
                              <p className=" text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                {" "}
                                Tax planning and filing services for real estate
                                investors are essential components of financial
                                management aimed at optimizing tax efficiency
                                and maximizing returns on investment. At our
                                consultancy firm, we specialize in guiding real
                                estate investors through the complexities of tax
                                laws and regulations specific to property
                                ownership and transactions. Our experienced
                                consultants work closely with clients to develop
                                personalized tax strategies that align with
                                their investment goals and objectives.{" "}
                              </p>{" "}
                              <p className="mt-[2.19rem] text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                {" "}
                                Our comprehensive tax planning services begin
                                with a thorough analysis of each client&apos;s
                                real estate portfolio, taking into account
                                factors such as property types, rental income,
                                capital gains, and allowable deductions. We
                                identify opportunities to minimize tax
                                liabilities through strategies such as cost
                                segregation, depreciation scheduling, and
                                structuring transactions to take advantage of
                                favorable tax provisions. By proactively
                                planning and strategizing, we help our clients
                                optimize their tax positions while ensuring
                                compliance with applicable tax laws and
                                regulations.
                              </p>{" "}
                              <p className="mt-[2.19rem] text-nav-text text-[0.9375rem] font-normal leading-[1.40625rem]">
                                {" "}
                                In addition to tax planning, we provide expert
                                tax filing services tailored specifically for
                                real estate investors. Our consultants are
                                well-versed in preparing and filing tax returns
                                accurately and efficiently, ensuring that all
                                relevant deductions and credits are claimed to
                                maximize tax savings. We stay abreast of the
                                latest changes in tax codes and regulations
                                affecting real estate investments, enabling us
                                to provide up-to-date advice and guidance to our
                                clients. With our meticulous approach to tax
                                filing, we strive to relieve our clients of the
                                burdens of paperwork and compliance, allowing
                                them to focus on their core real estate
                                investment activities with confidence
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  <p className=" text-our-service-text text-[0.8125rem] font-light leading-normal">
                    Learn More
                  </p>
                </button>
              </div>
            </motion.div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {modalContent}
          </Modal>
        </div>
      </div>
      {/* Mobile....... */}
      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:block sm:block md:block">
        <div
          className={`h-auto w-auto pt-[3.5rem] md:block lg:flex lg:flex-col lg:justify-center lg:items-center  ${
            theme === "dark"
              ? "bg-our-service-b transition duration-500 ease-in-out"
              : "bg-profile-b transition duration-500 ease-in-out"
          }`}
        >
          <div className=" w-[4.75rem] h-[2.25rem] md:pl-[1.81rem] md:block lg:w-auto lg:flex lg:flex-col lg:justify-center lg:items-center lg:pl-0">
            <p
              className="text-about-s-w text-[0.8125rem] font-semibold leading-normal  "
              style={{ fontFamily: " Montserrat, sans-serif" }}
            >
              OUR
            </p>
            <h1
              className={` md:text-[1.5rem] lg:text-[2rem] font-semibold leading-normal ${
                theme === "light" ? "text-about-b" : "text-nav-text"
              }`}
              style={{ fontFamily: " Montserrat, sans-serif" }}
            >
              Services
            </h1>
          </div>

          <div className="flex md:gap-[0rem] flex-col justify-between  mt-[2.81rem] lg:gap-[2.94rem]">
            <div
              className="bg-cover pt-[17.5rem] h-[29.5rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100"
              style={{
                backgroundImage: "url('/sterling1m.png')",
              }}
            >
              <div className="h-[12.25rem] w-auto sm:pt-[1.38rem] md:pt-[1.38rem] pr-[1.88rem] pb-[1.32rem] pl-[1.87rem] flex gap-[1.625rem] flex-col  backdrop-blur-[7px] bg-navbar-bg lg:pt-[2.3rem]">
                <div className="flex flex-col">
                  <p className="sm:text-[1rem] md:text-[1rem] font-semibold leading-normal text-our-service-text lg:text-[1.25rem]">
                    Home Buying & Selling
                  </p>
                  <p className="sm:text-[0.8125rem] md:text-[0.8125rem] leading-normal  text-our-servicet mt-[0.62rem] w-auto lg:text-[1rem] ">
                    Helping clients navigate the process of buying and selling
                    both residential and commercial properties.
                  </p>
                </div>

                <button
                  className="sm:w-[5.9rem] sm:h-[1.8rem] md:w-[5.9rem] md:h-[1.8rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] lg:w-[7.9rem] lg:h-[2.2rem] "
                  onClick={() =>
                    openModal(
                      <div>
                        <div className="flex justify-between mt-[1.94rem]">
                          <div className="w-auto h-[1.875rem] flex justify-center mt-[1.2rem] ">
                            <h2
                              className="text-nav-text text-[0.875rem] font-semibold leading-normal pl-[1.88rem] lg:text-[1.25rem]"
                              style={{ fontFamily: " Montserrat, sans-serif" }}
                            >
                              Home Buying & Selling
                            </h2>
                          </div>
                          <span
                            className=" flex justify-end top-0 right-0 mr-[1.31rem] cursor-pointer text-nav-text hover:text-sterling-theme  mt-[1rem] "
                            onClick={closeModal}
                          >
                            <IoClose className="h-[1.73rem] w-[2.5rem]  flex justify-center items-center " />
                          </span>
                        </div>
                        <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[1.17rem]"></div>
                        <div className="flex  items-center">
                          {" "}
                          <div className="w-auto h-[20.81rem] overflow-y-auto max-h-[26] mt-[1.04rem] px-[1.88rem] mb-[1.04rem] ">
                            <div className="text-nav-text text-[1.25rem] font-normal text-justify hyphens-auto">
                              <p className="mt-[1.04rem] text-nav-text text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                {" "}
                                Buying a home, whether residential or
                                commercial, involves a multifaceted process that
                                requires the expertise of a knowledgeable
                                realtor. As your trusted real estate
                                professional, I am committed to guiding you
                                through every step of the homebuying journey
                                with personalized attention and expert advice.
                                For residential homebuyers, the process
                                typically begins with understanding your needs
                                and preferences, including location, budget, and
                                desired amenities. I will assist you in
                                searching for suitable properties, scheduling
                                viewings, and negotiating offers to secure the
                                best deal possible. Throughout the transaction,
                                I will provide valuable insights and
                                recommendations to ensure a smooth and
                                successful purchase.{" "}
                              </p>{" "}
                              <p className="text-nav-text  text-[0.75rem] font-normal leading-[1.9rem] mt-[1.04rem] lg:text-[0.875rem]">
                                For commercial property buyers, the homebuying
                                process involves a different set of
                                considerations tailored to business needs. As
                                your realtor specializing in commercial real
                                estate, I will work closely with you to identify
                                properties that align with your business
                                objectives and investment goals. This may
                                include assessing factors such as location
                                demographics, zoning regulations, and potential
                                rental income. I will assist in conducting due
                                diligence, evaluating financial feasibility, and
                                negotiating terms with sellers or landlords.
                                Whether you are looking to purchase office
                                space, retail storefronts, or industrial
                                properties, I will leverage my expertise to
                                facilitate a seamless transaction and help you
                                achieve your commercial real estate objectives.
                              </p>{" "}
                              <p className="mt-[1.04rem] mb-[1.04rem] text-nav-text  text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                {" "}
                                In both residential and commercial real estate
                                transactions, my role extends beyond property
                                search and negotiation. I am dedicated to
                                providing ongoing support and guidance
                                throughout the closing process, coordinating
                                inspections, appraisals, and legal documentation
                                to ensure a successful and stress-free closing.
                                As your realtor, I am committed to delivering
                                exceptional service, transparency, and
                                professionalism to help you achieve your real
                                estate goals effectively and efficiently. Let me
                                be your trusted partner in navigating the
                                complexities of homebuying and securing the
                                property that meets your needs and exceeds your
                                expectations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  <p
                    className=" text-our-service-text text-[0.75rem] font-semibold leading-normal"
                    style={{ fontFamily: " Montserrat, sans-serif" }}
                  >
                    Learn More
                  </p>
                </button>
              </div>
            </div>

            <div
              className="bg-cover pt-[17.5rem] h-[29.5rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
              style={{
                backgroundImage: "url('/sterling2m.png')",
              }}
            >
              <div className="h-[12.25rem] w-auto sm:pt-[1.38rem] md:pt-[1.38rem] pr-[1.88rem] pb-[1.32rem] pl-[1.87rem] flex gap-[1.625rem] flex-col  backdrop-blur-[7px] bg-navbar-bg lg:pt-[2.3rem]">
                <div className="flex flex-col">
                  <p
                    className="sm:text-[1rem] md:text-[1rem] font-semibold leading-normal text-our-service-text lg:text-[1.25rem]"
                    style={{ fontFamily: " Montserrat, sans-serif" }}
                  >
                    Home Leasing Service
                  </p>
                  <p className="sm:text-[0.8125rem] md:text-[0.8125rem] leading-normal text-our-servicet mt-[0.62rem] w-auto lg:text-[1rem] ">
                    Facilitating quicker rental property leases by accurately
                    pricing properties to attract tenants efficiently.{" "}
                  </p>
                </div>
                <button
                  className="sm:w-[5.9rem] sm:h-[1.8rem] md:w-[5.9rem] md:h-[1.8rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] lg:w-[7.9rem] lg:h-[2.2rem] "
                  onClick={() =>
                    openModal(
                      <div>
                        <div className="flex justify-between  mt-[1.94rem]">
                          <div className="w-auto h-[1.875rem] flex justify-center mt-[1.2rem] ">
                            <h2 className="text-nav-text text-[0.875rem] font-semibold leading-normal pl-[1.88rem] lg:text-[1.25rem]">
                              Home Leasing Service
                            </h2>
                          </div>
                          <span
                            className=" flex justify-end top-0 right-0  mr-[1.31rem] cursor-pointer text-nav-text hover:text-sterling-theme mt-[1rem] "
                            onClick={closeModal}
                          >
                            <IoClose className="h-[1.73rem] w-[2.5rem] flex justify-center items-center " />
                          </span>
                        </div>
                        <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[1.17rem]"></div>
                        <div className="flex  items-center">
                          {" "}
                          <div className="w-auto h-[20.81rem] overflow-y-auto max-h-[26] mt-[1.04rem] mb-[1.04rem] text-justify px-[1.88rem]">
                            <div className="text-nav-text text-[1.25rem] font-normal hyphens-auto">
                              <p className="mt-[1.04rem] text-nav-text text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                As a seasoned realtor offering home leasing
                                services, I specialize in facilitating seamless
                                and efficient rental transactions for both
                                landlords and tenants. Home leasing involves
                                connecting property owners with prospective
                                tenants, managing lease agreements, and
                                overseeing the rental process from start to
                                finish. For landlords, I handle the marketing of
                                rental properties, conducting property showings,
                                screening tenants, and negotiating lease terms.
                                I strive to find qualified tenants quickly while
                                maximizing rental income and ensuring a positive
                                rental experience for property owners.{" "}
                              </p>{" "}
                              <p className="mt-[1.04rem] text-nav-text  text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                For tenants seeking to lease a home, I assist in
                                identifying suitable rental properties based on
                                preferences such as location, budget, and
                                amenities. I guide tenants through the
                                application process, including completing rental
                                applications, conducting background checks, and
                                reviewing lease agreements. I prioritize clear
                                communication and transparency to ensure tenants
                                fully understand their rights and
                                responsibilities as renters. My goal is to match
                                tenants with the right rental property that
                                meets their needs and provides a comfortable
                                living environment.
                              </p>{" "}
                              <p className="mt-[1.04rem] mb-[1.04rem] text-nav-text  text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                Throughout the home leasing process, I am
                                committed to providing personalized attention
                                and exceptional service to all parties involved.
                                I handle the coordination of move-in and
                                move-out procedures, address maintenance issues
                                promptly, and serve as a reliable point of
                                contact for any rental-related inquiries or
                                concerns. With my expertise in home leasing and
                                property management, I strive to make the rental
                                experience hassle-free and rewarding for both
                                landlords and tenants. Whether you are a
                                property owner looking to rent out your home or
                                a tenant searching for a rental property, I am
                                here to assist you every step of the way and
                                ensure a successful and mutually beneficial
                                leasing arrangement.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  <p
                    className=" text-our-service-text text-[0.75rem] font-semibold leading-normal"
                    style={{ fontFamily: " Montserrat, sans-serif" }}
                  >
                    Learn More
                  </p>
                </button>
              </div>
            </div>

            <div
              className="bg-cover pt-[17.5rem] h-[29.5rem] w-auto bg-light-gray bg-no-repeat flex-shrink-0  scale-100 "
              style={{
                backgroundImage: "url('/sterling3m.png')",
              }}
            >
              <div className="h-[12.25rem] w-auto sm:pt-[1.38rem] md:pt-[1.38rem] pr-[1.88rem] pb-[1.32rem] pl-[1.87rem] flex gap-[1.625rem] flex-col  backdrop-blur-[7px] bg-navbar-bg lg:pt-[2.3rem]">
                <div className="flex flex-col">
                  <p
                    className="sm:text-[1rem] md:text-[1rem] font-semibold leading-normal text-our-service-text lg:text-[1.25rem]"
                    style={{ fontFamily: " Montserrat, sans-serif" }}
                  >
                    Tax Preparation & Filing
                  </p>
                  <p className="sm:text-[0.8125rem] md:text-[0.8125rem] leading-normal text-our-servicet mt-[0.62rem] w-auto lg:text-[1rem]">
                    Providing strategic tax planning and filing services
                    tailored for real estate investors to optimize tax benefits
                    and maximize gains.
                  </p>
                </div>
                <button
                  className="sm:w-[5.9rem] sm:h-[1.8rem] md:w-[5.9rem] md:h-[1.8rem] bg-sterling-theme flex justify-center items-center p-[0.5rem] lg:w-[7.9rem] lg:h-[2.2rem]"
                  onClick={() =>
                    openModal(
                      <div>
                        <div className="flex justify-between  mt-[1.94rem]">
                          <div className="w-auto h-[1.875rem] flex justify-center mt-[1.2rem] ">
                            <h2
                              className="text-nav-text text-[0.875rem] font-semibold leading-normal pl-[1.88rem] lg:text-[1.25rem]"
                              // style={{ fontFamily: " Montserrat, sans-serif" }}
                            >
                              Tax Preparation & Filing
                            </h2>
                          </div>
                          <span
                            className=" flex justify-end top-0 right-0  mr-[1.31rem] cursor-pointer text-nav-text hover:text-sterling-theme  mt-[1rem] "
                            onClick={closeModal}
                          >
                            <IoClose className="h-[1.73rem] w-[2.5rem]  flex justify-center items-center  " />
                          </span>
                        </div>
                        <div className="w-auto border border-stroke-main border-opacity-17 border-width-1 mt-[1.17rem]"></div>
                        <div className="flex  items-center">
                          {" "}
                          <div className="w-auto h-[20.81rem] overflow-y-auto max-h-[26] mt-[1.04rem] mb-[1.04rem] text-justify px-[1.88rem]">
                            <div className="text-nav-text text-[1.25rem] font-normal text-justify hyphens-auto">
                              <p className="mt-[1.04rem] text-nav-text text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                {" "}
                                Tax planning and filing services for real estate
                                investors are essential components of financial
                                management aimed at optimizing tax efficiency
                                and maximizing returns on investment. At our
                                consultancy firm, we specialize in guiding real
                                estate investors through the complexities of tax
                                laws and regulations specific to property
                                ownership and transactions. Our experienced
                                consultants work closely with clients to develop
                                personalized tax strategies that align with
                                their investment goals and objectives.{" "}
                              </p>{" "}
                              <p className="mt-[1.04rem] text-nav-text text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                {" "}
                                Our comprehensive tax planning services begin
                                with a thorough analysis of each client&apos;s
                                real estate portfolio, taking into account
                                factors such as property types, rental income,
                                capital gains, and allowable deductions. We
                                identify opportunities to minimize tax
                                liabilities through strategies such as cost
                                segregation, depreciation scheduling, and
                                structuring transactions to take advantage of
                                favorable tax provisions. By proactively
                                planning and strategizing, we help our clients
                                optimize their tax positions while ensuring
                                compliance with applicable tax laws and
                                regulations.
                              </p>{" "}
                              <p className="mt-[1.04rem] mb-[1.04rem] text-nav-text text-[0.75rem] font-normal leading-[1.9rem] lg:text-[0.875rem]">
                                {" "}
                                In addition to tax planning, we provide expert
                                tax filing services tailored specifically for
                                real estate investors. Our consultants are
                                well-versed in preparing and filing tax returns
                                accurately and efficiently, ensuring that all
                                relevant deductions and credits are claimed to
                                maximize tax savings. We stay abreast of the
                                latest changes in tax codes and regulations
                                affecting real estate investments, enabling us
                                to provide up-to-date advice and guidance to our
                                clients. With our meticulous approach to tax
                                filing, we strive to relieve our clients of the
                                burdens of paperwork and compliance, allowing
                                them to focus on their core real estate
                                investment activities with confidence
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  <p
                    className=" text-our-service-text text-[0.75rem] font-semibold leading-normal"
                    style={{ fontFamily: " Montserrat, sans-serif" }}
                  >
                    Learn More
                  </p>
                </button>
              </div>
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {modalContent}
          </Modal>
        </div>
      </div>
    </>
  );
}
