import ErrorIcon from '../../../assets/Error-icon.svg?url';

interface Props {
  text: string;
  type: string;
  error: boolean;
  handleInputValue: (value: string) => void;
  handleFocus: () => void;
}

export default function ContactInput({
  text,
  type,
  error,
  handleInputValue,
  handleFocus,
}: Props) {
  return (
    <div className='relative grid gap-y-1 w-full'>
      <label htmlFor={text} className='hidden'>
        {text}
      </label>
      <input
        id={text}
        type={type}
        name={text}
        maxLength={32}
        placeholder={text}
        onFocus={() => handleFocus()}
        onChange={(e) => handleInputValue(e.target.value)}
        className={`font-medium px-6 pb-4 border-b border-white leading-[26px] tracking-[-0.22px] focus:border-primary-green ${
          error ? 'border-error-red' : ''
        } transition placeholder:text-gray placeholder:opacity-50 placeholder:uppercase`}
        autoComplete='off'
      />
      <p className='h-4 text-error-red text-right text-xs tracking-[-0.17px]'>
        {error && 'Sorry, invalid format here'}
      </p>
      {error && <img className='absolute right-0' src={ErrorIcon} alt='' />}
    </div>
  );
}
