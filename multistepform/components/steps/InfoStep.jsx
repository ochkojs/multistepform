import { InputForm } from "../ui";

export const InfoStep = ({}) => {
  return (
    <div className="flex flex-col gap-3 pb-10">
      <InputForm
        label="Email"
        isError={false}
        errorMessage="Please provide a valid email address."
      />
      <InputForm
        label="Phone number"
        isError={false}
        errorMessage="please enter a valid phone number"
      />
      <InputForm
        label="Password"
        isError={false}
        errorMessage="Password must include letters and numbers"
      />
      <InputForm
        label="Confirm Password"
        isError={false}
        errorMessage="Password do not match. Please try again"
      />
    </div>
  );
};
