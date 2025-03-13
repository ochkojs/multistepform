"use client";
import { useState } from "react";
import { BackButton } from "../ui/BackButton";
import { NextButton } from "../ui/NextButton";

export const Footer = ({ stepCount, upStepCount, downStepCount }) => {
  return (
    <div>
      {stepCount > 0 ? (
        <div className="flex gap-4">
          <BackButton changeNum1={downStepCount} />
          <NextButton changeNum={upStepCount} stepCount={stepCount} />
        </div>
      ) : (
        <div>
          <NextButton changeNum={upStepCount} stepCount={stepCount} />
        </div>
      )}
    </div>
  );
};
