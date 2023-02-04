interface Props {
  skill: string;
  experience: number;
}

export default function Skill({ skill, experience }: Props) {
  return (
    <li className='text-center'>
      <h3 className='font-bold text-[32px] leading-10 tracking-[-1px]'>
        {skill}
      </h3>
      <p className='font-medium leading-[26px] text-gray'>
        {experience} year{experience > 1 && 's'} experience
      </p>
    </li>
  );
}
