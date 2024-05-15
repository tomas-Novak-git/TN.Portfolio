import { SiTypescript } from "react-icons/si";

const TsIcon = () => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <SiTypescript className='text-[28px] sm:text-[2rem] text-[#3178c6]' />
      <p className='text-sm sm:text-base'>TS</p>
    </div>
  );
};

export default TsIcon;
