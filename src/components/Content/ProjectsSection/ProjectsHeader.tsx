import BaseButton from '../../UI/BaseButton';

export default function ProjectsHeader() {
  return (
    <div className='flex justify-between items-center pt-10'>
      <h2 className='font-bold text-[40px] leading-10'>Projects</h2>
      <BaseButton text='contact me' />
    </div>
  );
}
