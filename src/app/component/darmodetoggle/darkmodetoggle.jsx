"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TbBrightnessUp } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";

function DarkModeToggle() {
  //   const { themeMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  //   if (!mounted) {
  //     return null;
  //   }
  //   const toggleTheme = () => {
  //     setTheme(theme === "light" ? "dark" : "light");
  //   };
  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, [mounted, setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className="sm:hidden 2xl:block 2xl-max:block xl:hidden lg:hidden  md:hidden">
        <button
          onClick={toggleTheme}
          className="mt-[1.06rem] w-[2.1875rem] pl-[2rem]"
        >
          {theme === "light" ? (
            <FaMoon className=" h-[1.875rem] w-[1.875rem] text-nav-text" />
          ) : (
            <TbBrightnessUp className="  h-[1.73rem] w-[2.5rem] text-nav-text " />
          )}
        </button>
      </div>

      {/* MOBILE.... */}
      <div className="2xl:hidden 2xl-max:hidden xl:block lg:block sm:block md:block">
        <button onClick={toggleTheme}>
          {/* className="mt-[1.06rem] w-auto " */}
          {theme === "light" ? (
            // <div className="h-[1.25469rem] w-[0.8rem] flex justify-center items-center mt-[0.2rem]">

            // </div>
            <FaMoon className="  text-nav-text  h-[1.5rem] w-[2.5rem] mt-[0.2rem] " />
          ) : (
            // <div className="h-[1.25469rem] w-[1.25469rem] flex justify-center items-center">
            //   {" "}

            // </div>
            <TbBrightnessUp className=" text-nav-text  h-[1.73rem] w-[2.5rem]" />
          )}
        </button>
      </div>
    </>
  );
}

export default DarkModeToggle;
