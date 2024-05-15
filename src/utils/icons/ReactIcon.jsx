import { FaReact } from "react-icons/fa";

const ReactIcon = () => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <FaReact className='text-[28px] sm:text-[2rem] text-cyan-400' />
      <p className='text-sm sm:text-base'>React</p>
    </div>
  );
};

export default ReactIcon;
