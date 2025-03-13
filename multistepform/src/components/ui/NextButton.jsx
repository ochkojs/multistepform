"use client";

import { IoChevronForward } from "react-icons/io5";

export const NextButton = ({ changeNum, stepCount }) => {
  return (
    <div
      onClick={stepCount < 2 ? changeNum : null}
      className="flex justify-center bg-black text-white items-center w-full border-1 border-s-[#CBD5E1]-1 rounded-[6px]  gap-2"
    >
      <button className="px-3 py-[10px]">Continue {stepCount + 1}/3</button>
      <IoChevronForward />
    </div>
  );
};
