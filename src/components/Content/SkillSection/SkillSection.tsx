import Divider from '../../UI/Divider';
import Skill from './Skill';
import Author from '../../../data/data';

interface Props {
  skill: string;
  experience?: number;
}

export default function SkillSection() {
  const skills = Author.skills;

  return (
    <section className='grid px-4 md:px-8 xl:px-[165px]'>
      <Divider />
      <ul className='grid gap-y-6 md:gap-y-14 py-10 md:py-[52px] xl:py-[72px] md:grid-cols-2 xl:grid-cols-3'>
        {skills.map(({ skill, experience }: Props) => (
          <Skill key={skill} skill={skill} experience={experience} />
        ))}
      </ul>
    </section>
  );
}
