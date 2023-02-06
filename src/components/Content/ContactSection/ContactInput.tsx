interface Props {
  text: string;
  type: string;
}

export default function ContactInput({ text, type }: Props) {
  return (
    <div className='w-full'>
      <label htmlFor={text} className='hidden'>
        {text}
      </label>
      <input
        id={text}
        type={type}
        name={text}
        maxLength={32}
        placeholder={text}
        className='font-medium px-6 pb-4 border-b border-white leading-[26px] tracking-[-0.22px] focus:border-primary-green transition placeholder:text-gray placeholder:opacity-50 placeholder:uppercase'
        autoComplete='off'
        required
      />
    </div>
  );
}
