import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import RingsImage from '../../Content/HeroSection/RingsImage';

export default function ContactSection() {
  return (
    <section className='relative grid gap-y-[50px] px-4 md:px-[165px] pt-[60px] bg-light-black'>
      <ContactHeader />
      <ContactForm />
      <RingsImage position='left-[-92%] md:left-[-47.5%] bottom-[15.3%] md:bottom-[5%]' />
    </section>
  );
}
