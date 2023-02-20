import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import RingsImage from '../../Content/HeroSection/RingsImage';

export default function ContactSection() {
  return (
    <section
      id='contact-section'
      className='relative grid gap-y-[50px] px-4 pt-[60px] bg-light-black md:px-[165px] xl:pt-[84px] xl:grid-cols-[1fr_445px]'
    >
      <ContactHeader />
      <ContactForm />
      <RingsImage position='left-[-92%] bottom-[15.3%] md:left-[-47.5%] md:bottom-[5%] xl:left-[-14%] xl:bottom-[11%]' />
    </section>
  );
}
