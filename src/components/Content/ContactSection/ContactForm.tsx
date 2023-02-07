import ContactInput from './ContactInput';
import ContactMessage from './ContactMessage';
import BaseButton from '../../UI/BaseButton';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function validation() {
    let isValid = true;

    if (name === '') {
      isValid = false;
      setNameError(true);
      return isValid;
    }

    if (!email.includes('@')) {
      isValid = false;
      setEmailError(true);
      return isValid;
    }

    return isValid;
  }

  function handleGetName(name: string) {
    setName(name);
  }

  function handleGetEmail(email: string) {
    setEmail(email);
  }

  function handleGetMessage(message: string) {
    setMessage(message);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validation();

    if (isValid) {
      console.log('Submit success!');
    } else {
      console.log('Submit fail!');
    }
  }

  return (
    <form
      className='grid gap-y-8 justify-items-end mb-[27px]'
      onSubmit={(e) => handleSubmit(e)}
    >
      <ContactInput
        text='name'
        type='text'
        error={nameError}
        handleInputValue={handleGetName}
      />
      <ContactInput
        text='email'
        type='email'
        error={emailError}
        handleInputValue={handleGetEmail}
      />
      <ContactMessage text='message' handleMessageValue={handleGetMessage} />
      <BaseButton text='send message' submit />
    </form>
  );
}
