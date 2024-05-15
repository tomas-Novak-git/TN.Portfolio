import heroImage from "../assets/my-photo.png";
import drumImage from "../assets/drums.jpeg";

const About = () => {
  return (
    <>
      <div
        id='about'
        className=' w-full bg-gradient-to-b from-cyan-800 via-cyan-900 to-black'>
        <div className='max-w-screen-lg mx-auto p-4 pt-[80px] md:pt[0]-flex flex-col items-center w-full justify-center'>
          <div className=' text-gray-300 flex flex-col items-center'>
            <h2 className='text-gray-100 text-3xl self-start md:text-5xl font-bold antialiased inline border-b-2 border-cyan-400 mt-[60px]'>
              O mně
            </h2>
            <div className='flex flex-col gap-10 items-center justify-between md:flex-row-reverse'>
              <img
                src={drumImage}
                className='rounded-lg mt-8 md:max-w-[50%] md:h-fit md:mb-8 shadow-lg shadow-black'
              />
              <div className='flex flex-col items-start lg:max-w-[50%]'>
                <p className='text-md font-light sm:mt-10 md:text-lg  max-w-prose'>
                  Po dokončení pardubické konzervatoře jsem se do roku 2023
                  primárně živil jako učitel hry na bicí nástroje v ZUŠ Vysoké
                  Mýto a jako aktivní muzikant. <br />
                  Díky projektům{" "}
                  <a
                    href='https://www.zusmyto.cz/projekty/'
                    className='text-cyan-200 hover:underline cursor-pointer'
                    target='_blank'>
                    Erasmus+
                  </a>{" "}
                  jsem procestoval nespočet zemí, včetně Indie a aktivně se
                  podílel na jejich organizaci.
                </p>
                <p className='text-md font-light mt-10 md:text-lg md:mb-10 max-w-prose'>
                  {" "}
                  Mimo výuku jsem zvládal také spolupráci s orchestry a vlastní
                  hudební projekty:
                  <br />
                  <a
                    className='text-cyan-200 cursor-pointer hover:underline'
                    href='https://www.bardolinoband.com/'
                    target='_blank'>
                    Bardolino
                  </a>
                  ,{" "}
                  <a
                    className='text-cyan-200 cursor-pointer hover:underline'
                    href='https://www.youtube.com/watch?v=W0kZhsg0THY'
                    target='_blank'>
                    Corpulent Provocateur
                  </a>{" "}
                  (dnes již zaniklá) a nově vznikající projekt{" "}
                  <a
                    className='text-cyan-200 cursor-pointer hover:underline'
                    href='https://www.facebook.com/profile.php?id=61552227272439'>
                    the Strýc
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8 my-12'>
              <img
                src={heroImage}
                alt='my profile'
                className='rounded-md md:w-1/2 h-[350px] shadow-md shadow-black md:mb-0'
              />
              <p className='text-md font-light mt-10 md:text-md md:text-lg mb-10  max-w-prose'>
                V březnu 2023 jsem však vykročil jiným směrem. Začal jsem se
                aktivně vzdělávat v odvětví Web developmentu se snem pracovat
                jako FE developer s technoligií React. <br />
                Můj první kurz byl Foundations (HTML, CSS, vanilla JS) v rámci{" "}
                <a
                  href='https://www.theodinproject.com/'
                  target='_blank'
                  className='text-cyan-200 hover:underline'>
                  the Odin Project
                </a>
                , Ultimate Typescript, React 18 od{" "}
                <a
                  href='https://codewithmosh.com/'
                  target='_blank'
                  className='text-cyan-200 hover:underline'>
                  Code with Mosh
                </a>{" "}
                <br />a Joy of React od{" "}
                <a
                  href='https://www.joshwcomeau.com/'
                  className='text-cyan-200 hover:underline'>
                  Josh W. Comeau
                </a>{" "}
                který završuje projekt v Next.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
