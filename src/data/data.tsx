import portfolioImage from '../assets/portfolio-website.jpg?url';
import pomodoroImage from '../assets/Pomodoro-app.jpg?url';
import markdownImage from '../assets/In-browser-markdown-editor.jpg?url';
import restCountriesAPIImage from '../assets/REST-Countries-API.jpg?url';
import calculatorImage from '../assets/Calculator-App.jpg?url';
import drumMachineImage from '../assets/Drum-machine.jpg?url';
import spaceWebsiteImage from '../assets/Space-tourism-website.jpg?url';
import quoteAppImage from '../assets/Random-quote-app.jpg?url';
import loginPageImage from '../assets/Login-page.jpg?url';
import airbnbCloneImage from '../assets/airbnb-clone.jpg';
import airbnbClone2023 from '../assets/airbnb-clone-2023.jpg';
import { SiFrontendmentor } from 'react-icons/si';
import { FaLinkedin, FaCodepen, FaGithub } from 'react-icons/fa';

export default {
  name: 'Danny Wen',
  description:
    "Based in Taiwan, I'm a front-end developer passionate about building accessible web apps that users love.",
  skills: [
    {
      skill: 'HTML',
    },
    {
      skill: 'CSS',
    },
    {
      skill: 'JavaScript',
    },
    {
      skill: 'TypeScript',
    },
    {
      skill: 'Vue.js',
    },
    {
      skill: 'React.js',
    },
    {
      skill: 'Node.js',
    },
    {
      skill: 'Express.js',
    },
    {
      skill: 'Salesforce Lightning Web Component',
    },
    {
      skill: 'Microsoft Dynamic 365',
    },
  ],
  projects: [
    {
      projectName: 'Airbnb-clone-2023',
      skills: [
        'tailwind',
        'typescript',
        'react',
        'next.js',
        'prisma',
        'mongodb',
      ],
      image: airbnbClone2023,
      projectLink: 'https://travel-app-2023.vercel.app/',
      codeLink: 'https://github.com/Furxx2000/Airbnb-clone-2023',
    },
    {
      projectName: 'Single page developer portfolio',
      skills: ['tailwind', 'typescript', 'react'],
      image: portfolioImage,
      projectLink:
        'https://furxx2000.github.io/Single-page-developer-portfolio/',
      codeLink: 'https://github.com/Furxx2000/Single-page-developer-portfolio',
    },
    {
      projectName: 'Pomodoro app',
      skills: ['tailwind', 'typescript', 'react'],
      image: pomodoroImage,
      projectLink: 'https://furxx2000.github.io/Pomodoro-app/',
      codeLink: 'https://github.com/Furxx2000/Pomodoro-app',
    },
    {
      projectName: 'In browser markdown editor',
      skills: ['scss', 'typescript', 'react'],
      image: markdownImage,
      projectLink: 'https://furxx2000.github.io/In-browser-markdown-editor/',
      codeLink: 'https://github.com/Furxx2000/In-browser-markdown-editor',
    },
    {
      projectName: 'REST Countries API',
      skills: ['css', 'typescript', 'vue'],
      image: restCountriesAPIImage,
      projectLink: 'https://furxx2000.github.io/Rest-Country-API-App/',
      codeLink: 'https://github.com/Furxx2000/Rest-Country-API-App',
    },
    {
      projectName: 'Calculator App',
      skills: ['scss', 'typescript', 'vue'],
      image: calculatorImage,
      projectLink: 'https://furxx2000.github.io/Calculator-App/',
      codeLink: 'https://github.com/Furxx2000/Calculator-App',
    },
    {
      projectName: 'Drum machine',
      skills: ['styled components', 'typescript', 'react'],
      image: drumMachineImage,
      projectLink: 'https://furxx2000.github.io/Drum-machine/',
      codeLink: 'https://github.com/Furxx2000/Drum-machine',
    },
    {
      projectName: 'Space tourism website',
      skills: ['html', 'css', 'typescript'],
      image: spaceWebsiteImage,
      projectLink: 'https://furxx2000.github.io/Space-Tourism-Website/',
      codeLink: 'https://github.com/Furxx2000/Space-Tourism-Website',
    },
    {
      projectName: 'Random quote app',
      skills: ['css', 'react', 'API'],
      image: quoteAppImage,
      projectLink: 'https://furxx2000.github.io/Random-quote-machine-FCC/',
      codeLink: 'https://github.com/Furxx2000/Random-quote-machine-FCC',
    },
    {
      projectName: 'Login page',
      skills: ['scss', 'vue', 'vue router'],
      image: loginPageImage,
      projectLink: 'https://furxx2000.github.io/Login-page/',
      codeLink: 'https://github.com/Furxx2000/Login-page',
    },
    {
      projectName: 'Airbnb clone',
      skills: ['html', 'scss', 'javascript'],
      image: airbnbCloneImage,
      projectLink: 'https://furxx2000.github.io/Airbnb-clone/',
      codeLink: 'https://github.com/Furxx2000/Airbnb-clone',
    },
  ],
  links: [
    {
      site: 'Github',
      link: 'https://github.com/Furxx2000',
      icon: <FaGithub className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'Frontend mentor',
      link: 'https://www.frontendmentor.io/profile/Furxx2000',
      icon: <SiFrontendmentor className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'LinkedIn',
      link: 'https://www.linkedin.com/in/%E5%85%89%E5%BB%B7-%E6%96%87-aa0ba1176/',
      icon: <FaLinkedin className='md:w-6 md:h-6' size={20} />,
    },
    {
      site: 'Codepen',
      link: 'https://codepen.io/furxx2000',
      icon: <FaCodepen className='md:w-6 md:h-6' size={20} />,
    },
  ],
};
