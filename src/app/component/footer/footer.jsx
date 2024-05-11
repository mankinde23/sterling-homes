import Image from "next/image";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../../public/sterling-logo-footer.png";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="w-auto h-[28.375rem] bg-footer-b">
        <div className="flex gap-[2rem] items-center justify-center pt-[6.5rem]">
          <div className="w-[62.25rem] h-[8.6875rem] flex gap-[4.25rem]">
            <div className="w-[17.91rem] h-[8.68rem]">
              <p className="w-[17.0625rem] h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem]">
                MORE INFO
              </p>
              <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test">
                Our Services
              </p>
              <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test">
                About Us
              </p>
            </div>
            <div className="w-[17.91rem] h-[8.68rem]">
              <p className="w-[17.0625rem] h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem]">
                FOLLOW US
              </p>
              <a
                href="https://github.com/mankinde23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-[1rem] items-center"
              >
                <FaXTwitter className="w-[1.0625rem] h-[1.0625rem] text-footer-test" />
                <p className="text-[1rem] font-light leading-[3rem] tracking-[0.04rem] text-footer-test">
                  Twitter
                </p>
              </a>
              <a
                href="https://www.instagram.com/sterlinghomes22/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-[1rem] items-center"
              >
                <FaInstagram className=" w-[1.0625rem] h-[1.0625rem] text-footer-test" />
                <p className="text-[0.9375rem] font-normal leading-[3rem] tracking-[0.0375rem] text-footer-test">
                  Instagram
                </p>
              </a>
            </div>
            <div className="w-[17.91rem] h-[8.68rem]">
              <p className="w-[17.0625rem] h-[2.6875rem] text-sterling-theme text-[1.25rem] font-medium leading-[3rem] tracking-[0.05rem]">
                CONTACT US
              </p>
              <a href="mailto: sterlinghomes22@gmail.com?subject=Sterling Home's Inquiry&body=Hello, I would like to inquire about your catalogue.">
                <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test">
                  sterlinghomes22@gmail.com
                </p>
              </a>

              <p className="w-[17.0625rem] h-[3rem] text-[0.9375rem] font-light leading-[3rem]  text-footer-test">
                +1 9062818990
              </p>
            </div>
          </div>
          <div className="w-[16.75rem] h-[10.99219rem]">
            <Image src={logo} alt="" />
          </div>
        </div>
        <div className="w-[81rem] h-[0.125rem] rounded-[2.125rem] bg-footer-s mx-[5.5rem] mt-[4.84rem]"></div>
        <div className="flex justify-center items-center mt-[1.72rem]">
          <p className="w-[20.125rem] h-[2.4375rem] text-[0.6875rem] font-normal leading-normal text-copy-t flex justify-center items-center">
            Copyright © 2024 Sterling Homes,All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
