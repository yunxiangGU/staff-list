"use client"; // This is a client component

import React, { useState } from "react";
import LogIn from "./LogIn";
import { serialize } from "@shoelace-style/shoelace/dist/utilities/form.js";
import HomePage from "./HomePage";
import useStickyState from "./Utils";

export default function Home() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("User");
  let [themeColor, setThemeColor] = useStickyState("blue", "themeColor");

  function handleColorChange(event: any) {
    if (event.target.value === "#628df2") {
      setThemeColor("blue");
    } else {
      setThemeColor("orange");
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const form = document.querySelector("form");
    if (form !== null) {
      const data = serialize(form);
    }
    setIsLoggedIn(true);
  }

  function handleUserNameInput(event: any) {
    setUserName(event.target.value);
  }

  return isLoggedIn ? (
    <HomePage
      userName={userName}
      themeColor={themeColor}
      handleColorChange={handleColorChange}
    />
  ) : (
    <LogIn
      themeColor={themeColor}
      handleSubmit={handleSubmit}
      handleUserNameInput={handleUserNameInput}
    />
  );
}
