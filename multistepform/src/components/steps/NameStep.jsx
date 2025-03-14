import { InputForm } from "../ui";

export const NameStep = ({}) => {
  return (
    <div className="flex flex-col gap-3 pb-10">
      <InputForm
        label="First name"
        isError={false}
        errorMessage="First name cannot contain special characters or numbers."
        placeholder="First name"
      />
      <InputForm
        label="Last name"
        isError={false}
        errorMessage="Last name cannot contain special characters or numbers."
        placeholder="Last name"
      />
      <InputForm
        label="Username"
        isError={false}
        errorMessage="This username is already taken. Please choose another one."
        placeholder="User name"
      />
    </div>
  );
};
