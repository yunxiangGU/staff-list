import React from "react";
import { SlIcon, SlCard } from "@shoelace-style/shoelace/dist/react";

export default function ProfileCard(props: {
  profileId: number;
  profileName: string;
  profileGender: string;
  profileAge: number;
  profileEmail: string;
  handleProfileCardClick: any;
}) {
  return (
    <SlCard
      className="cursor-pointer"
      onClick={() =>
        props.handleProfileCardClick(
          props.profileId,
          props.profileName,
          props.profileAge,
          props.profileEmail,
          props.profileGender
        )
      }
      key={props.profileId}
    >
      <div className="flex items-center text-[55px]">
        <SlIcon className="shrink-0" name="person-circle" />
        <div className="pl-[24px] flex flex-col items-start w-full overflow-hidden">
          <div className="flex items-center w-full">
            <div className="flex flex-col items-start">
              <p className="text-[14px] font-nunitoSans font-normal text-[#707070]">
                Name
              </p>
              <p className="text-[16px] font-nunitoSans font-normal">
                {props.profileName}
              </p>
            </div>
            <div className="flex-1" />
            <div className="flex flex-col items-start">
              <p className="text-[14px] font-nunitoSans font-normal text-[#707070]">
                Gender
              </p>
              <p className="text-[16px] font-nunitoSans font-normal">
                {props.profileGender.replaceAll("_", " ")}
              </p>
            </div>
            <div className="pl-[30px] flex flex-col items-start">
              <p className="text-[14px] font-nunitoSans font-normal text-[#707070]">
                Age
              </p>
              <p className="text-[16px] font-nunitoSans font-normal">
                {props.profileAge}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start pt-[9px]">
            <p className="text-[14px] font-nunitoSans font-normal text-[#707070]">
              Email
            </p>
            <p className="text-[16px] font-nunitoSans font-normal">
              {props.profileEmail}
            </p>
          </div>
        </div>
      </div>
    </SlCard>
  );
}
