import React, { useState } from "react";
import { SlIcon, SlInput } from "@shoelace-style/shoelace/dist/react";
import GenderSelect from "./GenderSelect";
import SaveChangesButton from "./SaveChangesButton";

export default function ProfileEditView(props: {
  selectedProfileId: number;
  tempName: string;
  tempAge: number;
  tempEmail: string;
  tempGender: string;
  themeColor: string;
  handleAddProfile: any;
  handleEditProfile: any;
  handleProfileNameInput: any;
  handleProfileAgeInput: any;
  handleProfileEmailInput: any;
  handleProfileGenderChange: any;
}) {
  let [editMode, setEditMode] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center w-full pt-[31px] pl-[30px]">
        <div className="font-nunitoSans text-[20px] font-bold pr-[27px]">
          {props.selectedProfileId < 0
            ? "New Profile"
            : editMode
            ? "Edit Profile"
            : "View Profile"}
        </div>
        {props.selectedProfileId >= 0 && (
          <div
            className={
              editMode ? "text-[#628df2] cursor-default" : "cursor-pointer"
            }
            onClick={() => {
              setEditMode(true);
            }}
          >
            <SlIcon name="pencil" />
          </div>
        )}
        <div className="flex-1" />
      </div>
      <div className="flex flex-col sm:flex-row w-full pt-[29px] px-[14px] sm:pl-[30px]">
        <form
          id="profile-form"
          className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-x-[14px] sm:gap-x-[25px] gap-y-[14px] sm:gap-y-[21px] font-nunitoSans text-[16px] font-normal"
        >
          <SlInput
            className="col-span-2"
            type="text"
            label="Name"
            placeholder="Enter username"
            value={props.tempName}
            required
            disabled={props.selectedProfileId >= 0 && !editMode}
            onSlInput={props.handleProfileNameInput}
          />
          <SlInput
            type="number"
            label="Age"
            placeholder="Enter number"
            value={props.tempAge.toString()}
            required
            disabled={props.selectedProfileId >= 0 && !editMode}
            onSlInput={props.handleProfileAgeInput}
          />
          <div className="block sm:hidden">
            <GenderSelect
              editMode={editMode}
              tempGender={props.tempGender}
              selectedProfileId={props.selectedProfileId}
              handleProfileGenderChange={props.handleProfileGenderChange}
            />
          </div>
          <SlInput
            className="col-span-2"
            type="email"
            label="Email"
            placeholder="Enter email address"
            value={props.tempEmail}
            required
            disabled={props.selectedProfileId >= 0 && !editMode}
            onSlInput={props.handleProfileEmailInput}
          />
          <div className="hidden sm:block">
            <GenderSelect
              editMode={editMode}
              tempGender={props.tempGender}
              selectedProfileId={props.selectedProfileId}
              handleProfileGenderChange={props.handleProfileGenderChange}
            />
          </div>
          {(props.selectedProfileId < 0 || editMode === true) && (
            <div className="hidden sm:block col-span-2">
              <SaveChangesButton
                themeColor={props.themeColor}
                selectedProfileId={props.selectedProfileId}
                handleAddProfile={props.handleAddProfile}
                handleEditProfile={props.handleEditProfile}
                tempName={props.tempName}
                tempAge={props.tempAge}
                tempEmail={props.tempEmail}
                tempGender={props.tempGender}
              />
            </div>
          )}
        </form>
        <div className="sm:flex-1" />
      </div>
    </>
  );
}
