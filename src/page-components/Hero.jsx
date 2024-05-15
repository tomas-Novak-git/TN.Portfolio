// import heroImage from "../assets/my-photo.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import foto from "../assets/tomas-fotka.png";
import BackgroundLogo from "../utils/BackgroundLogo";
const Hero = () => {
  return (
    <>
      <div className='hero h-screen w-full bg-gradient-to-b from-black  to-cyan-800'>
        <BackgroundLogo />
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center py-32 h-full md:gap-8'>
          <div className='flex flex-col pt-12 w-11/12 justify-end md:justify-center align-middle md:pt-0 '>
            <img
              src={foto}
              className='hidden lg:block lg:max-w-[500px] absolute xl:right-[10%] contrast-125 opacity-80 drop-shadow-lg right-0 bottom-0 '
            />
            <h1 className='text-gray-200 antialiased self-start  font-thin text-3xl md:text-5xl lg:text-7xl pt-6 md:pt-2'>
              Jmenuji se
              <br />{" "}
              <span className='font-semibold text-gray-200 text-4xl pt-8 md:text-6xl lg:text-8xl'>
                Tomáš Novák
              </span>
            </h1>
            <p className='text-gray-300 text-lg sm:text-2xl self-start font-light pt-6'>
              Bubeník a{" "}
              <span className='bg-cyan-600 py-1 px-1'>FE developer</span> se
              zaměřením na React.js
            </p>
            <Link
              to='about'
              spy={true}
              smooth={true}
              className='max-w-[fit-content] mt-4 self-start'>
              <button className='flex group md:mt-10  text-2xl text-gray-200 transition-colors duration-300 hover:text-gray-100 w-fit items-center rounded-md cursor-pointer '>
                O mně
                <span className='px-1 text-sm group-hover:rotate-90 duration-150 '>
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
