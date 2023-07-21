import React from "react";
import { SlSelect, SlOption } from "@shoelace-style/shoelace/dist/react";

export default function GenderSelect(props: {
  editMode: boolean;
  tempGender: string;
  selectedProfileId: number;
  handleProfileGenderChange: any;
}) {
  return (
    <SlSelect
      label="Gender"
      required
      placeholder="-"
      value={props.tempGender}
      disabled={props.selectedProfileId >= 0 && !props.editMode}
      onSlChange={props.handleProfileGenderChange}
    >
      <SlOption value="Male">Male</SlOption>
      <SlOption value="Female">Female</SlOption>
      <SlOption value="Prefer_Not_To_Say">Prefer not to say</SlOption>
    </SlSelect>
  );
}
