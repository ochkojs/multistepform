"use client";

import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

export const NextButton = ({}) => {
  const [stepCount, setStepCount] = useState(1);
  return (
    <div className="flex justify-center bg-black text-white items-center w-full border-1 border-s-[#CBD5E1]-1 rounded-[6px] px-3 py-[10px] gap-2">
      <button onClick={() => setStepCount(stepCount + 1)}>
        Continue {stepCount}/3
      </button>
      <IoChevronForward />
    </div>
  );
};
