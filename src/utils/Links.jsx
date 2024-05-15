import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Links = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-nov%C3%A1k-282a76279/",
      target: "_blank",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/tomas-Novak-git",
      target: "_blank",
    },
    {
      id: 3,
      child: (
        <>
          Mail <FiMail size={30} />
        </>
      ),
      href: "#contact",
    },
  ];

  return (
    <>
      <div className='hidden xl:flex flex-col top-[40%] left-0 fixed '>
        <ul>
          {links.map(({ id, child, href, target }) => (
            <li
              key={id}
              className='flex justify-between items-center w-40 h-14 px-4 bg-slate-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
              <a
                href={href}
                target={target}
                className='flex justify-between items-center w-full text-white pl-4'>
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Links;
