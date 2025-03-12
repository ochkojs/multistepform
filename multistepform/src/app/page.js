"use client";

import { useState } from "react";
import { Footer, Header } from "../../components/layers";
import { InputForm } from "../../components/ui";
import { InfoStep, LastStep, NameStep } from "../../components/steps";

export default function Home() {
  const [stepCount, SetStepCount] = useState(1);
  const currentStep = [NameStep, InfoStep, LastStep][1];

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#F4F4F4]">
      <div className="flex flex-col justify-between bg-white w-120 p-8 rounded-2xl">
        <div className="flex flex-col gap-[28px]">
          <Header></Header>
          <currentStep />
          {/* <NameStep /> */}
          {/* <InfoStep /> */}
          {/* <LastStep /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
