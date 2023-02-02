import { SiFrontendmentor } from 'react-icons/si';
import { FaLinkedin, FaCodepen, FaGithub } from 'react-icons/fa';
import Link from '../UI/Link';

export default function Header() {
  const links = [
    {
      site: 'Github',
      link: 'https://github.com/Furxx2000',
      icon: <FaGithub />,
    },
    {
      site: 'Frontend mentor',
      link: 'https://www.frontendmentor.io/Furxx2000',
      icon: <SiFrontendmentor />,
    },
    {
      site: 'LinkedIn',
      link: 'https://www.linkedin.com/in/%E5%85%89%E5%BB%B7-%E6%96%87-aa0ba1176/',
      icon: <FaLinkedin />,
    },
    {
      site: 'Codepen',
      link: 'https://codepen.io/furxx2000',
      icon: <FaCodepen />,
    },
  ];

  return (
    <header className='grid gap-y-6 pt-6 justify-center text-white font-bold text-2xl'>
      <h1 className='text-center'>dannywen</h1>
      <ul className='flex gap-x-6'>
        {links.map(({ site, link, icon }) => (
          <Link key={site} site={site} link={link} icon={icon} />
        ))}
      </ul>
    </header>
  );
}
