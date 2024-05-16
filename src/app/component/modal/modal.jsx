"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:block lg:block  md:block">
        <div
          className="fixed inset-0 flex items-center justify-center z-50 h-full w-full bg-modal-main bg-opacity-77 backdrop-blur-[14px]   "
          onClick={() => onClose()}
        >
          <div className=" bg-modal-con opacity-[18px]  z-10 w-[62.625rem] h-[38.5625rem] rounded-[0.5rem]">
            {children}
          </div>
        </div>
      </div>

      {/*  */}

      <div className="2xl:hidden 2xl-max:hidden xl:hidden lg:hidden sm:block md:hidden">
        <div
          className="fixed inset-0 flex items-center justify-center z-50 h-full w-full bg-modal-main bg-opacity-77 backdrop-blur-[14px]   "
          onClick={() => onClose()}
        >
          <div className=" bg-modal-con opacity-[18px]  z-10 w-[22.125rem] h-[30.0625rem] rounded-[0.25rem]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
