interface Props {
  text: string;
}

export default function ContactMessage({ text }: Props) {
  return (
    <div className='w-full'>
      <label htmlFor={text} className='hidden'>
        {text}
      </label>
      <textarea
        id={text}
        name={text}
        rows={3}
        placeholder={text}
        className='font-medium px-6 pb-4 border-b border-white leading-[26px] tracking-[-0.22px] focus:border-primary-green transition placeholder:text-gray placeholder:opacity-50 placeholder:uppercase'
        required
      ></textarea>
    </div>
  );
}
