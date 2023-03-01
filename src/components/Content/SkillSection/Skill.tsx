interface Props {
  skill: string;
  experience?: number;
}

export default function Skill({ skill, experience }: Props) {
  return (
    <li className='text-center md:text-left md:justify-self-start'>
      <h3 className='font-bold text-[32px] md:mb-4 tracking-[-1px] md:text-5xl leading-10 md:leading-[56px] md:tracking-[-1.5px]'>
        {skill}
      </h3>
      <p className='font-medium leading-[26px] md:leading-7 text-gray md:text-lg'>
        {experience
          ? `${experience} Year${experience > 1 && 's'} Experience`
          : ''}
      </p>
    </li>
  );
}
