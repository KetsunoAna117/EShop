"use client";

import SearchBar from "@/components/search-bar";
import React, { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");

  function onUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function onEnterButtonPressed() {
    console.log(searchValue);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SearchBar
        onChange={onUserInput}
        placeholder="Search Products Here..."
        onEnterButtonPressed={onEnterButtonPressed}
      />
    </div>
  );
}
