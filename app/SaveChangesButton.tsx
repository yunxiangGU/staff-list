import React from "react";
import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";

export default function SaveChangesButton(props: {
  themeColor: string;
  selectedProfileId: number;
  handleAddProfile: any;
  handleEditProfile: any;
  tempName: string;
  tempAge: number;
  tempEmail: string;
  tempGender: string;
}) {
  return (
    <SlButton
      type="submit"
      variant={props.themeColor === "blue" ? "primary" : "warning"}
      className="w-full"
      disabled={
        !props.tempName ||
        !props.tempAge ||
        !props.tempEmail ||
        !props.tempGender
      }
      onClick={
        props.selectedProfileId < 0
          ? props.handleAddProfile
          : props.handleEditProfile
      }
    >
      {props.selectedProfileId < 0 && (
        <SlIcon name="plus-circle" slot="prefix" />
      )}
      {props.selectedProfileId < 0 ? "Create Profile" : "Save Changes"}
    </SlButton>
  );
}
