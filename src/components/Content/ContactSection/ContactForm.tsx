import ContactInput from './ContactInput';
import ContactMessage from './ContactMessage';
import BaseButton from '../../UI/BaseButton';

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Send message!');
  }

  return (
    <form
      className='grid gap-y-8 justify-items-end mb-[27px]'
      onSubmit={(e) => handleSubmit(e)}
    >
      <ContactInput text='name' type='text' />
      <ContactInput text='email' type='email' />
      <ContactMessage text='message' />
      <BaseButton text='send message' submit />
    </form>
  );
}
