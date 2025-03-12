import { InputForm } from "../ui";

export const LastStep = () => {
  return (
    <div className="pb-10">
      <InputForm
        label="Date of birth"
        type="date"
        isError={false}
        errorMessage="Please select a date"
      />
      <InputForm type="file" />
    </div>
  );
};
