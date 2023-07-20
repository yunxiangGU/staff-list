import React from "react";
import {
  SlButton,
  SlDropdown,
  SlIcon,
  SlColorPicker,
} from "@shoelace-style/shoelace/dist/react";

export default function Palette(props: { handleColorChange: any }) {
  return (
    <div className="absolute bottom-[39px] right-[58px]">
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
  );
}
