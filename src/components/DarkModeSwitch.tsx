"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-300"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-300"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
