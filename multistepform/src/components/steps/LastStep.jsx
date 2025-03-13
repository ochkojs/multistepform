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
      <div className="flex flex-col justify-center items-center bg-[#7F7F80]/25 w-full h-[300] rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
            fill="#202124"
          />
        </svg>
        <input type="file" className="w-[400px] p-25 opacity-0" />
      </div>
    </div>
  );
};
