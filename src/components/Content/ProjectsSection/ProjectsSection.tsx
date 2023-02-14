import Divider from '../../UI/Divider';
import ProjectsHeader from './ProjectsHeader';
import Project from './Project';
import RingImage from '../HeroSection/RingsImage';
import Author from '../../../data/data';

interface Project {
  projectName: string;
  skills: string[];
  image: string;
  projectLink: string;
  codeLink: string;
}

export default function ProjectsSection() {
  const prjs = Author.projects;

  return (
    <section className='relative grid gap-y-10 px-4 pb-20 md:gap-y-[60px] md:px-8 md:pb-[100px] xl:px-[165px] xl:gap-y-20'>
      <Divider classes='md:hidden' />
      <ProjectsHeader />
      <div className='prjs grid gap-y-10 md:grid-cols-2 md:gap-x-[30px] xl:gap-y-[70px]'>
        {prjs.map(({ projectName, image, skills, projectLink, codeLink }) => (
          <Project
            key={projectName}
            projectName={projectName}
            image={image}
            skills={skills}
            projectLink={projectLink}
            codeLink={codeLink}
          />
        ))}
      </div>
      <RingImage position='top-[-63px] right-[-92%] md:top-[-118px] md:right-[-44%] xl:right-[-16.5%] xl:top-[-145px]' />
    </section>
  );
}
