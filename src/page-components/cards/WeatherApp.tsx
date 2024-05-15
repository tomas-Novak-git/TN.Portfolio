import { FaCss3Alt, FaGithub, FaGlobe, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import weatherImage from "../../assets/weatherApp.png";

const WeatherApp = () => {
  return (
    <>
      <div className='my-8 py-9 px-8 shadow-slate-900 border-t-2 border-r-2 border-b-2 border-b-gray-900 border-t-cyan-800 border-r-cyan-900 rounded-lg bg-gradient-to-tr from-black to-cyan-950'>
        <img
          className='py-1 rounded-lg mx-auto md:float-right md:max-w-[45%]'
          src={weatherImage}
          alt=''
        />
        <h4 className='mb-4 text-xl'>Weather App</h4>
        <p className='text-slate-400 text-sm md:max-w-[45%] pb-6'>
          Menší aplikace ze série practice projektů. Zaměření tohoto cvičení
          bylo primárně o data fetchování a práce s JSONa jejich zobrazení v
          live componentu. Živá data jsou z API{" "}
          <a
            href='https://openweathermap.org/'
            className='text-cyan-400'>
            openweathermap.org
          </a>
        </p>
        <div className='flex flex-row justify-between gap-4'>
          <div>
            <p className='text-slate-500 pb-2'>Použité technologie</p>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col items-center gap-1'>
                <IoLogoJavascript className='text-[2rem] text-[#fff53c]' />
                <p>JS</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <FaReact className='text-[2rem] text-[#50c8c2]' />
                <p>React</p>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <FaCss3Alt className='text-[2rem] text-[#264de4]' />
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='flex flex-col justify-between items-center gap-1'>
              <p className='text-slate-500 pb-2'>Code</p>
              <a
                target='_blank'
                className='flex flex-col items-center'
                href='https://github.com/tomas-Novak-git/Weather_App'>
                <FaGithub className='text-[2rem]' />
                <p>Github</p>
              </a>
            </div>
            <div className='flex flex-col justify-between items-center gap-1'>
              <p className='text-slate-500 pb-2'>Live</p>
              <a
                target='_blank'
                className='flex flex-col items-center'
                href='https://weather-app-beta-amber-68.vercel.app/'>
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

export default WeatherApp;
