import BaseButton from '../../UI/BaseButton';

export default function ProjectsHeader() {
  return (
    <div className='flex justify-between items-center pt-10 md:pt-12 xl:pt-[68px]'>
      <h2>Projects</h2>
      <BaseButton link='#contact-section' text='contact me' />
    </div>
  );
}
