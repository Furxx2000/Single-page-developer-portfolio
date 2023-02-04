import BaseButton from '../../UI/BaseButton';

interface Props {
  projectName: string;
  skills: string[];
  image: string;
  projectLink: string;
  codeLink: string;
}

export default function Project({
  projectName,
  image,
  skills,
  projectLink,
  codeLink,
}: Props) {
  return (
    <div className='grid gap-y-5'>
      <div className='w-[343px] h-[253px]'>
        <img src={image} alt={projectName} loading='lazy' />
      </div>
      <div>
        <h4 className='font-bold text-2xl leading-8 mb-1 uppercase'>
          {projectName}
        </h4>
        <div>
          {skills.map((skill) => (
            <span key={skill} className='uppercase text-gray mr-[18px]'>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-x-8'>
        <BaseButton text='view project' link={projectLink} />
        <BaseButton text='view code' link={codeLink} />
      </div>
    </div>
  );
}
