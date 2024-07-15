import { NavItems } from "@/MockData/NavItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center">
      <Image
        src={"/company-logo.webp"}
        width={150}
        height={103}
        alt="Company logo"
      />
      <div className="flex gap-x-[30px]">
        {NavItems.map((navItem, index) => (
          <Link
            href={navItem.link}
            className="text-white font-medium"
            key={"NavItem" + index}
          >
            {navItem.title}
          </Link>
        ))}
      </div>
      <Button text="HIRE US" />
    </nav>
  );
};

export default Navbar;
