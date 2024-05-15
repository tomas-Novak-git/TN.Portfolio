import { FaCss3Alt } from "react-icons/fa";

const CssIcon = () => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <FaCss3Alt className='text-[28px] sm:text-[2rem] text-[#264de4]' />
      <p className='text-sm sm:text-base'>CSS</p>
    </div>
  );
};

export default CssIcon;
