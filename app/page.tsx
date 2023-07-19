"use client"; // This is a client component

import React, { useState } from "react";
import LogIn from "./LogIn";
import { serialize } from "@shoelace-style/shoelace/dist/utilities/form.js";
import HomePage from "./HomePage";

export default function Home() {
  // TODO: to change back to false
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");

  function handleSubmit(event: any) {
    event.preventDefault();
    const form = document.querySelector("form");
    if (form !== null) {
      const data = serialize(form);
      console.log("data: ", data);
    }
    setIsLoggedIn(true);
  }

  function handleUserNameInput(event: any) {
    setUserName(event.target.value);
  }

  return isLoggedIn ? (
    <HomePage userName={userName} />
  ) : (
    <LogIn
      handleSubmit={handleSubmit}
      handleUserNameInput={handleUserNameInput}
    />
  );
}
