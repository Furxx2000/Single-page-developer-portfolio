import Brand from '../UI/Brand';
import Divider from '../UI/Divider';

export default function Footer() {
  return (
    <footer className='grid gap-y-9 bg-light-black pb-[60px] md:pb-10 px-4 md:px-8'>
      <Divider />
      <Brand />
    </footer>
  );
}
