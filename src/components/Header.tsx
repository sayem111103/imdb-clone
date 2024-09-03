import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import Container from "./Container";
const Header = () => {
  return (
    <Container>
      <header className="py-2 flex justify-between items-center rounded-md">
        <div className="flex gap-2">
          <MenuItem
            title="Home"
            route="/"
            Icon={AiFillHome as IconType}
            key={1}
          />
          <MenuItem
            title="About"
            route="/about"
            Icon={BsInfoCircleFill as IconType}
            key={1}
          />
        </div>
        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <Link href={"/"} className="flex gap-1 items-center">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </Link>
        </div>
      </header>
    </Container>
  );
};

export default Header;
