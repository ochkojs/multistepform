"use client";

import { BackButton } from "../ui/BackButton";
import { NextButton } from "../ui/NextButton";

export const Footer = ({}) => {
  const stepCount = 1;
  return (
    <div>
      {stepCount > 1 ? (
        <div className="flex gap-4">
          <BackButton />
          <NextButton />
        </div>
      ) : (
        <div>
          <NextButton />
        </div>
      )}
    </div>
  );
};
