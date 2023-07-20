import React, { useState, useEffect } from "react";

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="pt-[10px] pl-[28px] font-nunitoSans text-[12px] font-semibold">
      {dateState.toLocaleTimeString()}
    </div>
  );
}
