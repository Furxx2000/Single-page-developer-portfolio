interface Props {
  site: string;
  link: string;
  icon: React.ReactNode;
}

export default function Link({ site, link, icon }: Props) {
  return (
    <li className='hover:scale-125 hover:text-primary-green transition'>
      <a href={link} target='_blank'>
        {icon}
        <span className='sr-only'>{site}</span>
      </a>
    </li>
  );
}
