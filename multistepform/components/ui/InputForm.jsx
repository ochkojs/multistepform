export const InputForm = ({ label, isError, errorMessage, onClick }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <div>
          <label className="text-[14px] font-bold">{label}</label>
          <span className="text-red-600 px-1">*</span>
        </div>
        <input
          onClick={onClick}
          className="w-full p-3 border-1 border-gray-400 outline-none rounded-xl text-4"
        ></input>
        <div>
          {isError == true ? (
            <p className="text-red-400">{errorMessage}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
