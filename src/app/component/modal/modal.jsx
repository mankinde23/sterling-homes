"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 h-full w-full bg-modal-main bg-opacity-77 backdrop-blur-[14px]   "
      onClick={() => onClose()}
    >
      <div className=" bg-modal-con opacity-[18px]  z-10 w-[62.625rem] h-[38.5625rem] rounded-[0.5rem]">
        {children}
      </div>
    </div>
  );
}
