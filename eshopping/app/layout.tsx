import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import eshoppingLogo from "../assets/eshoppingLogo.png";
import Image from "next/image";
import React from "react";
import OptionMenu from "../components/option-menu";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EShopping",
  description: "The best place to buy stuff online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <div className="flex items-center justify-center w-full flex-col *:select-none">
          {/* Navbar */}
          <div className="w-11/12 mt-6 flex items-center justify-between">
            {/* Leftside */}
            <div className="flex items-center">
              <Image
                src={eshoppingLogo}
                alt="eShopping"
                className="w-20 h-20"
              />
              <div className="ms-5 ">
                <h4 className="text-lg font-bold">E-Shopping</h4>
                <h6 className="font-extralight text-xs">
                  Everything is on sale!
                </h6>
              </div>
            </div>
            {/* RightSide */}
            <OptionMenu />
          </div>
          <div className="mt-10 w-11/12 flex flex-col justify-center items-center max-md:mt-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
