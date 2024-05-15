// import { FaReact, FaCss3Alt } from "react-icons/fa";
import Wordle from "./cards/Wordle";
import WeatherApp from "./cards/WeatherApp";
import GameHub from "./cards/GameHub";
import Portfolio from "./cards/Portfolio";

const Experience = () => {
  return (
    <div
      id='experience'
      className='w-full bg-gradient-to-b from-black to-cyan-950 '>
      <div className='max-w-screen-lg p-4 pt-[80px] mx-auto flex flex-col justify-center items-start w-full text-gray-100'>
        <h3 className='text-3xl mt-12 md:text-5xl font-bold inline border-b-2 border-cyan-300'>
          Projekty
        </h3>
        <GameHub />
        <Portfolio />
        <Wordle />
        <WeatherApp />
      </div>
    </div>
  );
};

export default Experience;
