import { useState, useEffect } from 'react';

import Divider from '../../UI/Divider';
import ProjectsHeader from './ProjectsHeader';
import Project from './Project';
import RingImage from '../HeroSection/RingsImage';

import JSONdata from '../../../data/data.json?url';

interface Project {
  projectName: string;
  skills: string[];
  image: string;
  projectLink: string;
  codeLink: string;
}

const initial = [
  {
    projectName: '',
    skills: [],
    image: '',
    projectLink: '',
    codeLink: '',
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(initial);

  async function fetchData() {
    const respond = await fetch(JSONdata);

    if (!respond.ok) throw new Error('Data can not be found.');

    const data = await respond.json();
    setProjects(data.projects);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='relative grid gap-y-10 px-4 md:px-8 pb-20 md:pb-[100px]'>
      <Divider classes='md:hidden' />
      <ProjectsHeader />
      <div className='grid md:grid-cols-2 gap-y-10 md:gap-x-[22px]'>
        {projects.map(
          ({ projectName, image, skills, projectLink, codeLink }) => (
            <Project
              key={projectName}
              projectName={projectName}
              image={image}
              skills={skills}
              projectLink={projectLink}
              codeLink={codeLink}
            />
          )
        )}
      </div>
      <RingImage position='top-[-63px] md:top-[-118px] right-[-92%] md:right-[-44%]' />
    </section>
  );
}
