import Brand from '../UI/Brand';
import Divider from '../UI/Divider';

export default function Footer() {
  return (
    <footer className='grid gap-y-9 bg-light-black pb-[60px] px-4 md:px-8 md:pb-10 xl:px-[165px] xl:gap-y-12 xl:pb-[92px]'>
      <Divider />
      <Brand />
    </footer>
  );
}
