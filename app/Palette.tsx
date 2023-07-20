import React from "react";
import {
  SlButton,
  SlDropdown,
  SlIcon,
  SlColorPicker,
} from "@shoelace-style/shoelace/dist/react";

export default function Palette(props: { handleColorChange: any }) {
  return (
    <div className="sticky bottom-[39px]">
      <div className="flex w-full items-center pr-[58px]">
        <div className="flex-1" />
        <SlDropdown hoist placement="top-end" distance={10}>
          <SlButton slot="trigger" circle>
            <SlIcon name="palette" />
          </SlButton>
          <SlColorPicker
            inline
            hoist
            swatches="
          #ef8543; #628df2;
        "
            onSlChange={props.handleColorChange}
          />
        </SlDropdown>
      </div>
    </div>
  );
}
