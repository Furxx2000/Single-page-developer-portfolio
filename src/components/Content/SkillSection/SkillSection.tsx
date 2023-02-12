import Divider from '../../UI/Divider';
import Skill from './Skill';

export default function SkillSection() {
  const developerSkills = [
    {
      skill: 'HTML',
      experience: 2,
    },
    {
      skill: 'CSS',
      experience: 2,
    },
    {
      skill: 'Javascript',
      experience: 2,
    },
    {
      skill: 'Accessibility',
      experience: 2,
    },
    {
      skill: 'React',
      experience: 1,
    },
    {
      skill: 'Sass',
      experience: 1,
    },
  ];

  return (
    <section className='grid px-4 md:px-8 xl:px-[165px]'>
      <Divider />
      <ul className='grid gap-y-6 md:gap-y-14 py-10 md:py-[52px] xl:py-[72px] md:grid-cols-2 xl:grid-cols-3'>
        {developerSkills.map(({ skill, experience }) => (
          <Skill key={skill} skill={skill} experience={experience} />
        ))}
      </ul>
    </section>
  );
}
