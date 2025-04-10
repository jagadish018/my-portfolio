import CurrentTimeIST from "../../components/CurrentTimeIST";

const Connect = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto  px-4 py-2">
      {/* Flex row container */}
      <div className="flex flex-row   gap-5">
        {/* Left - Work Experience */}
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Connect
        </h1>

        {/* Right - Current Time */}
        <div className="flex flex-col gap-3">
          <CurrentTimeIST />
          <button className="bg-blue-500 rounded-2xl p-2 w-30 cursor-pointer">connect</button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
