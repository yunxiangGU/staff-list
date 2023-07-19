import React, { useState } from "react";
import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import Clock from "./Clock";

export default function HomePage(props: { userName: string }) {
  return (
    <main className="flex flex-col min-h-screen bg-[#EFF8FF]">
      <div className="relative flex bg-white">
        <Clock />
      </div>
      <div className="flex items-center bg-white w-screen px-[28px] pt-[15px] pb-[10px]">
        <SlButton variant="default" size="small" circle>
          <SlIcon name="arrow-left" />
        </SlButton>
        <div className="flex-1" />
        <div className="font-nunitoSans text-[14px] font-normal pr-[12px]">
          user
        </div>
        <SlIcon name="person-circle" />
      </div>
      <div className="bg-white flex-1 my-[14px] mx-[28px] flex flex-col items-center">
        <div className="flex items-center w-full pt-[24px] px-[30px]">
          <div className="font-nunitoSans font-normal text-[20px]">
            Profiles
          </div>
          <div className="flex-1" />
          <div>
            <SlButton>New Profile</SlButton>
          </div>
        </div>
      </div>
    </main>
  );
}
