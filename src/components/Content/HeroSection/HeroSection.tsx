import CircleImage from './CircleImage';
import HeroImage from './HeroImage';
import RingsImage from './RingsImage';
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
    <section className='grid gap-y-10 mb-20'>
      <div className='relative flex justify-center overflow-x-hidden'>
        <HeroImage />
        <RingsImage position='left-[-92%] top-[32%] z-[-10]' />
        <CircleImage />
      </div>
      <div className='grid gap-y-6 justify-items-center'>
        <DeveloperName name={developerProfile.name} />
        <DeveloperDes description={developerProfile.description} />
        <BaseButton text='contact me' />
      </div>
    </section>
  );
}
