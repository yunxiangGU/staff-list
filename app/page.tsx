"use client"; // This is a client component

import Image from "next/image";
import React, { useState } from "react";
import LogIn from "./LogIn";

export default function Home() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function handleSubmit(event: any) {
    event.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Image src="/bg-1.svg" alt="bg-1" width={571} height={255} />
      {isLoggedIn ? <div>hello</div> : <LogIn handleSubmit={handleSubmit} />}
      <div className="flex flex-col items-end">
        <Image src="/bg-2.svg" alt="bg-2" width={710} height={350} />
      </div>
    </main>
  );
}
