import React from "react";
import { SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";

export default function LogIn(props: { handleSubmit: any }) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-workSans font-extrabold text-[30px]">Login</div>
      <div className="font-workSans font-normal">Welcome back!</div>
      <form onSubmit={props.handleSubmit}>
        <SlInput type="text" placeholder="Username" required></SlInput>
        <SlInput
          type="password"
          placeholder="Password"
          password-toggle
          required
        ></SlInput>
        <SlButton type="submit" variant="primary" style={{ width: "100%" }}>
          Submit
        </SlButton>
      </form>
    </div>
  );
}
