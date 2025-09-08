"use client";
import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import NavItems from "./NavItems";

const SmallScreen = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div className="">
      <AlignJustify className="text-xs" onClick={handleToggle} />

      <nav
        className={`fixed w-60 top-[4.56rem] h-[calc(100vh-4.56rem)] bg-slate-50 left-0 flex flex-col py-16 items-start px-6 gap-14 shadow-lg z-40
    transform transition-transform duration-300 ease-in-out
    ${toggle ? "translate-x-0" : "-translate-x-full"}`}
        onClick={handleToggle}
      >
        <NavItems />
      </nav>
    </div>
  );
};

export default SmallScreen;
