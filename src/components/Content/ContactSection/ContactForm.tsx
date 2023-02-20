import ContactInput from './ContactInput';
import ContactMessage from './ContactMessage';
import BaseButton from '../../UI/BaseButton';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState({ value: '', isError: false });
  const [email, setEmail] = useState({
    value: '',
    isError: false,
  });
  const [message, setMessage] = useState('');

  function validation() {
    let isValid = true;

    if (name.value === '') {
      isValid = false;
      setName({ ...name, isError: true });
      return isValid;
    }

    if (!email.value.includes('@')) {
      isValid = false;
      setEmail({ ...email, isError: true });
      return isValid;
    }

    return isValid;
  }

  function handleGetName(value: string) {
    setName({ ...name, value });
  }

  function handleGetEmail(value: string) {
    setEmail({ ...email, value });
  }

  function handleGetMessage(message: string) {
    setMessage(message);
  }

  function handleNameFocus() {
    if (name.isError) setName({ ...name, isError: false });
  }

  function handleEmailFocus() {
    if (email.isError) setEmail({ ...email, isError: false });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validation();

    if (isValid) {
      alert(`Submit successful! Thank you.`);
    } else {
      console.log('Submit fail!');
    }
  }

  return (
    <form
      className='grid justify-items-end mb-[87px] md:mb-[92px]'
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className='grid gap-y-3 justify-self-stretch mb-8'>
        <ContactInput
          text='name'
          type='text'
          error={name.isError}
          handleInputValue={handleGetName}
          handleFocus={handleNameFocus}
        />
        <ContactInput
          text='email'
          type='email'
          error={email.isError}
          handleInputValue={handleGetEmail}
          handleFocus={handleEmailFocus}
        />
        <ContactMessage text='message' handleMessageValue={handleGetMessage} />
      </div>
      <BaseButton submit text='send message' />
    </form>
  );
}
