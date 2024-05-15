import { useState } from "react";
import { Link } from "react-scroll";
import { Squash } from "hamburger-react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "O mně",
      link: "about",
    },
    {
      id: 2,
      name: "Projekty",
      link: "experience",
    },
    {
      id: 4,
      name: "Kontakt",
      link: "contact",
    },
  ];
  return (
    <>
      <div className='w-full h-20 flex items-center justify-center bg-gray-900 text-slate-500 fixed z-20'>
        <div className='flex justify-between items-center max-w-screen-lg w-full px-4'>
          <div>
            <Link
              to='hero'
              spy={true}
              smooth={true}>
              <h2 className='font-signature font-bold text-5xl pl-4 lg:pl-0 text-white cursor-pointer'>
                T.N<span className='text-cyan-300'>.</span>
              </h2>
            </Link>
          </div>
          <div>
            <ul className='hidden md:flex'>
              {links.map(({ id, name, link }) => (
                <li
                  key={id}
                  className='px-4 cursor-pointer hover:scale-105 hover:text-white duration-200 hover:underline decoration-cyan-300 underline-offset-4'>
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex gap-2 items-center md:hidden'>
              <p>Menu</p>
              <div className='cursor-pointer z-10 pr-4 relative'>
                <Squash
                  toggled={nav}
                  toggle={setNav}
                />
              </div>
              {nav && (
                <ul
                  className='flex flex-col justify-center items-center transition-opacity-100 transition absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
              to-gray-700 text-slate-500 '>
                  {links.map(({ id, name, link }) => (
                    <li
                      key={id}
                      className='px-4 cursor-pointer py-6 text-4xl'>
                      <Link
                        onClick={() => setNav(!nav)}
                        to={link}
                        spy={true}
                        smooth={true}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
