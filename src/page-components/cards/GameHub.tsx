import { FaGithub, FaGlobe, FaReact } from "react-icons/fa";
import { SiChakraui, SiTypescript } from "react-icons/si";
import GameHubImage from "../../assets/Gamehub.png";

const GameHub = () => {
  return (
    <>
      <div className='my-8 py-9 px-8 shadow-slate-900 border-t-2 border-r-2 border-b-2 border-b-gray-900 border-t-cyan-800 border-r-cyan-900 rounded-lg bg-gradient-to-tr from-black to-cyan-950'>
        <img
          className='py-1 rounded-lg mx-auto md:float-right md:max-w-[45%]'
          src={GameHubImage}
          alt=''
        />
        <h4 className='mb-4 text-xl'>Game Hub</h4>
        <p className='text-slate-400 text-sm md:max-w-[45%] pb-6'>
          Game Hub vznikl v rámci kurzu Code with Mosh. Jedná se o galerii her
          na různé konzole/PC a jejich hodnocení. V rámci projektu jsem si
          vyzkoušel Typescript, práci s css frameworkem ChakraUI. Z důvodu
          omezeného počtu dotazů na API key a cenně placené verze, jsou data
          stažená do lokálního JSON souboru.
        </p>
        <div className='flex flex-row justify-between gap-4'>
          <div>
            <p className='text-slate-500 pb-2'>Použité technologie</p>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col items-center gap-1'>
                <SiTypescript className='text-[2rem] text-[#3178c6]' />
                <p>TS</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <FaReact className='text-[2rem] text-cyan-400' />
                <p>React</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <SiChakraui className='text-[2rem] text-[#50c8c2]' />
                <p>ChakraUI</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='flex flex-col justify-between items-center gap-1'>
              <p className='text-slate-500 pb-2'>Code</p>
              <a
                target='_blank'
                className='flex flex-col items-center'
                href='https://github.com/tomas-Novak-git/game-hub-me'>
                <FaGithub className='text-[2rem]' />
                <p>Github</p>
              </a>
            </div>
            <div className='flex flex-col justify-between items-center gap-1'>
              <p className='text-slate-500 pb-2'>Live</p>
              <a
                target='_blank'
                className='flex flex-col items-center'
                href='https://game-hub-me.vercel.app/'>
                <FaGlobe className='text-[2rem]' />
                <p>Web</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameHub;
