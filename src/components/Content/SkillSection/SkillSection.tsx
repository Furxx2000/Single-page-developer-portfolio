import Divider from '../../UI/Divider';
import Skill from './Skill';

export default function SkillSection() {
  const developerSkills = [
    {
      skill: 'HTML',
      experience: 4,
    },
    {
      skill: 'CSS',
      experience: 4,
    },
    {
      skill: 'Javascript',
      experience: 4,
    },
    {
      skill: 'Accessibility',
      experience: 4,
    },
    {
      skill: 'React',
      experience: 3,
    },
    {
      skill: 'Sass',
      experience: 3,
    },
  ];

  return (
    <section className='grid px-4'>
      <Divider />
      <ul className='grid gap-y-6 py-10'>
        {developerSkills.map(({ skill, experience }) => (
          <Skill key={skill} skill={skill} experience={experience} />
        ))}
      </ul>
    </section>
  );
}
