import { SiTailwindcss } from "react-icons/si";
const TWicon = () => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <SiTailwindcss className='text-[28px] sm:text-[2rem] text-[#318ac6]' />
      <p className='text-sm sm:text-base'>TW</p>
    </div>
  );
};

export default TWicon;
