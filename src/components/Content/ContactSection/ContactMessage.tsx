interface Props {
  text: string;
  handleMessageValue: (value: string) => void;
}

export default function ContactMessage({ text, handleMessageValue }: Props) {
  return (
    <div className='w-full'>
      <label htmlFor={text} className='hidden'>
        {text}
      </label>
      <textarea
        id={text}
        name={text}
        rows={4}
        placeholder={text}
        className='font-medium px-6 pb-1 border-b border-white leading-[26px] tracking-[-0.22px] focus:border-primary-green transition placeholder:text-gray placeholder:opacity-50 placeholder:uppercase'
        onChange={(e) => handleMessageValue(e.target.value)}
      ></textarea>
    </div>
  );
}
