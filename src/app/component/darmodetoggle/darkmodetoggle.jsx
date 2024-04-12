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
    <button onClick={toggleTheme} className="mt-[1.06rem]">
      {theme === "light" ? (
        <FaMoon className=" h-[1.73rem] w-[2.5rem] text-nav-text" />
      ) : (
        <TbBrightnessUp className="  h-[1.73rem] w-[2.5rem] text-nav-text " />
      )}
    </button>
  );
}

export default DarkModeToggle;
