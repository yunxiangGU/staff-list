import {
  SlButton,
  SlIcon,
  SlInput,
  SlSelect,
  SlOption,
} from "@shoelace-style/shoelace/dist/react";
import React, { useEffect, useState } from "react";

export default function ProfileEditView(props: {
  type: string;
  themeColor: string;
}) {
  let [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    console.log("themeColor: ", props.themeColor);
  });

  return (
    <>
      <div className="flex items-center w-full pt-[31px] pl-[30px]">
        <div className="font-nunitoSans text-[20px] font-bold pr-[27px]">
          {props.type === "add"
            ? "New Profile"
            : editMode
            ? "Edit Profile"
            : "View Profile"}
        </div>
        {props.type === "edit" && <SlIcon name="pencil" />}
        <div className="flex-1" />
      </div>
      <div className="flex w-full pt-[29px] pl-[30px]">
        <form
          onSubmit={props.handleSubmit}
          className="grid grid-cols-2 grid-flow-row gap-x-[25px] gap-y-[21px]"
        >
          <SlInput
            type="text"
            label="Name"
            placeholder="Enter username"
            required
          />
          <SlInput
            type="number"
            label="Age"
            placeholder="Enter number"
            required
          />
          <SlInput
            type="email"
            label="Email"
            placeholder="Enter email address"
            required
          />
          <SlSelect label="Gender" required placeholder="-">
            <SlOption value="male">Male</SlOption>
            <SlOption value="female">Female</SlOption>
            <SlOption value="prefer-not-to-say">Prefer not to say</SlOption>
          </SlSelect>
          <SlButton
            type="submit"
            variant={props.themeColor === "blue" ? "primary" : "warning"}
            style={{ width: "100%" }}
          >
            <SlIcon name="plus-circle" slot="prefix"></SlIcon>
            Create Profile
          </SlButton>
        </form>
        <div className="flex-2" />
      </div>
    </>
  );
}
