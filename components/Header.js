import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 flex items-center justify-around py-1.5 px-3 z-40 bg-white focus-within:shadow-lg dark:bg-[#1D2226] transition-all duration-1000">
      <div className="flex items-center max-w-xs w-full space-x-2 transition-all duration-1000">
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image
                src="https://rb.gy/bizvqj"
                width={45}
                height={45}
                alt="image"
              />
            ) : (
              <Image
                src="https://rb.gy/dpmd9s"
                width={55}
                height={55}
                alt="image"
              />
            )}
          </>
        )}
        <div className="hidden md:flex items-center rounded w-full dark:md:bg-gray-700 space-x-1 py-2.5 px-4">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className=" md:inline-flex bg-transparent  text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
        <HeaderLink Icon={GroupIcon} text="My Network" feed />
        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
        <HeaderLink Icon={ChatIcon} text="Messaging" feed />
        <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
      </div>
      {mounted && (
        <div
          className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
            resolvedTheme === "dark" ? "justify-end" : "justify-start"
          }`}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <span className="absolute left-0">🌜</span>
          <motion.div
            className="w-5 h-5 bg-white rounded-full z-40"
            layout
            transition={spring}
          />

          <span className="absolute right-0.5">🌞</span>
        </div>
      )}
    </header>
  );
};

export default Header;
