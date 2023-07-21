import React from "react";
import { SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import classNames from "classnames";

export default function NewProfileButton(props: {
  themeColor: string;
  handleNewProfileClick: any;
}) {
  return (
    <SlButton
      className={classNames({
        "button-blue": props.themeColor === "blue",
        "button-orange": props.themeColor === "orange",
        "w-full": true,
      })}
      variant={props.themeColor === "blue" ? "primary" : "warning"}
      size="medium"
      onClick={props.handleNewProfileClick}
    >
      <SlIcon slot="prefix" name="plus-circle" />
      New Profile
    </SlButton>
  );
}
