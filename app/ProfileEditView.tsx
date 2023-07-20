import {
  SlButton,
  SlIcon,
  SlInput,
  SlSelect,
  SlOption,
} from "@shoelace-style/shoelace/dist/react";
import React, { useState } from "react";

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
      <div className="flex w-full pt-[29px] pl-[30px]">
        <form
          onSubmit={
            props.selectedProfileId < 0
              ? props.handleAddProfile
              : props.handleEditProfile
          }
          className="grid grid-cols-2 grid-flow-row gap-x-[25px] gap-y-[21px] font-nunitoSans text-[16px] font-normal"
        >
          <SlInput
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
          <SlInput
            type="email"
            label="Email"
            placeholder="Enter email address"
            value={props.tempEmail}
            required
            disabled={props.selectedProfileId >= 0 && !editMode}
            onSlInput={props.handleProfileEmailInput}
          />
          <SlSelect
            label="Gender"
            required
            placeholder="-"
            value={props.tempGender}
            disabled={props.selectedProfileId >= 0 && !editMode}
            onSlChange={props.handleProfileGenderChange}
          >
            <SlOption value="Male">Male</SlOption>
            <SlOption value="Female">Female</SlOption>
            <SlOption value="Prefer Not To Say">Prefer not to say</SlOption>
          </SlSelect>
          {(props.selectedProfileId < 0 || editMode === true) && (
            <SlButton
              type="submit"
              variant={props.themeColor === "blue" ? "primary" : "warning"}
              style={{ width: "100%" }}
            >
              {props.selectedProfileId < 0 && (
                <SlIcon name="plus-circle" slot="prefix" />
              )}
              {props.selectedProfileId < 0 ? "Create Profile" : "Save Changes"}
            </SlButton>
          )}
        </form>
        <div className="flex-1" />
      </div>
    </>
  );
}
