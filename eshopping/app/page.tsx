"use client";

import eshoppingLogo from "./assets/eshoppingLogo.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import OptionMenu from "./components/option-menu";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      {/* Navbar */}
      <div className="w-11/12 mt-6 flex items-center justify-between">
        {/* Leftside */}
        <div className="flex items-center">
          <Image src={eshoppingLogo} alt="eShopping" className="w-20 h-20" />
          <div className="ms-5 ">
            <h4 className="text-lg font-bold">E-Shopping</h4>
            <h6 className="font-extralight text-xs">Everything is on sale!</h6>
          </div>
        </div>
        {/* RightSide */}
        <OptionMenu />
      </div>
    </div>
  );
}
