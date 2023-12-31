import React, { useState } from "react";
import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import Clock from "./Clock";
import Palette from "./Palette";
import ProfileEditView from "./ProfileEditView";
import ProfileList from "./ProfileList";
import NewProfileButton from "./NewProfileButton";
import SaveChangesButton from "./SaveChangesButton";

type Profile = {
  id: number;
  name: string;
  age: number;
  email: string;
  gender: string;
};

export default function HomePage(props: {
  userName: string;
  themeColor: string;
  handleColorChange: any;
}) {
  let [showProfileEditView, setShowProfileEditView] = useState<boolean>(false);
  let [selectedProfileId, setSelectedProfileId] = useState<number>(-1);
  let [profileList, setProfileList] = useState<Profile[]>([]);
  let [tempName, setTempName] = useState<string>("");
  let [tempAge, setTempAge] = useState<number>(0);
  let [tempEmail, setTempEmail] = useState<string>("");
  let [tempGender, setTempGender] = useState<string>("");

  function handleAddProfile(event: any) {
    event.preventDefault();
    setShowProfileEditView(false);
    let tempId = profileList.length;
    let newProfile = {
      id: tempId,
      name: tempName,
      age: tempAge,
      email: tempEmail,
      gender: tempGender,
    };
    setProfileList((oldProfileList) => [...oldProfileList, newProfile]);
    setTempName("");
    setTempAge(0);
    setTempEmail("");
    setTempGender("");
  }

  function handleEditProfile(event: any) {
    event.preventDefault();
    setShowProfileEditView(false);
    let newProfile = [
      {
        id: selectedProfileId,
        name: tempName,
        age: tempAge,
        email: tempEmail,
        gender: tempGender,
      },
    ];
    let updatedProfileList = profileList.map(
      (profile) => newProfile.find((o) => o.id === profile.id) || profile
    );
    setProfileList(updatedProfileList);
    setSelectedProfileId(-1);
    setTempName("");
    setTempAge(0);
    setTempEmail("");
    setTempGender("");
  }

  function handleProfileNameInput(event: any) {
    setTempName(event.target.value);
  }

  function handleProfileAgeInput(event: any) {
    setTempAge(event.target.value);
  }

  function handleProfileEmailInput(event: any) {
    setTempEmail(event.target.value);
  }

  function handleProfileGenderChange(event: any) {
    setTempGender(event.target.value);
  }

  function handleNewProfileClick() {
    setShowProfileEditView(true);
  }

  function handleProfileCardClick(
    profileId: number,
    profileName: string,
    profileAge: number,
    profileEmail: string,
    profileGender: string
  ) {
    setSelectedProfileId(profileId);
    setTempName(profileName);
    setTempAge(profileAge);
    setTempEmail(profileEmail);
    setTempGender(profileGender);
    setShowProfileEditView(true);
  }

  return (
    <main
      className={`flex flex-col min-h-screen relative ${
        props.themeColor === "blue" ? "sm:bg-[#EFF8FF]" : "sm:bg-[#FFF9EF]"
      }`}
    >
      <div className="sticky w-full top-0 left-0 bg-white z-10">
        <Clock />
      </div>
      <div className="sticky w-full top-[28px] left-0 flex items-center bg-white px-[28px] pt-[15px] pb-[10px] z-10 overflow-hidden drop-shadow-md">
        <SlButton
          variant="default"
          size="small"
          circle
          onClick={() => setShowProfileEditView(false)}
        >
          <SlIcon name="arrow-left" />
        </SlButton>
        <div className="flex-1" />
        <SlIcon className="sm:hidden pr-[12px]" name="person-circle" />
        <div className="font-nunitoSans text-[14px] font-normal pr-[12px]">
          {props.userName}
        </div>
        <SlIcon className="hidden sm:block" name="person-circle" />
        <div className="flex-1 sm:hidden" />
        <div className="block sm:hidden">
          <Palette handleColorChange={props.handleColorChange} />
        </div>
      </div>
      <div className="bg-white sm:my-[14px] sm:mx-[28px] flex flex-col items-center flex-1">
        {showProfileEditView ? (
          <ProfileEditView
            selectedProfileId={selectedProfileId}
            tempName={tempName}
            tempAge={tempAge}
            tempEmail={tempEmail}
            tempGender={tempGender}
            themeColor={props.themeColor}
            handleAddProfile={handleAddProfile}
            handleEditProfile={handleEditProfile}
            handleProfileNameInput={handleProfileNameInput}
            handleProfileAgeInput={handleProfileAgeInput}
            handleProfileEmailInput={handleProfileEmailInput}
            handleProfileGenderChange={handleProfileGenderChange}
          />
        ) : (
          <ProfileList
            profileList={profileList}
            themeColor={props.themeColor}
            handleNewProfileClick={handleNewProfileClick}
            handleProfileCardClick={handleProfileCardClick}
          />
        )}
      </div>
      <div className="sticky bottom-[39px] hidden sm:block">
        <div className="flex w-full items-center pr-[58px]">
          <div className="flex-1" />
          <Palette handleColorChange={props.handleColorChange} />
        </div>
      </div>

      <div className="sticky bottom-[22px] px-[14px] sm:hidden w-full flex justify-center">
        {showProfileEditView ? (
          <SaveChangesButton
            themeColor={props.themeColor}
            selectedProfileId={selectedProfileId}
            handleAddProfile={handleAddProfile}
            handleEditProfile={handleEditProfile}
            tempName={tempName}
            tempAge={tempAge}
            tempEmail={tempEmail}
            tempGender={tempGender}
          />
        ) : (
          <NewProfileButton
            themeColor={props.themeColor}
            handleNewProfileClick={handleNewProfileClick}
          />
        )}
      </div>
    </main>
  );
}
