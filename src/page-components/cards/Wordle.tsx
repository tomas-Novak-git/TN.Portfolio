import { FaReact, FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import WordGameImage from "../../assets/wordgame.png";
import { IoLogoJavascript } from "react-icons/io5";

const Wordle = () => {
  return (
    <>
      <div className='max-w-screen-lg flex flex-col shadow-xl shadow-black my-8 py-9 px-8 border-t-2 border-r-2 border-b-2 border-b-cyan-900 border-t-cyan-700 border-l-2 border-l-cyan-900 border-r-cyan-900 rounded-lg bg-gradient-to-tr from-black to-cyan-950'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 mb-4'>
          <div className='flex flex-col'>
            <h4 className='mb-4 text-xl'>Word Game</h4>
            <p className='text-slate-400 text-sm md:text-base pb-2'>
              Tento mini projekt vznikl během studia kurzu the Joy of React.
              Jedná se o kopii hry WORDLE, která se stala před pár lety velice
              populární. Narozdíl od originálu, má tato verze databázi slov a
              můžete hrát stále dokola. Původní hra Vám povolila jeden
              pokus/slovo denně.
            </p>
          </div>
          <img
            className=' my-auto object-cover mx-auto  md:max-w-[45%]'
            src={WordGameImage}
            alt=''
          />
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-slate-500 pb-2 text-sm'>Použité technologie</p>
            <div className='flex flex-row gap-2 sm:gap-4'>
              <div className='flex flex-col items-center gap-1'>
                <IoLogoJavascript className='text-[28px] sm:text-[2rem] text-[#fff53c]' />
                <p className='text-sm sm:text-base'>JS</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <FaReact className='text-[28px] sm:text-[2rem] text-cyan-400' />
                <p className='text-sm sm:text-base'>React</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <FaCss3Alt className='text-[28px] sm:text-[2rem] text-[#264de4]' />
                <p className='text-sm sm:text-base'>CSS</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-2 sm:gap-6'>
            <div className='flex flex-col items-center justify-end sm:justify-between'>
              <p className='text-slate-500 pb-2 text-sm'>Code</p>
              <a
                target='_blank'
                className='flex flex-col items-center hover:scale-105 transition-transform '
                href='https://github.com/tomas-Novak-git/project-wordle'>
                <FaGithub className='text-[28px] sm:text-[2rem]' />
                <p>Github</p>
              </a>
            </div>
            <div className='flex flex-col items-center justify-end sm:justify-between'>
              <p className='text-slate-500 text-sm pb-2'>Live</p>
              <a
                target='_blank'
                className='flex flex-col items-center hover:scale-105 transition-transform '
                href='https://project-wordle-flame.vercel.app/'>
                <FaGlobe className='text-[28px] sm:text-[2rem]' />
                <p>Web</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordle;
