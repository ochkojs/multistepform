import { MdArrowBackIos } from "react-icons/md";

export const BackButton = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-[128px] border-1 border-s-[#CBD5E1]-1 rounded-[6px] px-3 py-[10px]">
        <MdArrowBackIos />
        <button className="px-1">Back</button>
      </div>
    </div>
  );
};
