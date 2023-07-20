import React from "react";
import ProfileCard from "./ProfileCard";
import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import NoProfilePlaceholder from "./NoProfilePlaceholder";

type Profile = {
  id: number;
  name: string;
  age: number;
  email: string;
  gender: string;
};

export default function ProfileList(props: {
  profileList: Profile[];
  themeColor: string;
  handleNewProfileClick: any;
  handleProfileCardClick: any;
}) {
  return (
    <>
      <div className="flex items-center w-full pt-[24px] px-[30px]">
        <div className="font-nunitoSans font-bold text-[20px]">Profiles</div>
        <div className="flex-1" />
        <div className="text-[16px] font-bold">
          <SlButton
            className={
              props.themeColor === "blue" ? "button-blue" : "button-orange"
            }
            variant={props.themeColor === "blue" ? "primary" : "warning"}
            size="medium"
            onClick={props.handleNewProfileClick}
          >
            <SlIcon slot="prefix" name="plus-circle" />
            New Profile
          </SlButton>
        </div>
      </div>
      {props.profileList && props.profileList.length > 0 ? (
        <div className="w-full px-[30px] pt-[26px] pb-[32px] grid grid-cols-2 grid-flow-row gap-x-[10px] gap-y-[13px]">
          {props.profileList.map((profile) => {
            return (
              <ProfileCard
                key={profile.id}
                profileId={profile.id}
                profileName={profile.name}
                profileGender={profile.gender}
                profileAge={profile.age}
                profileEmail={profile.email}
                handleProfileCardClick={props.handleProfileCardClick}
              />
            );
          })}
        </div>
      ) : (
        <NoProfilePlaceholder />
      )}
    </>
  );
}
