import BaseButton from '../../UI/BaseButton';
import ProjectSkill from './ProjectSkill';
import ProjectName from './ProjectName';
import ProjectCard from './ProjectCard';
import ProjectImage from './ProjectImage';
import ProjectBtns from './ProjectBtns';

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
    <ProjectCard>
      <ProjectImage
        src={image}
        prjName={projectName}
        prjLink={projectLink}
        codeLink={codeLink}
      />
      <div>
        <ProjectName prjName={projectName} />
        <div className='flex flex-wrap'>
          {skills.map((skill) => (
            <ProjectSkill key={skill} skill={skill} />
          ))}
        </div>
      </div>
      <ProjectBtns>
        <BaseButton text='view project' link={projectLink} />
        <BaseButton text='view code' link={codeLink} />
      </ProjectBtns>
    </ProjectCard>
  );
}
