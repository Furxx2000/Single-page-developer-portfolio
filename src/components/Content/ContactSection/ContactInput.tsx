import { BiErrorCircle } from 'react-icons/bi';

interface Props {
  text: string;
  type: string;
  error: boolean;
  handleInputValue: (value: string) => void;
}

export default function ContactInput({
  text,
  type,
  error,
  handleInputValue,
}: Props) {
  return (
    <div className='flex w-full'>
      <label htmlFor={text} className='hidden'>
        {text}
      </label>
      <input
        id={text}
        type={type}
        name={text}
        maxLength={32}
        placeholder={text}
        onChange={(e) => handleInputValue(e.target.value)}
        className={`font-medium px-6 pb-4 border-b border-white leading-[26px] tracking-[-0.22px] focus:border-primary-green ${
          error ? 'border-error-red' : ''
        } transition placeholder:text-gray placeholder:opacity-50 placeholder:uppercase`}
        autoComplete='off'
      />
    </div>
  );
}
