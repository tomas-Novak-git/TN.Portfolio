import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-nov%C3%A1k-282a76279/",
      target: "_blank",
    },
    {
      id: 2,
      name: "Github",
      icon: <FaGithub size={30} />,
      href: "https://github.com/tomas-Novak-git",
      target: "_blank",
    },
    {
      id: 3,
      name: "tomas_novak@centrum.cz",
      icon: <FiMail size={30} />,
      href: "mailto:tomas_novak@centrum.cz",
    },
  ];
  return (
    <>
      <div
        id='contact'
        className='contact py-20 w-full bg-gradient-to-b from-cyan-950 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto h-full flex flex-col justify-between items-center'>
          <h3 className='text-gray-100 text-3xl self-start md:text-5xl font-bold max-w-fit border-b-2 border-cyan-300'>
            Kontakt
          </h3>
          <div className='mt-10 flex flex-col max-w-5xl '>
            <p className='pb-10 text-gray-400'>
              V případě spolupráce či dotazu mně můžete kontaktovat
            </p>
            {links.map(({ id, href, name, icon, target }) => (
              <a
                key={id}
                href={href}
                target={target}
                className='max-w-fit'>
                <div
                  key={id}
                  className='flex text-gray-400 justify-start m-0 items-center p-3 hover:underline underline-offset-2 '>
                  {icon}
                  <p className='pl-4'>{name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='absolute flex justify-center items-center pt-5 bot-0 left-0 right-0 w-full h-20 '>
          <p className='text-gray-500'>T.N. 2024</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
