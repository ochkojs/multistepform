export const Header = ({ stepCount }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src="/logo.png" className="w-15"></img>
      {stepCount < 3 ? (
        <div>
          <h1 className="text-[26px] text-[#202124] font-bold">Join Us! 😎</h1>
          <p className="text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
      ) : (
        <div>
          <h1>You're All Set 🔥</h1>
          <p className="text-[#8E8E8E]">
            We have received your submission. Thank you!
          </p>
        </div>
      )}
    </div>
  );
};
