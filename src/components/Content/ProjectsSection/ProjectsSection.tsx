import { useState, useEffect } from 'react';

import ProjectsHeader from './ProjectsHeader';
import Project from './Project';

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

  useEffect(() => {
    let subscribe = false;
    fetch(JSONdata).then((res) =>
      res.json().then((data) => {
        if (!data) {
          console.log("Can't fetch data!");
          return;
        }
        if (!subscribe) setProjects(data.projects);
      })
    );

    return () => {
      subscribe = true;
    };
  }, []);

  return (
    <section className='grid gap-y-10 px-4'>
      <div className='h-px bg-white'></div>
      <ProjectsHeader />
      <div className='grid gap-y-10'>
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
    </section>
  );
}
