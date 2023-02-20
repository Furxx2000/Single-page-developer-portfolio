import CircleImage from './CircleImage';
import HeroImage from './HeroImage';
import BaseButton from '../../UI/BaseButton';
import DeveloperName from './DeveloperName';
import DeveloperDes from './DeveloperDes';
import Author from '../../../data/data';

export default function HeroSection() {
  const { name, description } = Author;

  return (
    <section className='grid gap-y-10 mb-20 md:mb-[60px] md:grid-cols-2 xl:px-[165px] xl:mb-[104px]'>
      <div className='relative flex justify-center md:justify-end md:order-1 overflow-x-hidden'>
        <HeroImage />
        <CircleImage position='right-0 bottom-0 translate-x-16 xl:translate-x-[8%] xl:right-[390px] xl:bottom-[80px]' />
      </div>
      <div className='grid gap-y-6 md:gap-y-[34px] xl:gap-y-[17px] justify-items-center md:justify-items-start md:content-end xl:content-center md:mr-[-6.4rem] xl:mr-[-9.5rem] md:pl-8 xl:pl-0 z-20 xl:pt-[5rem]'>
        <DeveloperName name={name} />
        <DeveloperDes description={description} />
        <BaseButton link='#contact-section' text='contact me' />
      </div>
    </section>
  );
}
