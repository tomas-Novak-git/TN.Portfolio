import ReactIcon from "../../utils/icons/ReactIcon";
import ChakraIcon from "../../utils/icons/ChakraIcon";
import TsIcon from "../../utils/icons/TsIcon";
import GameHubImage from "../../assets/Gamehub.png";
import WebLink from "../../utils/WebLink";

const GameHub = () => {
  const gitLink = "https://github.com/tomas-Novak-git/game-hub-me";
  const webLink = "https://game-hub-me.vercel.app/";
  return (
    <>
      <div className='max-w-screen-lg flex flex-col shadow-xl shadow-black my-8 py-9 px-8 border-t-2 border-r-2 border-b-2 border-b-cyan-900 border-t-cyan-700 border-l-2 border-l-cyan-900 border-r-cyan-900 rounded-lg bg-gradient-to-tr from-black to-cyan-950'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 mb-4'>
          <div className='flex flex-col'>
            <h4 className='mb-4 text-xl'>Game Hub</h4>
            <p className='text-slate-400 text-sm md:text-base pb-2'>
              Game Hub vznikl v rámci kurzu Code with Mosh. Jedná se o galerii
              her na různé konzole/PC a jejich hodnocení. V rámci projektu jsem
              si vyzkoušel Typescript, práci s css frameworkem ChakraUI. Z
              důvodu omezeného počtu dotazů na API key a cenně placené verze,
              jsou data stažená do lokálního JSON souboru.
            </p>
          </div>
          <img
            className=' my-auto object-cover mx-auto  md:max-w-[45%]'
            src={GameHubImage}
            alt='Gamehub Image'
          />
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-slate-500 pb-2 text-sm'>Použité technologie</p>
            <div className='flex flex-row gap-2 sm:gap-4'>
              <TsIcon />
              <ReactIcon />
              <ChakraIcon />
            </div>
          </div>
          <WebLink
            weblink={webLink}
            gitlink={gitLink}
          />
        </div>
      </div>
    </>
  );
};

export default GameHub;
