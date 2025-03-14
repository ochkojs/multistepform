"use client";

import { useState } from "react";
import { Footer, Header } from "../components/layers";
import { InfoStep, LastStep, NameStep } from "../components/steps";
import { Finish } from "@/components/steps/Finish";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);
  const CurrentStep = [NameStep, InfoStep, LastStep, Finish][stepCount];

  function upStepCount() {
    return setStepCount(stepCount + 1);
  }

  function downStepCount() {
    return setStepCount(stepCount - 1);
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#F4F4F4]">
      <div className="flex flex-col justify-between bg-white w-120 p-8 rounded-2xl">
        <div className="flex flex-col gap-[28px]">
          <Header stepCount={stepCount}></Header>
          <CurrentStep />
        </div>
        {stepCount == 3 ? null : (
          <Footer
            stepCount={stepCount}
            upStepCount={upStepCount}
            downStepCount={downStepCount}
          />
        )}
      </div>
    </div>
  );
}
