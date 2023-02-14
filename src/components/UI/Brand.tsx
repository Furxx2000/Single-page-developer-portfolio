import Link from '../UI/Link';
import Author from '../../data/data';

export default function Brand() {
  const links = Author.links;

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
