import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import RingImage from '../HeroSection/RingsImage';
import Divider from '../../UI/Divider';

export default function ContactSection() {
  return (
    <section className='relative grid gap-y-[50px] px-4 pt-[60px] bg-light-black'>
      <ContactHeader />
      <ContactForm />
      <RingImage position='left-[-92%] top-[65.5%]' />
      <Divider />
    </section>
  );
}
