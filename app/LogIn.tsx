import React from "react";
import { SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";
import Clock from "./Clock";
import Image from "next/image";

export default function LogIn(props: {
  handleSubmit: any;
  handleUserNameInput: any;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative">
        <Clock />
        <Image
          className="absolute"
          src="/bg-1.svg"
          alt="bg-1"
          width={571}
          height={255}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="font-workSans font-extrabold text-[30px] pb-[6px] pt-[183px]">
          Login
        </div>
        <div className="font-workSans font-normal pb-[26px]">Welcome back!</div>
        <form onSubmit={props.handleSubmit}>
          <SlInput
            className="pb-[18px]"
            type="text"
            placeholder="Username"
            required
            onSlInput={props.handleUserNameInput}
          ></SlInput>
          <SlInput
            className="pb-[39px]"
            type="password"
            placeholder="Password"
            password-toggle
            required
          ></SlInput>
          <SlButton type="submit" variant="primary" style={{ width: "100%" }}>
            Login
          </SlButton>
        </form>
      </div>
      <div className="flex flex-col items-end">
        <Image src="/bg-2.svg" alt="bg-2" width={710} height={350} />
      </div>
    </main>
  );
}
