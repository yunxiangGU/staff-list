import React, { useState } from "react";
import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import Clock from "./Clock";
import Image from "next/image";
import Palette from "./Palette";
import ProfileEditView from "./ProfileEditView";

type Profile = {
  name: string;
  age: number;
  email: string;
  gender: Gender;
};

enum Gender {
  Male = 0,
  Female = 1,
  PreferNotToSay = 2,
}

export default function HomePage(props: {
  userName: string;
  themeColor: string;
  handleColorChange: any;
}) {
  let [profileList, setProfileList] = useState<Profile[]>([]);

  let [showProfileEditView, setShowProfileEditView] = useState<boolean>(false);

  return (
    <main
      className={`flex flex-col min-h-screen relative ${
        props.themeColor === "blue" ? "bg-[#EFF8FF]" : "bg-[#FFF9EF]"
      }`}
    >
      <div className="relative flex bg-white">
        <Clock />
      </div>
      <div className="flex items-center bg-white w-screen px-[28px] pt-[15px] pb-[10px]">
        <SlButton
          variant="default"
          size="small"
          circle
          onClick={() => setShowProfileEditView(false)}
        >
          <SlIcon name="arrow-left" />
        </SlButton>
        <div className="flex-1" />
        <div className="font-nunitoSans text-[14px] font-normal pr-[12px]">
          user
        </div>
        <SlIcon name="person-circle" />
      </div>
      <div className="bg-white flex-1 my-[14px] mx-[28px] flex flex-col items-center">
        {showProfileEditView ? (
          <ProfileEditView type={"add"} themeColor={props.themeColor} />
        ) : (
          <>
            <div className="flex items-center w-full pt-[24px] px-[30px]">
              <div className="font-nunitoSans font-bold text-[20px]">
                Profiles
              </div>
              <div className="flex-1" />
              <div className="text-[16px] font-bold">
                <SlButton
                  className={
                    props.themeColor === "blue"
                      ? "button-blue"
                      : "button-orange"
                  }
                  variant={props.themeColor === "blue" ? "primary" : "warning"}
                  size="medium"
                  onClick={() => setShowProfileEditView(true)}
                >
                  <SlIcon slot="prefix" name="plus-circle"></SlIcon>
                  New Profile
                </SlButton>
              </div>
            </div>
            {profileList && profileList.length > 0 ? (
              <></>
            ) : (
              <>
                <div className="pt-[81px]">
                  <Image
                    src="/empty-state.svg"
                    alt="empty-state"
                    width={188}
                    height={140}
                  />
                </div>
                <div className="pt-[22px] font-nunitoSans font-bold text-[18px]">
                  No Profiles Yet
                </div>
                <div className="pt-[7px] font-nunitoSans font-normal text-[16px] flex flex-col items-center">
                  <p>Click the button at the top right</p>
                  <p>to create a new profile.</p>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Palette handleColorChange={props.handleColorChange} />
    </main>
  );
}
