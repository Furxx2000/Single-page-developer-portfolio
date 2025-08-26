interface Props {
  skill: string;
}

export default function ProjectSkill({ skill }: Props) {
  return (
    <span key={skill} className='text-gray mr-[18px]'>
      {skill}
    </span>
  );
}
