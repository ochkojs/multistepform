"use client";

import { BackButton } from "../ui/BackButton";
import { NextButton } from "../ui/NextButton";

export const Footer = ({}) => {
  function onHandle() {
    const [stepCount, setStepCount] = useState(1);
    setStepCount = (stepCount) => stepCount + 1;
    console.log("working");
  }
  return (
    <div>
      {stepCount > 1 ? (
        <div className="flex gap-4">
          <BackButton />
          <NextButton />
        </div>
      ) : (
        <div>
          <NextButton onClick={onHandle} />
        </div>
      )}
    </div>
  );
};
