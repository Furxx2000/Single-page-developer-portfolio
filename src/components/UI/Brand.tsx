import { SiFrontendmentor } from 'react-icons/si';
import { FaLinkedin, FaCodepen, FaGithub } from 'react-icons/fa';
import Link from '../UI/Link';

export default function Brand() {
  const links = [
    {
      site: 'Github',
      link: 'https://github.com/Furxx2000',
      icon: <FaGithub className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'Frontend mentor',
      link: 'https://www.frontendmentor.io/profile/Furxx2000',
      icon: <SiFrontendmentor className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'LinkedIn',
      link: 'https://www.linkedin.com/in/%E5%85%89%E5%BB%B7-%E6%96%87-aa0ba1176/',
      icon: <FaLinkedin className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'Codepen',
      link: 'https://codepen.io/furxx2000',
      icon: <FaCodepen className='md:w-6 md:h-6' size={20} />,
    },
  ];

  return (
    <div className='grid md:grid-cols-2 gap-y-5 items-center justify-center font-bold text-2xl'>
      <h1 className='text-center tracking-[-0.33px] md:justify-self-start md:text-[32px] md:tracking-[-0.44px]'>
        dannywen
      </h1>
      <ul className='flex gap-x-6 md:gap-x-8 md:justify-self-end'>
        {links.map(({ site, link, icon }) => (
          <Link key={site} site={site} link={link} icon={icon} />
        ))}
      </ul>
    </div>
  );
}
