import JsIcon from "../../utils/icons/JsIcon";
import ReactIcon from "../../utils/icons/ReactIcon";
import CssIcon from "../../utils/icons/CssIcon";
import weatherImage from "../../assets/weatherApp.png";
import WebLink from "../../utils/WebLink";

const WeatherApp = () => {
  const webLink = "https://weather-app-beta-amber-68.vercel.app/";
  const gitLink = "https://github.com/tomas-Novak-git/Weather_App";
  return (
    <>
      <div className='max-w-screen-lg flex flex-col shadow-xl shadow-black my-8 py-9 px-8 border-t-2 border-r-2 border-b-2 border-b-cyan-900 border-t-cyan-700 border-l-2 border-l-cyan-900 border-r-cyan-900 rounded-lg bg-gradient-to-tr from-black to-cyan-950'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 mb-4'>
          <div className='flex flex-col'>
            <h4 className='mb-4 text-xl'>Weather App</h4>
            <p className='text-slate-400 text-sm md:text-base pb-2'>
              Menší aplikace ze série practice projektů. Zaměření tohoto cvičení
              bylo primárně o data fetchování a práce s JSONa jejich zobrazení v
              live componentu. Živá data jsou z API{" "}
              <a
                href='https://openweathermap.org/'
                className='text-cyan-400'>
                openweathermap.org
              </a>
            </p>
          </div>
          <img
            className=' my-auto object-cover mx-auto  md:max-w-[45%]'
            src={weatherImage}
            alt='Gamehub Image'
          />
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-slate-500 pb-2 text-sm'>Použité technologie</p>
            <div className='flex flex-row gap-2 sm:gap-4'>
              <JsIcon />
              <ReactIcon />
              <CssIcon />
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

export default WeatherApp;
