import { FaGithub, FaGlobe } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const WebLink = ({ weblink, gitlink }) => {
  return (
    <div className='flex flex-row gap-2 lg:gap-4'>
      <div className='flex flex-col items-center'>
        <p className='text-slate-500 pb-2 text-sm'>Code</p>
        <a
          target='_blank'
          className='flex flex-col gap-1 items-center'
          href={gitlink}>
          <FaGithub className='text-[28px] sm:text-[2rem]' />
          <p className='text-sm sm:text-base'>Github</p>
        </a>
      </div>
      <div className='flex flex-col justify-between items-center gap-1'>
        <p className='text-slate-500 text-sm'>Live</p>
        <a
          target='_blank'
          className='flex flex-col gap-1 items-center'
          href={weblink}>
          <FaGlobe className='text-[28px] sm:text-[2rem]' />
          <p className='text-sm sm:text-base'>Web</p>
        </a>
      </div>
    </div>
  );
};

export default WebLink;
