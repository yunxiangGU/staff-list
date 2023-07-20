import React from "react";
import Image from "next/image";

export default function NoProfilePlaceholder() {
  return (
    <>
      <div className="pt-[81px]">
        <Image
          src="/empty-state.svg"
          alt="empty-state"
          width={188}
          height={140}
        />
      </div>
      <div className="pt-[22px] font-nunitoSans font-bold text-[18px]">
        No Profiles Yet
      </div>
      <div className="pt-[7px] font-nunitoSans font-normal text-[16px] flex flex-col items-center">
        <p>Click the button at the top right</p>
        <p>to create a new profile.</p>
      </div>
    </>
  );
}
