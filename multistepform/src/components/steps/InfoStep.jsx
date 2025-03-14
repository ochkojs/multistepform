import { InputForm } from "../ui";

export const InfoStep = ({}) => {
  return (
    <div className="flex flex-col gap-3 pb-10">
      <InputForm
        label="Email"
        isError={false}
        errorMessage="Please provide a valid email address."
        placeholder="Your email"
      />
      <InputForm
        label="Phone number"
        isError={true}
        errorMessage="please enter a valid phone number"
        placeholder="Phone Number"
      />
      <InputForm
        label="Password"
        isError={false}
        errorMessage="Password must include letters and numbers"
        placeholder="Password"
      />
      <InputForm
        label="Confirm Password"
        isError={false}
        errorMessage="Password do not match. Please try again"
        placeholder="Confirm password"
      />
    </div>
  );
};
