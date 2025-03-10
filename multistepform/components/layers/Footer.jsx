import { BackButton } from "../ui/BackButton";
import { NextButton } from "../ui/NextButton";

export const Footer = () => {
  return (
    <div className="flex gap-2">
      <BackButton></BackButton>
      <NextButton></NextButton>
    </div>
  );
};
