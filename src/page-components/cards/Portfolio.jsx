import PortfolioImg from "../../assets/Portfolio.png";
import WebLink from "../../utils/WebLink";
import TWicon from "../../utils/icons/TWicon";
import JsIcon from "../../utils/icons/JsIcon";
import ReactIcon from "../../utils/icons/ReactIcon";

const Portfolio = () => {
  const webLink = "/";
  const gitLink = "/";
  return (
    <div className='max-w-screen-lg flex flex-col shadow-xl shadow-black my-8 py-9 px-8 border-t-2 border-r-2 border-b-2 border-b-cyan-900 border-t-cyan-700 border-l-2 border-l-cyan-900 border-r-cyan-900 rounded-lg bg-gradient-to-tr from-black to-cyan-950'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 mb-4'>
        <div className='flex flex-col'>
          <h4 className='mb-4 text-xl'>Portfolio page</h4>
          <p className='text-slate-400 text-sm md:text-base pb-2'>
            Tento menší portofolio web vznikl pro ukázku mé dosavadní práce.
            Samozřejmě bude stránka aktualizovaná s budoucími projekty. Nesdílím
            tu komerční zakázky, spíše své osobní práce. Vybral jsem si
            technologii React, Vite, Tailwind a čistý Javascript. Do budoucna
            bych rád získal zkušenosti s dalšími CSS preprocessory a frameworky.
          </p>
        </div>
        <img
          className=' my-auto object-cover mx-auto md:max-w-[45%]'
          src={PortfolioImg}
          alt='Gamehub Image'
        />
      </div>
      <div className='flex flex-row justify-between'>
        <div>
          <p className='text-slate-500 pb-2 text-sm'>Použité technologie</p>
          <div className='flex flex-row gap-2 sm:gap-4'>
            <JsIcon />
            <ReactIcon />
            <TWicon />
          </div>
        </div>
        <WebLink
          weblink={webLink}
          gitlink={gitLink}
        />
      </div>
    </div>
  );
};

export default Portfolio;
