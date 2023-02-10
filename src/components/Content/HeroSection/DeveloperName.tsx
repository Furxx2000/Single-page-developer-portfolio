interface Props {
  name: string;
}

export default function DeveloperName({ name }: Props) {
  return (
    <h3 className='text-center text-[40px] md:text-7xl md:text-left md:mb-[26px] font-bold leading-[40px] tracking-[-1.14px]'>
      Nice to
      <br className='hidden md:block' /> meet you! I'm
      <span className='inline md:hidden'>&nbsp;</span>
      <br className='hidden md:block' />
      <u className='decoration-primary-green'>{name}.</u>
    </h3>
  );
}
