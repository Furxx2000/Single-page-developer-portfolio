import CircleImage from './CircleImage';
import HeroImage from './HeroImage';

import BaseButton from '../../UI/BaseButton';
import DeveloperName from './DeveloperName';
import DeveloperDes from './DeveloperDes';

export default function HeroSection() {
  const developerProfile = {
    name: 'Danny Wen',
    description:
      "Based in Taiwan, I'm a front-end developer passionate about building accessible web apps that users love.",
  };

  return (
    <section className='grid gap-y-10 mb-20 md:mb-[60px] md:grid-cols-2'>
      <div className='relative flex justify-center md:justify-end md:order-1 overflow-x-hidden'>
        <HeroImage />
        <CircleImage />
      </div>
      <div className='grid gap-y-6 md:gap-y-[34px] justify-items-center md:justify-items-start md:content-end md:mr-[-5.9rem] md:pl-6 z-20'>
        <DeveloperName name={developerProfile.name} />
        <DeveloperDes description={developerProfile.description} />
        <BaseButton text='contact me' />
      </div>
    </section>
  );
}
